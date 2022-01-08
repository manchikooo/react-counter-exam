import React, {useEffect} from 'react';
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
    disableAllButtonsAC, incCounterAC, resetIncAC,
    setCounterMessageAC,
    setMaxValueAC,
    setStartValueAC,
} from "./Reducers/counterReducer";

export type counterMessagesType = 'Press set' | 'Incorrect value' | null

function App() {

    const dispatch = useDispatch()

    let inc = useSelector<RootReducerType, number>(state => state.counter.inc)
    let startValue = useSelector<RootReducerType, number>(state => state.counter.startValue)
    let maxValue = useSelector<RootReducerType, number>(state => state.counter.maxValue)

    let counterMessage = useSelector<RootReducerType, counterMessagesType>(state => state.counter.counterMessage)

    // useEffect(() => {
    //     // dispatch(setStartValueAndMaxValueFromLocalStorageTC())
    // }, [ ])

    const pressSet = () => { //при клике на кнопку set происходит это:
        dispatch(afterPressSetAC())
    }
    //
    const pressInc = () => { //при клике на кнопку inc происходит это:
        dispatch(incCounterAC())
    }

    const pressReset = () => { //при клике на кнопку reset происходит это:
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

    let setDis = useSelector<RootReducerType, boolean>(state => state.counter.setDisabled)
    let incDis = useSelector<RootReducerType, boolean>(state => state.counter.incDisabled)
    let resDis = useSelector<RootReducerType, boolean>(state => state.counter.resetDisabled)

    const incDis2 = inc === maxValue
    const resDis2 = inc === startValue

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
                               onKeyPress={pressSet}
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
                               onKeyPress={pressSet}
                        />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={CIclasses.buttonBlock}>
                    <Button title={'set'}
                            callback={pressSet}
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
                            callback={pressInc}
                            disabled={incDis || incDis2}
                    />
                    <Button title={'reset'}
                            callback={pressReset}
                            disabled={resDis || resDis2}
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