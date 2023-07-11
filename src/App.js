import logo from "./logo.svg";
import "./App.css";
import toyOrders from "./models/toyOrders";
import Toyorders from "./components/Toyorders";
const state = {
  toyOrders,
};

function App() {
  return (
    <div className="App">
      <Toyorders toys={state.toyOrders[0]} />
      <Toyorders toys={state.toyOrders[1]} />
      <Toyorders toys={state.toyOrders[2]} />
      <Toyorders toys={state.toyOrders[3]} />
    </div>
  );
}

export default App;
