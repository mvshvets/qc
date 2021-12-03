export const options = {
    responsive: true,
    legend: {
        display: false
    },
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
            data: labels.map(() => Math.floor(Math.random() * 100)),
            borderColor: '#5F307799',
            backgroundColor: '#5F307799',
            fill: true,
        }
    ],
}