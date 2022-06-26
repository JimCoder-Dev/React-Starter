import { render } from "react-dom";


const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Test App</p>
    </div>
  );
};

render(<App />, document.getElementById("root"));