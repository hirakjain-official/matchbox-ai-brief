
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, TrendingUp, Users, Eye } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppChat from "@/components/WhatsAppChat";

const Analytics = () => {
  const analyticsData = [
    { title: "Total Impressions", value: "2.4M", change: "+23%", icon: Eye },
    { title: "Engagement Rate", value: "4.2%", change: "+0.8%", icon: BarChart3 },
    { title: "Reach", value: "890K", change: "+15%", icon: TrendingUp },
    { title: "Active Users", value: "156K", change: "+8%", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Logo />
            </div>
            <div className="flex gap-4">
              <ThemeToggle />
              <Link to="/dashboard">
                <Button variant="outline" className="border-border text-foreground hover:bg-accent">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Track your campaign performance and insights.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {analyticsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-[#FF6B35] text-sm font-medium">{stat.change}</p>
                    </div>
                    <Icon className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Analytics Charts Placeholder */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Campaign Performance</CardTitle>
              <CardDescription>Performance metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Chart visualization would go here</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Engagement Breakdown</CardTitle>
              <CardDescription>Engagement by platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Chart visualization would go here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <WhatsAppChat />
    </div>
  );
};

export default Analytics;
