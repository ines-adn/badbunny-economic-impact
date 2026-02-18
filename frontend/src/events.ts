export interface ChartEvent {
  date: string;
  label: string;
  color?: string;
}

export const SUPER_BOWL_EVENT: ChartEvent = {
  date: '2026-02-08',
  label: 'Super Bowl LX',
  color: '#FF6B35',
};

export const CULTURAL_EVENTS: ChartEvent[] = [
  SUPER_BOWL_EVENT,
  { date: '2025-01-05', label: 'DTMF Release', color: '#004E89' },
];
