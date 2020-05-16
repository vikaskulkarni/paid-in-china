import { takeLatest } from "redux-saga/effects";
import * as elementsActions from "../actions/showElement";
import * as mainDashActions from "../actions/mainDashActions";

export function* watchSagas() {
  yield takeLatest(elementsActions.ADD_EXPENSE, elementsActions.genAddExpense);
  yield takeLatest(mainDashActions.GET_EXPENSE, mainDashActions.genGetExpense);
}
