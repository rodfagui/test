import { useContext } from 'react';
import { UsersContext } from '../contexts/usersContext';

function useUsersContext() {
  const context = useContext(UsersContext);

  if (context === undefined) {
    throw new Error("useUsersContext was used outside of its Provider");
  }

  return context;
};

export { useUsersContext }; 