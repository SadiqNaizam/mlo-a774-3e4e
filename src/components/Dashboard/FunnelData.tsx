import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won';
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-indigo-900' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const totalCount = funnelData.reduce((sum, item) => sum + item.count, 0);

const FunnelData: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <Tabs defaultValue="leads" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
          <TabsContent value="leads" className="mt-4">
            <div className="flex items-center justify-between">
                <p className="text-lg font-medium">Funnel count</p>
            </div>
          </TabsContent>
          <TabsContent value="sales" className="mt-4">
             <div className="flex items-center justify-between">
                <p className="text-lg font-medium">Sales Funnel</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
      <CardContent>
        <p className="text-5xl font-bold">600 <span className="text-base font-normal text-muted-foreground">active leads</span></p>
        <div className="mt-4 flex h-2 w-full overflow-hidden rounded-full bg-gray-200">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={stage.color}
              style={{ width: `${(stage.count / totalCount) * 100}%` }}
            />
          ))}
        </div>
        <TooltipProvider>
          <div className="mt-6 space-y-4">
            {funnelData.map((stage) => (
              <div key={stage.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-sm ${stage.color}`}></span>
                  <span>{stage.name}</span>
                </div>
                <span className="font-medium text-muted-foreground justify-self-end">${stage.value}</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="font-medium text-muted-foreground justify-self-end w-16 text-right cursor-pointer">{stage.duration}</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>average time on this stage</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};

export default FunnelData;
