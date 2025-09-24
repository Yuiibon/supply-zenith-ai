import Sidebar from "@/components/Dashboard/Sidebar";
import { TrendingUp, BarChart3, Activity, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Analytics = () => {
  // Stock trend data
  const stockTrendData = [
    { month: 'Jan', resistors: 1200, capacitors: 800, diodes: 400, ics: 600 },
    { month: 'Feb', resistors: 1350, capacitors: 750, diodes: 350, ics: 720 },
    { month: 'Mar', resistors: 1100, capacitors: 900, diodes: 300, ics: 650 },
    { month: 'Apr', resistors: 1250, capacitors: 890, diodes: 340, ics: 720 },
    { month: 'May', resistors: 1400, capacitors: 950, diodes: 380, ics: 800 },
    { month: 'Jun', resistors: 1300, capacitors: 880, diodes: 360, ics: 750 },
  ];

  const utilizationData = [
    { component: 'Resistors', utilization: 85 },
    { component: 'Capacitors', utilization: 78 },
    { component: 'Diodes', utilization: 65 },
    { component: 'ICs', utilization: 92 },
    { component: 'Transistors', utilization: 71 },
  ];

  const metrics = [
    { title: "Stock Turnover", value: "8.2x", change: "+12%", icon: Activity },
    { title: "Forecast Accuracy", value: "94.8%", change: "+2.1%", icon: Target },
    { title: "Avg Lead Time", value: "12 days", change: "-3 days", icon: TrendingUp },
    { title: "Stock Efficiency", value: "87%", change: "+5%", icon: BarChart3 },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
            <p className="text-sm text-muted-foreground">Advanced inventory analytics and insights</p>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <p className="text-xs text-success">{metric.change}</p>
                    </div>
                    <metric.icon className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Stock Trend Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Stock Trend Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={stockTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="resistors" stroke="hsl(var(--primary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="capacitors" stroke="hsl(var(--success))" strokeWidth={2} />
                    <Line type="monotone" dataKey="diodes" stroke="hsl(var(--warning))" strokeWidth={2} />
                    <Line type="monotone" dataKey="ics" stroke="hsl(var(--destructive))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Component Utilization */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Component Utilization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={utilizationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="component" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="utilization" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                  <h3 className="font-medium text-success mb-2">✅ Optimization Opportunity</h3>
                  <p className="text-sm text-muted-foreground">
                    IC inventory shows 92% utilization. Consider increasing safety stock by 15%.
                  </p>
                </div>
                <div className="bg-warning/10 p-4 rounded-lg border border-warning/20">
                  <h3 className="font-medium text-warning mb-2">⚠️ Seasonal Trend</h3>
                  <p className="text-sm text-muted-foreground">
                    Resistor demand typically increases 25% in Q3. Prepare inventory accordingly.
                  </p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <h3 className="font-medium text-primary mb-2">📈 Forecast Update</h3>
                  <p className="text-sm text-muted-foreground">
                    Machine learning model accuracy improved to 94.8% with latest data integration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Analytics;