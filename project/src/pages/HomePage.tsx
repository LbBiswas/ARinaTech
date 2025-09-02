import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Globe, Monitor, Gamepad2, Settings } from 'lucide-react';
import TeamSection from '../components/TeamSection';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg tech-pattern">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white container-max px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 slide-up">
            Innovating Digital
            <span className="block text-blue-300">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed fade-in">
            We build exceptional websites, mobile apps, computer applications, games, 
            and custom software solutions with our team of skilled developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <Link to="/services" className="btn-primary">
              Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we create powerful software solutions 
              that drive business success and user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Websites',
                description: 'Modern, responsive websites that captivate and convert visitors.'
              },
              {
                icon: Smartphone,
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications for iOS and Android.'
              },
              {
                icon: Monitor,
                title: 'PC Applications',
                description: 'Powerful desktop software for Windows, macOS, and Linux.'
              },
              {
                icon: Gamepad2,
                title: 'Games',
                description: 'Engaging games across multiple platforms and genres.'
              },
              {
                icon: Settings,
                title: 'Custom Software',
                description: 'Tailored solutions built specifically for your unique requirements.'
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slide-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto fade-in">
            Let's discuss how we can bring your vision to life with our expertise and innovation.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;