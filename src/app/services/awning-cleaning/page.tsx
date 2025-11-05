import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function AwningCleaning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 uppercase">
            Awning Cleaning Services
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-8">
            The Best Awning Care Solution in Southern California
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
          {/* Awning Cleaning Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left: Image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/awn_cleaning.jpg"
                  alt="Professional Awning Cleaning"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right: Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 uppercase">
                  Awning Cleaning
                </h2>
                <div className="w-full h-0.5 bg-gradient-to-r from-amber-600 to-transparent mb-6"></div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  In business for more than 22 years, we know how to do awning cleaning, care and maintenance to keep your beautiful shade structures an inviting place to visit and relax. We offer regular awning cleaning to help you preserve your property's awning investment, and our scheduling system makes it easy to have ongoing five-star service.
                </p>

                {/* Two Column Benefits */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Professional Awning Cleaning */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      Professional Awning Cleaning will:
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Clean out deeply embedded soil, grime, mold, and pollution</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Help bring back and retain original color with the use of optical brighteners</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Leave your awning areas rinsed and free from residual dirt – giving your storefront or backyard oasis a fresh, clean and inviting look</span>
                      </li>
                    </ul>
                  </div>

                  {/* Consistent Awning Cleaning */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      Consistent Awning Cleaning will:
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Help control existing mold, mildew, and fungus growth on awning fabric while helping prevent new growth</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Extend the life of awning fabric by removing dirt which, once embedded can weaken the fabric</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Protect against harmful UV damage, bird droppings, and pollution</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Request Quote Button */}
                <Link
                  href="/quote"
                  className="inline-block border-2 border-amber-600 text-amber-600 px-10 py-3 rounded-full text-base font-semibold hover:bg-amber-600 hover:text-white transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </section>

          {/* Blue Banner - Service Promise */}
          <section className="mb-16 bg-[#1D5F7F] rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              {/* Left: Image */}
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/forourpromise.jpg"
                  alt="Professional Cleaning"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right: Content */}
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
                  OUR SERVICE PROMISE
                </h2>
                <ul className="space-y-4 mb-8 text-lg">
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We use a gentle, hand cleaning process</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We use manufacturer-approved cleaners and protectants</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We extend the usable life of awning fabric by removing embedded soil, grime, mold and pollution which can weaken fabric</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We help bring back and retain original color with the use of optical brighteners</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We leave your awning areas rinsed and free form residual dirt after service</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We squeegee excess water off of window surfaces</span>
                  </li>
                </ul>
                <Link
                  href="/quote"
                  className="inline-block bg-white text-[#1D5F7F] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Today
                </Link>
              </div>
            </div>
          </section>

          {/* Why Clean Your Awnings Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Image */}
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/awningpic.jpg"
                  alt="Yellow and white striped awnings"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right: Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">
                  WHY CLEAN YOUR AWNINGS?
                </h2>
                <div className="w-48 h-1 bg-[#8B6F47] mb-8"></div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-600 mb-4">
                    Top three causes of premature awning wear:
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>
                        Use of pressure washer machine on awnings – Awning fabric is not designed to withstand high pressure water
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>
                        Improper chemicals / detergents / degreasers / solvents – Only manufacturer recommended cleaning agents and protectants should be used
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>Lack of cleaning</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-600 mb-4">
                    How often should awning cleaning be performed?
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>
                        Monthly or bi-monthly service is great for high traffic areas, coastal regions, or properties with bird issues
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>Quarterly is recommended for most commercial properties</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>
                        Semi-annual service is often chosen for HOA or other residential accounts
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-600 mb-6">
                  At AwnGuard, we work hard to minimize our impact on normal business operations. We do this by scheduling work after hours for businesses and on weekdays for our apartment and HOA customers. We are always happy to customize your cleaning schedule.
                </p>

                <Link
                  href="/quote"
                  className="inline-block border-2 border-[#8B6F47] text-[#8B6F47] px-10 py-3 rounded-full text-lg font-semibold hover:bg-[#8B6F47] hover:text-white transition-colors"
                >
                  Let's Get Started!
                </Link>
              </div>
            </div>
          </section>

          {/* Banner Image */}
          <section className="mb-16">
            <Link
              href="/services/solar-panel-cleaning"
              className="block cursor-pointer hover:opacity-90 transition-opacity relative"
              style={{ pointerEvents: 'auto' }}
            >
              <Image
                src="/banner3.jpg"
                alt="Solar Panel Cleaning Banner - Click to Learn More"
                width={1200}
                height={300}
                className="w-full h-auto rounded-xl pointer-events-auto"
                priority
              />
            </Link>
          </section>

          {/* Benefits */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Professional Awning Cleaning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Enhanced Curb Appeal</h3>
                  <p className="text-gray-600">Clean awnings dramatically improve your property's appearance and make a positive first impression.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Extended Lifespan</h3>
                  <p className="text-gray-600">Regular cleaning removes harmful contaminants that can degrade awning fabric over time.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Cost Savings</h3>
                  <p className="text-gray-600">Preventative maintenance is more affordable than replacement or major repairs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Health & Safety</h3>
                  <p className="text-gray-600">Remove mold, mildew, and allergens that can affect air quality and health.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Cleaning Process</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">1. Inspection</h3>
                <p className="text-gray-600">We thoroughly inspect your awnings to assess their condition and identify any specific problem areas.</p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">2. Pre-Treatment</h3>
                <p className="text-gray-600">Stubborn stains and heavily soiled areas receive special pre-treatment with eco-friendly solutions.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">3. Hand Cleaning</h3>
                <p className="text-gray-600">Our specialized hand cleaning technique ensures thorough cleaning without damaging the fabric.</p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">4. Rinsing & Protection</h3>
                <p className="text-gray-600">We thoroughly rinse all cleaning agents and can apply protective treatments to help maintain cleanliness.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">5. Final Inspection</h3>
                <p className="text-gray-600">We conduct a final inspection to ensure your complete satisfaction with our work.</p>
              </div>
            </div>
          </section>

          {/* Types of Awnings */}
          <section className="mb-16 bg-white border border-gray-200 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Awnings We Clean</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Residential Awnings</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Window awnings</li>
                  <li>Patio covers</li>
                  <li>Door canopies</li>
                  <li>Deck awnings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Commercial Awnings</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Storefront awnings</li>
                  <li>Restaurant canopies</li>
                  <li>Hotel entrances</li>
                  <li>Building facades</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Specialty Structures</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Shade structures</li>
                  <li>Outdoor tents</li>
                  <li>Canopies</li>
                  <li>Sun sails</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-lg text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Restore Your Awnings?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join over 5,000 satisfied customers who trust AwnGuard for professional awning cleaning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/#testimonials"
                className="inline-block border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                See Customer Reviews
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
