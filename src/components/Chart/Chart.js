import ChartBar from './ChartBar';
import './Chart.css';

function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {dataPoints.map(dataPoint => (
        <ChartBar key={dataPoint.label} maxValue={totalMaximum} {...dataPoint} />
      ))}
    </div>
  );
}

export default Chart;
