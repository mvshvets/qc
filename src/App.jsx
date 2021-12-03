import {Main} from './pages'
import {Chart, ArcElement} from 'chart.js'
import {Footer, Header} from './shared/components'
import React from 'react'

Chart.register(ArcElement)

export const App = React.memo(() => {
    return (
        <>
            <Header/>

            <Main/>

            <Footer/>
        </>
    )
})
