import { useThings } from "../../hooks/use.things";

import { ThingApiRepo } from "../../services/repository/thing.api.repo";

export function ThingsList() {
  // eslint-disable-next-line new-parens
  const { things } = useThings(new ThingApiRepo());
  return (
    <>
      <h2>Things list</h2>
      <section>
        <ul>
          {things.map((item) => (
            <li key={item.id}>
              {item.name}
              <p>id: {item.id}</p>
              <p>week: {item.week}</p>
              <p>level: {item.level}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
