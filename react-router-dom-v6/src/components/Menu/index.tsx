import { Link } from "react-router-dom"


export const Menu = () => {
  return (
    <nav>
        <ul style={{display:"flex", gap:'5px', listStyle:'none'}}>
            <li>
                <Link state={'this is a state from links'} to={'/'}>Home</Link>
            </li>
            <li>
              <Link  to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/posts'}>Posts</Link>
            </li>
            <li>
              <Link to={'/posts/10'}>Post 10</Link>
            </li>
            <li>
              <Link to={'/redirect'}>Redirect</Link>
            </li>
        </ul>
    </nav>
  )
}
