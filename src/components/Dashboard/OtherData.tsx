import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

interface OtherStat {
    value: string;
    label: string;
    tooltip?: string;
}

const otherData: OtherStat[] = [
    { value: '900', label: 'total leads count' },
    { value: '12', label: 'days in average to convert lead' },
    { value: '30', label: 'inactive leads', tooltip: 'Leads that have not been contacted in the last 30 days.' },
];

const OtherData: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Other data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-center">
            <TooltipProvider>
                {otherData.map((stat, index) => (
                    <div key={index}>
                        <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                        <div className="text-sm text-muted-foreground mt-1 flex items-center justify-center gap-1">
                            <span>{stat.label}</span>
                            {stat.tooltip && (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <HelpCircle className="h-4 w-4 cursor-pointer"/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{stat.tooltip}</p>
                                    </TooltipContent>
                                </Tooltip>
                            )}
                        </div>
                    </div>
                ))}
            </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export default OtherData;
