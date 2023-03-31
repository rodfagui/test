import './UsersTableRow.css';

function UsersTableRow(props) {
  const { user } = props;

  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
    </tr>
  );
}

export default UsersTableRow;