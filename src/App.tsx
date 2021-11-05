import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sign-in" exact>
          <SignIn />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
