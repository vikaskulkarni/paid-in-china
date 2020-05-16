import React, { Fragment, useEffect } from "react";
import TotalExpenses from "./TotalExpenses";
import Tower from "./Tower";

const MainDashCmp = (props) => {
  useEffect(() => {
    props.getExpense();
  }, []);

  return (
    <Fragment>
      <div className="row">
        <TotalExpenses {...props} />
      </div>
      <div className="row">
        {props.towers.map((element, index) => (
          // <div
          //   className="col-md-4 col-sm-4 col-xs-4"
          //   key={element.title + index}
          // >
          <Tower
            {...element}
            key={element.title + index}
            allExpenses={props.allExpenses}
            splitExpenses={props.splitExpenses}
            whenExpenses={props.whenExpenses}
          />
          // </div>
        ))}
      </div>
    </Fragment>
  );
};

export default MainDashCmp;
