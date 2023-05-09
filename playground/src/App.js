import "./App.css";
import { CarbonCodeMirror } from "carbon-react-code-mirror";

function App() {
  return (
    <div className="App">
      <CarbonCodeMirror code={"<your code here>"}>
        <h1>highlight</h1>
      </CarbonCodeMirror>
    </div>
  );
}

export default App;
