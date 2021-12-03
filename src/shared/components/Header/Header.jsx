import styles from './Header.module.scss'
import React, {useEffect, useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {ROUTE_NAMES} from '../../../routing/routeNames.consts'

export const Header = React.memo(() => {
    const [pageName, setPageName] = useState('')
    const location = useLocation()

    useEffect(() => {
        switch (location.pathname) {
            case ROUTE_NAMES.MAIN:
                setPageName('ПРИЕМКА')
                break
            case ROUTE_NAMES.DASHBOARD:
                setPageName('ОТЧЕТ')
                break
            default:
                setPageName('')
        }
    }, [location.pathname])
    return (
        <div className={styles.wrapper}>
            <div className={styles.line}>
                <NavLink to={ROUTE_NAMES.MAIN}>Приемка</NavLink>

                <NavLink to={ROUTE_NAMES.DASHBOARD}>Отчет</NavLink>
            </div>

            <div className={styles.title}>QUALITY CARGO</div>

            <div className={styles.subtitle}>{pageName}</div>
        </div>
    )
})