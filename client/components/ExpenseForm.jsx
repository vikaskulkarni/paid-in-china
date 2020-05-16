import React, { Fragment, Component } from "react";
import "./form.scss";

const ExpenseForm = (props) => {
  const {
    formValues,
    handleDDChange,
    handleHowMuchChange,
    handleCurrencyChange,
    addExpense,
    isAdding,
  } = props;

  const isFormValid = () => {
    return (
      formValues.whatValue != "whatValue" &&
      formValues.whenValue != "whenValue" &&
      formValues.howMuch !== 0
    );
  };

  const currencyChange = (event) => {
    event.preventDefault();
    handleCurrencyChange(event);
  };

  return (
    <Fragment>
      <form
        role="form"
        data-toggle="validator"
        className="expense-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          addExpense(formValues);
        }}
      >
        <h4>Add new Expense</h4>
        <div style={{ paddingRight: "30px" }}>
          <hr />
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <div className="dropdown">
              <select
                value={formValues.whatValue}
                onChange={() => handleDDChange(event, true)}
                className="btn btn-info w-100"
                required
              >
                <option value="selectWhat">Select What</option>
                <option value="personal">Personal</option>
                <option value="bussiness">Bussiness</option>
                <option value="country">Country</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <div className="dropdown">
              <select
                value={formValues.whenValue}
                onChange={() => handleDDChange(event, false)}
                className="btn btn-info w-100"
                required
              >
                <option value="selectWhen">Select When</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
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
                value={formValues.howMuch}
                onChange={handleHowMuchChange}
                required
              />
              <div className="input-group-addon currency-addon">
                <select
                  value={formValues.currency}
                  className="currency-selector"
                  onChange={handleCurrencyChange}
                >
                  <option data-symbol="Rs" data-placeholder="0">
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
            {!isAdding && isFormValid() && (
              <button type="submit" className="w-100 btn large blue button">
                Add My Expense
              </button>
            )}
            {!isAdding && !isFormValid() && (
              <button
                type="submit"
                className="w-100 btn btn-secondary large disabled"
              >
                Add My Expense
              </button>
            )}
            {isAdding && (
              <button
                type="submit"
                className="w-100 btn btn-secondary large disabled"
              >
                Adding Expense...
              </button>
            )}
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
