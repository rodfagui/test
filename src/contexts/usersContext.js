import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const UsersContext = createContext();

function UsersContextProvider(props) {
  const { children } = props;

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
    <UsersContext.Provider value={{ users }}>
      { children }
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersContextProvider };
  