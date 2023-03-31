import './PostsTable.css';
import PostsTableRow from './PostsTableRow/PostsTableRow';

function PostsTable(props) {
  const { posts } = props;

  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <PostsTableRow key={post.id} post={post} />
      );
    })
  }

  if (Array.isArray(posts) && posts.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          { renderPosts() }
        </tbody>
      </table>
    );
  }

  return (
    <div>
      No hay información
    </div>
  );
}

export default PostsTable;