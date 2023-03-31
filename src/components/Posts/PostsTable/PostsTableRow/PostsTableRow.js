import './PostsTableRow.css';

function PostsTableRow(props) {
  const { post } = props;

  return (
    <tr key={post.id}>
      <td>{post.id}</td>
      <td>{post.userId}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
    </tr>
  );
}

export default PostsTableRow;