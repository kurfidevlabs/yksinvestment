
import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './icons';

const Footer: React.FC = () => {
  const quickLinks = ["Home", "E-Bikes", "Solar", "Payment Plans", "About", "Contact"];
  const socialIcons = [
    { icon: <FacebookIcon className="w-6 h-6" />, name: 'Facebook' },
    { icon: <InstagramIcon className="w-6 h-6" />, name: 'Instagram' },
    { icon: <LinkedinIcon className="w-6 h-6" />, name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-wider">YkS</h3>
            <p className="text-gray-400">
              Powering sustainable rides & renewable futures.
            </p>
          </div>

          {/* Center Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-[#00BFA6] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: +234-xxx-xxx</li>
              <li>Email: info@yks.com</li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              {socialIcons.map(social => (
                <a key={social.name} href="#" aria-label={social.name} className="text-gray-400 hover:text-[#00BFA6] transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000]/30 py-4 px-8">
        <p className="text-center text-sm text-gray-500">
          © 2025 YkS Investment. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
