import Sidebar from "@/components/Dashboard/Sidebar";
import { Package, Search, Filter, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Components = () => {
  const components = [
    {
      id: "R001",
      name: "Resistor 1kΩ",
      category: "Resistors",
      current: 1250,
      optimal: 1500,
      reorderPoint: 300,
      supplier: "ElectroSupply Co",
      status: "understocked",
      lastUpdated: "2 hours ago",
    },
    {
      id: "C001", 
      name: "Ceramic Capacitor 100nF",
      category: "Capacitors",
      current: 890,
      optimal: 1000,
      reorderPoint: 200,
      supplier: "ComponentWorld",
      status: "optimal",
      lastUpdated: "1 hour ago",
    },
    {
      id: "D001",
      name: "Diode 1N4148",
      category: "Diodes", 
      current: 340,
      optimal: 800,
      reorderPoint: 150,
      supplier: "TechParts Ltd",
      status: "critical",
      lastUpdated: "30 min ago",
    },
    {
      id: "IC001",
      name: "Microcontroller ATmega328P",
      category: "ICs",
      current: 720,
      optimal: 600,
      reorderPoint: 100,
      supplier: "MicroElectronics",
      status: "overstocked",
      lastUpdated: "3 hours ago",
    },
    {
      id: "T001",
      name: "NPN Transistor BC547",
      category: "Transistors",
      current: 450,
      optimal: 500,
      reorderPoint: 80,
      supplier: "ElectroSupply Co",
      status: "optimal",
      lastUpdated: "1 hour ago",
    },
    {
      id: "L001",
      name: "Inductor 10μH",
      category: "Inductors",
      current: 230,
      optimal: 300,
      reorderPoint: 60,
      supplier: "ComponentWorld",
      status: "understocked",
      lastUpdated: "2 hours ago",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'critical':
        return <Badge className="bg-destructive text-destructive-foreground"><AlertTriangle className="h-3 w-3 mr-1" />Critical</Badge>;
      case 'understocked':
        return <Badge className="bg-warning text-warning-foreground"><Clock className="h-3 w-3 mr-1" />Low Stock</Badge>;
      case 'overstocked':
        return <Badge className="bg-blue-500 text-white">Overstocked</Badge>;
      case 'optimal':
        return <Badge className="bg-success text-success-foreground"><CheckCircle className="h-3 w-3 mr-1" />Optimal</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getStockPercentage = (current: number, optimal: number) => {
    return Math.round((current / optimal) * 100);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Components</h1>
            <p className="text-sm text-muted-foreground">Manage your inventory components</p>
          </div>
          <Button>Add Component</Button>
        </header>

        <main className="flex-1 p-6 space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="p-6">
              <div className="flex gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search components..." className="pl-10" />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Components Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Component Inventory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Current Stock</TableHead>
                    <TableHead>Optimal Level</TableHead>
                    <TableHead>Stock %</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Unit Price</TableHead>
                    <TableHead>Last Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                {components.filter(component => {
                  const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                       component.sku.toLowerCase().includes(searchTerm.toLowerCase());
                  const matchesCategory = filterCategory === "all" || component.category === filterCategory;
                  return matchesSearch && matchesCategory;
                }).map((component) => (
                    <TableRow key={component.id}>
                      <TableCell className="font-medium">{component.id}</TableCell>
                      <TableCell>{component.name}</TableCell>
                      <TableCell>{component.category}</TableCell>
                      <TableCell>{component.current.toLocaleString()}</TableCell>
                      <TableCell>{component.optimal.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-muted rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                getStockPercentage(component.current, component.optimal) < 50
                                  ? 'bg-destructive'
                                  : getStockPercentage(component.current, component.optimal) > 120
                                  ? 'bg-blue-500'
                                  : 'bg-success'
                              }`}
                              style={{ 
                                width: `${Math.min(getStockPercentage(component.current, component.optimal), 100)}%` 
                              }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {getStockPercentage(component.current, component.optimal)}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(component.status)}</TableCell>
                      <TableCell>{component.supplier}</TableCell>
                      <TableCell className="text-muted-foreground">{component.lastUpdated}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-destructive">1</div>
                  <div className="text-sm text-muted-foreground">Critical</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">2</div>
                  <div className="text-sm text-muted-foreground">Low Stock</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">2</div>
                  <div className="text-sm text-muted-foreground">Optimal</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">1</div>
                  <div className="text-sm text-muted-foreground">Overstocked</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Components;