import Sidebar from "@/components/Dashboard/Sidebar";
import { AlertTriangle, Clock, CheckCircle, XCircle, Bell, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Critical Stock Level - Diode 1N4148",
      message: "Stock level has dropped to 340 units (42% of optimal). Immediate restock recommended.",
      timestamp: "5 minutes ago",
      component: "D001",
      acknowledged: false,
    },
    {
      id: 2,
      type: "warning",
      title: "Low Stock Alert - Resistor 1kΩ",
      message: "Stock level at 1250 units (83% of optimal). Consider reordering within 2 days.",
      timestamp: "2 hours ago",
      component: "R001",
      acknowledged: false,
    },
    {
      id: 3,
      type: "info",
      title: "Supplier Delivery Confirmation",
      message: "ElectroSupply Co confirmed delivery of resistors scheduled for tomorrow, 2 PM.",
      timestamp: "4 hours ago",
      component: null,
      acknowledged: true,
    },
    {
      id: 4,
      type: "warning",
      title: "Forecast Deviation Detected",
      message: "IC demand is 15% higher than predicted. AI model is adjusting forecasts.",
      timestamp: "6 hours ago",
      component: "IC001",
      acknowledged: true,
    },
    {
      id: 5,
      type: "critical",
      title: "Supplier Delay Notification",
      message: "TechParts Ltd reported 3-day delay in diode shipment. Update reorder schedule.",
      timestamp: "1 day ago",
      component: "D001",
      acknowledged: false,
    },
    {
      id: 6,
      type: "success",
      title: "Inventory Optimization Complete",
      message: "AI successfully optimized safety stock levels. Expected 12% efficiency improvement.",
      timestamp: "2 days ago", 
      component: null,
      acknowledged: true,
    },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <XCircle className="h-5 w-5 text-destructive" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-success" />;
      case 'info':
        return <Bell className="h-5 w-5 text-primary" />;
      default:
        return <Bell className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getAlertBadge = (type: string) => {
    switch (type) {
      case 'critical':
        return <Badge className="bg-destructive text-destructive-foreground">Critical</Badge>;
      case 'warning':
        return <Badge className="bg-warning text-warning-foreground">Warning</Badge>;
      case 'success':
        return <Badge className="bg-success text-success-foreground">Success</Badge>; 
      case 'info':
        return <Badge variant="secondary">Info</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const unacknowledgedAlerts = alerts.filter(alert => !alert.acknowledged).length;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Risk Alerts</h1>
            <p className="text-sm text-muted-foreground">
              {unacknowledgedAlerts} unacknowledged alerts require attention
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>Mark All Read</Button>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6">
          {/* Alert Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Critical Alerts</p>
                    <p className="text-2xl font-bold text-destructive">2</p>
                  </div>
                  <XCircle className="h-8 w-8 text-destructive" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Warning Alerts</p>
                    <p className="text-2xl font-bold text-warning">2</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-warning" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Info Alerts</p>
                    <p className="text-2xl font-bold text-primary">1</p>
                  </div>
                  <Bell className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Resolved</p>
                    <p className="text-2xl font-bold text-success">3</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Recent Risk Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`flex items-start gap-4 p-4 rounded-lg border ${
                    alert.acknowledged ? 'bg-muted/30' : 'bg-card'
                  }`}
                >
                  <div className="mt-1">
                    {getAlertIcon(alert.type)}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-medium ${alert.acknowledged ? 'text-muted-foreground' : ''}`}>
                          {alert.title}
                        </h3>
                        <p className={`text-sm ${alert.acknowledged ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
                          {alert.message}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getAlertBadge(alert.type)}
                        {alert.component && (
                          <Badge variant="outline">{alert.component}</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {alert.timestamp}
                      </div>
                      <div className="flex gap-2">
                        {!alert.acknowledged && (
                          <Button size="sm" variant="outline">
                            Acknowledge
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Risk Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>AI Risk Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                  <h3 className="font-medium text-destructive mb-2">🚨 High Risk Components</h3>
                  <p className="text-sm text-muted-foreground">
                    2 components are at critical stock levels. AI predicts stockout within 72 hours without intervention.
                  </p>
                </div>
                <div className="bg-warning/10 p-4 rounded-lg border border-warning/20">
                  <h3 className="font-medium text-warning mb-2">⚠️ Demand Anomalies</h3>
                  <p className="text-sm text-muted-foreground">
                    Unusual demand patterns detected for ICs. Monitoring for potential supply chain disruption.
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

export default Alerts;