import ChartBar from './ChartBar';
import './Chart.css';

function Chart({ dataPoints }) {
  return (
    <div className='chart'>
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
