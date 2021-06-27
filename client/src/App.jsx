import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Patient from "./pages/Patient";
import About from "./pages/About";
import { AuthContext } from "./store/authContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <Router>
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

          <Route path="/aboutus">
            {isAuth ? <About /> : <Redirect to="/" />}
          </Route>

          {/* TODO: */}
          {/* <Route component={NotFound}></Route> */}
        </Switch>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
