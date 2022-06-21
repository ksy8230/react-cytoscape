import "./App.css";
import * as Sentry from "@sentry/react";
import { useState } from "react/cjs/react.development";
import CytoscapeContainer from "./cytoscape";

function App() {
  const [text, setText] = useState("test");
  const methodDoesNotExist = async () => {
    try {
      setText("wooo");
      throw Error();
    } catch (e) {
      Sentry.captureException(e);
      console.error(e);
    }
  };
  return (
    <div className="App">
      {/**sentry test */}
      {/* <p>test sentry</p>
      {text}
      <button onClick={methodDoesNotExist}>error trigger button</button> */}

      <CytoscapeContainer />
    </div>
  );
}

export default App;
