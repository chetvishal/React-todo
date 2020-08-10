import React from 'react';

const SignedOutLinks = () => {
    return(
        <div>
            <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/signup">Create New Account</a>
                        <a className="nav-item nav-link" href="/signin">Log In</a>
                    </div>
        </div>
    )
}

export default SignedOutLinks;