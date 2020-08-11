import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions';
import {Redirect} from 'react-router-dom';

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        username: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props)
        this.props.signUp(this.state)
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
                        <input type="password" className="form-control" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" id="username" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    <small id="emailHelp" class="form-text text-muted">{authError ? <p>{authError}</p>: null}</small>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

const mapStateToProps = state => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);