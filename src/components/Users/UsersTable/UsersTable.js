import './UsersTable.css';
import UsersTableRow from './UsersTableRow/UsersTableRow';
import { useUsersContext } from '../../../hooks/useUsersContext';

function UsersTable(props) {
  const { users } = useUsersContext();

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <UsersTableRow key={user.id} user={user} />
      );
    })
  }

  if (Array.isArray(users) && users.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          { renderUsers() }
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

export default UsersTable;