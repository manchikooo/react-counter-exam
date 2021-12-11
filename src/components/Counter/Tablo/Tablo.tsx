import classes from './Tablo.module.css'

type PropsType = {
    inc: number | string
    startValue: number
    maxValue: number
    counterMessage: 'Press key' | 'Incorrect value' | null
}

export function Tablo(props: PropsType) {

    const changeClass2 = () => {
        if (props.inc === props.maxValue) {
            return classes.maxCountStyle
        } else if (props.counterMessage === 'Incorrect value' || props.startValue < 0) {
            return classes.incorrectMessageStyle
        } else return classes.countStyle
    }

    return (
        <div className={classes.tabloBlock}>
            <div className={changeClass2()}>
                {props.counterMessage ? props.counterMessage : props.inc}
            </div>
        </div>
    )
}