
import { ArrowRight, Mic, FileText, Upload, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex gap-4">
              <ThemeToggle />
              <Link to="/login">
                <Button variant="outline" className="border-border text-foreground hover:bg-accent">
                  Sign In
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold text-foreground mb-6 leading-tight">
            AI-Powered
            <span className="text-[#FF6B35]"> Influencer</span>
            <br />
            Marketing Made Simple
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect brands with perfect influencers using our intelligent matching algorithm. Create campaigns, track performance, and maximize your marketing ROI.
          </p>
          <div className="flex gap-6 justify-center">
            <Link to="/login">
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg px-8 py-6 h-auto">
                Start Creating Campaigns
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="border-border text-foreground hover:bg-accent text-lg px-8 py-6 h-auto">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card text-card-foreground py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-foreground">Why Choose MATCHBOX AI?</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Streamline your influencer marketing with powerful AI tools and intuitive campaign management.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-border rounded-lg hover:border-[#FF6B35]/50 transition-colors">
              <Mic className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-4 text-foreground">Voice Briefs</h4>
              <p className="text-muted-foreground">Record your campaign ideas naturally and let AI understand your vision.</p>
            </div>
            <div className="text-center p-8 border border-border rounded-lg hover:border-[#FF6B35]/50 transition-colors">
              <Users className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-4 text-foreground">Smart Matching</h4>
              <p className="text-muted-foreground">AI-powered algorithm finds the perfect influencers for your brand and audience.</p>
            </div>
            <div className="text-center p-8 border border-border rounded-lg hover:border-[#FF6B35]/50 transition-colors">
              <BarChart3 className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-4 text-foreground">Performance Tracking</h4>
              <p className="text-muted-foreground">Real-time analytics and insights to optimize your campaign performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h3 className="text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h3>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of brands already using MATCHBOX AI to create successful influencer campaigns.
        </p>
        <Link to="/login">
          <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg px-8 py-6 h-auto">
            Create Your First Campaign
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <Logo size="lg" className="justify-center mb-4" />
          <p className="text-muted-foreground">The future of influencer marketing is here.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
