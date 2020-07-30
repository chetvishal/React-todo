import React, { Component } from 'react'
import {connect} from 'react-redux'

class AddTodo extends Component {

    state = {
        id: 0,
        todo: ''
    }

    idCreator = () => {
        let n=this.props.length
        return n+1;
    }

    handleChange = (e) => {
        // Math.floor(Math.random() * (200 - 1 + 1) + 1)
        this.setState({
            id: this.idCreator(),
            [e.target.id] : e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            todo: ''
        })
    }

    render() {
        // console.log('from addtodo')
        // console.log(this.props.todos.todos.length)
        return (
            <div>
            <form onSubmit={this.handleClick}>
                <div className="input-group input-group-lg col-xs-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg" onClick={this.handleClick} style={{cursor: 'pointer'}}>Add Task</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="todo" onChange={this.handleChange} value={this.state.todo}/>
                </div>
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addTodo: (todo) => dispatch({type: 'ADD_TODO', todo})
    }
}

const mapStateToProps = (state) => {
    return{
        todos: state.project
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);