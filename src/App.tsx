import React from 'react'
import { ReactComponent as Logo } from './logo.svg'
import Container from '@material-ui/core/Container'
import ProductsList from './components/ProductsList'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>About us</li>
          <li>Our products</li>
          <li>How we do it</li>
          <li>Contact</li>
        </ul>
        <Logo fill="#FFF" />
      </header>
      <Container component="section" fixed>
        <h2>Faivre Jewel Design</h2>
        <p>
          Sed eget magna sit amet quam ullamcorper feugiat nec non felis.
          Praesent interdum vitae velit sit amet ornare. In sollicitudin, ipsum
          porta malesuada finibus, arcu purus congue diam, quis sagittis nunc
          velit a nulla. Sed feugiat at quam sit amet interdum.
        </p>
      </Container>
      <Container component="section" fixed>
        <h2>Características</h2>
        <p>Aenean posuere dui volutpat, hendrerit nulla sed, rhoncus purus.</p>
      </Container>
      <Container component="section" fixed>
        <ProductsList />
      </Container>
      <Container component="section" fixed>
        <h2>Contacto</h2>
        <p>Aenean posuere dui volutpat, hendrerit nulla sed, rhoncus purus.</p>
      </Container>
    </div>
  )
}

export default App
