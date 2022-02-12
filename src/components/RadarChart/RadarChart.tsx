import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { powerTheme } from '../../utils/powerTheme';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Legend
)



interface IRadarChart {
    stats: {
        base_stat: number
        stat: { name: string }
    }[]
}


const RadarChart: React.FC<IRadarChart> = ({ stats }) => {

    const plugin = [{
        tooltip: { enable: false }
    }];


    const data = {
        labels: stats.map(s => s.stat.name.charAt(0).toUpperCase() + s.stat.name.substr(1)),
        datasets: [
            {
                data: stats.map(s => s.base_stat),
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgb(54, 162, 235)',
            },
        ],
    };

    const options = {

        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point: {
                radius: 3
            }
        },
        scales: {
            r: {
                pointLabels: {
                    padding: 30,
                    color: '#ffff',
                    font: {
                        size: 18,
                        family: 'Roboto',
                        weight: 'bold'
                    },
                    callback(label: string, index: number) {
                        return `${label} ${stats[index].base_stat}`
                    },
                },
                grid: {
                    color: [
                        '#a1a1a1',
                        '#a1a1a1',
                        '#a1a1a1',
                        '#a1a1a1',
                        '#a1a1a1',
                        '#a1a1a1'
                    ],
                    lineWidth: 35,
                },
                max: 120,
                min: 0,
                ticks: {
                    display: false,
                },
                angleLines: {
                    color: '#bdbdbd',
                    lineWidth: 3
                },
            }
        }

    }



    return (
        <Radar data={data} options={options} style={{ width: '500px' }} />
    )
}

export default RadarChart