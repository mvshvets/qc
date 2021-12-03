import styles from './Dashboard.module.scss'
import React from 'react'
import {PageContent} from '../../shared/components'
import {Bar} from 'react-chartjs-2'
import {data, options} from './Dashboard.consts'
import {Col, Row} from 'antd'
import {getSupplier} from './Dashboard.utils'

export const Dashboard = React.memo(() => {
    return (
        <PageContent>
            <Row gutter={50} align="middle">
                <Col xs={18}>
                    <Bar
                        option={options}
                        data={data}
                        className={styles.common}
                    />
                </Col>

                <Col xs={6} className={styles.top}>
                    <h1>Поставщики</h1>

                    <h2>Топ-3 по браку</h2>

                    <ol>
                        <li>ООО "Греча"</li>
                        <li>Сыпучие товары</li>
                        <li>ИП Тарас Бульба</li>
                    </ol>

                    <h2>Топ-3 по качеству</h2>

                    <ol>
                        <li>ООО "Рис"</li>
                        <li>ИП Владимир Путников</li>
                        <li>ООО "Морозные качели"</li>
                    </ol>
                </Col>
            </Row>

            {getSupplier('ООО "Греча"', 'Крупа гречневая 1 сорт и Высший сорт в мешках по 50кг. Соответствует ГОСТу Р 55290-2012. Документы. Доставка по России. +79608456789')}

            {getSupplier('Сыпучие товары', 'Крупа гречневая 1 сорт и Высший сорт в мешках по 50кг. Соответствует ГОСТу Р 55290-2012. Документы. Доставка по России. +79608456789')}

            {getSupplier('ИП Тарас Бульба', 'Крупа гречневая 1 сорт и Высший сорт в мешках по 50кг. Соответствует ГОСТу Р 55290-2012. Документы. Доставка по России. +79608456789')}

            {getSupplier('ООО "Морозные качели"', 'Крупа гречневая 1 сорт и Высший сорт в мешках по 50кг. Соответствует ГОСТу Р 55290-2012. Документы. Доставка по России. +79608456789')}
        </PageContent>
    )
})