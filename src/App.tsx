import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Buttons} from "./components/Buttons/Buttons";
import {Tablo} from "./components/Tablo/Tablo";
import {ResetButton} from "./components/BtnReset/Reset";
import {IncButton} from "./components/BtnInc/Inc";
import classes from "./components/Buttons/Buttons.module.css";

function App() {

    const startValue = 0
    const maxValue = 5

    let [inc, setInc] = useState(startValue)

    const changeInc = () => {
        if (inc < maxValue) {
            setInc(inc + 1)
        } else if (inc > maxValue) {
            setInc(inc)
        }
    }

    const changeReset = () => {
        setInc(0)
    }

    return (
        <div className="App">
            <Tablo inc={inc} maxValue={maxValue}/>
            {/*<Buttons inc={inc} setInc={setInc}/>*/}
            <div className={classes.buttonsStyle}>
                <IncButton inc={inc} setInc={setInc} changeInc={changeInc} maxValue={maxValue}/>
                <ResetButton inc={inc} setInc={setInc} changeReset={changeReset} startValue={startValue}/>
            </div>
        </div>
    );
}

export default App;
