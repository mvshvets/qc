import styles from './PageContent.module.scss'
import React from 'react'

export const PageContent = React.memo(({
    children
}) => (
    <section className={styles.wrapper}>
        {children}
    </section>
))
