import React, {Component} from "react";

class Counter extends Component
{   
    constructor(props)
    {
        super(props)
        this.state = {count : 0}
    }

    increementCount = () =>
    {
        this.setState({count: this.state.count + 1})
    }

    render()
    {
        return(
            <div>
                <button onClick = {this.increementCount}> Count using Class Component : {this.state.count} </button>
            </div>
        )
    }
}

export default Counter