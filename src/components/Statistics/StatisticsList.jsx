import s from './Statistics.module.css';
import StatisticsItem from './StatisticsItem';

function StatisticsList({ data }) {
  return (
    <>
      <ul className={s.statList}>
        {data.map((item, idx) => {
          return (
            <li
              className={s.statItem}
              key={item.id}
              style={{ backgroundColor: `${getColor(idx)}` }}
            >
              <StatisticsItem label={item.label} percentage={item.percentage} />
            </li>
          );
        })}
      </ul>
      <div
        className={s.pieChart}
        style={{
          background: `conic-gradient(${getGradient({ data })})`,
        }}
      ></div>
    </>
  );
}

function getColor(idx) {
  const colors = [
    '#2eafdf',
    '#f055d6',
    '#3fdf1f',
    '#a1064e',
    '#eefa41',
    '#530680',
  ];

  return colors[idx];
}

function getGradient({ data }) {
  const array = [];
  data.reduce((acc, el, idx) => {
    const color = getColor(idx);
    const topNumber = Number.parseInt(el.percentage * 3.6);
    array.push(`${color} ${acc}deg ${topNumber + acc}deg`);
    acc += topNumber;

    return acc;
  }, 0);

  return array;
}

export default StatisticsList;
