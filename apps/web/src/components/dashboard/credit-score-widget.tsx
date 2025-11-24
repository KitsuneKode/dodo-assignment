'use client';

import { IconAward } from '@tabler/icons-react';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { WidgetHeader } from './widget-header';
import { Separator } from '@/components/ui/separator';

export function CreditScoreWidget() {
  const handleClick = () => {
    toast.info('Credit Score Details', {
      description: 'Your credit score is 710/850 - Excellent rating!',
    });
  };

  return (
    <Card className="border-border p-4">
      <div className="flex flex-col gap-3">
        <WidgetHeader
          icon={<IconAward className="size-6" />}
          title="Credit Score"
          action={{ label: 'Details', onClick: handleClick }}
        />
        <Separator />
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <p className="text-muted-foreground text-lg">
              Your{' '}
              <span className="font-medium text-foreground">credit score</span>{' '}
              is <span className="font-medium text-foreground">710</span>
            </p>
            <p className="mt-1 text-muted-foreground text-xs">
              This score is considered to be Excellent.
            </p>
          </div>
          <div className="text-2xl">😎</div>
        </div>

        <div className="flex h-6 items-end gap-[3px]">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className={`h-full flex-1 rounded-xs ${
                i < 40
                  ? 'bg-[var(--green-500)]'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
