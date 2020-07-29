import React, { Component } from 'react'

class AddTodo extends Component {
    render() {
        return (
            <div>
                <div className="input-group input-group-lg col-xs-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Add Task</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
            </div>
        )
    }
}

export default AddTodo;