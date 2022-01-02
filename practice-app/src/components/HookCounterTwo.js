import React, { useState } from "react";

function HCounter()
{
    const [count, setCount] = useState(0)

    const incrementByFive = () =>
    {
        for(let i = 0; i < 5; i++)
        {
            setCount(prevCount => prevCount+1)
        }
    }
    return(
        <div>
             Count : {count} 
            <button onClick = {() => setCount(prevCount => prevCount + 1)}> IncreementCount </button>
            <button onClick = {() => setCount(prevCount => prevCount - 1) }> DecreementCount </button>
            <button onClick = {() => setCount(0) }> ResetCount </button>
            <button onClick = {incrementByFive}> incrementByFive </button>
        </div>
    )
}

export default HCounter