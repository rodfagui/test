import React, { Component } from 'react';

class Form extends Component {
  state = { name: '', city: '', fruit: 'mango' };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    console.log('Envio: ', this.state);
    event.preventDefault();
    this.handleReset();
  }

  handleReset = () => {
    this.setState({ name: '', city: '', fruit: 'mango' });
  }
  
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Formulario</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} />
          </label>
          <label>
            Fruta favorita:
            <select name="fruit" value={this.state.fruit} onChange={this.handleInputChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          </label>
          <button type="button" onClick={this.handleReset}>Reset</button>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
 
export default Form;