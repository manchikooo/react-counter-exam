import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

let rootReducer = combineReducers({
    counter: counterReducer
})
export type RootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)