import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Patient from "./pages/Patient";
import { AuthContext } from "./store/authContext";

function App() {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <Switch>
        <Route exact path="/">
          {isAuth ? <Home /> : <Login />}
        </Route>

        <Route path="/profile">
          {isAuth ? <Profile /> : <Redirect to="/" />}
        </Route>

        <Route path="/patient/:id">
          {isAuth ? <Patient /> : <Redirect to="/" />}
        </Route>

        {/* TODO: */}
        {/* <Route component={NotFound}></Route> */}
      </Switch>
    </>
  );
}

export default App;
