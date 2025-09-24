import Sidebar from "@/components/Dashboard/Sidebar";
import { Brain, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Forecasting = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Forecasting</h1>
            <p className="text-sm text-muted-foreground">Intelligent demand prediction</p>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Forecasting Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">AI-powered demand forecasting coming soon...</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Forecasting;