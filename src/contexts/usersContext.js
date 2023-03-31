import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const UsersContext = createContext();

function UsersContextProvider(props) {
  const { children } = props;

  const USERS_MAX_NUM_PER_REQUEST = 100;

  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      axios.get(`${baseUrl}/users`)
      .then((response) => { setUsers(response.data) })
      .catch((error) => console.log(error));
    }

    fetchUsers();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <UsersContext.Provider value={{ users, usersMaxNum: USERS_MAX_NUM_PER_REQUEST }}>
      { children }
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersContextProvider };
  