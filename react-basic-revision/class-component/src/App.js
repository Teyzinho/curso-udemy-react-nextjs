import './App.css';

import { Component } from 'react'
class App extends Component {

  constructor(props) {
    super(props)

    this.handleNameClick = this.handleNameClick.bind(this) // Código para a função ter acesso ao "this"

    // this.state = {
    //   name: "tey",
    // }
  }

  state = { //Metodo criar variáveis sem o constructor
    name: "tey",
    counter: 1,
    posts: [
      {
        id: 1,
        title: "Titulo 1",
        body: "Body 1"
      },
      {
        id: 2,
        title: "Titulo 2",
        body: "Body 2"
      },
      {
        id: 3,
        title: "Titulo 3",
        body: "Body 3"
      }
    ]
  }

  timeoutUpdate = null;

  handleNameClick() { // Metodo de mudar um state com a bind "this" no constructor
    this.setState({ name: "teyzinho" })
  }

  handleClick = () => { // Metodo de Arrow function
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  componentDidMount() { //Metodo de ciclo de vida 'DidMount' como se fosse o UseEffect
    this.handleTimeout();
  }

  componentDidUpdate(){ // Metodo de update
    this.handleTimeout();
  }

  componentWillUnmount(){ // Quando componente é desmontado: limpa o lixo (reseta o timeout)
    clearTimeout(this.timeoutUpdate);
  }


  handleTimeout = () => {
    const { posts, counter } = this.state;
    let length = posts.length + 1

    if(length <= 6) {
      posts.push({
        id: length,
        title: `Titulo ${length}`,
        body: `Body ${length}`
      })
    }

    this.timeoutUpdate = setTimeout(() => {
      this.setState({
        posts: posts, counter: counter + 1
      })
    }, 1000)
  }

  render() {
    const nome = this.state.name
    const { counter } = this.state
    const { posts } = this.state
    return (
      <div className="App">
        <div>
          <p>
            State : {nome}
          </p>
          <button onClick={this.handleNameClick}>
            Change Name
          </button>
          <button onClick={this.handleClick}>
            Increment {counter}
          </button>
        </div>

        <div>
          {posts.map(post => (
            <p key={post.id}>id: {post.id}, title: {post.title}, body: {post.body} </p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
