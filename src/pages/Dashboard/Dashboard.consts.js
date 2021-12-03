export const options = {
    plugins: {
        title: {
            display: true,
            text: 'Статистика по видам товара',
        },
        scales: {
            y: {
                max: 100,
            }
        }
    },
}

const labels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль']

export const data = {
    labels,
    datasets: [
        {
            label: 'Горох',
            data: labels.map(() => Math.floor(Math.random() * 100)),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Рис',
            data: labels.map(() => Math.floor(Math.random() * 100)),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Пшено',
            data: labels.map(() => Math.floor(Math.random() * 100)),
            backgroundColor: 'rgba(65,235,53,0.5)',
        },
    ],
}

export const supplierOptions = {
    plugins: {
        legend: {
            display: false
        },
        scales: {
            y: {
                max: 100,
            }
        }
    },
}

export const supplierData = () => ({
    labels,
    datasets: [
        {
            label: 'Качество',
            data: labels.map(() => Math.floor(Math.random() * 100)),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
})