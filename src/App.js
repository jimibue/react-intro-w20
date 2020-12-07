import logo from "./logo.svg";
import "./App.css";

// default export doesn't {}
// import Counter from "./Counter";

// //  general export does {}
// import { sayHello, sayHello1 } from "./Counter";

import Counter, { sayHello, sayHello1 } from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
