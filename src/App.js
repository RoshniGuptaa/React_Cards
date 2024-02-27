
import './App.css';

import { AiFillAudio } from "react-icons/ai";

import Card from './component/Card.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
     
      <Card cardHeader={"First Card"} cardText={"Created Card with react"} ></Card>
      <Card cardHeader={"Second Card"} cardText={"Created Card with react"} >
        <button className='btn btn-danger'>Click here</button>
        {/* Adding icons */}
         <i class="fa-solid fa-house"></i> 
         <AiFillAudio />
              </Card>
      <Card classes={"card"} cardHeader={"Card 3"} cardText={"Using BootStrap"}/>
      </header>
    </div>
  );
}

export default App;
