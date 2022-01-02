import React, { useState } from "react";

function HCounter1()
{
    const [name, setName] = useState({firstName :'' , lastName : ''})

    return(
        <div>

            <input type = "text" value = {name.firstName} onChange = {event => setName({...name, firstName : event.target.value })} />
            <input type = "text" value = {name.lastName} onChange = {event => setName({...name, lastName : event.target.value })} />

            <h2> FirstName : {name.firstName} </h2>
            <h2> LastName : {name.lastName} </h2>

        </div>
    )
}

export default HCounter1