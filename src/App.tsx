import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./components/Counter/Tablo/Tablo";
import {Button} from "./components/Counter/Button/Button";
import classes from "./components/Counter/Buttons(не-нужны)/Buttons.module.css";
import {Input} from "./components/CounterSettings/Input";
import CIclasses from './components/CounterSettings/CounterSettings.module.css'

function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [setDisabled, setSetDisabled] = useState(false)
    const [resetDisabled, setResetDisabled] = useState(false)
    const [incDisabled, setIncDisabled] = useState(false)
    const [inc, setInc] = useState<number | string>(startValue)
    const [text, setText] = useState<'Press key' | 'Incorrect value' | null>(null)
    // const [errorStyle, setErrorStyle] = useState<string>(CIclasses.input)

    // CIclasses.inputError | CIclasses.input

    // console.log(startValue)
    // console.log(maxValue)

    const changeInc = () => {
        if (inc < maxValue) {
            let newInc = Number(inc)
            setInc(++newInc) // inc = inc + 1
        }
    }
    // const changeInputStyle = () => {
    //     if (maxValue < startValue) {
    //         setErrorStyle(CIclasses.inputError)
    //     } else {
    //         setErrorStyle(CIclasses.input)
    //     }
    // }
    const error = maxValue <= startValue ? CIclasses.inputError : CIclasses.input
    const errorMessage = () => {
        console.log('max', maxValue)
        console.log('start', startValue)
        if (maxValue <= startValue + 1) {
            setInc('Incorrect value')
        } else {

        }
    }


    const changeSet = () => {
        setText(null)
        setInc(startValue)
        setSetDisabled(true)
        setIncDisabled(false)
        setResetDisabled(false)
    }

    const changeReset = () => {
        setInc(startValue)
    }

    const currentValueOfMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(+e.currentTarget.value)
        setSetDisabled(false)
        setIncDisabled(true)
        setResetDisabled(true)
        setMaxValue(+e.currentTarget.value)
        if (+e.currentTarget.value <= startValue) {
            setText('Incorrect value')
        }
        if (+e.currentTarget.value > startValue) {
            setText('Press key')
        }
        // setInc('Press set')
        // errorMessage()
    }
    const currentValueOfStartInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(+e.currentTarget.value)
        setSetDisabled(false)
        setIncDisabled(true)
        setResetDisabled(true)
        setStartValue(+e.currentTarget.value)
        setText('Press key')
        if (+e.currentTarget.value >= maxValue) {
            setText('Incorrect value')
        }
        if (+e.currentTarget.value < maxValue) {
            setText('Press key')
        }
        // setInc('Press set')
        // errorMessage()
    }

    const disabledInc = incDisabled
    const disabledReset = resetDisabled
    const disabledSet = startValue === 0 && maxValue === 5 || setDisabled

    return (
        <div>
            <div className={CIclasses.settingsInfoAndButtonBlock}>
                <div className={CIclasses.counterSettings}>
                    <div>
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
                        <input type='number'
                               value={maxValue}
                               onChange={currentValueOfMaxInput}
                        />
                        <input type='number'
                               value={startValue}
                               onChange={currentValueOfStartInput}
                        />
                    </div>
                </div>
                <div className={CIclasses.buttonBlock}>
                    <Button title={'set'}
                            callback={changeSet}
                            disabled={disabledSet}/>
                </div>
            </div>
            <div className="Counter">
                <Tablo inc={inc}
                       maxValue={maxValue}
                       text={text}
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
