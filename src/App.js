import './App.css';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <img src='kot.jpg'></img>
            <Card.Img width={150} src="kot.jpg" rounded variant="top"></Card.Img>
            <Card.Title>Михеева Екатерина Андреевна</Card.Title>
        </Card>
      </header>
    </div>
  );
}

export default App;
