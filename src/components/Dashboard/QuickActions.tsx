import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText, Brain, ShoppingCart, Bell, TrendingUp } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      title: "Add Component",
      description: "Register new inventory item",
      icon: Plus,
      variant: "default" as const,
      onClick: () => console.log("Add component")
    },
    {
      title: "AI Forecast",
      description: "Generate demand prediction",
      icon: Brain,
      variant: "secondary" as const,
      onClick: () => console.log("AI forecast")
    },
    {
      title: "Create PO",
      description: "New purchase order",
      icon: ShoppingCart,
      variant: "outline" as const,
      onClick: () => console.log("Create purchase order")
    },
    {
      title: "Generate Report",
      description: "Export analytics data",
      icon: FileText,
      variant: "outline" as const,
      onClick: () => console.log("Generate report")
    }
  ];

  return (
    <Card className="chart-container">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              onClick={action.onClick}
              className="h-auto p-4 flex flex-col items-start gap-2 text-left"
            >
              <div className="flex items-center gap-2 w-full">
                <action.icon className="h-4 w-4" />
                <span className="font-medium text-sm">{action.title}</span>
              </div>
              <span className="text-xs opacity-75 font-normal">
                {action.description}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;