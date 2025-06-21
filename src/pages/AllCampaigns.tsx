
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Plus, Eye, Edit } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppChat from "@/components/WhatsAppChat";

const AllCampaigns = () => {
  const campaigns = [
    { id: 1, title: "Summer Fashion Campaign", status: "Active", influencers: 12, reach: "250K", budget: "$5,000" },
    { id: 2, title: "Tech Product Launch", status: "Draft", influencers: 0, reach: "-", budget: "$8,000" },
    { id: 3, title: "Holiday Marketing", status: "Completed", influencers: 8, reach: "180K", budget: "$3,500" },
    { id: 4, title: "Spring Collection", status: "Active", influencers: 15, reach: "320K", budget: "$6,200" },
    { id: 5, title: "Back to School", status: "Paused", influencers: 5, reach: "95K", budget: "$2,800" },
    { id: 6, title: "Black Friday Sale", status: "Completed", influencers: 20, reach: "450K", budget: "$10,000" },
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
              <Link to="/create-campaign">
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  New Campaign
                </Button>
              </Link>
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
          <h2 className="text-3xl font-bold text-foreground mb-2">All Campaigns</h2>
          <p className="text-muted-foreground">Manage and track all your marketing campaigns.</p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-2">{campaign.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Influencers: </span>
                        <span className="text-foreground font-medium">{campaign.influencers}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Reach: </span>
                        <span className="text-foreground font-medium">{campaign.reach}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Budget: </span>
                        <span className="text-foreground font-medium">{campaign.budget}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      campaign.status === "Active" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                        : campaign.status === "Draft"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : campaign.status === "Paused"
                        ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    }`}>
                      {campaign.status}
                    </span>
                    <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-accent">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-accent">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <WhatsAppChat />
    </div>
  );
};

export default AllCampaigns;
