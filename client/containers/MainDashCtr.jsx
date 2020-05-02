import React, { Fragment, Component } from "react";
import TotalExpenses from "../components/TotalExpenses";
import Tower from "../components/Tower";

class MainDashCtr extends Component {
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

export default MainDashCtr;
