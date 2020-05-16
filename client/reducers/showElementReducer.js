import {
  SHOW_AGREEMENT,
  SHOW_FORM,
  HIDE_FORM,
  HANDLE_DD_CHANGE,
  HANDLE_HOWMUCH_CHANGE,
  HANDLE_CURRENCY_CHANGE,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_PROGRESS,
} from "../actions/showElement";

const initialState = {
  ifShowAgreement: false,
  ifShowForm: false,
  formValues: {
    whatValue: "Select What",
    whenValue: "Select When",
    howMuch: 0,
    currency: "INR",
  },
  isAdding: false,
};
const showElementReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_AGREEMENT:
      return Object.assign({}, state, {
        ifShowAgreement: !state.ifShowAgreement,
        ifShowForm: false,
      });
    case SHOW_FORM:
      return Object.assign({}, state, {
        ifShowAgreement: false,
        ifShowForm: !state.ifShowForm,
      });
    case HIDE_FORM:
      return Object.assign({}, state, {
        ifShowAgreement: false,
        ifShowForm: false,
      });
    case HANDLE_DD_CHANGE:
      return action.payload.isWhat
        ? {
            ...state,
            formValues: {
              ...state.formValues,
              whatValue: action.payload.value,
            },
          }
        : {
            ...state,
            formValues: {
              ...state.formValues,
              whenValue: action.payload.value,
            },
          };
    case HANDLE_HOWMUCH_CHANGE:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          howMuch: action.howMuch,
        },
      };
    case HANDLE_CURRENCY_CHANGE:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          currency: action.currency,
        },
      };
    case ADD_EXPENSE_SUCCESS:
      return {
        ...state,
      };
    case ADD_EXPENSE_PROGRESS:
      return {
        ...state,
        isAdding: action.show,
      };
    default:
      return state;
  }
};

export default showElementReducer;
