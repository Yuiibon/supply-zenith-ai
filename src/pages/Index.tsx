import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Package, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-inventory.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Forecasting",
      description: "Machine learning algorithms predict demand and optimize inventory levels automatically."
    },
    {
      icon: Package,
      title: "Smart Component Management",
      description: "Organize and track components with advanced categorization and search capabilities."
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Live dashboards and reports provide insights into inventory performance."
    },
    {
      icon: Shield,
      title: "Risk Detection",
      description: "Proactive alerts for stockouts, excess inventory, and supply chain disruptions."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline purchase orders, restock alerts, and supplier communications."
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Generate comprehensive reports with visual charts and exportable data."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold">AI Inventory Hub</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/dashboard">
              <Button>View Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="AI-powered inventory management dashboard interface" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/60 to-accent/20" />
        </div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Intelligent Inventory
              <span className="bg-gradient-ai bg-clip-text text-transparent"> Management</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform your inventory operations with AI-powered forecasting, automated alerts, 
              and intelligent insights that optimize stock levels and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/dashboard">
                <Button size="lg" className="text-lg px-8 py-6">
                  Explore Dashboard
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to manage inventory intelligently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="bg-gradient-to-r from-primary/10 via-ai-primary/10 to-primary/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Inventory?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join leading companies using AI to transform their inventory management
            </p>
            <Link to="/login">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
