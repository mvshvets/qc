import styles from './Footer.module.scss'
import {LINKS} from './Footer.consts'
import React from 'react'

export const Footer = React.memo(() => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.label}>QUALITY CARGO</div>

            <div className={styles.links}>
                {LINKS.map((el, i) => (
                    <div key={i}>{el.title}</div>
                ))}
            </div>
        </div>
    )
})