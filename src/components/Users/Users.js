import axios from 'axios';
import { useState, useEffect } from 'react';

import './Users.css';
import UsersTable from './UsersTable/UsersTable';

function Users(props) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (Array.isArray(users) && users.length > 0) {
    return (
      <div>
        <h1>Users</h1>
        <UsersTable users={users}/>
      </div>
    );
  }

  return (
    <div>
      No hay informaciòn
    </div>
  );
}

export default Users;