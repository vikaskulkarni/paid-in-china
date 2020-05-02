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

          <button className="fab">
            <div className="fa fa-radiation fa-3x" id="plus"></div>
          </button>
        </div>
        {(this.props.ifShowAgreement || this.props.ifShowForm) && (
          <button
            className="fa fa-times-circle close"
            id="faClose"
            onClick={this.props.hideForm}
          ></button>
        )}
        {this.props.ifShowForm && <ExpenseForm />}
        {this.props.ifShowAgreement && <BubbleAgreement />}
      </Fragment>
    );
  }
}

export default RadialCmp;
