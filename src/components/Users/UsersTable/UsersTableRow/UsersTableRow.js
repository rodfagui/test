import { Link } from 'react-router-dom';
import { useUsersContext } from '../../../../hooks/useUsersContext';

import './UsersTableRow.css';

function UsersTableRow(props) {
  const { user } = props;
  const { searchNewUser } = useUsersContext();

  const handleIdOnClick = (userId) => {
    searchNewUser(userId);
  }

  return (
    <tr key={user.id}>
      <td onClick={() => handleIdOnClick(user.id)}><Link to={`/users/${user.id}`}>{user.id}</Link></td>
      <td>{user.name}</td>
      <td>{user.username}</td>
    </tr>
  );
}

export default UsersTableRow;