import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Profile from "./pages/Profile";
import MainNavigation from "./components/MainNavigation.js";
import Login from "./pages/Login";
import Patient from "./pages/Patient";
import Patientbp from "./pages/Patientbp";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/patient">
          <Patients />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/patient/:id/:name">
          <Patient />
        </Route>
        <Route path="/patient/:id/:name/:bloodPress" exact strict>
          <Patientbp />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
