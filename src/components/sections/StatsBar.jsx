import StatCounter from '../shared/StatCounter';
import { stats } from '../../data/stats';

export default function StatsBar() {
  return (
    <section className="bg-primary-800 py-8 md:py-12">
      <div className="w-full px-2 md:px-6">
        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              icon={stat.icon}
              endValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
