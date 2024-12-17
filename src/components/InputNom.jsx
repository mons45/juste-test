import React, { useState } from "react";


export function InputNom(){
    const [vrb, setvrb] = useState("");
    const handlechange = (e)=>{
        setvrb(e.target.value)
    }
    return(
        <div>
            <h1> bonjour mr/ms {vrb}</h1>
            <input type="text"
            placeholder="enter votre nom"
             onChange={(e)=>handlechange(e)}/>
        </div>
    )
}