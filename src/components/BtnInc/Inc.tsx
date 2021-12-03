import classes from './Inc.module.css'

type PropsType = {
    title: string
    callback: () => void
    disabled: boolean
}

export function Button({title, callback, disabled, ...props}: PropsType) {

    return (
        <div className={classes.buttonsStyle}>
            <button onClick={callback}
                    disabled={disabled}
                    className={classes.buttonStyle}>
                {title}
            </button>
        </div>
    )
}