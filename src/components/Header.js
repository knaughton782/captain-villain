import React from 'react';

const Header = () =>  (
        <div className="container-fluid">
            <div id='{}' className="slide">
                <div className="row slide-title">
                    <div className="col-12">
                        <h2 className="primary-title">TVM: The Basics</h2>
                        <h3 className="secondary-title">Introduction</h3>
                    </div>
                </div>
                <nav className="row">
                    <div className="col-12 col-md-3"><a href="./tvm1-home.html">Home</a></div>
                    <div className="col-12 col-md-3"><a href="../tvm1/help/help-index.html">Math Help</a></div>
                    <div className="col-12 col-md-3"><a href="./tvm1-exercises.html">Exercises</a></div>
                    <div className="col-12 col-md-3"><a href="">Financial Calculator</a></div>
                </nav>
            </div>
        </div>
    )


export default Header;