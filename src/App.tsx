import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import {Buttons} from "./components/Buttons/Buttons";
import {Tablo} from "./components/Tablo/Tablo";
import {ResetButton} from "./components/BtnReset/Reset";
import {Button} from "./components/BtnInc/Inc";
import classes from "./components/Buttons/Buttons.module.css";

function App() {

    const startValue = 0
    const maxValue = 5

    const [inc, setInc] = useState(startValue)

    const changeInc = () => {
        if (inc < maxValue) {
            setInc(inc + 1) // inc = inc + 1
        }
    }

    const changeReset = () => {
        setInc(0)
    }

    const disabledInc = inc === maxValue
    const disabledReset = inc === startValue
    return (
        <div className="App">
            <Tablo inc={inc}
                   maxValue={maxValue}/>
            {/*<Buttons inc={inc} setInc={setInc}/>*/}
            <div className={classes.buttonsStyle}>
                <Button title={'inc'}
                        callback={changeInc}
                        disabled={disabledInc}
                />
                <Button title={'reset'}
                        callback={changeReset}
                        disabled={disabledReset}
                />
                {/*<ResetButton inc={inc}*/}
                {/*             changeReset={changeReset}*/}
                {/*             startValue={startValue}/>*/}
            </div>
        </div>
    );
}

export default App;
