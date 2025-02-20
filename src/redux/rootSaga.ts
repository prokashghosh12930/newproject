import { spawn } from 'redux-saga/effects';
import {watchGetUser} from './sagas';

export default function* rootSaga() {
    yield spawn(watchGetUser);
}