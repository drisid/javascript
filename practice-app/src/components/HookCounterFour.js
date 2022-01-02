import React, { useState } from "react";

function HCounter2()
{
    const [items, setItems] = useState([])

    const addNumber = () =>
    {
        setItems([...items,
        {
            id : items.length,
            value : Math.random()*100
        }])
    }

    return(
        <div>
                <button onClick = {addNumber}> Click to add number </button>

                <ul>
                    {items.map(
                        item => (
                            <li key = {item.id}>
                                {item.value}
                            </li>
                        )
                    )}
                </ul>
        </div>
    )
}

export default HCounter2