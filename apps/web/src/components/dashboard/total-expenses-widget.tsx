'use client';

import { IconArrowDownLeft } from '@tabler/icons-react';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';

export function TotalExpensesWidget() {
  const handleClick = () => {
    toast.info('Expense Breakdown', {
      description: 'Shopping: $2,800 | Utilities: $1,600 | Others: $1,840.28',
    });
  };

  return (
    <Card className="border-border p-4">
      <div className="flex flex-col gap-2">
        {/* Icon and Chart */}
        <div className="flex items-start justify-between">
          <div className="flex size-10 items-center justify-center rounded-full border border-border bg-background shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
            <IconArrowDownLeft className="size-6 text-[var(--blue-500,#3861FB)]" />
          </div>

          <div
            className="pointer-events-none static
           h-12 right-6 w-32 "
          >
            {' '}
            <svg
              width="140"
              height="64"
              viewBox="0 0 140 64"
              fill="none"
              className="size-full"
            >
              <defs>
                <linearGradient
                  id="totalExpensesGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#A9BFFF" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#E0E7FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M4 48 C 18 18 34 40 50 28 S 86 18 102 34 S 128 22 136 30"
                stroke="#3861FB"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 48 C 18 18 34 40 50 28 S 86 18 102 34 S 128 22 136 30 L136 64 L4 64 Z"
                fill="url(#totalExpensesGradient)"
                opacity="0.5"
              />
              <circle
                cx="136"
                cy="30"
                r="4"
                fill="#3861FB"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground text-sm tracking-[-0.084px]">
            Total Expenses
          </p>
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex w-full max-w-[260px] items-center gap-3 rounded-[14px] border border-border/70 bg-background/80 px-5 py-3 text-left shadow-[inset_0_1px_1px_rgba(15,23,42,0.08)] transition-colors hover:border-foreground/40 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          >
            <span className="font-['Inter'] font-medium text-[32px] text-foreground leading-10 tracking-[-0.16px]">
              $6,240.28
            </span>
            <span className="rounded-full bg-[var(--state-error-light,#FFE0E3)] px-3 py-0.5 text-xs font-semibold text-[var(--state-error-dark,#681219)]">
              -2%
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
}
