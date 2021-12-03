import classes from './Buttons.module.css'

type PropsType = {
    inc: number
    setInc: (inc: number) => void
}

export function Buttons(props: PropsType) {

    const disabledInc = props.inc === 5
    const disabledReset = props.inc === 0

    const changeInc = () => {
        if (props.inc < 5) {
            props.setInc(props.inc + 1)
        } else if (props.inc > 5) {
            props.setInc(props.inc)
        }
    }
    const changeReset = () => {
        props.setInc(0)
    }

    return (
        <div className={classes.buttonsStyle}>
            <button onClick={changeInc}
                    disabled={disabledInc}
                    className={classes.buttonStyle}
            >
                inc
            </button>
            <button onClick={changeReset}
                    disabled={disabledReset}
                    className={classes.buttonStyle}>
                reset
            </button>
        </div>
    )
}