import { call, put } from "redux-saga/effects";
import request from "../utils/request";
import { addExpenseProgress } from "./showElement";

export const GET_EXPENSE = "GET_EXPENSE";
export const GET_EXPENSE_SUCCESS = "GET_EXPENSE_SUCCESS";
export const GET_EXPENSE_FAIL = "GET_EXPENSE_FAIL";
export const HIDE_MESSAGE = "HIDE_MESSAGE";

const EXPENSE_LOOKUP =
  "https://6ycgdb9cv6.execute-api.ap-southeast-1.amazonaws.com/prod/expense";

export const getExpense = (expense) => ({
  type: GET_EXPENSE,
  expense,
});

const getExpenseSuccess = (expense) => ({
  type: GET_EXPENSE_SUCCESS,
  expense,
});

const getExpenseFail = (err) => ({
  type: GET_EXPENSE_FAIL,
  err,
});

export const hideMessage = (msg) => ({
  type: HIDE_MESSAGE,
  msg,
});

export function* genGetExpense() {
  try {
    const allExpenses = yield call(request, EXPENSE_LOOKUP);
    const whenExpenses = yield call(request, `${EXPENSE_LOOKUP}/when`);
    yield put(getExpenseSuccess({ allExpenses, whenExpenses } || {}));
    yield put(addExpenseProgress(false));
  } catch (err) {
    yield put(getExpenseFail(err));
  }
}
