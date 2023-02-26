/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { ProtoThingStructure, ThingStructure } from "../../models/thing";

export interface ThingApiRepoStructure {
  loadThings(): Promise<ThingStructure[]>;
  getThing(id: ThingStructure["id"]): Promise<ThingStructure>;
  createThing(task: ProtoThingStructure): Promise<ThingStructure>;
  update(task: Partial<ProtoThingStructure>): Promise<ThingStructure>;
  delete(id: ThingStructure["id"]): Promise<void>;
}

export class ThingApiRepo {
  updateChar(arg0: {
    name: string;
    imageUrl: string;
    isFavorite: boolean;
    films: never[];
    shortFilms: never[];
    tvShows: string[];
    videoGames: string[];
  }) {
    throw new Error("Method not implemented.");
  }
  deleteChar(arg0: number) {
    throw new Error("Method not implemented.");
  }
  url: string;
  constructor() {
    this.url = "http://localhost:4600/things";
  }

  async loadThings(): Promise<ThingStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as ThingStructure[];
    console.log(data);
    return data;
  }

  async getThing(id: ThingStructure["id"]): Promise<ThingStructure> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as ThingStructure;
    return data;
  }

  async createThing(thing: ProtoThingStructure): Promise<ThingStructure> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(thing),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as ThingStructure;

    return data;
  }

  async update(thing: Partial<ThingStructure>): Promise<ThingStructure> {
    const url = this.url + "/" + thing.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(thing),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as ThingStructure;
    return data;
  }

  async delete(id: ThingStructure["id"]): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
  }
}
