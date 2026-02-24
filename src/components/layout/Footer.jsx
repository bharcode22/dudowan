import React from 'react'
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import Container from './Container';
import logo from '../../assets/images/logo/dudowan logo.webp';

const Footer = () => {
  return (
    <footer className="glass-dark border-t border-white/10 text-white/50">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Dudowan Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl text-white">Doru Coffee</span>
            </Link>
            <p className="text-sm">
              Menghadirkan kopi terbaik dari petani lokal untuk penikmat kopi sejati.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Desa Ulian, Kintamani, Bangli</li>
              <li>Bali, Indonesia</li>
              <li>gedeputraswastika@gmail.com</li>
              <li>+62 813-3844-0900</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>

            <div className="flex flex-col space-y-3 text-sm">
              {/* Facebook */}
              {/* <a
                href="https://www.facebook.com/search/top?q=I%20Made%20Surawan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>I Made Surawan</span>
              </a> */}

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dorucoffeebean"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>dorucoffeebean</span>
              </a>

              {/* Email */}
              <a
                href="mailto:gedeputraswastika@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>gedeputraswastika@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Kopi Ngopi. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;