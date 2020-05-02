import { connect } from "react-redux";
import { showAgreement, showForm, hideForm } from "../actions/showElement";

import RadialCmp from "../components/RadialCmp";

const mapStateToProps = (state) => ({
  buttons: state.buttonsReducer.buttons,
  ifShowAgreement: state.showElementReducer.ifShowAgreement,
  ifShowForm: state.showElementReducer.ifShowForm,
});

export const RadialCtr = connect(mapStateToProps, {
  showAgreement,
  showForm,
  hideForm,
})(RadialCmp);
