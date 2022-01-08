import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    counter: counterReducer
})
export type RootReducerType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store

export let store = createStore(rootReducer, applyMiddleware(thunk))