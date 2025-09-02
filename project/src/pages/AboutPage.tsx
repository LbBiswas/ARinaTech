import React from 'react';
import { Target, Lightbulb, Shield, Rocket } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality Focus',
      description: 'We maintain the highest standards in code quality, testing, and user experience design.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions for our clients.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our robust development processes ensure scalable and maintainable software solutions.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'We optimize every aspect of our applications for speed, efficiency, and user satisfaction.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Arina Tech
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a passionate and innovative technology company dedicated to providing 
              full-cycle software development services that transform businesses and drive digital success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Expertise
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Arina Tech, we specialize in comprehensive software development across multiple platforms and technologies. 
                Our team combines years of experience with a passion for innovation to deliver solutions that not only meet 
                but exceed our clients' expectations.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From web and mobile applications to desktop software and games, we have the expertise to handle projects 
                of any complexity. Our focus on quality, scalability, and user experience ensures that every solution 
                we deliver stands the test of time.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'Python', 'Swift', 'Kotlin', 'Unity', '.NET', 'AWS'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="fade-in">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team working on software development"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="slide-up">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              To empower businesses and individuals with innovative software solutions that solve real-world problems, 
              enhance productivity, and create meaningful digital experiences that make a lasting impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400">Pushing boundaries with cutting-edge technology</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-400">Delivering superior quality in every project</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-gray-400">Building lasting relationships with our clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;