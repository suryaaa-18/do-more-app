import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Mon', completed: 12, pending: 4 },
  { name: 'Tue', completed: 8, pending: 6 },
  { name: 'Wed', completed: 15, pending: 3 },
  { name: 'Thu', completed: 10, pending: 5 },
  { name: 'Fri', completed: 18, pending: 2 },
  { name: 'Sat', completed: 6, pending: 1 },
  { name: 'Sun', completed: 4, pending: 2 },
];

export function TaskChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="name" 
            className="text-muted-foreground text-xs"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            className="text-muted-foreground text-xs"
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px'
            }}
          />
          <Legend />
          <Bar 
            dataKey="completed" 
            fill="hsl(var(--primary))" 
            name="Completed"
            radius={[2, 2, 0, 0]}
          />
          <Bar 
            dataKey="pending" 
            fill="hsl(var(--muted-foreground))" 
            name="Pending"
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}