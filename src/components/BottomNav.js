import React from 'react';

const BottomNav = () => (
    <div className='container'>
        <div class="row">
            <div class="offset-3 col-4 offset-sm-4 col-sm-7 offset-md-6 col-md-6 offset-lg-7 col-lg-4 offset-xl-7 col-xl-4">
                <button type="button" class="back btn pgDown">Back</button>
                <button type="button" class="continue btn pgUp">Continue</button>
            </div>
        </div>
        <div class="row">
            <div class="col-1">
                <div class="page-number">{}</div>
            </div>
        </div>
    </div >

)

export default BottomNav;