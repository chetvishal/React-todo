import React from 'react'
import {connect} from 'react-redux';
import {removeTodo} from '../store/actions/projectActions'

const Todos = (props) => {
    const {name} = props;
    function handleClick(e){
        e.preventDefault()
        props.removeTodo(props)

        //solution to reloading page after updating in firebase 
        //source: https://stackoverflow.com/questions/41481522/how-to-refresh-a-page-using-react-route-link
        // window.location.reload();

    }
    return (
        <div>
            <div className="alert alert-primary todo" role="alert" >
                {name}
                <span className="text-right"><a href="#" className="alert-link" onClick={handleClick}>Remove</a> </span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        todos: state.project
    }
}

function reload() {
    window.location.reload();
}

const mapDispatchToProps = (dispatch) => {
    
    return{
         removeTodo: (todo) => dispatch(removeTodo(todo))
         
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);