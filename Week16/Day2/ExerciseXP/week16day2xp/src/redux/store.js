import {createStore, combineReducers} from "redux"
import taskReducer from "./reducer"

const reducer = combineReducers({
    taskReducer,
})

const store = createStore(reducer)
export default store;