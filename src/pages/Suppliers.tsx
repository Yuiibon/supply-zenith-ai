import Sidebar from "@/components/Dashboard/Sidebar";
import { Truck, Star, Clock, DollarSign, Package, Phone, Mail, MapPin, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import AddSupplierModal from "@/components/AddSupplierModal";

const Suppliers = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const suppliers = [
    {
      id: "SUP001",
      name: "ElectroSupply Co",
      contact: "John Smith",
      phone: "+1 (555) 123-4567",
      email: "john@electrosupply.com",
      address: "123 Electronics Ave, Tech City, TC 12345",
      rating: 4.8,
      onTimeDelivery: 95,
      averageLeadTime: 7,
      totalOrders: 156,
      activeOrders: 3,
      categories: ["Resistors", "Capacitors"],
      status: "active",
      lastOrder: "2024-01-15",
    },
    {
      id: "SUP002", 
      name: "ComponentWorld",
      contact: "Sarah Johnson",
      phone: "+1 (555) 234-5678",
      email: "sarah@componentworld.com",
      address: "456 Circuit Blvd, Silicon Valley, SV 67890",
      rating: 4.6,
      onTimeDelivery: 92,
      averageLeadTime: 10,
      totalOrders: 89,
      activeOrders: 1,
      categories: ["Capacitors", "Inductors"],
      status: "active",
      lastOrder: "2024-01-12",
    },
    {
      id: "SUP003",
      name: "TechParts Ltd",
      contact: "Mike Chen",
      phone: "+1 (555) 345-6789", 
      email: "mike@techparts.com",
      address: "789 Semiconductor St, Chip City, CC 13579",
      rating: 4.2,
      onTimeDelivery: 88,
      averageLeadTime: 14,
      totalOrders: 67,
      activeOrders: 2,
      categories: ["Diodes", "Transistors"],
      status: "warning",
      lastOrder: "2024-01-10",
    },
    {
      id: "SUP004",
      name: "MicroElectronics",
      contact: "Lisa Wang", 
      phone: "+1 (555) 456-7890",
      email: "lisa@microelectronics.com",
      address: "321 Microchip Lane, Processor Park, PP 24680",
      rating: 4.9,
      onTimeDelivery: 98,
      averageLeadTime: 5,
      totalOrders: 234,
      activeOrders: 5,
      categories: ["ICs", "Microcontrollers"],
      status: "active",
      lastOrder: "2024-01-16",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case 'warning':
        return <Badge className="bg-warning text-warning-foreground">Review</Badge>;
      case 'inactive':
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const totalSuppliers = suppliers.length;
  const activeSuppliers = suppliers.filter(s => s.status === 'active').length;
  const averageRating = suppliers.reduce((acc, s) => acc + s.rating, 0) / suppliers.length;
  const averageOnTime = suppliers.reduce((acc, s) => acc + s.onTimeDelivery, 0) / suppliers.length;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Suppliers</h1>
            <p className="text-sm text-muted-foreground">Manage supplier relationships and performance</p>
          </div>
          <Button>Add Supplier</Button>
        </header>

        <main className="flex-1 p-6 space-y-6">
          {/* Supplier Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Suppliers</p>
                    <p className="text-2xl font-bold">{totalSuppliers}</p>
                  </div>
                  <Truck className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Suppliers</p>
                    <p className="text-2xl font-bold text-success">{activeSuppliers}</p>
                  </div>
                  <Package className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg Rating</p>
                    <p className="text-2xl font-bold">{averageRating.toFixed(1)}</p>
                  </div>
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">On-Time Delivery</p>
                    <p className="text-2xl font-bold">{averageOnTime.toFixed(0)}%</p>
                  </div>
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Supplier Details Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Supplier Directory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Categories</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>On-Time %</TableHead>
                    <TableHead>Lead Time</TableHead>
                    <TableHead>Active Orders</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {suppliers.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{supplier.name}</div>
                          <div className="text-xs text-muted-foreground">{supplier.id}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">{supplier.contact}</div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {supplier.phone}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            {supplier.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {supplier.categories.map((category, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex">{getRatingStars(supplier.rating)}</div>
                          <span className="text-sm">{supplier.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <Progress value={supplier.onTimeDelivery} className="w-16" />
                          <span className="text-xs text-muted-foreground">{supplier.onTimeDelivery}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{supplier.averageLeadTime} days</TableCell>
                      <TableCell>{supplier.activeOrders}</TableCell>
                      <TableCell>{getStatusBadge(supplier.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View</Button>
                          <Button size="sm" variant="outline">Edit</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Supplier Performance Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Suppliers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {suppliers
                  .sort((a, b) => b.rating - a.rating)
                  .slice(0, 3)
                  .map((supplier, index) => (
                    <div key={supplier.id} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0 ? 'bg-yellow-400 text-yellow-900' :
                          index === 1 ? 'bg-gray-400 text-gray-900' :
                          'bg-orange-400 text-orange-900'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{supplier.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {supplier.onTimeDelivery}% on-time • {supplier.averageLeadTime} days lead time
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {getRatingStars(supplier.rating)}
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
                  <Package className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <div className="font-medium">Order Delivered</div>
                    <div className="text-sm text-muted-foreground">MicroElectronics delivered IC shipment</div>
                    <div className="text-xs text-muted-foreground">2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
                  <Clock className="h-5 w-5 text-warning mt-0.5" />
                  <div>
                    <div className="font-medium">Delivery Delay</div>
                    <div className="text-sm text-muted-foreground">TechParts Ltd reported 3-day delay</div>
                    <div className="text-xs text-muted-foreground">1 day ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
                  <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Price Update</div>
                    <div className="text-sm text-muted-foreground">ComponentWorld updated resistor pricing</div>
                    <div className="text-xs text-muted-foreground">2 days ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <AddSupplierModal 
            isOpen={isAddModalOpen} 
            onClose={() => setIsAddModalOpen(false)} 
          />
        </main>
      </div>
    </div>
  );
};

export default Suppliers;