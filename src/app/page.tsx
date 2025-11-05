'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ExitIntentPopup, { ExitIntentPopupRef } from '@/components/ExitIntentPopup';
import FreeQuotePopup, { FreeQuotePopupRef } from '@/components/FreeQuotePopup';
import FloatingRocketButton from '@/components/FloatingRocketButton';
import FloatingQuickQuoteButton from '@/components/FloatingQuickQuoteButton';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [awningsCount, setAwningsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [awningsDropdownOpen, setAwningsDropdownOpen] = useState(false);
  const [mobileAwningsOpen, setMobileAwningsOpen] = useState(false);
  const [solarDropdownOpen, setSolarDropdownOpen] = useState(false);
  const [mobileSolarOpen, setMobileSolarOpen] = useState(false);
  const [ourWorkDropdownOpen, setOurWorkDropdownOpen] = useState(false);
  const [mobileOurWorkOpen, setMobileOurWorkOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const exitPopupRef = useRef<ExitIntentPopupRef>(null);
  const freeQuotePopupRef = useRef<FreeQuotePopupRef>(null);

  const testimonials = [
    {
      name: 'Matthew Johnson',
      text: 'AwnGuard has employed competent and hard working individuals. They do a great job servicing my commercial...',
      rating: 5,
      timeAgo: '26 days ago',
    },
    {
      name: 'Matt Dolan',
      text: 'All the benefits of an Owner/Operator who started the business herself. Great service, experience, and best...',
      rating: 5,
      timeAgo: '2 months ago',
    },
    {
      name: 'Jason Ivey',
      text: "I'm not even a customer of these guys. I'm a customer of a business that they were cleaning for and the guy cleanin...",
      rating: 5,
      timeAgo: '4 months ago',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleRocketClick = () => {
    exitPopupRef.current?.open();
  };

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate awnings count to 1,000,000
          const awningsDuration = 2000;
          const awningsIncrement = 1000000 / (awningsDuration / 16);
          let awningsCounter = 0;
          const awningsTimer = setInterval(() => {
            awningsCounter += awningsIncrement;
            if (awningsCounter >= 1000000) {
              setAwningsCount(1000000);
              clearInterval(awningsTimer);
            } else {
              setAwningsCount(Math.floor(awningsCounter));
            }
          }, 16);

          // Animate years count to 20
          const yearsDuration = 1500;
          const yearsIncrement = 20 / (yearsDuration / 16);
          let yearsCounter = 0;
          const yearsTimer = setInterval(() => {
            yearsCounter += yearsIncrement;
            if (yearsCounter >= 20) {
              setYearsCount(20);
              clearInterval(yearsTimer);
            } else {
              setYearsCount(Math.floor(yearsCounter));
            }
          }, 16);

          // Animate customers count to 5,000
          const customersDuration = 1800;
          const customersIncrement = 5000 / (customersDuration / 16);
          let customersCounter = 0;
          const customersTimer = setInterval(() => {
            customersCounter += customersIncrement;
            if (customersCounter >= 5000) {
              setCustomersCount(5000);
              clearInterval(customersTimer);
            } else {
              setCustomersCount(Math.floor(customersCounter));
            }
          }, 16);

          // Animate rating to 4.8
          const ratingDuration = 1200;
          const ratingIncrement = 4.8 / (ratingDuration / 16);
          let ratingCounter = 0;
          const ratingTimer = setInterval(() => {
            ratingCounter += ratingIncrement;
            if (ratingCounter >= 4.8) {
              setRatingCount(4.8);
              clearInterval(ratingTimer);
            } else {
              setRatingCount(Math.floor(ratingCounter * 10) / 10);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="AwnGuard Logo"
                width={200}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Home</a>

              {/* Awnings Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAwningsDropdownOpen(true)}
                onMouseLeave={() => setAwningsDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1">
                  Awnings
                  <ChevronDown className={`w-4 h-4 transition-transform ${awningsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {awningsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <a
                      href="/services/awning-cleaning"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Awning Cleaning
                    </a>
                    <a
                      href="/services/awning-repair"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Awning Repairs
                    </a>
                  </div>
                )}
              </div>

              <a href="#windows" className="text-gray-700 hover:text-primary font-medium">Windows</a>

              {/* Solar Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolarDropdownOpen(true)}
                onMouseLeave={() => setSolarDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1">
                  Solar
                  <ChevronDown className={`w-4 h-4 transition-transform ${solarDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {solarDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <a
                      href="/services/solar-panel-cleaning"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Commercial Solar Panel Cleaning
                    </a>
                    <a
                      href="/services/solar-panel-cleaning"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Residential Solar Panel Cleaning
                    </a>
                  </div>
                )}
              </div>

              {/* Our Work Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOurWorkDropdownOpen(true)}
                onMouseLeave={() => setOurWorkDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1">
                  Our Work
                  <ChevronDown className={`w-4 h-4 transition-transform ${ourWorkDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {ourWorkDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <a
                      href="/our-work"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Our Work
                    </a>
                    <a
                      href="/industries"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Industries
                    </a>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1">
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <a
                      href="#about"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      About Us
                    </a>
                    <a
                      href="#urban-oasis"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Urban Oasis Partner
                    </a>
                    <a
                      href="/blog"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Blog
                    </a>
                    <a
                      href="/testimonials"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Happy Customers
                    </a>
                    <a
                      href="#careers"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Careers
                    </a>
                    <a
                      href="/faq"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      Our FAQs
                    </a>
                  </div>
                )}
              </div>

              <a href="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</a>
              <a href="/contact" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                Contact Us
              </a>
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
              <a href="#" className="block text-gray-700 hover:text-primary font-medium py-2">Home</a>

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
                    <a
                      href="/services/awning-cleaning"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Awning Cleaning
                    </a>
                    <a
                      href="/services/awning-repair"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Awning Repairs
                    </a>
                  </div>
                )}
              </div>

              <a href="#windows" className="block text-gray-700 hover:text-primary font-medium py-2">Windows</a>

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
                    <a
                      href="/services/solar-panel-cleaning"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Commercial Solar Panel Cleaning
                    </a>
                    <a
                      href="/services/solar-panel-cleaning"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Residential Solar Panel Cleaning
                    </a>
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
                    <a
                      href="/our-work"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our Work
                    </a>
                    <a
                      href="/industries"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Industries
                    </a>
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
                    <a
                      href="#about"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </a>
                    <a
                      href="#urban-oasis"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Urban Oasis Partner
                    </a>
                    <a
                      href="#blog"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blog
                    </a>
                    <a
                      href="#testimonials"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Happy Customers
                    </a>
                    <a
                      href="#careers"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Careers
                    </a>
                    <a
                      href="/faq"
                      className="block text-gray-600 hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our FAQs
                    </a>
                  </div>
                )}
              </div>

              <a href="/contact" className="block text-gray-700 hover:text-primary font-medium py-2">Contact</a>
              <a href="/contact" className="block bg-primary text-white px-6 py-3 rounded-full text-center hover:bg-primary/90">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1133923052?autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0"
            className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full"
            style={{
              transform: 'translate(-50%, -50%)',
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            title="AwnGuard Hero Video"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 py-20">
          <div className="mb-8">
            <Image
              src="/logo-white.png"
              alt="AwnGuard Logo White"
              width={300}
              height={120}
              className="mx-auto mb-8"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide">
            WE'VE CLEANED OVER 1,000,000<br />AWNINGS!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 tracking-widest uppercase">
            Proudly offering awning and solar panel cleaning<br />
            services in Southern California
          </p>
          <a
            href="/quote"
            className="inline-block bg-primary text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* Statistics Banner */}
      <section ref={statsRef} className="bg-[#1a1a1a] py-10 md:py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mb-8">
            {/* Awnings Cleaned */}
            <div className="text-white transform hover:scale-105 transition-transform duration-300">
              <div className="mb-3">
                <svg className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-2 text-white hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="10" rx="1" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                  <circle cx="12" cy="16" r="1" fill="currentColor" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tabular-nums">
                {awningsCount.toLocaleString()}+
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-300 px-2">Awnings Cleaned</div>
            </div>

            {/* Years of Experience */}
            <div className="text-white transform hover:scale-105 transition-transform duration-300">
              <div className="mb-3">
                <svg className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-2 text-white hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tabular-nums">
                {yearsCount}+
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-300 px-2">Years of Experience</div>
            </div>

            {/* Happy Customers */}
            <div className="text-white transform hover:scale-105 transition-transform duration-300">
              <div className="mb-3">
                <svg className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-2 text-white hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tabular-nums">
                {customersCount.toLocaleString()}+
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-300 px-2">Happy Customers</div>
            </div>

            {/* Google Rating */}
            <div className="text-white transform hover:scale-105 transition-transform duration-300">
              <div className="mb-3">
                <svg className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-2 text-white hover:text-yellow-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tabular-nums">
                {ratingCount.toFixed(1)}
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-300 px-2">Google Rating</div>
            </div>
          </div>

          <div className="text-center border-t border-gray-700 pt-6 md:pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-white">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl md:text-2xl animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>★</span>
                ))}
              </div>
              <span className="text-base md:text-lg font-medium">4.8/5 on Google Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Urban Oasis Banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden">
            <div className="relative h-64 lg:h-80">
              <Image
                src="/urban-oasis-banner.jpg"
                alt="Urban Oasis Movement"
                width={1440}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase text-gray-800">
            Our Key Services
          </h2>
          <div className="w-full h-1 bg-primary mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/awning-cleaning-icon.jpg"
                  alt="Awning Cleaning"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Awning Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Make a great first impression! Let AwnGuard clean and maintain your awnings and shade structures with our specialized hand cleaning process.
              </p>
              <a href="/services/awning-cleaning" className="inline-block border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                Learn More
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/solar-panel-icon.jpg"
                  alt="Solar Panel Cleaning"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Solar Panel Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Keep your solar panel investment producing at peak performance with our tailored cleaning plan designed to meet the needs of both residential and commercial properties.
              </p>
              <a href="/services/solar-panel-cleaning" className="inline-block border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                Learn More
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/awning-repair-icon.jpg"
                  alt="Awning Repair, Replace, New Installation"
                  width={267}
                  height={267}
                  className="w-64 h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Awning Repair, Replace, New Installation</h3>
              <p className="text-gray-600 mb-6">
                AwnGuard partners with specialized awning manufacturers to provide the highest standard of quality workmanship and industrial fabrics.
              </p>
              <a href="/services/awning-repair" className="inline-block border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                Learn More
              </a>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/window-washing-icon.jpg"
                  alt="Window Washing"
                  width={267}
                  height={267}
                  className="w-64 h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Window Washing</h3>
              <p className="text-gray-600 mb-6">
                AwnGuard provides low to mid-rise window washing services. We safely clean up to 4 stories from the ground. Streak-free!
              </p>
              <a href="/services/window-washing" className="inline-block border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                Learn More
              </a>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/pressure-washing-icon.jpg"
                  alt="Pressure Washing"
                  width={267}
                  height={267}
                  className="w-64 h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Pressure Washing</h3>
              <p className="text-gray-600 mb-6">
                AwnGuard offers complete cleaning and maintenance for outdoor spaces, including pressure washing. Our regular service will keep your property looking its best, all the time.
              </p>
              <a href="/services/pressure-washing" className="inline-block border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Panel Cleaning Section */}
      <section id="solar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-secondary">SOLAR PANEL</span>{' '}
            <span className="text-primary">CLEANING</span>
          </h2>

          <div className="relative max-w-4xl mx-auto mb-8">
            <div ref={sliderContainerRef} className="relative overflow-hidden rounded-lg" style={{ height: '600px' }}>
              {/* Before Image */}
              <div className="absolute inset-0">
                <Image
                  src="https://ext.same-assets.com/1191166484/414198147.false"
                  alt="Before Cleaning"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full font-bold">
                  Before
                </div>
              </div>

              {/* After Image */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 0 0 ${sliderPosition}%)`,
                }}
              >
                <Image
                  src="https://ext.same-assets.com/1191166484/2105894563.false"
                  alt="After Cleaning"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-bold">
                  After
                </div>
              </div>

              {/* Slider */}
              <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-10"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  const onMouseMove = (moveEvent: MouseEvent) => {
                    if (sliderContainerRef.current) {
                      const rect = sliderContainerRef.current.getBoundingClientRect();
                      const x = moveEvent.clientX - rect.left;
                      const percentage = (x / rect.width) * 100;
                      setSliderPosition(Math.max(0, Math.min(100, percentage)));
                    }
                  };
                  const onMouseUp = () => {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                  };
                  document.addEventListener('mousemove', onMouseMove);
                  document.addEventListener('mouseup', onMouseUp);
                }}
                onTouchStart={(e) => {
                  const onTouchMove = (moveEvent: TouchEvent) => {
                    if (sliderContainerRef.current && moveEvent.touches[0]) {
                      const rect = sliderContainerRef.current.getBoundingClientRect();
                      const x = moveEvent.touches[0].clientX - rect.left;
                      const percentage = (x / rect.width) * 100;
                      setSliderPosition(Math.max(0, Math.min(100, percentage)));
                    }
                  };
                  const onTouchEnd = () => {
                    document.removeEventListener('touchmove', onTouchMove as EventListener);
                    document.removeEventListener('touchend', onTouchEnd);
                  };
                  document.addEventListener('touchmove', onTouchMove as EventListener);
                  document.addEventListener('touchend', onTouchEnd);
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg pointer-events-none">
                  <div className="flex items-center gap-1">
                    <ChevronLeft size={20} />
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/services/solar-panel-cleaning"
              className="inline-block bg-primary text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - Transform Property */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust AwnGuard for professional cleaning services.
            Get your fast quote today and see the difference we can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/quote"
              className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Your Fast Quote
            </a>
            <a
              href="/gallery"
              className="inline-block border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full text-lg font-semibold hover:border-secondary hover:text-secondary hover:scale-105 transition-all duration-300"
            >
              View More Results
            </a>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Customer Testimonial
            </h2>
            <p className="text-lg text-gray-600">
              Hear what our satisfied customers have to say
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ width: '836px', height: '512px' }}>
              <video
                controls
                playsInline
                preload="metadata"
                poster="/cust_test.jpg"
                width="836"
                height="512"
                className="w-full h-full object-cover"
                style={{ maxWidth: '836px', maxHeight: '512px' }}
              >
                <source src="/awnguard_testimonial_-_vigilucci.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* About/Team Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1191166484/3084931785.false"
                alt="AwnGuard Team"
                width={600}
                height={800}
                className="w-full rounded-lg"
              />
            </div>

            <div>
              <p className="text-secondary text-lg mb-4 uppercase tracking-wide">When you're ready to get started</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                We are the team you're looking for!
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                AwnGuard has been cleaning commercial properties in Southern California for more than 20 years, with an initial focus on industrial fabrics such as awnings, shade structures and large outdoor tents. We have expanded that business to also include pressure washing, exterior window washing and in 2023 have added solar panel cleaning for both residential and commercial properties. We are proud to be in this growing field as California strives to meet its renewable energy goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/quote"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors text-center"
                >
                  Get Started with a Quote
                </a>
                <a
                  href="/cleaning-services"
                  className="inline-block border-2 border-secondary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors text-center"
                >
                  More About Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-secondary">OUR</span>{' '}
              <span className="text-primary">HAPPY CLIENTS</span>
            </h2>

            {/* Google Reviews Badge */}
            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg mb-8">
              <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
                <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-1 text-yellow-400 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-medium">4.8/5 based on 100+ Google Reviews</p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Enhanced Review Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    index === currentTestimonial ? 'border-primary scale-105' : 'border-gray-100'
                  }`}
                >
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4 text-yellow-400 text-xl">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-4 line-clamp-4 leading-relaxed">{testimonial.text}</p>

                  {/* Google Logo Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4" viewBox="0 0 48 48" fill="none">
                      <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                      <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                      <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                      <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
                    </svg>
                    <span className="text-xs text-gray-500">Posted on Google</span>
                  </div>

                  {/* Reviewer Info */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.timeAgo}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-3 mb-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'w-8 bg-primary'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.google.com/search?q=awnguard+oceanside+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full text-lg font-semibold hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none">
                  <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                  <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                  <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                  <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
                </svg>
                Read All Google Reviews
              </a>
              <a
                href="/testimonials"
                className="inline-block bg-primary text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                See More Testimonials
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="https://ext.same-assets.com/1191166484/1472326302.png"
                alt="AwnGuard Logo"
                width={200}
                height={80}
                className="mb-6"
              />
              <nav className="flex flex-wrap gap-6 text-white">
                <a href="#about" className="hover:text-primary transition-colors">About Us</a>
                <a href="/gallery" className="hover:text-primary transition-colors">Gallery</a>
                <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
                <a href="/testimonials" className="hover:text-primary transition-colors">Testimonials</a>
                <a href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms and Conditions</a>
                <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
              </nav>
            </div>
            <div className="text-white text-right">
              <p className="text-2xl font-bold mb-2">(760) 435-1367</p>
              <p className="text-lg">contact@awnguard.com</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      <ExitIntentPopup ref={exitPopupRef} />

      {/* Free Quote Popup */}
      <FreeQuotePopup ref={freeQuotePopupRef} />

      {/* Floating Rocket Button */}
      <FloatingRocketButton onClick={handleRocketClick} />

      {/* Floating Quick Quote Button */}
      <FloatingQuickQuoteButton />
    </div>
  );
}
