import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTE_NAMES } from './routeNames.consts'
import {Main, Dashboard} from '../pages'

export const Routing = React.memo(() => {

    return (
        <Routes>
            {/* Рабочее место оператора */}
            <Route path={ROUTE_NAMES.MAIN} element={<Main/>}/>

            {/*Дашборд с отчетами */}
            <Route path={ROUTE_NAMES.DASHBOARD} element={<Dashboard/>}/>
        </Routes>
    )
})
