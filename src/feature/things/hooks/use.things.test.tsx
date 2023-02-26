import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

// ERROR
/*describe("Given the usePrivChar Custom Hook and TestError component", () => {
  let spyLog: jest.SpyInstance;
  beforeEach(async () => {
    spyLog = jest.spyOn(global.console, "log");

    const mockRepoError = {
      loadChar: jest.fn().mockRejectedValue(new Error("Test Error")),
    } as unknown as CharApiPublicRepo;

    const TestError = function () {
      const { loadPublicChar } = usePublicChar(mockRepoError);
      return (
        <>
          <button title="button1" onClick={() => loadPublicChar(1)}>
            Error
          </button>
        </>
      );
    };
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<TestError></TestError>);
  });

  describe("When the TestError is rendered and the button is clicked", () => {
    test("Then, the loadChar function should be catch the error", async () => {
      const element = await screen.findByTitle("button1");
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => userEvent.click(element));
      expect(spyLog).toHaveBeenCalled();
    });
  });
});*/
