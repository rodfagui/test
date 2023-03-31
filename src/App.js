import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import { UsersContextProvider } from "./contexts/usersContext";
import { PostsContextProvider } from "./contexts/postsContext";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

function App() {
  return (
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
      <Routes>
        <Route path="/users" element={<UsersContextProvider><Users /></UsersContextProvider>} />
        <Route path="/posts" element={<PostsContextProvider><Posts /></PostsContextProvider>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
