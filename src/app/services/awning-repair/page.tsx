import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function AwningRepair() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 uppercase">
            Awning Manufacture Connection
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-8">
            Top quality awnings!
          </p>
          <Link
            href="/quote"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Awning Recover & New Awnings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left Image */}
            <div className="md:w-1/3 flex-shrink-0">
              <Image
                src="/awn.jpg"
                alt="Striped awning"
                width={400}
                height={500}
                className="rounded-2xl object-cover w-full"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-2/3">
              {/* Awning Recover */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
                  AWNING RECOVER
                </h2>
                <div className="w-16 h-0.5 bg-gray-800 mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  While cleaning and maintaining awning fabric can dramatically increase the useable life of awnings, all fabric eventually deteriorates. Recovering existing frames can be a great way to revitalize a property for about half of the capital expense of fully replacing the awnings.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  AwnGuard works for hand in hand with reputable awning manufacturers, who uphold the highest standard of quality workmanship and value.
                </p>
              </div>

              {/* New Awnings */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
                  NEW AWNINGS
                </h2>
                <div className="w-16 h-0.5 bg-gray-800 mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Recent building purchases, new construction, new restaurant locations – or just to deal with long-standing shade needs are all reasons for new awning construction. Well designed and custom-built awnings can add tremendous curb appeal while they provide signage, shade, and protection from the elements. Let us help by connecting you with one of the reputable awning manufacturers with who we have worked for years.
                </p>

                <Link
                  href="/quote"
                  className="inline-block border-2 border-primary text-primary px-10 py-3 rounded-full text-base font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  Start with a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What We Do */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Awning Solutions</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              AwnGuard partners with specialized awning manufacturers to provide the highest standard of quality
              workmanship and industrial fabrics for repairs, replacements, and new installations. Whether your
              awning has minor damage or needs complete replacement, we have the expertise to restore it to
              perfect condition.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With over 20 years of experience in the awning industry, we understand the unique requirements of
              both residential and commercial awnings. Our team delivers durable, aesthetically pleasing results
              that will last for years to come.
            </p>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Awning Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Awning Repairs</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
                  <li>Tear and rip repairs</li>
                  <li>Frame repairs and welding</li>
                  <li>Motor and mechanism repairs</li>
                  <li>Support arm replacement</li>
                  <li>Hardware replacement</li>
                  <li>Seam reinforcement</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-primary p-6 rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18M15 3v18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Fabric Replacement</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
                  <li>Complete fabric re-covering</li>
                  <li>Premium industrial fabrics</li>
                  <li>UV-resistant materials</li>
                  <li>Waterproof options</li>
                  <li>Custom colors and patterns</li>
                  <li>Manufacturer warranties</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">New Installations</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
                  <li>Custom awning design</li>
                  <li>Residential installations</li>
                  <li>Commercial storefronts</li>
                  <li>Retractable awnings</li>
                  <li>Fixed awnings</li>
                  <li>Professional installation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Types of Awnings */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Awnings We Work With</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Residential Awnings</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span><strong>Window Awnings:</strong> Reduce heat and UV exposure while adding curb appeal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span><strong>Patio & Deck Awnings:</strong> Create comfortable outdoor living spaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span><strong>Door Canopies:</strong> Protect entryways from weather</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span><strong>Retractable Awnings:</strong> Flexible shade solutions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Commercial Awnings</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span><strong>Storefront Awnings:</strong> Attract customers and display branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span><strong>Restaurant Awnings:</strong> Expand outdoor dining areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span><strong>Building Awnings:</strong> Large-scale commercial installations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span><strong>Entrance Canopies:</strong> Professional, welcoming entrances</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Choose AwnGuard?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">20+</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Years Experience</h3>
                <p className="text-gray-600 text-sm">Two decades of awning expertise</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Materials</h3>
                <p className="text-gray-600 text-sm">Premium industrial fabrics</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Skilled, professional installers</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600 text-sm">We stand behind our work</p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16 bg-white border border-gray-200 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Free Consultation</h3>
                  <p className="text-gray-600">We assess your awning's condition and discuss your needs and preferences.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Custom Quote</h3>
                  <p className="text-gray-600">Receive a detailed, transparent quote with no hidden fees.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Fabric & Design Selection</h3>
                  <p className="text-gray-600">Choose from our wide selection of premium fabrics, colors, and patterns.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Professional Installation</h3>
                  <p className="text-gray-600">Our expert team completes the work efficiently with minimal disruption.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Quality Assurance</h3>
                  <p className="text-gray-600">Final inspection and walkthrough to ensure your complete satisfaction.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-lg text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Repair or Replace Your Awning?</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a free consultation with our awning experts today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-block bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:7604351367"
                className="inline-block border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Call (760) 435-1367
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-12 mt-16">
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
