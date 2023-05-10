import React from "react";
import ReactDOM from "react-dom";

function Hello(props){
    return <h1>Hello, {props.name}</h1>
}

// <Hello></Hello> : 쓸 내용 있을때
// <Hello /> : 쓸 내용이 없으면
const element = <Hello name="An!!" />;
ReactDOM.render(element, document.getElementById("root"));

export default Hello;
