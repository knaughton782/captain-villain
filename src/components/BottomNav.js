import React from 'react';

const BottomNav = () => (
    <div className='container'>
        <div className="row">
            <div className="offset-3 col-4 offset-sm-4 col-sm-7 offset-md-6 col-md-6 offset-lg-7 col-lg-4 offset-xl-7 col-xl-4">
                <button type="button" className="back btn pgDown">Back</button>
                <button type="button" className="continue btn pgUp">Continue</button>
            </div>
        </div>
        <div className="row">
            <div className="col-1">
                <div className="page-number">{}</div>
            </div>
        </div>
    </div >

)

export default BottomNav;