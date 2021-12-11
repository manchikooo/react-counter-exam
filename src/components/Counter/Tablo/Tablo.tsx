import classes from './Tablo.module.css'

type PropsType = {
    inc: number | string
    maxValue: number
    text: 'Press key' | 'Incorrect value' | null
}

export function Tablo({inc, maxValue, ...props}: PropsType) {

    const changeClass = inc === maxValue ? classes.maxCountStyle : classes.countStyle
    console.log('tablo ', inc, maxValue)
    return (
        <div className={classes.tabloBlock}>
            <div className={changeClass}>
                {props.text ? props.text : inc}
            </div>
        </div>
    )
}