import React, { Fragment } from "react";
import { MainDashCtr } from "./MainDashCtr";
import "./app.scss";
import { RadialCtr } from "./RadialCtr";

const App = () => (
  <Fragment>
    <RadialCtr />
    <div className="container">
      <MainDashCtr />
    </div>
  </Fragment>
);

export default App;
