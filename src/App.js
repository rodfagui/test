import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

export const UserContext = createContext();

function App() {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      axios.get(`${baseUrl}/users`)
      .then((response) => { setUsers(response.data) })
      .catch((error) => console.log(error));
    }

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users }}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
