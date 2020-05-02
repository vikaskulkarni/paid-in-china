import React, { Fragment } from "react";
import MainDashCtr from "./MainDashCtr";
import Radial from "../components/Radial";
import BubbleAgreement from "../components/BubbleAgreement";
import { connect } from "react-redux";
import "./app.scss";
import { showAgreement, showForm, hideForm } from "../actions/showElement";
import ExpenseForm from "../components/ExpenseForm";

const App = (props) => (
  <Fragment>
    <Radial
      buttons={props.buttons}
      showAgreement={props.showAgreement}
      showForm={props.showForm}
    />
    {(props.ifShowAgreement || props.ifShowForm) && (
      <button
        className="fa fa-times-circle close"
        id="faClose"
        onClick={props.hideForm}
      ></button>
    )}
    {props.ifShowForm && <ExpenseForm />}
    {props.ifShowAgreement && <BubbleAgreement />}

    <div className="container">
      <MainDashCtr towers={props.towers} />
    </div>
  </Fragment>
);

const mapStateToProps = (state) => ({
  towers: state.towersReducer.towers,
  buttons: state.buttonsReducer.buttons,
  ifShowAgreement: state.showElementReducer.ifShowAgreement,
  ifShowForm: state.showElementReducer.ifShowForm,
});

export default connect(mapStateToProps, { showAgreement, showForm, hideForm })(
  App
);
