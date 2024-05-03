import s from './Statistics.module.css';
import StatisticsItem from './StatisticsItem';

function StatisticsList({ data }) {
  return (
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

export default StatisticsList;
