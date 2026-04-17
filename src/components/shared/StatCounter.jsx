import { useCountUp } from '../../hooks/useCountUp';

export default function StatCounter({ icon: Icon, endValue, suffix = '', label }) {
  const { ref, count } = useCountUp(endValue, 2000);

  return (
    <div ref={ref} className="text-center px-2 py-3 md:px-3 md:py-4 flex-1 min-w-0">
      {Icon && <Icon className="text-2xl md:text-3xl text-accent-400 mx-auto mb-2" />}
      <div className="text-2xl md:text-3xl font-bold text-white font-body">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm text-white/70 mt-1 font-body whitespace-nowrap">{label}</div>
    </div>
  );
}
