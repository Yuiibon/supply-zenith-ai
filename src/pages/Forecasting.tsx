import Sidebar from "@/components/Dashboard/Sidebar";
import { Download, FileText, TrendingUp, Brain, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { toast } from "sonner";

const Forecasting = () => {
  // Sample forecast data
  const forecastData = [
    { month: 'Jan', predicted: 1200, actual: 1150, confidence: 0.85 },
    { month: 'Feb', predicted: 1350, actual: 1320, confidence: 0.88 },
    { month: 'Mar', predicted: 1100, actual: 1180, confidence: 0.82 },
    { month: 'Apr', predicted: 1250, actual: null, confidence: 0.90 },
    { month: 'May', predicted: 1400, actual: null, confidence: 0.87 },
    { month: 'Jun', predicted: 1300, actual: null, confidence: 0.85 },
  ];

  const handleExportPDF = () => {
    // In a real app, you would use a library like jsPDF or html2canvas
    toast.success("Forecast report exported as PDF!");
    
    // Simulate file download
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,Forecast Report - ' + new Date().toISOString();
    link.download = 'forecast-report.txt';
    link.click();
  };

  const handleDownloadData = () => {
    // Export data as CSV
    const headers = ['Month', 'Predicted', 'Actual', 'Confidence'];
    const csvContent = [
      headers.join(','),
      ...forecastData.map(row => 
        [row.month, row.predicted, row.actual || 'N/A', row.confidence].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'forecast-data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Forecast data downloaded as CSV!");
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Forecasting</h1>
            <p className="text-sm text-muted-foreground">Intelligent demand prediction</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleDownloadData}>
              <Download className="h-4 w-4 mr-2" />
              Download Data
            </Button>
            <Button onClick={handleExportPDF}>
              <FileText className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6">
          {/* Forecast Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Demand Forecast Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={forecastData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    name="Predicted Demand"
                    strokeDasharray="5 5"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="hsl(var(--success))" 
                    strokeWidth={2}
                    name="Actual Demand"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Forecast Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Accuracy Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">94.2%</div>
                <p className="text-sm text-muted-foreground">Model prediction accuracy</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Next Month Prediction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">1,250</div>
                <p className="text-sm text-muted-foreground">Expected demand units</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Confidence Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-warning">87%</div>
                <p className="text-sm text-muted-foreground">Prediction confidence</p>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                AI Forecast Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                  <h3 className="font-medium text-success mb-2">📈 Trend Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Demand is expected to increase by 12% in the next quarter based on seasonal patterns and historical data.
                  </p>
                </div>
                <div className="bg-warning/10 p-4 rounded-lg border border-warning/20">
                  <h3 className="font-medium text-warning mb-2">⚠️ Risk Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor supply chain disruptions that could impact April predictions. Consider buffer stock.
                  </p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <h3 className="font-medium text-primary mb-2">🎯 Recommendation</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimal reorder point for resistors should be increased to 800 units based on forecast data.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                  <h3 className="font-medium mb-2">📊 Model Performance</h3>
                  <p className="text-sm text-muted-foreground">
                    ARIMA model shows 94.2% accuracy. Last retrained on {new Date().toLocaleDateString()}.
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

export default Forecasting;