import Sidebar from "@/components/Dashboard/Sidebar";
import { Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Components = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Components</h1>
            <p className="text-sm text-muted-foreground">Manage your inventory items</p>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Component Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Component management interface coming soon...</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Components;