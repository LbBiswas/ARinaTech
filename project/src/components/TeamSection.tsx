import React from 'react';
import { Users, Award, Heart, Zap } from 'lucide-react';

const TeamSection = () => {
  const stats = [
    { icon: Users, label: 'Expert Developers', value: '25+' },
    { icon: Award, label: 'Projects Completed', value: '200+' },
    { icon: Heart, label: 'Happy Clients', value: '150+' },
    { icon: Zap, label: 'Years Experience', value: '8+' },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have a team of experienced and skilled developers specializing in different technologies. 
            Our commitment to excellence ensures client satisfaction and project success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 slide-up">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Client Trust & Satisfaction
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our success is measured by our clients' success. We build long-term partnerships 
              by delivering exceptional software solutions that exceed expectations and drive business growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                <p className="text-gray-600">Rigorous testing and code review processes</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Timely Delivery</h4>
                <p className="text-gray-600">On-time project completion with regular updates</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h4>
                <p className="text-gray-600">Continuous maintenance and technical support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;