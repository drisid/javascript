import React, {Component} from 'react'


class Clock extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {date : new Date()};
    } 
    render()
    {
        return(
                <div>
                    <h1> Hello World </h1>
                    <h2> It is {this.state.date.toLocaleTimeString()}. </h2>
                    <h2> My fav color is  {this.props.color} </h2>
                    <h2> Result of 10 + 20 is {this.props.result}</h2>
                </div>
        );
    }
}

export default Clock 