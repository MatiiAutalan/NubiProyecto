import React from "react";
import "./App.css";
import Recargas from "./components/recargas/recargas";
import Retiros from "./components/retiros/retiros";

function App() {
  return (
    <div className="App">
      <Recargas />
      <Retiros />
    </div>
  );
}
export default App;
