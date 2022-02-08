import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

interface IRadarChart {
    stats: {
        base_stat: number
        stat: { name: string }
    }[]
}



const RadarChart: React.FC<IRadarChart> = ({ stats }) => {

    const data = {
        labels: stats.map(s => s.stat.name),
        datasets: [
            {
                label: '# of Votes',
                data: stats.map(s => s.base_stat),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 50
                    }
                },
            }
        }
    }

    return (
        <Radar data={data} options={options} />
    )
}

export default RadarChart