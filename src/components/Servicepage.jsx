import { useEffect } from 'react';
import PropTypes from 'prop-types';
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
import { useLanguage } from '../Context/LanguageContext';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-card border-border/50">
    <CardHeader className="flex items-center space-x-4">
      <Icon className="text-4xl text-primary" />
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Servicespage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // console.log('Services component mounted');
  }, []);

  const services = [
    { icon: FiCode, title: t('webDev'), description: t('webDevDesc') },
    { icon: FiTrendingUp, title: t('perfOpt'), description: t('perfOptDesc') },
    { icon: FiShield, title: t('secAudit'), description: t('secAuditDesc') },
    { icon: FiSearch, title: t('seoServices'), description: t('seoServicesDesc') },
    { icon: FiMonitor, title: t('responsive'), description: t('responsiveDesc') },
    { icon: FiGlobe, title: t('accessibility'), description: t('accessibilityDesc') },
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('servicesTitle')}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('servicesSubtitle')}
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
        <h2 className="text-3xl font-semibold mb-6">{t('readyTransform')}</h2>
        <Button
          size="lg"
          className="btn-primary"
        >
          {t('scheduleConsult')}
        </Button>
      </div>
    </div>
  );
};

export default Servicespage;