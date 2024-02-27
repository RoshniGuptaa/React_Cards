
import './App.css';
import './MyStyle.css';

import { AiFillAudio } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";

import Card from './component/Card.jsx';
import Button from './component/Button.jsx';
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
      <Card classes={"card"} cardHeader={"Card 3"} cardText={"Using BootStrap"}>
         <Button text={"Click"} icon={<IoPaperPlaneOutline />}/>
      </Card>
      </header>
    </div>
  );
}

export default App;
