import { useUsersContext } from "../../../hooks/useUsersContext";

function User() {
  const { selectedUser, loading } = useUsersContext();

  function renderUserInfo () {
    if (selectedUser && !loading) {
      return (
        <div>
          <h1>Nombre</h1>
          <p>{selectedUser.name}</p>
          <h1>Email</h1>
          <p>{selectedUser.email}</p>
          <h1>Phone</h1>
          <p>{selectedUser.phone}</p>
          <h1>Website</h1>
          <p>{selectedUser.website}</p>
        </div>
      );
    }
    if (loading) {
      return (<div>Cargando...</div>);
    }
    return (<div>No hay información</div>);
  }

  return renderUserInfo();
}

export default User;