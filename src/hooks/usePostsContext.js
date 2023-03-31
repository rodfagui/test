import { useContext } from 'react';
import { PostsContext } from '../contexts/postsContext';

function usePostsContext() {
  const context = useContext(PostsContext);

  if (context === undefined) {
    throw new Error("usePostsContext was used outside of its Provider");
  }

  return context;
};

export { usePostsContext }; 