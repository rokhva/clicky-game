import React from "react";

function Image(props) {

  return (
    <div className="blue">
      <img src={props.src} />
    </div>
  );
}

export default Image;
