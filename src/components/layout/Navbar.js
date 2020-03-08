import React, { Component } from 'react';
import HelpIndex from '../../views/help/HelpIndex';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="row">
                    <div className="col-12 col-md-3"><a href="./tvm1-home.html"><i class="fas fa-home"></i> Home</a></div>
                    <div className="col-12 col-md-3"><a href="../../help/helpindex.html"><i class="fas fa-question-circle"></i> Math Help</a></div>
                    <div className="col-12 col-md-3"><a href="./tvm1-exercises.html"><i class="fas fa-clipboard-check"></i> Exercises</a></div>
                    <div className="col-12 col-md-3"><a href=""><i class="fas fa-calculator"></i> Financial Calculator</a></div>
                </nav>

                <Router>
                    <div>
                        <ul>
                            <li><Link to="/helpindex">Help</Link></li>
                        </ul>
                        <Route path='/helpindex' component={HelpIndex} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Navbar;
