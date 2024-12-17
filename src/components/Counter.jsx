import React, { useState } from "react";

export function Counter(){
    const[count, setcount] = useState(0);
    const body = document.body;
    console.log(body.firstElementChild)
    return(
        <div>
            <h1>the count is: {count}</h1>
            <button onClick={()=> setcount(count + 1)}>Increment</button>
        </div>
    )
}