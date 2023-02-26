import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../core/store/store";
import { ThingsList } from "./things-list";

describe("Given the things list page", () => {
  render(
    <Provider store={store}>
      <ThingsList></ThingsList>
    </Provider>
  );
});
describe("When it is rendered", () => {
  test("Then it should display the 'Things list' heading", () => {
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });
});
