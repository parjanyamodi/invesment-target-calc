import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
