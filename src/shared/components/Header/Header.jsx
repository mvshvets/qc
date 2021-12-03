import styles from './Header.module.scss'
import React from 'react'

export const Header = React.memo(() => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.line}/>

            <div className={styles.title}>QUALITY CARGO</div>

            <div className={styles.subtitle}>ПРИЁМКА</div>
        </div>
    )
})