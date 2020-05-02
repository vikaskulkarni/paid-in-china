import { connect } from "react-redux";
import MainDashCmp from "../components/MainDashCmp";
import RadialCmp from "../components/RadialCmp";
import { showAgreement, showForm, hideForm } from "../actions/showElement";

export const MainDashCtr = connect(
  (state) => ({
    towers: state.towersReducer.towers,
  }),
  {}
)(MainDashCmp);

export const RadialCtr = connect(
  (state) => ({
    buttons: state.buttonsReducer.buttons,
    ifShowAgreement: state.showElementReducer.ifShowAgreement,
    ifShowForm: state.showElementReducer.ifShowForm,
  }),
  {
    showAgreement,
    showForm,
    hideForm,
  }
)(RadialCmp);
