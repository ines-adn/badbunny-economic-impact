interface Props {
  label: string;
  value: string | number;
  delta?: string;
  deltaColor?: 'green' | 'red' | 'neutral';
  color?: string;
  icon?: string;
}

export function StatCard({ label, value, delta, deltaColor = 'neutral', color = '#FF6B35' }: Props) {
  const deltaColorMap = {
    green: 'text-[#2A9D8F]',
    red: 'text-red-500',
    neutral: 'text-[#7F8C8D]',
  };

  return (
    <div
      className="metric-card border"
      style={{ borderColor: `${color}20`, backgroundColor: `${color}08` }}
    >
      <span className="text-xs font-bold uppercase tracking-wider text-[#7F8C8D]">
        {label}
      </span>
      <span className="text-2xl md:text-3xl font-extrabold" style={{ color }}>
        {typeof value === 'number' ? value.toLocaleString() : value}
      </span>
      {delta && (
        <span className={`text-sm font-medium ${deltaColorMap[deltaColor]}`}>{delta}</span>
      )}
    </div>
  );
}
