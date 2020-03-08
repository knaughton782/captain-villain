import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Help1 from './Help1';
import Help2 from './Help2';
import Help3 from './Help3';
import Help4 from './Help4';
import Help5 from './Help5';
import HelpRefresher from './HelpRefresher';

const HelpIndex = () => (
    <Fragment>
        <p>Put links to each of the math help pages with their description. All math links should like to this index page. or have a button back to the math index page</p>
        <Router>
            <div>
                <ul>
                    <li><Link to="/help1">Help 1</Link></li>
                    <li><Link to="/help2">Help 2</Link></li>
                    <li><Link to="/help3">Help 3</Link></li>
                    <li><Link to="/help4">Help 4</Link></li>
                    <li><Link to="/help5">Help 5</Link></li>
                    <li><Link to="/helprefresher">Help Refresher</Link></li>
                </ul>
                <Route path='/help1' component={Help1} />
                <Route path='/help2' component={Help2} />
                <Route path='/help3' component={Help3} />
                <Route path='/help4' component={Help4} />
                <Route path='/help5' component={Help5} />
                <Route path='/helprefresher' component={HelpRefresher} />
            </div>
        </Router>
        
    </Fragment>
); 

export default HelpIndex;
