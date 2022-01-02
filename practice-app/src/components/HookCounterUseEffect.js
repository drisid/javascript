import React, { useEffect, useState } from "react";

function HookCounterUseEffect()
{
    //Array destructuring
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() =>
    {
        console.log("useEffect- Updating document title");
        document.title = `Click using ${count} times`
    }, [count])

    return(
        <div>
            <input type = "text"  value = {name} onChange = {e=> setName(e.target.value)}/>
            <button onClick = {() => setCount(count+1)}> Count using Hooks :  {count}  times </button>
        </div>
    )
}

export default HookCounterUseEffect