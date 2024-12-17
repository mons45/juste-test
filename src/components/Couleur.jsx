import React, { useState } from "react";

export function Couleur(){
    const[color, setcolor] = useState("white");
    const [theme, settheme] = useState("black")
    const changecolor = ()=>{
        if(color==="white"){
            setcolor("black");
            settheme("white");
        }
        else{
            setcolor("white");
            settheme("black");
        }
    }
    return (
        <div style={{
            backgroundColor: color,
            color: theme,
            cursor: 'pointer',
            border: '1px solid #000',
          }}>
            <h1>tu peux Basculer la Couleur de ce composent! </h1>
            <button onClick={changecolor}>Changer la Couleur</button>
        </div>
    )
}
