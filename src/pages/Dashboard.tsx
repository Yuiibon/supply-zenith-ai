import { Bell, Package, TrendingUp, AlertTriangle, Brain, Users } from "lucide-react";
import Sidebar from "@/components/Dashboard/Sidebar";
import MetricCard from "@/components/Dashboard/MetricCard";
import StockChart from "@/components/Dashboard/StockChart";
import QuickActions from "@/components/Dashboard/QuickActions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Components",
      value: "3,847",
      change: "+12%",
      changeType: "positive" as const,
      icon: Package,
      description: "Items in inventory",
      trend: "up" as const
    },
    {
      title: "Stock Value",
      value: "$284K",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: TrendingUp,
      description: "Total inventory worth",
      trend: "up" as const
    },
    {
      title: "Critical Alerts",
      value: "7",
      change: "+3",
      changeType: "negative" as const,
      icon: AlertTriangle,
      description: "Items need attention",
      trend: "up" as const
    },
    {
      title: "AI Accuracy",
      value: "94.8%",
      change: "+2.1%",
      changeType: "positive" as const,
      icon: Brain,
      description: "Forecast precision",
      trend: "up" as const
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, John Doe</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                3
              </Badge>
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">Admin</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Charts and Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <StockChart />
            </div>
            <div>
              <QuickActions />
            </div>
          </div>

          {/* AI Insights Section */}
          <div className="bg-gradient-to-r from-primary/10 via-ai-primary/10 to-primary/10 rounded-xl p-6 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-ai rounded-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold">AI Recommendations</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <h3 className="font-medium mb-2 text-warning">⚠️ Restock Alert</h3>
                <p className="text-sm text-muted-foreground">
                  Diodes (D1N4148) predicted to run out in 3 days. Recommend ordering 500 units.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <h3 className="font-medium mb-2 text-success">✅ Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Resistor inventory levels optimal. AI suggests reducing safety stock by 10%.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;