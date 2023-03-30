import { Component } from "react";
import PropTypes from 'prop-types';

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1,
      users: [
        {
          id: 1,
          name: 'Jorge',
          age: 35
        }
      ],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((prevState) => ({
        users: [...prevState.users, {
          id: 2,
          name: 'Diana',
          age: 32
        }]
      }));
    }, 10000);
  }

  renderUsers = () => {
    return this.state.users.map((user, index) => (
      <div key={index}>
        <p>Nombre: {user.name}</p>
        <p>Edad: {user.age}</p>
      </div>
    ))
  }

  render() {
    console.log('Renderiza Users');
    console.log(this.state);
    return (
      <div>
        <h1>Usuarios</h1>
        <div>
          {
            this.renderUsers()
          }
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array,
}