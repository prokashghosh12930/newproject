import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import { UsersStateType } from "../types/ReducersType";
import UserReducer from "./userDetailsSlice"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export type StateType = {
  users: UsersStateType;
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users:UserReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
