import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { Outlet } from "react-router-dom";

const UsersContext = createContext();

function UsersContextProvider(props) {
  const { children } = props;

  const USERS_MAX_NUM_PER_REQUEST = 100;

  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = () => {
      axios.get(`${baseUrl}/users`)
      .then((response) => { setUsers(response.data) })
      .catch((error) => console.log(error));
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const getUser = () => {
      if (selectedUserId) {
        axios.get(`${baseUrl}/users/${selectedUserId}`)
        .then((response) => {
          setSelectedUser(response.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
      }
    }

    getUser();
  }, [selectedUserId]);

  function searchNewUser(newUserId) {
    if (newUserId !== selectedUserId) {
      setSelectedUserId(newUserId);
      setLoading(true);
    }
  }

  return (
    // the Provider gives access to the context to its children
    <UsersContext.Provider value={{ 
      users,
      selectedUserId,
      loading,
      searchNewUser,
      selectedUser
    }}>
      <Outlet />
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersContextProvider };
  