import { SHOW_AGREEMENT, SHOW_FORM, HIDE_FORM } from "../actions/showElement";

const initialState = {
  ifShowAgreement: false,
  ifShowForm: false,
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
    default:
      return state;
  }
};

export default showElementReducer;
