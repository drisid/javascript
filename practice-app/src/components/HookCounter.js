import React, { useState } from "react";

function HookCounter()
{
    //Array destructuring
    const [count, setCount] = useState(0)

    return(
        <div>
            <button onClick = {()=> setCount(count+1)}> Count using Hooks :  {count} </button>
        </div>
    )
}

export default HookCounter