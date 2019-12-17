import React from "react";

function Image(props) {

  return (
    <div  >
      <img src={props.source} {...props} className="blue"></img>
      {/* <img src={props.source} id={props.id} color={props.color} className="blue"></img> */}
    </div>
  );
}

export default Image;
//id={props.id}