import classes from './Tablo.module.css'

type PropsType = {
    inc: number
    maxValue: number
}

export function Tablo({inc, maxValue, ...props}: PropsType) {

    const changeClass = inc === maxValue ? classes.maxCountStyle : classes.countStyle

    return (
        <div className={classes.tabloBlock}>
            <div className={changeClass}>
                {inc}
            </div>
        </div>
    )
}