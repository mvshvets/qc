import styles from './Platform.module.scss'
import React, {useEffect, useState} from 'react'
import {getStyles} from './Platform.utils'
import {EditOutlined} from '@ant-design/icons'
import {TransportTypesNames} from '../../../shared/consts'
import {Button} from 'antd'
import {PlatformInfo} from './PlatformInfo'

export const Platform = React.memo(({platformNumber, supplier, transportNumber, transportType, photo, transportError}) => {
    const [impuritiesPercentage, setImpuritiesPercentage] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setImpuritiesPercentage(Math.floor(Math.random() * 100))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{`ПЛОЩАДКА ${platformNumber}`}</h2>

            <div className={styles.supplier} style={{background: supplier ? '#C4C4C4' : '#EC645B'}}>
                {supplier ? `Поставщик ${supplier}` : 'Поставщик неопределен'}

                <Button icon={<EditOutlined/>} onClick={() => setVisible(true)}/>
            </div>

            <div className={styles.transport} style={{background: transportError ? '#EC645B' : '#F5F5F5'}}>
                {`${TransportTypesNames[transportType]} ${transportNumber}`}
            </div>

            <div className={styles.impurities}>
                <div>{`Процент примесей: ${impuritiesPercentage}%`}</div>

                <div>
                    <div style={getStyles(impuritiesPercentage)}/>
                </div>
            </div>

            <div className={styles.video}>
                <iframe
                    width="560"
                    height="315"
                    title="Разгрузка"
                    src="https://lideo.tv/embed/3854"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>

            <img src={photo} alt={platformNumber} className={styles.photo}/>

            <PlatformInfo
                visible={visible}
                setVisible={setVisible}
                platformNumber={platformNumber}
                supplier={supplier}
                transportNumber={transportNumber}
                transportType={transportType}
            />
        </div>
    )
})