
import './App.css';

import Card from './component/Card.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
     
      <Card cardHeader={"First Card"} cardText={"Created Card with react"} ></Card>
      <Card cardHeader={"Second Card"} cardText={"Created Card with react"} >
        <button>Click here</button>
      </Card>
      </header>
    </div>
  );
}

export default App;
