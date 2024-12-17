import React, { useState } from "react";


export function Basculer (){
    const[text, setText] = useState("this is the first text!!");
    const changeText = ()=>{
        if(text === "this is the first text!!"){
            setText("this is the second test??");
        }
        else{
            setText("this is the first text!!");
        }
    }
    return (
        <div>
            <h2>{text}</h2>
            <button onClick={changeText}>Basculer</button>
        </div>
    )
}