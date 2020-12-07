import logo from "./logo.svg";
import "./App.css";

// default export doesn't {}
// import Counter from "./Counter";

// //  general export does {}
// import { sayHello, sayHello1 } from "./Counter";

import Counter, { sayHello, sayHello1 } from "./Counter";
import CounterFunc from "./CounterFunc";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      {/* <CounterFunc tacoo="functional component 1" startCount={10} />
      <Counter taco="Counter 1" startCount={10} />
      <Counter taco="Counter 2" />
      <Counter taco="Counter 3" whatEver="yo" /> */}
      <Todos />
    </div>
  );
}

export default App;
