import {TransportTypes} from '../../shared/consts'
import van1 from '../../shared/img/van1.jpg'
import car1 from '../../shared/img/car1.jpg'
import car2 from '../../shared/img/car2.jpg'

export const PIE_CONFIG = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
        {
            label: 'Price in USD',
            data: [23, 34, 6, 22, 66],
            backgroundColor: [
                '#ffbb11',
                '#ecf0f1',
                '#50AF95',
                '#f3ba2f',
                '#2a71d0'
            ]
        }
    ]
}

export const CONFIG = [{
    platformNumber: 1,
    supplier: 'ООО "Гречка"',
    transportType: TransportTypes.VAN,
    transportNumber: '512254xx',
    photo: van1,
    transportError: true
}, {
    platformNumber: 2,
    supplier: 'ИП “Щебёночка”',
    transportType: TransportTypes.CAR,
    transportNumber: 'к444ма29rus',
    photo: car1,
    transportError: false
}, {
    platformNumber: 3,
    supplier: undefined,
    transportType: TransportTypes.CAR,
    transportNumber: 'в777мм35rus',
    photo: car2,
    transportError: false
},]