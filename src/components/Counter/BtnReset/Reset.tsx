import classes from './Reset.module.css'

type PropsType = {
    inc: number
    changeReset: () => void
    startValue: number
}

export function ResetButton({inc, changeReset, startValue, ...props}: PropsType) {

    const disabledReset = inc === startValue

    return (
        <button onClick={changeReset}
                disabled={disabledReset}
                className={classes.buttonStyle}>
            reset
        </button>
    )
}