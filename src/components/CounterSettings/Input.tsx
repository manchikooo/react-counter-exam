import React, {Dispatch, SetStateAction} from 'react';
import CIclasses from './CounterSettings.module.css'

type PropsType = {
    title: string
    newValue: number
    setNewValue: (valueAsNumber: number) => void
    // changeInputStyle: () => void
    errorValue: string
    setSetDisabled: Dispatch<SetStateAction<boolean>>
    setIncDisabled: Dispatch<SetStateAction<boolean>>
    setResetDisabled: Dispatch<SetStateAction<boolean>>
    setIncValue: Dispatch<SetStateAction<number | string>>
    errorMessage: () => void
    // changeNewValue: (value: number) => void
}

export function Input(props: PropsType) {
    const currentValueOfInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(+e.currentTarget.value)
        props.setSetDisabled(false)
        props.setIncDisabled(true)
        props.setResetDisabled(true)
        props.setNewValue(+e.currentTarget.value)
        props.setIncValue('Press set')
        props.errorMessage()
    }
    // const changeNewValue = (e: React.ChangeEvent<HTMLInputElement>)=>e.currentTarget.value

    return (
        <div className={CIclasses.inputBlock}>
            {props.title} <span><input type='number'
                                       className={props.errorValue}
                                       onChange={currentValueOfInput}
                                       value={props.newValue}
        /></span>
        </div>
    );
};
