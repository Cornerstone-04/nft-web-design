import React from "react";
import "./App.css";
import AppRoutes from "./Router";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <AppRoutes />
    </div>
  );
}

export default App;
