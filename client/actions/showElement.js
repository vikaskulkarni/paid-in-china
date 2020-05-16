import { call, put } from "redux-saga/effects";
import request from "../utils/request";
import { getExpense } from "./mainDashActions";

export const SHOW_AGREEMENT = "SHOW_AGREEMENT";
export const SHOW_FORM = "SHOW_FORM";
export const HIDE_FORM = "HIDE_FORM";
export const HANDLE_DD_CHANGE = "HANDLE_DD_CHANGE";
export const HANDLE_HOWMUCH_CHANGE = "HANDLE_HOWMUCH_CHANGE";
export const HANDLE_CURRENCY_CHANGE = "HANDLE_CURRENCY_CHANGE";
export const ADD_EXPENSE = "ADD_EXPENSE";
export const ADD_EXPENSE_SUCCESS = "ADD_EXPENSE_SUCCESS";
export const ADD_EXPENSE_PROGRESS = "ADD_EXPENSE_PROGRESS";

const EXPENSE_LOOKUP =
  "https://6ycgdb9cv6.execute-api.ap-southeast-1.amazonaws.com/prod/expense";

export const showAgreement = (show) => ({
  type: SHOW_AGREEMENT,
  show,
});

export const showForm = (show) => ({
  type: SHOW_FORM,
  show,
});

export const hideForm = (show) => ({
  type: HIDE_FORM,
  show,
});

export const handleDDChange = (event, isWhat) => ({
  type: HANDLE_DD_CHANGE,
  payload: { value: event.target.value, isWhat },
});

export const handleHowMuchChange = (event) => ({
  type: HANDLE_HOWMUCH_CHANGE,
  howMuch: event.target.value,
});

export const handleCurrencyChange = (event) => ({
  type: HANDLE_CURRENCY_CHANGE,
  currency: event.target.value,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

const addExpenseSuccess = (show) => ({
  type: ADD_EXPENSE_SUCCESS,
  show,
});

export const addExpenseProgress = (show) => ({
  type: ADD_EXPENSE_PROGRESS,
  show,
});

const addExpenseFail = (show) => ({
  type: ADD_EXPENSE_SUCCESS,
  show,
});

export function* genAddExpense(action) {
  try {
    yield put(addExpenseProgress(true));
    const expenseResponse = yield call(request, EXPENSE_LOOKUP, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(action.expense),
    });
    yield put(getExpense());
  } catch (err) {
    yield put(addExpenseFail(err));
  }
}
