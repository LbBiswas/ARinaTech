import React from 'react';
import { Globe, Smartphone, Monitor, Gamepad2, Settings, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites built with the latest technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimization', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences across all devices.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Store Deployment', 'Push Notifications']
    },
    {
      icon: Monitor,
      title: 'Computer/PC Applications',
      description: 'Powerful desktop applications for Windows, macOS, and Linux with rich functionality and intuitive interfaces.',
      features: ['Cross-Platform Desktop Apps', 'System Integration', 'Database Management', 'Security Features', 'Performance Optimization']
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Engaging games across multiple platforms with stunning graphics and immersive gameplay experiences.',
      features: ['2D/3D Game Development', 'Unity Engine', 'Multiplayer Support', 'Mobile Gaming', 'Console Development']
    },
    {
      icon: Settings,
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions designed specifically for your unique business requirements and workflows.',
      features: ['Business Automation', 'API Development', 'Third-party Integrations', 'Cloud Solutions', 'Scalable Architecture']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-max">
          <div className="text-center mb-12 slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive software development services designed to transform your ideas 
              into powerful digital solutions that drive business growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and project goals' },
              { step: '02', title: 'Design', description: 'Creating user-centric designs and technical architecture' },
              { step: '03', title: 'Development', description: 'Building robust and scalable software solutions' },
              { step: '04', title: 'Deployment', description: 'Launching and providing ongoing support and maintenance' }
            ].map((phase, index) => (
              <div 
                key={index}
                className="text-center fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slide-up">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto fade-in">
            Let's discuss your project and explore how our expertise can help you achieve your goals.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;