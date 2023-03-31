import { useContext } from 'react';

import './Users.css';
import { UserContext } from '../../App';
import UsersTable from './UsersTable/UsersTable';

function Users(props) {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h1>Users</h1>
      <UsersTable users={users}/>
    </div>
  );
}

export default Users;