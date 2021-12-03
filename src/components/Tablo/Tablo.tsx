import classes from './Tablo.module.css'

type PropsType = {
    inc: number
    maxValue: number
}

export function Tablo({inc, maxValue, ...props}: PropsType) {
    return (
        <div className={classes.tabloBlock}>
            <div className={inc === maxValue ? classes.maxCountStyle : classes.countStyle}>
                {inc}
            </div>
        </div>
    )
}