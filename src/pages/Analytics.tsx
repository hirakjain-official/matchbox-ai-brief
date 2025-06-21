
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, TrendingUp, Users, Eye } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppChat from "@/components/WhatsAppChat";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts";

const Analytics = () => {
  const analyticsData = [
    { title: "Total Impressions", value: "2.4M", change: "+23%", icon: Eye },
    { title: "Engagement Rate", value: "4.2%", change: "+0.8%", icon: BarChart3 },
    { title: "Reach", value: "890K", change: "+15%", icon: TrendingUp },
    { title: "Active Users", value: "156K", change: "+8%", icon: Users },
  ];

  const performanceData = [
    { month: "Jan", impressions: 120000, engagement: 2400, reach: 45000 },
    { month: "Feb", impressions: 190000, engagement: 3200, reach: 62000 },
    { month: "Mar", impressions: 300000, engagement: 4100, reach: 78000 },
    { month: "Apr", impressions: 280000, engagement: 3800, reach: 71000 },
    { month: "May", impressions: 420000, engagement: 5200, reach: 89000 },
    { month: "Jun", impressions: 380000, engagement: 4800, reach: 85000 },
  ];

  const platformData = [
    { name: "Facebook", value: 35, color: "#3b82f6" },
    { name: "Instagram", value: 28, color: "#ef4444" },
    { name: "Twitter", value: 20, color: "#10b981" },
    { name: "LinkedIn", value: 12, color: "#f59e0b" },
    { name: "Others", value: 5, color: "#8b5cf6" },
  ];

  const campaignData = [
    { campaign: "Summer Sale", clicks: 4800, conversions: 240, ctr: 5.0 },
    { campaign: "Brand Awareness", clicks: 3200, conversions: 128, ctr: 4.0 },
    { campaign: "Product Launch", clicks: 5600, conversions: 336, ctr: 6.0 },
    { campaign: "Holiday Special", clicks: 4200, conversions: 210, ctr: 5.0 },
    { campaign: "Retargeting", clicks: 2800, conversions: 168, ctr: 6.0 },
  ];

  const chartConfig = {
    impressions: {
      label: "Impressions",
      color: "hsl(var(--primary))",
    },
    engagement: {
      label: "Engagement",
      color: "#FF6B35",
    },
    reach: {
      label: "Reach",
      color: "hsl(var(--muted-foreground))",
    },
  };

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

        {/* Interactive Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Campaign Performance Over Time</CardTitle>
              <CardDescription>Monthly performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-64">
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="impressions" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="reach" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Engagement by Platform</CardTitle>
              <CardDescription>Distribution across social platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Campaign Comparison</CardTitle>
              <CardDescription>Click-through rates by campaign</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={campaignData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="campaign" angle={-45} textAnchor="end" height={60} />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="clicks" fill="hsl(var(--primary))" />
                    <Bar dataKey="conversions" fill="#FF6B35" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Monthly Engagement Trend</CardTitle>
              <CardDescription>Engagement growth over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="engagement" stroke="#FF6B35" strokeWidth={3} dot={{ fill: '#FF6B35', strokeWidth: 2, r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
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
