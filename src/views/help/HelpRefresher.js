import React, { Fragment } from 'react';

const HelpRefresher = () => (
    <Fragment>
        <p className="question">How much money would you have in 1 year if you invested $100 at a rate of 10%?</p>
        <p>To figure out how much we will have in 1 year, we need to calculate the interest payment and then add the interest payment back to the initial investment (principal). Here are some tips:
                                <ul>
                <li>Interest (i) is a rate. Look for a percentage or decimal.</li>
                <li>Time (n) is an expression of time or number of years. </li>
                <li>To distinguish between Present Value (PV) and Future Value (FV), ask yourself whether the dollar amount is money you have now or in the future. Since $100 is today's investment, it must be Present Value (PV). The question asks what it <i>will</i> be worth, indicating we want to find the Future Value (FV).</li>
            </ul>
        </p><br />
        <hr />
        <ul>
        <li>Steps to figure out the answer:</li>
        <div className="question">How much money would you have in 1 year if you invested $100 at a rate of 10%?</div>
        <p>Calculate the interest payment.</p>
        <ul>
            <li>First identify the interest (i) rate. If necessary, convert the percentage to a decimal.</li>
            <li>Identify the principal or PV.</li>
            <li>Multiply the interest rate times the principal amount.</li>
        </ul>
        <div>
            <img className='math' src="../images/int-example.svg" alt="10% * 100 = $11" />

        </div>

        <li>Finally, to calculate the amount you'd have in one year, add the interest payment back to the initial investment (principal).
        <div>
                <img className="math" src="../images/fv-example.svg" alt="$100 + $10 = $110" />
            </div>
        </li>
        <li>You can do this in one equation like this:
                                    <div>
                <img className="math" src="../images/int-y1-combined.svg" alt="" />
            </div>
            <p>Or like this:</p>
            <div><img className="math" src="../images/alternate-format-y1.svg" alt="" /></div>
        </li>
        </ul>

    </Fragment>
);

export default HelpRefresher;
