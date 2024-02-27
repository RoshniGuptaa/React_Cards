import React from 'react'

export default function Card({cardHeader,cardText,children,classes}) {
  const cardStyle={
    maxWidth:400,boxShadow:"0 0.5rem 1rem rgba(12, 67, 78, 33)",
    padding:"2rem",
    borderRadius:"5px",
    textAlign:"left",
    backgroundColor:" #264b65",
    margin: "1rem 1rem"
  };

  const cardHeaderStyle={
    maxWidth:400,
    padding:"lrem",
    borderRadius:"5px",
    color:"#97cfdf",
    textAlign:"center",
  };
  const cardBodyStyle={
    window:"150%",
    margin:"1rem 2rem",
    display:"flex",
    flexDirection:"column",
  }
  return (
    <div  style={cardStyle} className={classes}>
      {cardHeader &&<div style={cardHeaderStyle}>{cardHeader}</div>}
      <div style={cardBodyStyle}>{cardText}
      {children}
      </div>
      

      
    </div>
  )
}
