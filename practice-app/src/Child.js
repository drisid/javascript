import React, { Component } from "react";

class Child extends Component
 {
    handleNameChange = (event) => {
        let name = event.target.value;
        this.props.parentCallBack(name);
    }

    render() {
        return (
            <div>
                <div>
                    <label> Name </label>
                    <input type="text" onChange={this.handleNameChange} />
                </div>

                <div>
                    <h1> {this.props.data} </h1>
                </div>
            </div>
        )
    }
}

export default Child