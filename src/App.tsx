import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./components/Counter/Tablo/Tablo";
import {Button} from "./components/Counter/Button/Button";
import classes from "./components/Counter/Buttons(не-нужны)/Buttons.module.css";
import {Input} from "./components/CounterSettings/Input";
import CIclasses from './components/CounterSettings/CounterSettings.module.css'

function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(10)


    // const changeNewStartValue = (value: number) => {
    //     startValue = value
    // }
    // const changeNewMaxValue = (value: number) => {
    //     maxValue = value
    // }

    // const changeDis = (currentTarget: number) => {
    // if
    // }

    const [inc, setInc] = useState(startValue)

    const changeInc = () => {
        if (inc < maxValue) {
            setInc(inc + 1) // inc = inc + 1
        }
    }

    const changeSet = () => {
        setInc(startValue)
    }

    const changeReset = () => {
        setInc(startValue)
    }

    const disabledInc = inc === maxValue
    const disabledReset = inc === startValue
    const disabledSet = startValue === 0 && maxValue === 10
    return (
        <div>
            <div className={CIclasses.settingsInfoAndButtonBlock}>
                <div className={CIclasses.counterSettings}>
                    <div>
                        <Input title={'max value'}
                            // changeNewValue={changeNewMaxValue}
                               newValue={maxValue}
                               setNewValue={setMaxValue}
                               // changeDis={changeDis}
                        />
                        <Input title={'start value'}
                            // changeNewValue={changeNewStartValue}
                               newValue={startValue}
                               setNewValue={setStartValue}
                               // changeDis={changeDis}
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
                       maxValue={maxValue}/>
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
