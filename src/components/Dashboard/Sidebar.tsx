import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  BarChart3, 
  Brain, 
  Package, 
  TrendingUp, 
  AlertTriangle,
  FileText,
  Settings,
  ChevronLeft,
  Bell,
  Users,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      icon: BarChart3,
      path: "/dashboard",
      badge: null
    },
    {
      title: "AI Forecasting",
      icon: Brain,
      path: "/forecasting",
      badge: "AI"
    },
    {
      title: "Components",
      icon: Package,
      path: "/components",
      badge: null
    },
    {
      title: "Analytics",
      icon: TrendingUp,
      path: "/analytics",
      badge: null
    },
    {
      title: "Risk Alerts",
      icon: AlertTriangle,
      path: "/alerts",
      badge: 3
    },
    {
      title: "Suppliers",
      icon: Truck,
      path: "/suppliers",
      badge: null
    },
    {
      title: "Reports",
      icon: FileText,
      path: "/reports",
      badge: null
    },
    {
      title: "Users",
      icon: Users,
      path: "/users",
      badge: null
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
      badge: null
    }
  ];

  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} h-screen bg-card border-r border-border flex flex-col transition-all duration-300`}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-foreground">AI Inventory</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5"
          >
            <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'sidebar-item-active' : ''} ${collapsed ? 'justify-center' : ''}`
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && (
              <>
                <span className="truncate">{item.title}</span>
                {item.badge && (
                  <Badge 
                    variant={item.badge === "AI" ? "default" : "destructive"}
                    className="ml-auto"
                  >
                    {item.badge}
                  </Badge>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">Admin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;