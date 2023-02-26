/* eslint-disable no-unused-vars */
type HasId = {
  id: number;
};

export type ProtoThingStructure = {
  name: string;
  week: number;
  level: number;
};

export type ThingStructure = HasId & ProtoThingStructure;
