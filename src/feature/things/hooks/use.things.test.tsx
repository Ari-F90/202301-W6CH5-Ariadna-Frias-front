/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import { ThingApiRepo } from "../services/repository/thing.api.repo";
import { useThings } from "./use.things";

const mockRepo = {
  loadThings: jest.fn(),
} as unknown as ThingApiRepo;

const TestComponent = function () {
  const { loadThings }: any = useThings(mockRepo);

  return (
    <button title="loadbutton" onClick={() => loadThings}>
      Load things
    </button>
  );
};

describe("Given a Test component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={store}>
        <TestComponent />
      </Provider>
    );
  });
  describe("When loadThings function is called", () => {
    test("Then it should render ", () => {
      const element = screen.getByTitle("loadbutton");
      expect(element).toBeInTheDocument();
    });
  });
  describe("when loadThings is called", () => {
    test("then it should call the load function from api", async () => {
      await fireEvent.click(screen.getByText(/load/i));
      expect(mockRepo.loadThings).toHaveBeenCalled();
    });
  });
});
