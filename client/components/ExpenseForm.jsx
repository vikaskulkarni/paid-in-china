import React, { Fragment, Component } from "react";
import "./form.scss";

class ExpenseForm extends Component {
  render() {
    return (
      <Fragment>
        <form className="expense-form">
          <h4>Add new Expense</h4>
          <div style={{ paddingRight: "30px" }}>
            <hr />
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <div className="dropdown">
                <button
                  className="btn btn-info dropdown-toggle w-100"
                  type="button"
                  data-toggle="dropdown"
                >
                  What
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Personal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bussiness
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Country
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <div className="dropdown">
                <button
                  className="btn btn-info dropdown-toggle w-100 clr"
                  type="button"
                  data-toggle="dropdown"
                >
                  When
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Weekly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Yearly
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <input
                  type="number"
                  className="form-control currency-amount ipclrw"
                  id="inlineFormInputGroup"
                  placeholder="How Much?"
                  size="8"
                />
                <div className="input-group-addon currency-addon">
                  <select className="currency-selector">
                    <option data-symbol="Rs" data-placeholder="0" defaultValue>
                      INR
                    </option>
                    <option data-symbol="$" data-placeholder="0">
                      AUD
                    </option>
                    <option data-symbol="$" data-placeholder="0">
                      USD
                    </option>
                    <option data-symbol="€" data-placeholder="0">
                      EUR
                    </option>
                    <option data-symbol="£" data-placeholder="0">
                      GBP
                    </option>
                    <option data-symbol="¥" data-placeholder="0">
                      JPY
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-10">
              <button className="w-100 btn large blue button">
                Add My Expense
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default ExpenseForm;
