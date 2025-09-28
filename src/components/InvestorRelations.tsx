import React from 'react';
import { TrendingUp, DollarSign, Users, Globe, Calendar, Mail, Download, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InvestorRelations = () => {
  return (
    <section id="investor-relations" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-64 bg-arabesque opacity-5"></div>
      
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title relative inline-block">
            Investor Relations
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary"></span>
          </h2>
          <p className="section-subtitle mt-8">
            Join us in transforming the premium rice market across the Middle East
          </p>
        </div>

        {/* Introduction / Value Proposition */}
        <div className="mb-20">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <Globe className="w-6 h-6 text-secondary" />
                Our Vision & Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Who We Are</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Al Rayyan is the premier importer and distributor of authentic Pakistani basmati rice in Saudi Arabia. 
                    We bridge the gap between Pakistan's finest rice producers and the growing Middle Eastern market demand for premium quality basmati.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Our Growth Vision</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We're positioned to become the largest premium rice distribution network across the GCC, 
                    leveraging our direct relationships with Pakistani farmers and deep understanding of regional consumer preferences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Opportunity */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Market Opportunity</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  Market Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">$2.8B</div>
                <p className="text-sm text-muted-foreground">GCC rice market value with 8.5% annual growth</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  Demographics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">15M+</div>
                <p className="text-sm text-muted-foreground">South Asian expatriates in GCC preferring premium basmati</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Globe className="w-5 h-5 text-secondary" />
                  Expansion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">6 Countries</div>
                <p className="text-sm text-muted-foreground">Target GCC markets for next 3 years expansion</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-secondary">
            <h4 className="text-lg font-semibold text-primary mb-3">Why Now?</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                Growing middle-class population in GCC demanding premium food products
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                Limited direct importers creating supply chain inefficiencies
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                Saudi Vision 2030 supporting food security and trade diversification
              </li>
            </ul>
          </div>
        </div>

        {/* Company Highlights */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Company Highlights</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Competitive Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Direct relationships with 50+ certified farms in Punjab, Pakistan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Exclusive distribution agreements for premium basmati varieties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">State-of-the-art quality control and storage facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Established distribution network across Saudi Arabia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Key Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <span className="font-medium text-primary">Market Entry</span>
                    <span className="text-sm text-muted-foreground">2022</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <span className="font-medium text-primary">First Major Retail Partnership</span>
                    <span className="text-sm text-muted-foreground">2023</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <span className="font-medium text-primary">150% Revenue Growth</span>
                    <span className="text-sm text-muted-foreground">2024</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/10 rounded border-l-4 border-secondary">
                    <span className="font-medium text-primary">Regional Expansion Launch</span>
                    <span className="text-sm font-semibold text-secondary">2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Financial Snapshot */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Financial Snapshot</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <DollarSign className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">150%</div>
                <p className="text-sm text-muted-foreground">Revenue Growth (YoY)</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">85%</div>
                <p className="text-sm text-muted-foreground">Gross Margin</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <p className="text-sm text-muted-foreground">Retail Partners</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <Globe className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">3</div>
                <p className="text-sm text-muted-foreground">Regional Markets</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-6 bg-primary/5 rounded-lg">
            <h4 className="text-lg font-semibold text-primary mb-3">Investment Track Record</h4>
            <p className="text-muted-foreground">
              Our initial seed funding of $2M in 2022 has been strategically deployed to establish market presence, 
              build supply chain infrastructure, and develop our brand. We've achieved profitability within 18 months 
              and are now ready for our Series A round to accelerate expansion.
            </p>
          </div>
        </div>

        {/* Investment Opportunity */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Investment Opportunity</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Why Invest in Al Rayyan?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary">Scalable Business Model</div>
                      <p className="text-sm text-muted-foreground">Proven unit economics with clear path to regional dominance</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary">Strong ROI Potential</div>
                      <p className="text-sm text-muted-foreground">Target 5x returns within 3-5 years through market expansion</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary">Market Leadership Position</div>
                      <p className="text-sm text-muted-foreground">First-mover advantage in premium basmati segment</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Investment Focus Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg">
                    <div className="font-medium text-primary mb-2">Regional Expansion (60%)</div>
                    <p className="text-sm text-muted-foreground">UAE, Kuwait, Qatar market entry and distribution setup</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <div className="font-medium text-primary mb-2">Supply Chain (25%)</div>
                    <p className="text-sm text-muted-foreground">Advanced warehousing and logistics infrastructure</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <div className="font-medium text-primary mb-2">Technology & Operations (15%)</div>
                    <p className="text-sm text-muted-foreground">ERP systems, quality control, and team expansion</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Ready to Partner With Us?</CardTitle>
              <CardDescription className="text-base">
                Join Al Rayyan's journey to become the leading premium rice distributor in the Middle East
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Button className="btn-primary group" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Investor Deck
                  <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="btn-outline group" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Meeting
                  <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">investor-relations@alrayyanrice.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestorRelations;