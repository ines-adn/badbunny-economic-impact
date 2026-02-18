import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import type { ChartEvent } from '../../events';

interface SeriesConfig {
  dataKey: string;
  color: string;
  name?: string;
}

interface Props {
  data: Record<string, string | number>[];
  series: SeriesConfig[];
  height?: number;
  events?: ChartEvent[];
  yLabel?: string;
}

function formatCompact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

export function TimeSeriesChart({ data, series, height = 320, events = [], yLabel }: Props) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 11, fill: '#7F8C8D' }}
          tickFormatter={(d: string) => {
            const date = new Date(d + 'T00:00:00');
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          }}
          interval="preserveStartEnd"
          minTickGap={40}
        />
        <YAxis
          tick={{ fontSize: 11, fill: '#7F8C8D' }}
          width={55}
          tickFormatter={formatCompact}
          label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: '#7F8C8D' } } : undefined}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #E9ECEF',
            borderRadius: '8px',
            color: '#2C3E50',
            fontSize: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          }}
          labelFormatter={(d: string) =>
            new Date(d + 'T00:00:00').toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })
          }
          formatter={(val: number, name: string) => [formatCompact(val), name]}
        />

        {events.map((evt, i) => (
          <ReferenceLine
            key={i}
            x={evt.date}
            stroke={evt.color || '#FF6B35'}
            strokeDasharray="6 4"
            strokeWidth={2}
            label={{
              value: evt.label,
              position: 'top',
              fill: evt.color || '#FF6B35',
              fontSize: 10,
              fontWeight: 700,
            }}
          />
        ))}

        {series.map(s => (
          <Line
            key={s.dataKey}
            type="monotone"
            dataKey={s.dataKey}
            stroke={s.color}
            name={s.name || s.dataKey}
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, strokeWidth: 2, fill: '#fff' }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
