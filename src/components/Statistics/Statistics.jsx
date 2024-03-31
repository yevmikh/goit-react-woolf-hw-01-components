import moduleCss from './statistics.module.css';
import { getRandomColor } from './statistiks';

const Statistics = ({ title, stats }) => {
  return (
    <section className={moduleCss.statistics}>
      {title && <h2 className={moduleCss.title}>{title}</h2>}
      <ul className={moduleCss.statList}>
        {stats.map(item => (
          <li
            className={moduleCss.item}
            key={item.label}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={moduleCss.label}>{item.label}</span>
            <span className={moduleCss.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
