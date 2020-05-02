import React, { Component } from "react";
import "./total.scss";
import invoiceImg from "../images/invoice.png";

class TotalExpenses extends Component {
  render() {
    return (
      <div className="expense">
        <div className="expense-info">
          <h3 className="expense-name">
            Total Losses
            <br /> $50 Trillion
          </h3>
          <dl className="total-stats">
            <div>
              <dt className="total-stat">Country</dt>
              <dd className="total-stat-number">15</dd>
            </div>
            <div>
              <dt className="total-stat">Bussiness</dt>
              <dd className="total-stat-number">46</dd>
            </div>
            <div>
              <dt className="total-stat">Personal</dt>
              <dd className="total-stat-number">123</dd>
            </div>
          </dl>
        </div>
        <div className="expense-image">
          <div className="stamp is-nope">Paid in China</div>
          <img src={invoiceImg} />
        </div>
      </div>
    );
  }
}

export default TotalExpenses;
