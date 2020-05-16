import React, { Component, Fragment } from "react";
import ExpenseForm from "./ExpenseForm";
import BubbleAgreement from "./BubbleAgreement";
import "./radial.scss";

class RadialCmp extends Component {
  render() {
    return (
      <Fragment>
        <div className="radial">
          {this.props.buttons.map((element, index) => (
            <button
              key={element.faID + index}
              className={`fa ${element.faIcon}`}
              id={element.faID}
              onClick={this.props[element.actionName]}
            ></button>
          ))}

          {this.props.ifShowAgreement && (
            <button
              className="fa fa-times fa-2x"
              id="fa-hs"
              onClick={this.props.hideForm}
              style={{ color: "black" }}
            ></button>
          )}

          {this.props.ifShowForm && (
            <button
              className="fa fa-times fa-2x"
              id="fa-invoice"
              onClick={this.props.hideForm}
              style={{
                color: "black",
              }}
            ></button>
          )}

          <button className="fab">
            <div className="fa fa-radiation fa-3x" id="plus"></div>
          </button>
        </div>
        {this.props.ifShowForm && <ExpenseForm {...this.props} />}
        {this.props.ifShowAgreement && <BubbleAgreement {...this.props} />}
      </Fragment>
    );
  }
}

export default RadialCmp;
