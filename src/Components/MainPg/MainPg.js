import React, { Component } from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

class MainPg extends Component {
    render() {
        console.log('from main')
        console.log(this.props)
        const links = this.props.firebase.isEmpty ? <SignedOutLinks /> : <SignedInLinks />
        return (
            <div>
                <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Todo App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            {links}
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return{
        firebase: state.firebase.auth
    }
}

export default connect(mapStateToProps)(MainPg);
