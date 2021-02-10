import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <NavBar/>
      </Container>
    </div>
  );
}

export default App;
