import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText, Brain, ShoppingCart, Bell, TrendingUp } from "lucide-react";
import { useState } from "react";
import AddComponentModal from "@/components/AddComponentModal";
import { toast } from "sonner";

const QuickActions = () => {
  const [isAddComponentOpen, setIsAddComponentOpen] = useState(false);

  const handleCreatePO = () => {
    toast.success("Purchase Order #PO-2024-" + Math.floor(Math.random() * 1000) + " created successfully!");
  };

  const handleGenerateReport = () => {
    // Create a CSV report
    const reportData = [
      ['Component', 'Stock Level', 'Status', 'Last Updated'],
      ['Resistors 100Ω', '1200', 'In Stock', new Date().toLocaleDateString()],
      ['Capacitors 10μF', '800', 'Low Stock', new Date().toLocaleDateString()],
      ['Diodes 1N4007', '450', 'Critical', new Date().toLocaleDateString()],
      ['ICs ATmega328P', '320', 'In Stock', new Date().toLocaleDateString()]
    ];

    const csvContent = reportData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'inventory-report.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Inventory report generated and downloaded!");
  };

  const handleAIForecast = () => {
    toast.success("AI forecast analysis completed! Check the Forecasting page for details.");
  };

  const actions = [
    {
      title: "Add Component",
      description: "Register new inventory item",
      icon: Plus,
      variant: "default" as const,
      onClick: () => setIsAddComponentOpen(true)
    },
    {
      title: "AI Forecast",
      description: "Generate demand prediction",
      icon: Brain,
      variant: "secondary" as const,
      onClick: handleAIForecast
    },
    {
      title: "Create PO",
      description: "New purchase order",
      icon: ShoppingCart,
      variant: "outline" as const,
      onClick: handleCreatePO
    },
    {
      title: "Generate Report",
      description: "Export analytics data",
      icon: FileText,
      variant: "outline" as const,
      onClick: handleGenerateReport
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
      <AddComponentModal 
        isOpen={isAddComponentOpen} 
        onClose={() => setIsAddComponentOpen(false)} 
      />
    </Card>
  );
};

export default QuickActions;