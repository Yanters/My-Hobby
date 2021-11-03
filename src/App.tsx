import React from "react";
import { Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Route>
        <Home />
      </Route>
    </div>
  );
}

export default App;
