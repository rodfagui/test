import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FirstClasses from "./components/firstClasses";
import SecondClasses from "./components/secondClasses";

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">First Classes</Link>
            </li>
            <li>
              <Link to="/second">Second Clasess</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/second">
            <SecondClasses />
          </Route>
          <Route path="/">
            <FirstClasses />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
