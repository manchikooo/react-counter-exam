import React from 'react';
import CIclasses from './CounterSettings.module.css'

type PropsType = {
    title: string
    newValue: number
    setNewValue: (valueAsNumber: number) => void
    // changeDis: (currentTarget: number) => void
    // changeNewValue: (value: number) => void
}

export function Input(props: PropsType) {

    const currentValueOfInput = (e: React.ChangeEvent<HTMLInputElement>) => props.setNewValue(+e.currentTarget.value)
    // const callback = (e: React.ChangeEvent<HTMLInputElement>) => props.changeDis(+e.currentTarget.value)
    // const changeNewValue = (e: React.ChangeEvent<HTMLInputElement>)=>e.currentTarget.value

    return (
        <div className={CIclasses.inputBlock}>
            {props.title} <span><input type='number'
                                       className={CIclasses.input}
                                       onChange={currentValueOfInput}
                                       value={props.newValue}
        /></span>
        </div>
    );
};
