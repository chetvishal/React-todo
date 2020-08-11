import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signIn} from '../store/actions/authActions'
import {Redirect} from 'react-router-dom';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

    render() {
        const {authError, auth} = this.props
        if(auth.uid) return <Redirect to='/' />
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <small id="emailHelp" class="form-text text-muted">{authError ? <p>{authError}</p>: null}</small>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);