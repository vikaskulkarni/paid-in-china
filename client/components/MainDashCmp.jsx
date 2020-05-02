import React, { Fragment, Component } from "react";
import TotalExpenses from "./TotalExpenses";
import Tower from "./Tower";

class MainDashCmp extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <TotalExpenses />
        </div>
        <div className="row">
          {this.props.towers.map((element, index) => (
            <Tower key={element.title + index} {...element} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default MainDashCmp;
