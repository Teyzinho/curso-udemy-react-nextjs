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
    posts: []
  }

  timeoutUpdate = null;

  handleNameClick() { // Metodo de mudar um state com a bind "this" no constructor
    this.setState({ name: "teyzinho" })
  }

  handleClick = () => { // Metodo de Arrow function
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  fetchPosts = async () => {
    const response = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([response, photosResponse])
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, url: photosJson[index].url }
    })

    this.setState({ posts: postsAndPhotos })

  }

  componentDidMount() { //Metodo de ciclo de vida 'DidMount' como se fosse o UseEffect
    this.fetchPosts()
  }

  componentDidUpdate() { // Metodo de update
    this.handleTimeout();
  }

  componentWillUnmount() { // Quando componente é desmontado: limpa o lixo (reseta o timeout)
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { counter } = this.state;
    this.timeoutUpdate = setTimeout(() => {
      this.setState({
        counter: counter + 1
      })
    }, 1000)
  }

  render() {

    const nome = this.state.name
    const { counter } = this.state
    const { posts } = this.state

    return (
      <section>
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

        <div className='post-container'>
          {posts.map(post => (
            <div key={post.id} className='post-card'>
              <img src={post.url} alt="img" />
              <h2>
                {post.title}
              </h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
