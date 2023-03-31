import { useContext } from 'react';

import './Users.css';
import { UsersContext } from '../../contexts/usersContext';
import UsersTable from './UsersTable/UsersTable';

function Users(props) {
  const { users } = useContext(UsersContext);

  return (
    <div>
      <h1>Users</h1>
      <UsersTable users={users}/>
    </div>
  );
}

export default Users;