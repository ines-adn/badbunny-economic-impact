import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

function formatCompact(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

interface Props {
  data: Record<string, string | number>[];
  dataKey: string;
  nameKey: string;
  color?: string;
  height?: number;
  layout?: 'horizontal' | 'vertical';
}

export function BarChart({ data, dataKey, nameKey, color = '#FF6B35', height = 300, layout = 'vertical' }: Props) {
  const tooltipStyle = {
    backgroundColor: '#fff',
    border: '1px solid #E9ECEF',
    borderRadius: '8px',
    color: '#2C3E50',
    fontSize: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  };

  if (layout === 'horizontal') {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11, fill: '#7F8C8D' }} tickFormatter={formatCompact} />
          <YAxis dataKey={nameKey} type="category" tick={{ fontSize: 11, fill: '#7F8C8D' }} width={200} />
          <Tooltip contentStyle={tooltipStyle} formatter={(val: number) => [val.toLocaleString(), dataKey]} />
          <Bar dataKey={dataKey} fill={color} radius={[0, 6, 6, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" />
        <XAxis dataKey={nameKey} tick={{ fontSize: 10, fill: '#7F8C8D' }} interval={0} angle={-30} textAnchor="end" height={60} />
        <YAxis tick={{ fontSize: 11, fill: '#7F8C8D' }} tickFormatter={formatCompact} />
        <Tooltip contentStyle={tooltipStyle} formatter={(val: number) => [val.toLocaleString(), dataKey]} />
        <Bar dataKey={dataKey} fill={color} radius={[6, 6, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
