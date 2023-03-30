import axios from "axios";
import { useState, useEffect } from "react";

function SecondClasses(props) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setUsers(response.data);
    });
  }, []);

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
        </tr>
      );
    })
  }

  if (Array.isArray(users) && users.length > 0) {
    console.log('Conditional', users);
    return (
      <div>
        <h1>Usuarios</h1>
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
      </div>
    );
  }

  return (
    <div>
      No hay informaciòn
    </div>
  );
}

export default SecondClasses;