import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const chartData = [
  { name: 'March', closedWon: 65, closedLost: 68 },
  { name: 'April', closedWon: 25, closedLost: 45 },
  { name: 'May', closedWon: 62, closedLost: 98 },
  { name: 'June', closedWon: 85, closedLost: 12 },
  { name: 'July', closedWon: 92, closedLost: 48 },
  { name: 'August', closedWon: 32, closedLost: 95 },
];

const LeadTrackingChart: React.FC = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-lg font-medium">Leads tracking</CardTitle>
            <div className="flex items-baseline gap-4">
                <p className="text-3xl font-bold">680 <span className="text-sm font-normal text-muted-foreground">total closed</span></p>
                <p className="text-3xl font-bold">70 <span className="text-sm font-normal text-muted-foreground">total lost</span></p>
            </div>
          </div>
           <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            last 6 months
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip 
                 contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                  }} 
              />
              <Area type="monotone" dataKey="closedWon" stroke="#10B981" fillOpacity={1} fill="url(#colorWon)" strokeWidth={2} dot={{ r: 4, fill: '#10B981' }} activeDot={{ r: 6 }} name="Closed Won" />
              <Area type="monotone" dataKey="closedLost" stroke="#EF4444" fillOpacity={1} fill="url(#colorLost)" strokeWidth={2} dot={{ r: 4, fill: '#EF4444' }} activeDot={{ r: 6 }} name="Closed Lost"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-8 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-[#10B981]"></span>
                <span>Closed won</span>
            </div>
             <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-[#EF4444]"></span>
                <span>Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadTrackingChart;
