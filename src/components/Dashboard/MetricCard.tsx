import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  description?: string;
  trend?: 'up' | 'down' | 'stable';
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon: Icon, 
  description,
  trend = 'stable'
}: MetricCardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-success';
      case 'negative':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return '↗';
      case 'down':
        return '↘';
      default:
        return '→';
    }
  };

  return (
    <Card className={`metric-card ${changeType === 'positive' ? 'metric-card-positive' : changeType === 'negative' ? 'metric-card-negative' : changeType === 'neutral' ? 'metric-card-warning' : ''}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-foreground">{value}</p>
              {change && (
                <div className={`flex items-center gap-1 text-sm ${getChangeColor()}`}>
                  <span>{getTrendIcon()}</span>
                  <span>{change}</span>
                </div>
              )}
            </div>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          <div className={`p-3 rounded-xl ${
            changeType === 'positive' 
              ? 'bg-success-soft text-success' 
              : changeType === 'negative' 
              ? 'bg-destructive-soft text-destructive'
              : 'bg-primary-soft text-primary'
          }`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;