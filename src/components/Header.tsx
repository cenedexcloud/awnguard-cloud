'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [awningsDropdownOpen, setAwningsDropdownOpen] = useState(false);
  const [mobileAwningsOpen, setMobileAwningsOpen] = useState(false);
  const [solarDropdownOpen, setSolarDropdownOpen] = useState(false);
  const [mobileSolarOpen, setMobileSolarOpen] = useState(false);
  const [ourWorkDropdownOpen, setOurWorkDropdownOpen] = useState(false);
  const [mobileOurWorkOpen, setMobileOurWorkOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="AwnGuard Logo"
                width={200}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>

            {/* Awnings Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAwningsDropdownOpen(true)}
              onMouseLeave={() => setAwningsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1 py-2">
                Awnings
                <ChevronDown className={`w-4 h-4 transition-transform ${awningsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {awningsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <Link
                      href="/services/awning-cleaning"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Awning Cleaning
                    </Link>
                    <Link
                      href="/services/awning-repair"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Awning Repairs
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/services/window-washing" className="text-gray-700 hover:text-primary font-medium">Windows</Link>

            {/* Solar Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolarDropdownOpen(true)}
              onMouseLeave={() => setSolarDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1 py-2">
                Solar
                <ChevronDown className={`w-4 h-4 transition-transform ${solarDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {solarDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <Link
                      href="/services/solar-panel-cleaning/commercial"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Commercial Solar Panel Cleaning
                    </Link>
                    <Link
                      href="/services/solar-panel-cleaning/residential"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Residential Solar Panel Cleaning
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Our Work Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOurWorkDropdownOpen(true)}
              onMouseLeave={() => setOurWorkDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1 py-2">
                Our Work
                <ChevronDown className={`w-4 h-4 transition-transform ${ourWorkDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {ourWorkDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <Link
                      href="/our-work"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Our Work
                    </Link>
                    <Link
                      href="/industries"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Industries
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1 py-2">
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <Link
                      href="/about-us"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/urban-oasis"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Urban Oasis Partner
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/testimonials"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Happy Customers
                    </Link>
                    <Link
                      href="/careers"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/about-us#faq"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Our FAQs
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
            <Link href="/quote" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>

            {/* Mobile Awnings Dropdown */}
            <div>
              <button
                onClick={() => setMobileAwningsOpen(!mobileAwningsOpen)}
                className="w-full flex items-center justify-between text-gray-700 hover:text-primary font-medium py-2"
              >
                Awnings
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAwningsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAwningsOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/services/awning-cleaning"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Awning Cleaning
                  </Link>
                  <Link
                    href="/services/awning-repair"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Awning Repairs
                  </Link>
                </div>
              )}
            </div>

            <Link href="/services/window-washing" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>Windows</Link>

            {/* Mobile Solar Dropdown */}
            <div>
              <button
                onClick={() => setMobileSolarOpen(!mobileSolarOpen)}
                className="w-full flex items-center justify-between text-gray-700 hover:text-primary font-medium py-2"
              >
                Solar
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolarOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileSolarOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/services/solar-panel-cleaning/commercial"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Commercial Solar Panel Cleaning
                  </Link>
                  <Link
                    href="/services/solar-panel-cleaning/residential"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Residential Solar Panel Cleaning
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Our Work Dropdown */}
            <div>
              <button
                onClick={() => setMobileOurWorkOpen(!mobileOurWorkOpen)}
                className="w-full flex items-center justify-between text-gray-700 hover:text-primary font-medium py-2"
              >
                Our Work
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileOurWorkOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileOurWorkOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/our-work"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Work
                  </Link>
                  <Link
                    href="/industries"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Industries
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between text-gray-700 hover:text-primary font-medium py-2"
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/about-us"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/urban-oasis"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Urban Oasis Partner
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/testimonials"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Happy Customers
                  </Link>
                  <Link
                    href="/careers"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link
                    href="/about-us#faq"
                    className="block text-gray-600 hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our FAQs
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link href="/quote" className="block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
