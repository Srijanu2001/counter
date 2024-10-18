import React from "react";
import { useState } from "react";

function Math()
{
    const[count ,setcount]=useState(0);

    function icrement()
    {
        setcount(count+1);

    }
    function decrement(){
        setcount(count-1);

    }
    return(
<div>
    <h1>counter:{count}</h1>
    <button onClick={icrement}>icrement</button>
    <button onClick={decrement}>decrement</button>

</div>
);
}
export default Math;