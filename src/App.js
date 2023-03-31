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
import User from "./components/Users/User/User";

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
      <Routes>
        <Route path="/users" element={<UsersContextProvider />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="/posts" element={<PostsContextProvider><Posts /></PostsContextProvider>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
