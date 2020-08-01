import React, { Component } from 'react';

class MainPg extends Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Todo App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"></ul>
                    </div>

                </nav>
            </div>
        )
    }
}



export default MainPg;
