import React from "react";

function JumboTron(props) {
  console.log(JSON.stringify(props));
  return <div>
    {props.show && <p>Hello</p>}
  </div>;
}

export default JumboTron;
