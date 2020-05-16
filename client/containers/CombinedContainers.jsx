import { connect } from "react-redux";
import MainDashCmp from "../components/MainDashCmp";
import RadialCmp from "../components/RadialCmp";
import { getExpense, hideMessage } from "../actions/mainDashActions";
import {
  showAgreement,
  showForm,
  hideForm,
  handleDDChange,
  handleHowMuchChange,
  handleCurrencyChange,
  addExpense,
} from "../actions/showElement";

export const MainDashCtr = connect(
  (state) => ({
    towers: state.towersReducer.towers,
    allExpenses: state.towersReducer.allExpenses,
    splitExpenses: state.towersReducer.splitExpenses,
    whenExpenses: state.towersReducer.whenExpenses,
    message: state.towersReducer.message,
  }),
  { getExpense, hideMessage }
)(MainDashCmp);

export const RadialCtr = connect(
  (state) => ({
    buttons: state.buttonsReducer.buttons,
    ifShowAgreement: state.showElementReducer.ifShowAgreement,
    ifShowForm: state.showElementReducer.ifShowForm,
    formValues: state.showElementReducer.formValues,
    isAdding: state.showElementReducer.isAdding,
  }),
  {
    showAgreement,
    showForm,
    hideForm,
    handleDDChange,
    handleHowMuchChange,
    handleCurrencyChange,
    addExpense,
  }
)(RadialCmp);
