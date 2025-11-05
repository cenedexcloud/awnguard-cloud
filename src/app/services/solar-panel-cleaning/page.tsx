'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';

const BeforeAfterSlider = dynamic(() => import('@/components/BeforeAfterSlider'), {
  ssr: false,
});

export default function SolarPanelCleaning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">SOLAR PANEL</span>{' '}
            <span className="text-primary">CLEANING</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-8">
            Prolong the life of your solar panel investment
          </p>
          <Link
            href="/quote"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start with a Quote
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How We Do It Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              {/* Left: Image */}
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/personcln.jpg"
                  alt="Solar Panel Cleaning Service"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right: Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">
                  HOW WE DO IT
                </h2>
                <div className="w-32 h-1 bg-[#8B6F47] mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Let us partner with you to keep your solar array operating at capacity. Awn-Guard uses a de-ionized water system which is the most effective cleaning method and avoids adding unnecessary chemicals into the environment. It's a win win!
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 uppercase">
                  CLEANING = PRODUCTIVITY!
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  In our ongoing transition towards sustainable energy solutions, such as solar power, the paramount objective remains the preservation of peak efficiency. To achieve this goal, adhering to a regular maintenance schedule for your solar panels is not just advisable; it's imperative. Panel manufacturers themselves recommend cleaning on a quarterly or semi-annual basis, underscoring the pivotal role this practice plays in ensuring that your solar investment consistently operates at its optimal capacity. By heeding these recommendations, you not only enhance the environmental benefits associated with solar energy but also bolster your financial prospects by maximizing the energy output of your solar asset.
                </p>
              </div>
            </div>

            {/* YouTube Video Section */}
            <div className="mb-12">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg overflow-hidden aspect-video shadow-lg">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/QZwMiwNGMxw"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title="Solar Panel Cleaning Video"
                    frameBorder="0"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mb-12">
              <p className="text-gray-600 leading-relaxed mb-6">
                At Awn-Guard, our expertise lies in delivering exceptional maintenance services tailored to the specific needs of small to mid-sized photovoltaic systems within Southern California's urban landscape. With our dedicated team, you can trust that your solar panels will receive the meticulous care and attention they require. Moreover, we prioritize comprehensive insurance coverage, providing you with the peace of mind that comes with knowing your investment is safeguarded against unforeseen events. Additionally, we uphold stringent environmental standards, diligently following best practices for waste water run-off and reclamation regulations. This commitment not only aligns with our dedication to sustainability but also ensures that our cleaning processes have minimal impact on the surrounding ecosystem, preserving the integrity of the natural environment in which your solar panels are situated.
              </p>

              <div className="text-center">
                <Link
                  href="/quote"
                  className="inline-block border-2 border-[#8B6F47] text-[#8B6F47] px-10 py-3 rounded-full text-lg font-semibold hover:bg-[#8B6F47] hover:text-white transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </section>

          {/* Before and After Sliders */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* First Comparison */}
              <BeforeAfterSlider
                beforeImage="/solar-before-1.jpg"
                afterImage="/solar-after-1.jpg"
                beforeAlt="Commercial Solar Panel Before Cleaning"
                afterAlt="Commercial Solar Panel After Cleaning"
              />

              {/* Second Comparison */}
              <BeforeAfterSlider
                beforeImage="/solar-before-2.jpg"
                afterImage="/solar-after-2.jpg"
                beforeAlt="Residential Solar Panel Before Cleaning"
                afterAlt="Residential Solar Panel After Cleaning"
              />
            </div>
          </section>

          {/* Why Clean Solar Panels */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Clean Your Solar Panels?</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dirty solar panels can lose up to 25% of their efficiency! Dust, bird droppings, pollen, and other
                  debris prevent sunlight from reaching the photovoltaic cells, significantly reducing your energy production
                  and return on investment.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Regular professional cleaning ensures your panels operate at maximum efficiency, saving you money and
                  helping California meet its renewable energy goals.
                </p>
              </div>
              <div className="bg-primary/10 p-8 rounded-lg">
                <div className="text-center mb-4">
                  <div className="text-5xl font-bold text-primary mb-2">25%</div>
                  <p className="text-gray-700 font-semibold">Average efficiency loss from dirty panels</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">98%</div>
                  <p className="text-gray-700 font-semibold">Efficiency with regular cleaning</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Offered */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Solar Panel Cleaning Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-4">Residential Solar Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Tailored cleaning plans for homeowners who want to maximize their solar investment. We provide:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                  <li>Flexible scheduling to fit your needs</li>
                  <li>Safe cleaning methods that won't void warranties</li>
                  <li>Eco-friendly cleaning solutions</li>
                  <li>Detailed before-and-after documentation</li>
                  <li>Maintenance plans for year-round optimization</li>
                </ul>
                <Link
                  href="/services/solar-panel-cleaning/residential"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Learn More →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-secondary mb-4">Commercial Solar Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive solutions for businesses and large solar installations:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                  <li>Large-scale cleaning operations</li>
                  <li>Minimal disruption to your operations</li>
                  <li>Regular maintenance contracts available</li>
                  <li>Performance monitoring and reporting</li>
                  <li>Experienced team with proper safety equipment</li>
                </ul>
                <Link
                  href="/services/solar-panel-cleaning/commercial"
                  className="inline-block bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Professional Cleaning Process</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Safety Assessment</h3>
                  <p className="text-gray-600">We evaluate the site for safe access and identify any potential hazards before beginning work.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Pre-Cleaning Inspection</h3>
                  <p className="text-gray-600">We document the current condition and performance of your solar panels with photos and notes.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Debris Removal</h3>
                  <p className="text-gray-600">Carefully remove loose debris, leaves, and bird droppings without scratching the panels.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Washing</h3>
                  <p className="text-gray-600">Use purified water and soft brushes to gently clean panels without harsh chemicals or pressure washing.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">5</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Spot-Free Rinse</h3>
                  <p className="text-gray-600">Thoroughly rinse with deionized water to prevent water spots and mineral deposits.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">6</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Check & Documentation</h3>
                  <p className="text-gray-600">Final inspection and photographic documentation of the cleaned panels for your records.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16 bg-white border-2 border-gray-200 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Professional Solar Panel Cleaning</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Maximum Efficiency</h3>
                <p className="text-gray-600 text-sm">Restore your panels to peak performance and energy production.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Extended Lifespan</h3>
                <p className="text-gray-600 text-sm">Prevent buildup that can cause hot spots and damage panels.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Better ROI</h3>
                <p className="text-gray-600 text-sm">Maximize your return on investment with optimal energy output.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">How often should solar panels be cleaned?</h3>
                <p className="text-gray-600">We recommend cleaning 2-4 times per year, depending on your location and environmental factors like dust, pollen, and bird activity.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Will cleaning void my warranty?</h3>
                <p className="text-gray-600">No! Our cleaning methods are manufacturer-approved and won't void your warranty. We use gentle techniques specifically designed for solar panels.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Can I clean them myself?</h3>
                <p className="text-gray-600">While possible, we don't recommend it due to safety concerns and the risk of damage. Our professionals have the proper equipment, training, and insurance.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-lg text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Maximize Your Solar Investment?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get your solar panels cleaned by Southern California's trusted professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Your Cleaning
              </Link>
              <Link
                href="/#testimonials"
                className="inline-block border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                See Our Results
              </Link>
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
