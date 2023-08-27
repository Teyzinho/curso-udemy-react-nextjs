import logo from './logo.svg';
import './App.css';

import { Component } from 'react'

class App extends Component {

  // constructor(props) {
  //   super(props)

  //   this.handleNameClick = this.handleNameClick.bind(this) // Código para a função ter acesso ao "this"

  //   this.state = {
  //     name: "tey",
  //     counter: 1
  //   }
  // }
 
  state = { //Sem o constructor
    name: "tey",
    counter: 1
  }

  handleNameClick() { // Metodo de mudar um state com a bind "this"
    this.setState({ name: "teyzinho" })
  }

  handleClick = () => { // Metodo de Arrow function
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  render() {
    const nome = this.state.name
    const { counter } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            State : {nome}
          </p>
          <button onClick={this.handleNameClick}>
            Change Name
          </button>
          <button onClick={this.handleClick}>
            Increment {counter}
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
