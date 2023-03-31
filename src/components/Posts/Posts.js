import axios from 'axios';
import { useState, useEffect } from 'react';

import './Posts.css';
import PostsTable from './PostsTable/PostsTable';

function Posts(props) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPosts(response.data);
    });
  }, []);

  if (Array.isArray(posts) && posts.length > 0) {
    return (
      <div>
        <h1>Posts</h1>
        <PostsTable posts={posts}/>
      </div>
    );
  }

  return (
    <div>
      No hay informaciòn
    </div>
  );
}

export default Posts;