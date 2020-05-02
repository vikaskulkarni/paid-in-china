import { RESIZE_STOP, CHANGE_ORDER } from "../actions/panelEvents";

const initialState = {
  order: ["2", "1", "0"],
  panes: {
    "0": { height: 100 },
    "1": { height: 200 },
    "2": { height: 300 },
  },
};
const panelEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESIZE_STOP:
      return Object.assign({}, state, {
        panes: {
          ...state.panes,
          [action.key]: { height: state.panes[key].height + action.d.height },
        },
      });
    case CHANGE_ORDER:
      return Object.assign({}, state, {
        order: action.order,
      });
    default:
      return state;
  }
};

export default panelEventReducer;
