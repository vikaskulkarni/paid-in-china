import React, { Fragment } from "react";
import { MainDashCtr, RadialCtr } from "./CombinedContainers";
import "./app.scss";

const App = () => (
  <Fragment>
    <RadialCtr />
    <div className="container-fluid">
      <MainDashCtr />
    </div>
  </Fragment>
);

export default App;
