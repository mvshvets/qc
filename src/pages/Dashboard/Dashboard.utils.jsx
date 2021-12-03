import styles from './Dashboard.module.scss'
import {supplierData, supplierOptions} from './Dashboard.consts'
import {Bar} from 'react-chartjs-2'
import {Space} from 'antd'

export const getSupplier = (supplier, description) => (
    <div className={styles.supplier}>
        <h2>{supplier}</h2>

        <div>{description}</div>

        <Space className={styles.container}>
            <Bar
                option={supplierOptions}
                data={supplierData()}
            />
        </Space>
    </div>
)