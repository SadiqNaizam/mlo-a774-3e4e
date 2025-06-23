import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  dealSize: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 50, percentage: 50, dealSize: 3000, color: '#EF4444' },
  { name: 'Behance', value: 40, percentage: 40, dealSize: 1000, color: '#F59E0B' },
  { name: 'Instagram', value: 10, percentage: 10, dealSize: 1000, color: '#10B981' },
  { name: 'Dribbble', value: 10, percentage: 10, dealSize: 1000, color: '#3B82F6' },
];

const StatsOverview: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Sources</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          last 6 months
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                  }}
                />
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={60} paddingAngle={2}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-3">
            {data.map((source) => (
              <div key={source.name} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: source.color }} />
                  <span className="text-muted-foreground">{source.name}</span>
                </div>
                <div className="flex gap-4">
                    <span className="font-semibold">${source.dealSize.toLocaleString()}</span>
                    <span className="text-muted-foreground w-10 text-right">{source.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
       <CardFooter className='flex justify-end'>
        <Badge variant="secondary">from leads total</Badge>
      </CardFooter>
    </Card>
  );
};

export default StatsOverview;
