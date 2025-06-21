
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, BarChart3, Users, Target, TrendingUp } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppChat from "@/components/WhatsAppChat";

const Dashboard = () => {
  // Mock data for demonstration
  const campaigns = [
    { id: 1, title: "Summer Fashion Campaign", status: "Active", influencers: 12, reach: "250K" },
    { id: 2, title: "Tech Product Launch", status: "Draft", influencers: 0, reach: "-" },
    { id: 3, title: "Holiday Marketing", status: "Completed", influencers: 8, reach: "180K" },
  ];

  const stats = [
    { title: "Total Campaigns", value: "24", icon: Target, change: "+12%" },
    { title: "Active Influencers", value: "156", icon: Users, change: "+8%" },
    { title: "Total Reach", value: "2.4M", icon: TrendingUp, change: "+23%" },
    { title: "Avg. Engagement", value: "4.2%", icon: BarChart3, change: "+0.8%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex gap-4">
              <ThemeToggle />
              <Link to="/create-campaign">
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  New Campaign
                </Button>
              </Link>
              <Button variant="outline" className="border-border text-foreground hover:bg-accent">
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">Here's what's happening with your campaigns today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
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

        {/* Campaigns Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Campaigns */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Campaigns</CardTitle>
                <CardDescription>Manage your current and past campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h3 className="font-semibold text-foreground">{campaign.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {campaign.influencers} influencers • {campaign.reach} reach
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          campaign.status === "Active" 
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                            : campaign.status === "Draft"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                        }`}>
                          {campaign.status}
                        </span>
                        <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-accent">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link to="/campaigns">
                    <Button variant="outline" className="border-border text-foreground hover:bg-accent">
                      View All Campaigns
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="border-border mb-6">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/create-campaign">
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Campaign
                  </Button>
                </Link>
                <Button variant="outline" className="w-full border-border text-foreground hover:bg-accent justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Browse Influencers
                </Button>
                <Link to="/analytics">
                  <Button variant="outline" className="w-full border-border text-foreground hover:bg-accent justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Performance Overview */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">This Month</CardTitle>
                <CardDescription>Performance overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Campaigns Created</span>
                    <span className="font-semibold text-foreground">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Reach</span>
                    <span className="font-semibold text-foreground">890K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg. Engagement</span>
                    <span className="font-semibold text-[#FF6B35]">4.8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Widget */}
      <WhatsAppChat />
    </div>
  );
};

export default Dashboard;
