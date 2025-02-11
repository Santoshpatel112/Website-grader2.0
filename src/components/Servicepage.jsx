import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FiCode, 
  FiTrendingUp, 
  FiShield, 
  FiSearch, 
  FiMonitor, 
  FiGlobe 
} from 'react-icons/fi';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
    <CardHeader className="flex items-center space-x-4">
      <Icon className="text-4xl text-blue-500" />
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const Servicespage = () => {
  useEffect(() => {
    console.log('Services component mounted');
  }, []);

  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Custom website design and development tailored to your business needs.'
    },
    {
      icon: FiTrendingUp,
      title: 'Performance Optimization',
      description: 'Improve website speed, user experience, and search engine rankings.'
    },
    {
      icon: FiShield,
      title: 'Security Audit',
      description: 'Comprehensive security analysis and protection strategies.'
    },
    {
      icon: FiSearch,
      title: 'SEO Services',
      description: 'Enhance your online visibility and attract more organic traffic.'
    },
    {
      icon: FiMonitor,
      title: 'Responsive Design',
      description: 'Ensure your website looks great on all devices and screen sizes.'
    },
    {
      icon: FiGlobe,
      title: 'Global Accessibility',
      description: 'Make your website accessible and inclusive for all users.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive web solutions to elevate your online presence and drive business growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            description={service.description} 
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready to Transform Your Web Presence?</h2>
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Schedule a Consultation
        </Button>
      </div>
    </div>
  );
};

export default Servicespage;