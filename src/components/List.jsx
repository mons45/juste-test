import React, { useState } from "react";

export function List(){
    const [list, setlist] = useState(["test1", "test2","test3"]);
    const [itm, setitm]= useState("");
    const addtolist = ()=>{
        if(itm.trim() !== ""){
            setlist([...list, itm]);
            setitm("");
        };
        
    }
    const del = (item)=>{
        setlist(list.filter(elm => elm !== item));
    }
    return (
        <div>
            <input type="text"
             placeholder="add an item"
             value={itm}
             onChange={(e)=> setitm(e.target.value)}/>
             <button onClick={addtolist}>Add To List</button>
             <ul>
                 {list.map((item, index)=> {
                     return           <li key={index}>
                     {item}
                     <button
                       onClick={()=>del(item)}
                       
                     >
                       Supprimer
                     </button>
                   </li>
                 })}
             </ul>
        </div>
    )
}