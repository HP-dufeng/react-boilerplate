import React, { Component } from 'react';


class Nav extends Component {
    render() {
        return (
            <header className="navbar navbar-light navbar-toggleable-md bd-navbar">
                <nav className="container">
                    <div className="d-flex justify-content-between hidden-lg-up">
                    <a className="navbar-brand" href="/">Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bd-main-nav" aria-controls="bd-main-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>

                    <div className="collapse navbar-collapse" id="bd-main-nav">
                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-item nav-link " href="/">Bootstrap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-item nav-link active" href="/getting-started/introduction/">Documentation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-item nav-link " href="/examples/">Examples</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Nav;
