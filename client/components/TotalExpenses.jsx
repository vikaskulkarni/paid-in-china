import React, { useEffect } from "react";
import "./total.scss";
import invoiceImg from "../images/invoice.png";
import { getMoneyValue } from "../utils/helpers";

const TotalExpenses = (props) => {
  const { allExpenses, message, hideMessage } = props;

  return (
    <div className="expense">
      <div className="expense-info">
        <h3 className="expense-name">
          Total Losses
          <br /> ${allExpenses.allTotal && getMoneyValue(allExpenses.allTotal)}
          {!allExpenses.allTotal && `...`}
        </h3>

        <div className="total-stats">
          <div style={{ paddingRight: "15px" }}>
            <dt className="total-stat">Country</dt>
            <dd className="total-stat-number">
              $
              {allExpenses.countryTotal &&
                getMoneyValue(allExpenses.countryTotal)}
              {!allExpenses.countryTotal && `...`}
            </dd>
          </div>
          <div style={{ paddingRight: "15px" }}>
            <dt className="total-stat">Bussiness</dt>
            <dd className="total-stat-number">
              $
              {allExpenses.bussinessTotal &&
                getMoneyValue(allExpenses.bussinessTotal)}
              {!allExpenses.bussinessTotal && `...`}
            </dd>
          </div>
          <div style={{ paddingRight: "15px", marginRight: "15px" }}>
            <dt className="total-stat">Personal</dt>
            <dd className="total-stat-number">
              $
              {allExpenses.personalTotal &&
                getMoneyValue(allExpenses.personalTotal)}
              {!allExpenses.personalTotal && `...`}
            </dd>
          </div>
        </div>
      </div>
      <div className="expense-image">
        <div className="stamp is-nope">Paid in China</div>
        <img src={invoiceImg} />
      </div>
    </div>
  );
};

export default TotalExpenses;
