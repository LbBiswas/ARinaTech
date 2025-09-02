import React from 'react';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Arina Tech</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Innovating digital solutions with cutting-edge technology. We transform ideas into powerful software that drives business success.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>animeshkumar744@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mobile Apps</li>
              <li className="hover:text-white transition-colors cursor-pointer">PC Applications</li>
              <li className="hover:text-white transition-colors cursor-pointer">Game Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Custom Software</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Our Team</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Arina Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;