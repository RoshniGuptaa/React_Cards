import React from 'react'

export default function Button({icon, text}) {
    // adding event handlers to component
    function handelEvent(){
        console.log("clicked")
    }
  return (
    
    <button className='btnt' onClick={handelEvent}>
        {icon}
        {text}
    </button>
  );
}
