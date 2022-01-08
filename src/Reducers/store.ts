import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer, initialStateType} from "./counterReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage-utils";

let rootReducer = combineReducers({
    counter: counterReducer
})
export type RootReducerType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store

// НАДО!!!!!!!!!!!!!
let preloadedState = loadState()


const getLocalStorageValue = (value2: string) => {
    const getValue = localStorage.getItem(value2)
    let preloadedValue
    if (getValue) {
        preloadedValue = JSON.parse(getValue)
    }
    return preloadedValue
}

let newInitialState: initialStateType = {
    startValue: getLocalStorageValue('startValue'),
    maxValue: getLocalStorageValue('maxValue'),
    inc: getLocalStorageValue('counterValue'),
    setDisabled: getLocalStorageValue('set'),
    resetDisabled: getLocalStorageValue('reset'),
    incDisabled: getLocalStorageValue('inc'),
    counterMessage: getLocalStorageValue('message')
}

let newState = JSON.stringify({counter: newInitialState})
let newState2 = JSON.parse(newState)

console.log(newState2)
export let store = createStore(rootReducer, loadState(), applyMiddleware(thunk))
// ЛИБО ВОТ ТАК:
// export let store = createStore(rootReducer, newState2, applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
    localStorage.setItem('startValue', JSON.stringify(store.getState().counter.startValue))
    localStorage.setItem('maxValue', JSON.stringify(store.getState().counter.maxValue))
    localStorage.setItem('counterValue', JSON.stringify(store.getState().counter.inc))
    localStorage.setItem('reset', JSON.stringify(store.getState().counter.resetDisabled))
    localStorage.setItem('inc', JSON.stringify(store.getState().counter.incDisabled))
    localStorage.setItem('set', JSON.stringify(store.getState().counter.setDisabled))
    localStorage.setItem('message', JSON.stringify(store.getState().counter.counterMessage))
})