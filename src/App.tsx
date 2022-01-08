import React from 'react';
import './App.css';
import {Tablo} from "./components/Counter/Tablo/Tablo";
import {Button} from "./components/Counter/Button/Button";
import classes from "./components/Counter/Buttons(не-нужны)/Buttons.module.css";
import CIclasses from './components/CounterSettings/CounterSettings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./Reducers/store";
import {
    afterPressSetAC,
    beforePressSetAC,
    disableAllButtonsAC,
    incCounterAC,
    resetIncAC,
    setCounterMessageAC,
    setMaxValueAC,
    setStartValueAC
} from "./Reducers/counterReducer";

export type counterMessagesType = 'Press set' | 'Incorrect value' | null

function App() {

    const dispatch = useDispatch()

    let inc = useSelector<RootReducerType, number>(state => state.counter.inc)
    let startValue = useSelector<RootReducerType, number>(state => state.counter.startValue)
    let maxValue = useSelector<RootReducerType, number>(state => state.counter.maxValue)

    let setDis = useSelector<RootReducerType, boolean>(state => state.counter.setDisabled)
    let incDis = useSelector<RootReducerType, boolean>(state => state.counter.incDisabled)
    let resDis = useSelector<RootReducerType, boolean>(state => state.counter.resetDisabled)

    let counterMessage = useSelector<RootReducerType, counterMessagesType>(state => state.counter.counterMessage)
    // useEffect(() => {
    // }, [startValue])
    //
    // useEffect(() => {
    // }, [maxValue])

    // useEffect(() => {
    //     let startValueAsString = localStorage.getItem('startValue')
    //     if (startValueAsString) {
    //         let newStartValueAsString = JSON.parse(startValueAsString)
    //         setStartValue(newStartValueAsString)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString) {
    //         let newMaxValueAsString = JSON.parse(maxValueAsString)
    //         setMaxValue(newMaxValueAsString)
    //     }
    // }, [])

    const changeSet = () => { //при клике на кнопку set происходит это:
        dispatch(resetIncAC())
        dispatch(afterPressSetAC())

        // localStorage.setItem('startValue', JSON.stringify(startValue))
        // localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    //
    const changeInc = () => { //при клике на кнопку inc происходит это:
        dispatch(incCounterAC())
    }

    const changeReset = () => { //при клике на кнопку reset происходит это:
        dispatch(resetIncAC())
    }

    const currentValueOfMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        //функция вызывается если что-то меняем в инпуте max value
        dispatch(beforePressSetAC())
        dispatch(setMaxValueAC(Number(e.currentTarget.value)))
        if (+e.currentTarget.value <= startValue || +e.currentTarget.value <= 0) {
            dispatch(setCounterMessageAC('Incorrect value'))
            dispatch(disableAllButtonsAC())
        }
        if (+e.currentTarget.value > startValue) {
            dispatch(setCounterMessageAC('Press set'))
        }
    }
    const currentValueOfStartInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        //функция вызывается если что-то меняем в инпуте start value
        dispatch(beforePressSetAC())
        dispatch(setStartValueAC(+e.currentTarget.value))
        dispatch(setCounterMessageAC('Press set'))
        if (+e.currentTarget.value >= maxValue) {
            dispatch(setCounterMessageAC('Incorrect value'))
            dispatch(disableAllButtonsAC())
        }
        if (+e.currentTarget.value < maxValue) {
            dispatch(setCounterMessageAC('Press set'))
        }
        if (+e.currentTarget.value < 0) {
            dispatch(setCounterMessageAC('Incorrect value'))
            dispatch(disableAllButtonsAC())
        }
    }

    const inputErrorStyle = maxValue <= startValue || maxValue <= 0 || startValue < 0 ? CIclasses.inputError : CIclasses.input

    return (
        <div>
            <div className={CIclasses.settingsInfoAndButtonBlock}>
                <div className={CIclasses.counterSettings}>
                    <div className={CIclasses.inputBlock}>
                        <div className={CIclasses.valueInfo}>
                            max value
                            <span>
                        <input className={inputErrorStyle}
                               type='number'
                               value={maxValue}
                               onChange={currentValueOfMaxInput}
                               onKeyPress={changeSet}
                        />
                        </span>
                        </div>
                        <div className={CIclasses.valueInfo}>
                            start value
                            <span>
                        <input className={inputErrorStyle}
                               type='number'
                               value={startValue}
                               onChange={currentValueOfStartInput}
                               onKeyPress={changeSet}
                        />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={CIclasses.buttonBlock}>
                    <Button title={'set'}
                            callback={changeSet}
                            disabled={setDis}
                    />
                </div>
            </div>
            <div className="Counter">
                <Tablo inc={inc}
                       maxValue={maxValue}
                       counterMessage={counterMessage}
                       startValue={startValue}
                />
                <div className={classes.buttonsStyle}>
                    <Button title={'inc'}
                            callback={changeInc}
                            disabled={incDis}
                    />
                    <Button title={'reset'}
                            callback={changeReset}
                            disabled={resDis}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;


// //класс для инпута ошибки или нет
// const conditionsOfSetDisable = setDisabled || startValue < 0 || maxValue <= 0 || startValue >= maxValue

// const disabledInc = incDisabled || inc === maxValue //условие дизейбла кнопки inc
// const disabledReset = resetDisabled //условие дизейбла кнопки reset
// const disabledSet = conditionsOfSetDisable //условие дизейбла кнопки set