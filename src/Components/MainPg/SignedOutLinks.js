import React from 'react';

const SignedOutLinks = () => {
    return(
        <div>
            <ul className="navbar-nav ">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Create New Account <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Log In <span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    )
}

export default SignedOutLinks;