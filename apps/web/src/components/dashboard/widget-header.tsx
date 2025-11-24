import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface WidgetHeaderProps {
  icon: ReactNode;
  title: string;
  action?: {
    label: string;
    onClick?: (e?: React.MouseEvent) => void;
  };
}

export function WidgetHeader({ icon, title, action }: WidgetHeaderProps) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <h2 className="flex-1 font-medium text-lg text-foreground tracking-[-0.176px]">
        {title}
      </h2>
      {action && (
        <Button
          variant="outline"
          size="sm"
          onClick={action.onClick}
          className="active-press text-muted-foreground text-md transition-smooth hover:bg-transparent hover:text-foreground"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}
