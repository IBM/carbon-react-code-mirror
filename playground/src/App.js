import logo from "./logo.svg";
import "./App.css";
import { CarbonCodeMirror } from "carbon-code-mirror";

function App() {
  return (
    <div className="App">
      <CarbonCodeMirror code={"<your code here>"} />
    </div>
  );
}

export default App;
