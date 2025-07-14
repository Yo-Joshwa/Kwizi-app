
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 text-sm mt-[2%] py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
        <div className="mb-6 footer-brand">
          <h2 className="text-xl font-semibold text-white">Kwizi</h2>
          <p className="mt-2">Test your knowledge, level up your mind.</p>
        </div>
        <div className="flex gap-8 flex-wrap">
          <div>
            <h3 className="mb-2 text-gray-100 font-medium">Quick Links:</h3>
            <a href="/" className="block text-gray-400 mb-1 hover:text-white">Home</a>
            <a href="/about" className="block text-gray-400 mb-1 hover:text-white">About Us</a>
            <a href="/contact" className="block text-gray-400 mb-1 hover:text-white">Contact</a>
          </div>
          <div>
            <h3>Legal</h3>
            <a href="/privacyPolicy">Privacy Policy</a>
            <br/>
            <a href="/termsOfService">Terms of Service</a>
          </div>
          <div>
            <h3>Connect</h3>
            <a href="https://twitter.com/Kwizi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareXTwitter} /> Twitter</a>
            <br />
            <a href="https://facebook.com/Kwizi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
            <br />
            <a href="https://instagram.com/Kwizi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /> Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-wrap justify-between text-gray-400">
        <p>© {new Date().getFullYear()} Kwizi. All rights reserved.</p>
        <p><a href="/">Back to top</a></p>
      </div>
    </footer>
  );
}

export default Footer;
