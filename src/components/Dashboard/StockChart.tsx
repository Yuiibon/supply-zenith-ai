import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp } from "lucide-react";

const StockChart = () => {
  // Mock data for demonstration
  const stockData = [
    { name: "Resistors", current: 1250, optimal: 1500, status: "warning" },
    { name: "Capacitors", current: 890, optimal: 1000, status: "healthy" },
    { name: "Diodes", current: 340, optimal: 800, status: "critical" },
    { name: "ICs", current: 720, optimal: 600, status: "healthy" },
    { name: "Transistors", current: 450, optimal: 500, status: "healthy" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-success';
      case 'warning':
        return 'bg-warning';
      case 'critical':
        return 'bg-destructive';
      default:
        return 'bg-muted';
    }
  };

  const getPercentage = (current: number, optimal: number) => {
    return Math.round((current / optimal) * 100);
  };

  return (
    <Card className="chart-container">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Stock Levels Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stockData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`} />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">
                    {item.current} / {item.optimal}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {getPercentage(item.current, item.optimal)}%
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${getStatusColor(item.status)}`}
                  style={{ width: `${Math.min(getPercentage(item.current, item.optimal), 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 p-4 bg-accent/50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">AI Insights</span>
          </div>
          <p className="text-sm text-muted-foreground">
            3 components need attention. Diodes are critically low and require immediate restock. 
            AI predicts 15% demand increase for resistors next week.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockChart;