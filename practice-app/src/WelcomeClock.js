import React from "react";

function WelcomeClock(props)
{
    return(
            <div className = "WelcomeClock">
                {props.children}
            </div>
    );
}

export default WelcomeClock