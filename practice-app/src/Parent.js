import React, { Component } from "react";
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = { name: '' }
    }

    handleCallBack = (props) => {

        this.setState({ name: props })
    }

    render() {
        const { name } = this.state;
        const data = "Hello React JS"

        return (
        
                <div>
                    <h1> {name} </h1>
                    {/* Passing data from child to parent */}    {/*Passing data from parent to child*/}
                    <Child parentCallBack={this.handleCallBack}  data={data} />
                </div>
          
        )
    }
}

export default Parent