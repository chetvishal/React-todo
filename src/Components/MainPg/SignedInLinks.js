import React from 'react';
import {signOut} from '../store/actions/authActions'
import {connect} from 'react-redux'

const SignedInLinks = (props) => {

    const handleClick = (e) => {
        console.log(props)
        props.signOut()
    }
    return(
        <div>
            <div className="navbar-nav">
                <a className="nav-item nav-link" onClick={handleClick} >Logout</a>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);