import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { UserType, GET_USER_BY_ID } from "../types/ReducersType";
import { getUserErrorAction, getUserSuccessAction } from "./userDetailsSlice";
import { getTestListData } from "./api/Listapi";

// Generator function
function* getUserSaga({ payload: id }: PayloadAction<string>) {
  try {
    // You can also export the axios call as a function.
    const response: AxiosResponse<UserType> = yield call(getTestListData);
    yield put(getUserSuccessAction(response.data));
  } catch (error) {
    yield put(getUserErrorAction(error));
  }
}

// Generator function
export function* watchGetUser() {
  yield takeLatest(GET_USER_BY_ID, getUserSaga);
}