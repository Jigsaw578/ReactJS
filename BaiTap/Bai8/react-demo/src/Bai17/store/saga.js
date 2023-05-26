import { all } from "axios";
import todoSaga from "./todo/saga";

export default function* rootSaga() {
    yield all([
        todoSaga()
    ]);
}