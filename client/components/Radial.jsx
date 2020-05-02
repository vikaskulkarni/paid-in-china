import React, { Component, Fragment } from "react";
import "./radial.scss";

class Radial extends Component {
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
      </Fragment>
    );
  }
}

export default Radial;
