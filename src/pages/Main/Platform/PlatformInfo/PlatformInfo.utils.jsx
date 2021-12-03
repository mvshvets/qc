import styles from './PlatformInfo.module.scss'
import Paragraph from 'antd/es/typography/Paragraph'

export const getText = (title, text, onChange) => (
    <div className={styles.block}>
        <div className={styles.title}>{title}</div>

        <div className={styles.text}>
            <Paragraph editable={{onChange}}>{text}</Paragraph>
        </div>
    </div>
)