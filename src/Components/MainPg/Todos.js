import React from 'react'

const Todos = (props) => {
    console.log(props)
    const {name} = props;
    return (
        <div>
            <div className="alert alert-primary" role="alert" >
                {name}
                <span className="text-right"><a href="#" class="alert-link">Remove</a> </span>
            </div>
        </div>
    )
}

export default Todos;