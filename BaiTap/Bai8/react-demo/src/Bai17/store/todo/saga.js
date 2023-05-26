import { all } from "axios";
import TodoService from "./api";
import { call, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchTodoListAction } from "./action";

function* fetchTodoList() {
    const response = yield call(TodoService.getTodoList());
    console.log(response);
}

export default function* todoSaga() {
    yield all([
        takeLatest(fetchTodoListAction, fetchTodoList)
    ]);
}