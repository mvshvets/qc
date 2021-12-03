export const options = {
    scales: {
      y: {
        max: 100,
      }
    }
}

const labels = ['5:00', '5:05', '5:10', '5:15', '5:20', '5:25', '5:30']

export const data = {
    labels,
    datasets: [
        {
            label: 'Качество',
            data: labels.map(() => Math.floor(Math.random() * 100)),
            borderColor: '#5F307799',
            backgroundColor: '#5F307799',
            fill: true,
        }
    ],
}