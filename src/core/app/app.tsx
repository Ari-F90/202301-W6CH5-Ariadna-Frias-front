import { ThingsList } from "../../feature/things/components/things-list/things-list";
import { Header } from "../components/header/header";
function App() {
  return (
    <div className="App">
      <span hidden>Learn</span>
      <Header></Header>
      <ThingsList></ThingsList>
    </div>
  );
}

export default App;
