'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send to notification API
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          formData: formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Banner Section */}
      <section className="pt-24 bg-gradient-to-r from-[#7FA8B8] to-[#99BAC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - CTA */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-wide">
                READY TO GET STARTED?
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-[#1A4D6D]">
                LET'S START WITH A QUOTE BASED ON YOUR SPECIFIC NEEDS.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <svg
                  className="w-16 h-16 md:w-20 md:h-20"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M 20 80 Q 20 20, 50 50"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M 45 45 L 60 50 L 45 55 Z"
                    fill="white"
                  />
                </svg>
                <Link
                  href="/quote"
                  className="bg-white text-[#1A4D6D] px-8 py-4 rounded-full text-lg md:text-xl font-bold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="text-white border-l-4 border-white pl-8">
              <p className="text-xl md:text-2xl font-bold mb-6">
                We look forward to becoming<br />Your Urban Oasis Partner.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="tel:+17604351367"
                  className="block text-2xl md:text-3xl font-bold hover:underline"
                >
                  (760) 435-1367
                </a>

                <a
                  href="mailto:contact@awnguard.com"
                  className="block text-lg md:text-xl hover:underline"
                >
                  contact@awnguard.com
                </a>

                <div className="text-lg md:text-xl">
                  <p className="font-semibold">Monday - Friday</p>
                  <p>9:00am - 4:30pm</p>
                </div>

                <div className="text-lg md:text-xl">
                  <p className="font-semibold">Saturday and Sunday</p>
                  <p>In The Field</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Contact Form Section */}
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#1A4D6D]">CONTACT</span>{' '}
              <span className="text-[#B8935E]">US</span>
            </h1>
            <p className="text-gray-600 text-lg mb-12">
              Have a question? Looking for more information? Send us a message below and we'll get back to you as soon as possible.
            </p>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us! We'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-red-50 border-2 border-red-500 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-red-800 mb-2">Submission Failed</h3>
                    <p className="text-red-700">
                      We're sorry, but there was an error sending your message. Please try again or contact us directly at{' '}
                      <a href="tel:+17604351367" className="underline">(760) 435-1367</a>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name, Phone, Email Row */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#1A4D6D] font-medium mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#1A4D6D] font-medium mb-2">
                    Phone:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#1A4D6D] font-medium mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all bg-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[#1A4D6D] font-medium mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all resize-none bg-transparent"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-16 py-3 border-2 border-[#B8935E] text-[#B8935E] rounded-full font-medium hover:bg-[#B8935E] hover:text-white transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

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
                <Link href="/" className="hover:text-primary transition-colors">About Us</Link>
                <Link href="/" className="hover:text-primary transition-colors">Our Work</Link>
                <Link href="/" className="hover:text-primary transition-colors">Careers</Link>
                <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms and Conditions</Link>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </nav>
            </div>
            <div className="text-white text-right">
              <p className="text-2xl font-bold mb-2">(760) 435-1367</p>
              <p className="text-lg">contact@awnguard.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
