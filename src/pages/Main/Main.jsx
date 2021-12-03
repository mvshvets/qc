import styles from './Main.module.scss'
import {PageContent} from '../../shared/components'
import {Platform} from './Platform'
import {CONFIG} from './Main.consts'
import React from 'react'

export const Main = React.memo(() => {
    return (
        <PageContent>
            <div className={styles.platforms}>
            {CONFIG.map((el, i) => (
                <Platform {...el} key={i}/>
            ))}
                </div>
        </PageContent>
    )
})