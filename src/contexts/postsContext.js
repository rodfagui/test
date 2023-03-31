import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const PostsContext = createContext();

function PostsContextProvider(props) {
  const { children } = props;

  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios.get(`${baseUrl}/posts`)
      .then((response) => { setPosts(response.data) })
      .catch((error) => console.log(error));
    }

    fetchPosts();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <PostsContext.Provider value={{ posts }}>
      { children }
    </PostsContext.Provider>
  );
}

export { PostsContext, PostsContextProvider };
  