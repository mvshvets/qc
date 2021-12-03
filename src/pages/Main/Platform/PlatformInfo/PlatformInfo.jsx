import React, {useCallback, useState} from 'react'
import styles from './PlatformInfo.module.scss'
import {Modal} from 'antd'
import {TransportTypesNames} from '../../../../shared/consts'
import {getText} from './PlatformInfo.utils'
import {Line} from 'react-chartjs-2'
import {data, options} from './PlatformInfo.consts'

export const PlatformInfo = React.memo(({
                                            platformNumber,
                                            supplier,
                                            transportNumber,
                                            transportType,
                                            visible,
                                            setVisible
                                        }) => {
    const [textTransportNumber, setTextTransportNumber] = useState(transportNumber)
    const [textSupplier, setTextSupplier] = useState(supplier || 'Поставщик не определен')
    const [textGood, setTextGood] = useState('Щебенка')

    const handleExitModal = useCallback(() => {
        setVisible(false)
    }, [setVisible])

    return (
        <Modal visible={visible} onOk={handleExitModal} onCancel={handleExitModal} wrapClassName={styles.wrapper}
               title={`ПЛОЩАДКА ${platformNumber}`} footer={null} closable={false}>
            {getText(`${TransportTypesNames[transportType]} номер:`, textTransportNumber, setTextTransportNumber)}

            {getText('Поставщик', textSupplier, setTextSupplier)}

            {getText('Товар', textGood, setTextGood)}

            <div className={styles.title}>Примеси</div>

            <Line options={options} data={data} className={styles.chart}/>
        </Modal>
    )
})