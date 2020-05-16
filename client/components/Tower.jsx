import React, { Fragment, Component } from "react";
import "./tower.scss";

const Tower = (props) => (
  <Fragment>
    <div className="card">
      <div className="img-box">
        <img src={props.imageSrc} alt={`${props.title}`} title={props.title} />
        <h4>{`${props.title}`}</h4>
      </div>

      <div className="content">
        <p>
          {props.title}s: {!props.whenExpenses[`${props.name}s`] && `...`}
          {props.whenExpenses[`${props.name}s`] &&
            props.whenExpenses[`${props.name}s`]}
        </p>
        <p>
          {props.title} Total: $
          {!props.splitExpenses[`${props.name}Expense`] && `...`}
          {props.splitExpenses[`${props.name}Expense`] &&
            props.splitExpenses[`${props.name}Expense`]}
        </p>
      </div>
    </div>
  </Fragment>
);

export default Tower;
