import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip, Filler, BarElement, Legend
} from 'chart.js'
import {Footer, Header} from './shared/components'
import React from 'react'
import {Routing} from './routing/Routing'
import {BrowserRouter} from 'react-router-dom'

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    BarElement,
    Legend,
)

export const App = React.memo(() => {
    return (
        <BrowserRouter>
            <Header/>

            <Routing/>

            <Footer/>
        </BrowserRouter>
    )
})
