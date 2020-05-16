import yearImg from "../images/year.png";
import monthImg from "../images/month.png";
import weekImg from "../images/week.png";
import { GET_EXPENSE_SUCCESS, HIDE_MESSAGE } from "../actions/mainDashActions";
import { getMoneyValue } from "../utils/helpers";

const initialState = {
  towers: [
    { imageSrc: weekImg, title: "Week", name: "week" },
    { imageSrc: monthImg, title: "Month", name: "month" },
    { imageSrc: yearImg, title: "Year", name: "year" },
  ],
  allExpenses: {},
  splitExpenses: {},
  whenExpenses: {},
  message: "hello",
};
const towersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPENSE_SUCCESS:
      const { allExpenses } = action.expense;
      const { pwk, bwk, cwk, pmt, bmt, cmt, pyr, byr, cyr } = allExpenses;

      const weekExpense = getMoneyValue(pwk + bwk + cwk);
      const monthExpense = getMoneyValue(pmt + bmt + cmt);
      const yearExpense = getMoneyValue(pyr + byr + cyr);

      return {
        ...state,
        allExpenses,
        splitExpenses: {
          weekExpense,
          monthExpense,
          yearExpense,
        },
        whenExpenses: action.expense.whenExpenses,
      };
    case HIDE_MESSAGE:
      //window.setTimeout(() => {
      return { ...state, message: "" };
    //}, 2000);
    default:
      return state;
  }
};

export default towersReducer;
