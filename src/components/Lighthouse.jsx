import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Shield, Search, Smartphone, BarChart2, Mail, Phone, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import ScoreCard from './scorecard';
import SiteGrade from './SiteGrade';

const Lighthouse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { analysisData } = location.state || {};

  if (!analysisData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-4 max-w-md w-full">
          <h1 className="text-xl sm:text-2xl font-bold text-muted-foreground">No Analysis Data Found</h1>
          <Button onClick={() => navigate('/')} className="btn-primary w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const { url, scores } = analysisData;
  const { aggregate, details } = scores;

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBgColor = (score) => {
    if (score >= 90) return 'bg-green-500/10';
    if (score >= 50) return 'bg-yellow-500/10';
    return 'bg-red-500/10';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-custom py-3 sm:py-4 px-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="hover:bg-primary/10 -ml-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Back</span>
            </Button>
            <div className="flex items-center space-x-2">
              <img 
                src="/public/newlogo.png" 
                alt="Website Grader" 
                className="h-6 sm:h-8 w-auto"
              />
              <h1 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Website Grader
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-6 sm:py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Panel */}
          <div className="space-y-6 sm:space-y-8">
            {/* URL Display */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Analysis Results</h2>
              <p className="text-sm sm:text-base text-muted-foreground break-all">{url}</p>
            </div>

            {/* ScoreCard Component */}
            <div className="transform hover:scale-[1.02] transition-transform">
              <ScoreCard url={url} scores={scores} />
            </div>

            {/* Contact Links */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Contact Me</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="flex justify-center space-x-6">
                  <a 
                    href="mailto:santoshpatelvns5@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors p-2"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a 
                    href="tel:+918467941850" 
                    className="text-muted-foreground hover:text-primary transition-colors p-2"
                    aria-label="Phone"
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a 
                    href="https://x.com/Santoshp3259330" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-2"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel */}
          <div className="space-y-6 sm:space-y-8">
            {/* Aggregate Score */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <BarChart2 className="w-5 h-5" />
                  Overall Score
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32 sm:w-48 sm:h-48">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-muted/20"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className={`${getScoreColor(aggregate)} transition-all duration-500`}
                        strokeWidth="8"
                        strokeDasharray={`${aggregate * 2.51} 251.2`}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-2xl sm:text-4xl font-bold ${getScoreColor(aggregate)}`}>
                        {aggregate.toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Scores */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {details.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      {item.label === 'Performance' && <Zap className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {item.label === 'Accessibility' && <Shield className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {item.label === 'SEO' && <Search className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {item.label === 'Best Practices' && <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {item.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`text-xl sm:text-2xl font-bold ${getScoreColor(item.score)}`}>
                          {item.score.toFixed(0)}
                        </span>
                        <span className="text-sm sm:text-base text-muted-foreground">/ {item.maxScore}</span>
                      </div>
                      <Progress 
                        value={item.score} 
                        className={`h-1.5 sm:h-2 ${getScoreBgColor(item.score)}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* SiteGrade Component */}
            <div className="transform hover:scale-[1.02] transition-transform">
              <SiteGrade data={analysisData} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 py-6 sm:py-8 mt-8 sm:mt-12">
        <div className="container-custom px-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <img 
                src="/public/newlogo.png" 
                alt="Website Grader" 
                className="h-8 sm:h-12 w-auto"
              />
              <h1 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Website Grader <sup className="text-xs sm:text-sm">®</sup>
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Website Grader. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Lighthouse;
