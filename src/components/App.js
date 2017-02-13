import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import '../../styles/main.css';
import Nav from './Nav';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className='container'>
                    <div className="starter-template">
                        <h1>Bootstrap starter template</h1>
                        <p className="lead">
                            Use this document as a way to quickly start any new project.
                            <br /> 
                            All you get is this text and a mostly barebones HTML document.
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
