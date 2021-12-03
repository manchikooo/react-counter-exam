import classes from './Inc.module.css'

type PropsType = {
    inc: number
    setInc: (inc: number) => void
    changeInc: () => void
    maxValue: number
}

export function IncButton({inc, setInc, changeInc, maxValue, ...props}: PropsType) {

    const disabledInc = inc === maxValue

    return (
        <div className={classes.buttonsStyle}>
            <button onClick={changeInc}
                    disabled={disabledInc}
                    className={classes.buttonStyle}
            >
                inc
            </button>
        </div>
    )
}