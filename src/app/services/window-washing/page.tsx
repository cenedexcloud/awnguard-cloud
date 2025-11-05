import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function WindowWashing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 uppercase">
            Professional Window Washing
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-8">
            Crystal clear, streak-free windows for residential and commercial properties up to 4 stories.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What We Do */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Window Washing Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At AwnGuard, we believe clean windows do more than let in light — they shape the experience of your property. Sparkling glass enhances curb appeal, uplifts tenants and visitors, and contributes to the kind of calm, well-maintained environment that defines an Urban Oasis.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              That's why we've added professional window washing to our services — built specifically for property managers who care about consistent quality and a reliable service partner.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <ul className="text-gray-600 leading-relaxed space-y-2 list-disc pl-5">
                <li>Specialize in low to mid-rise commercial properties</li>
                <li>All accessible exterior windows, doors, and glass panels</li>
                <li>Interior window cleaning</li>
                <li>Frames and sills wiped clean</li>
                <li>Pure water window cleaning using deionized water filtration</li>
                <li>Water-fed pole technology for streak-free finishes up to 5 stories</li>
                <li>No harsh chemicals – spot-free drying and no residue</li>
                <li>Safety-first operation with minimal equipment footprint</li>
              </ul>
              <div className="flex justify-center">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg w-[60%]">
                  <Image
                    src="/wipe.jpg"
                    alt="Professional window washing with squeegee"
                    width={360}
                    height={480}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Window Washing Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Residential Window Washing</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Single-family homes</li>
                  <li>Townhouses and condos</li>
                  <li>Interior and exterior cleaning</li>
                  <li>Screen cleaning and track detailing</li>
                  <li>Hard water stain removal</li>
                  <li>Flexible scheduling options</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Commercial Window Washing</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Office buildings (up to 4 stories)</li>
                  <li>Retail storefronts</li>
                  <li>Restaurants and cafes</li>
                  <li>Medical facilities</li>
                  <li>Regular maintenance programs</li>
                  <li>After-hours service available</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Professional Window Washing?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v18M3 12h18" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Enhanced Appearance</h3>
                <p className="text-gray-600 text-center text-sm">Clean windows dramatically improve curb appeal and create a positive impression.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Time Savings</h3>
                <p className="text-gray-600 text-center text-sm">Let professionals handle the time-consuming and sometimes dangerous task.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Streak-Free Results</h3>
                <p className="text-gray-600 text-center text-sm">Professional equipment and techniques ensure perfect, streak-free windows.</p>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16 bg-white border border-gray-200 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Window Washing Process</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Pre-Cleaning Inspection</h3>
                  <p className="text-gray-600">Assess window condition and identify any special requirements or problem areas.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Screen & Track Cleaning</h3>
                  <p className="text-gray-600">Remove and clean screens, detail window tracks and frames.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Professional Washing</h3>
                  <p className="text-gray-600">Use professional squeegees and eco-friendly solutions for streak-free cleaning.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Detail Work</h3>
                  <p className="text-gray-600">Edge detailing and spot removal for flawless results.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Final Inspection</h3>
                  <p className="text-gray-600">Quality check to ensure your complete satisfaction.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-lg text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Sparkling Clean Windows?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free quote for professional window washing services today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-block bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request a Free Quote
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
