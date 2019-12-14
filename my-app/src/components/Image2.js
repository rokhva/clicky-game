import React from "react";

function Image2({id, color, onClick, key, source}) {

  return (
    <div  >
      <img src={source} id={id} color={color} key={key} onClick ={onClick} className="blue"></img>
      
    </div>
  );
}

export default Image2;