import React, {useEffect, useState} from 'react';
import './App.css';
import {Tablo} from "./components/Counter/Tablo/Tablo";
import {Button} from "./components/Counter/Button/Button";
import classes from "./components/Counter/Buttons(не-нужны)/Buttons.module.css";
import CIclasses from './components/CounterSettings/CounterSettings.module.css'

type counterMessagesType = 'Press set' | 'Incorrect value' | null

function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [setDisabled, setSetDisabled] = useState(false)
    const [resetDisabled, setResetDisabled] = useState(false)
    const [incDisabled, setIncDisabled] = useState(false)
    const [inc, setInc] = useState<number | string>(startValue)
    const [counterMessage, setCounterMessage] = useState<counterMessagesType>(null)

    useEffect(() => {
    }, [startValue])

    useEffect(() => {
    }, [maxValue])

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newStartValueAsString = JSON.parse(startValueAsString)
            setStartValue(newStartValueAsString)
        }
    }, [])

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValueAsString = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValueAsString)
        }
    }, [])

    const changeSet = () => { //при клике на кнопку set происходит это:
        setCounterMessage(null)
        setInc(startValue)
        setSetDisabled(true)
        setIncDisabled(false)
        setResetDisabled(false)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    const changeInc = () => { //при клике на кнопку inc происходит это:
        if (inc < maxValue) {
            let newInc = Number(inc)
            setInc(++newInc) // inc = inc + 1
        }
    }

    const changeReset = () => { //при клике на кнопку reset происходит это:
        setInc(startValue)
    }

    const currentValueOfMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        //функция вызывается если что-то меняем в инпуте max value
        setSetDisabled(false)
        setIncDisabled(true)
        setResetDisabled(true)
        setMaxValue(+e.currentTarget.value)
        if (+e.currentTarget.value <= startValue || +e.currentTarget.value <= 0) {
            setCounterMessage('Incorrect value')
        }
        if (+e.currentTarget.value > startValue) {
            setCounterMessage('Press set')
        }
    }
    const currentValueOfStartInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        //функция вызывается если что-то меняем в инпуте start value
        console.log(+e.currentTarget.value)
        setSetDisabled(false)
        setIncDisabled(true)
        setResetDisabled(true)
        setStartValue(+e.currentTarget.value)
        setCounterMessage('Press set')
        if (+e.currentTarget.value >= maxValue) {
            setCounterMessage('Incorrect value')
        }
        if (+e.currentTarget.value < maxValue) {
            setCounterMessage('Press set')
        }
        if (+e.currentTarget.value < 0) {
            setCounterMessage('Incorrect value')
        }
    }

    const inputErrorStyle = maxValue <= startValue || maxValue <= 0 || startValue < 0 ? CIclasses.inputError : CIclasses.input
    //класс для инпута ошибки или нет
    const conditionsOfSetDisable = setDisabled || startValue < 0 || maxValue <= 0 || startValue >= maxValue

    const disabledInc = incDisabled || inc === maxValue //условие дизейбла кнопки inc
    const disabledReset = resetDisabled //условие дизейбла кнопки reset
    const disabledSet = conditionsOfSetDisable //условие дизейбла кнопки set

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
                    {/*<Input title={'max value'}*/}
                    {/*    // changeNewValue={changeNewMaxValue}*/}
                    {/*       newValue={maxValue}*/}
                    {/*       setNewValue={setMaxValue}*/}
                    {/*    // changeInputStyle={changeInputStyle}*/}
                    {/*       errorValue={error}*/}
                    {/*       setSetDisabled={setSetDisabled}*/}
                    {/*       setIncDisabled={setIncDisabled}*/}
                    {/*       setResetDisabled={setResetDisabled}*/}
                    {/*       setIncValue={setInc}*/}
                    {/*       errorMessage={errorMessage}*/}
                    {/*/>*/}
                    {/*<Input title={'start value'}*/}
                    {/*    // changeNewValue={changeNewStartValue}*/}
                    {/*       newValue={startValue}*/}
                    {/*       setNewValue={setStartValue}*/}
                    {/*    // changeInputStyle={changeInputStyle}*/}
                    {/*       errorValue={error}*/}
                    {/*       setSetDisabled={setSetDisabled}*/}
                    {/*       setIncDisabled={setIncDisabled}*/}
                    {/*       setResetDisabled={setResetDisabled}*/}
                    {/*       setIncValue={setInc}*/}
                    {/*       errorMessage={errorMessage}*/}
                    {/*/>*/}
                </div>
                <div className={CIclasses.buttonBlock}>
                    <Button title={'set'}
                            callback={changeSet}
                            disabled={disabledSet}
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
                            disabled={disabledInc}
                    />
                    <Button title={'reset'}
                            callback={changeReset}
                            disabled={disabledReset}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
