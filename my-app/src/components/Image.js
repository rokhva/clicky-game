import React from "react";

function Image(props) {

  return (
    <div className="blue" {...props}>
      <img src={props.source}></img>
      
    </div>
  );
}

export default Image;
//id={props.id}