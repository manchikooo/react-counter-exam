import {counterMessagesType} from "../App";
import {Dispatch} from "react";
import {RootReducerType} from "./store";

export type initialStateType = {
    startValue: number
    maxValue: number
    inc: number
    setDisabled: boolean
    resetDisabled: boolean
    incDisabled: boolean
    counterMessage: counterMessagesType
}
const initialState: initialStateType = {
    startValue: 0,
    maxValue: 5,
    inc: 0,
    setDisabled: false,
    resetDisabled: true,
    incDisabled: true,
    counterMessage: 'Press set'
}

export const counterReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'PRESS-INC': {
            if (state.inc < state.maxValue) {
                return {
                    ...state,
                    inc: state.inc + 1
                }
            } else return state
        }
        case 'PRESS-RESET': {
            return {
                ...state,
                inc: state.startValue
            }
        }
        case 'SET-MAX-VALUE': {
            return {
                ...state,
                maxValue: action.newMaxValue
            }
        }
        case 'SET-START-VALUE': {
            return {
                ...state,
                startValue: action.newStartValue
            }
        }
        case 'BEFORE-PRESS-SET': {
            return {
                ...state,
                setDisabled: false,
                incDisabled: true,
                resetDisabled: true,
                counterMessage: null
            }
        }
        case 'AFTER-PRESS-SET': {
            return {
                ...state,
                setDisabled: true,
                incDisabled: false,
                resetDisabled: false,
                counterMessage: null
            }
        }
        case 'DISABLE-ALL-BUTTONS': {
            return {
                ...state,
                setDisabled: true,
                incDisabled: true,
                resetDisabled: true,
            }
        }
        case 'SET-COUNTER-MESSAGE': {
            return {
                ...state,
                counterMessage: action.message
            }
        }
        case 'SET-VALUES-FROM-LOCAL-STORAGE': {
            return {
                ...state,
                startValue: action.startValue,
                maxValue: action.maxValue,
                inc: action.counterValue
            }
        }
        default:
            return state
    }
};
type ActionTypes =
    incCounterACType
    | resetIncACType
    | setMaxValueACType
    | setStartValueACType
    | afterPressSetACType
    | setCounterMessageACType
    | beforePressSetACType
    | disableAllButtonsACType
    | setValuesFromLocalStorageACType

export type incCounterACType = ReturnType<typeof incCounterAC>
export const incCounterAC = () => {
    return {
        type: 'PRESS-INC'
    } as const
}

export type resetIncACType = ReturnType<typeof resetIncAC>
export const resetIncAC = () => {
    return {
        type: 'PRESS-RESET'
    } as const
}

export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (e: number) => {
    return {
        type: 'SET-MAX-VALUE',
        newMaxValue: e
    } as const
}

export type setStartValueACType = ReturnType<typeof setStartValueAC>
export const setStartValueAC = (e: number) => {
    return {
        type: 'SET-START-VALUE',
        newStartValue: e
    } as const
}

export type afterPressSetACType = ReturnType<typeof afterPressSetAC>
export const afterPressSetAC = () => {
    return {
        type: 'AFTER-PRESS-SET'
    } as const
}

export type beforePressSetACType = ReturnType<typeof beforePressSetAC>
export const beforePressSetAC = () => {
    return {
        type: 'BEFORE-PRESS-SET'
    } as const
}

export type setCounterMessageACType = ReturnType<typeof setCounterMessageAC>
export const setCounterMessageAC = (message: counterMessagesType) => {
    return {
        type: 'SET-COUNTER-MESSAGE',
        message
    } as const
}

export type disableAllButtonsACType = ReturnType<typeof disableAllButtonsAC>
export const disableAllButtonsAC = () => {
    return {
        type: 'DISABLE-ALL-BUTTONS'
    } as const
}

export type setValuesFromLocalStorageACType = ReturnType<typeof setValuesFromLocalStorageAC>
export const setValuesFromLocalStorageAC = (startValue: number, maxValue: number, counterValue: number) => {
    return {
        type: 'SET-VALUES-FROM-LOCAL-STORAGE',
        startValue,
        maxValue,
        counterValue
    } as const
}

export const setStartValueAndMaxValueTC = () => (dispatch: Dispatch<any>, getState: () => RootReducerType) => {

    let currentStartValue = getState().counter.startValue
    let currentMaxValue = getState().counter.maxValue

    localStorage.setItem('startValue', JSON.stringify(currentStartValue))
    localStorage.setItem('maxValue', JSON.stringify(currentMaxValue))

    dispatch(resetIncAC())
    dispatch(afterPressSetAC())
}

export const counterValueTC = () => (dispatch: Dispatch<any>, getState: () => RootReducerType) => {

    let currentCounterValue = getState().counter.inc

    localStorage.setItem('counterValue', JSON.stringify(currentCounterValue + 1))

    dispatch(incCounterAC())
}

export const pressResetTC = () => (dispatch: Dispatch<any>, getState: () => RootReducerType) => {

    let counterValueAfterPressReset = getState().counter.startValue

    localStorage.setItem('counterValue', JSON.stringify(counterValueAfterPressReset))

    dispatch(resetIncAC())
}

export const setStartValueAndMaxValueFromLocalStorageTC = () => (dispatch: Dispatch<any>) => {
    let startValueAsString = localStorage.getItem('startValue')
    let maxValueAsString = localStorage.getItem('maxValue')
    let counterValueAsString = localStorage.getItem('counterValue')
    if (startValueAsString && maxValueAsString && counterValueAsString) {
        let newStartValueAsString = JSON.parse(startValueAsString)
        let newMaxValueAsString = JSON.parse(maxValueAsString)
        let newCounterValueAsString = JSON.parse(counterValueAsString)
        dispatch(setValuesFromLocalStorageAC(newStartValueAsString, newMaxValueAsString, newCounterValueAsString))
    }
}



