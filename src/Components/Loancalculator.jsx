import React from "react";

function Loancalculator() {
  return <div> <div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Loan Calculator</h1>
          <span>We are over 20 years of experience</span>
        </div>
      </div>
    </div>
  </div>
  <div className="container pt-3">
    <h1>EMI Calculator</h1>
    <div className="calculator-body">
      <div className="loan-details">
        <h2>Loan EMI</h2>
        <p id="emi">₹ 0</p>
      </div>
      <div className="input-fields">
        <div className="input-group">
          <label htmlFor="loan-amount">Loan Amount</label>
          <input type="number" id="loan-amount" placeholder="₹  0" />
        </div>
        <div className="input-group">
          <label htmlFor="interest-rate">Interest Rate</label>
          <input type="number" id="interest-rate" placeholder= "% 0" />
        </div>
        <div className="input-group">
          <label htmlFor="loan-tenure">Loan Tenure</label>
          <input type="number" id="loan-tenure" placeholder=" Yr  Mo" />
        </div>
        <button onclick="calculateEMI()">Calculate</button>
      </div>
      <div className="total-details">
        <h2>Total Interest Payable</h2>
        <p id="total-interest">₹ 0</p>
        <h2>Total of Payments (Principal + Interest)</h2>
        <p id="total-payment">₹ 0</p>
      </div>
    </div>
  </div></div>

}

export default Loancalculator;
