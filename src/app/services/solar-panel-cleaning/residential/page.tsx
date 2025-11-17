import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function ResidentialSolarPanelCleaning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section
        className="relative pt-32 pb-24 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/residential_solar_panel.jpg)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 tracking-wide">
            RESIDENTIAL SOLAR PANEL CLEANING
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-10 tracking-wide font-light">
            PROLONG THE LIFE OF YOUR SOLAR PANEL INVESTMENT
          </p>
          <Link
            href="/quote"
            className="inline-block bg-[#a77332] text-white px-12 py-4 rounded-full text-lg font-normal hover:bg-[#8d5f28] transition-colors shadow-lg"
          >
            Start with a Quote
          </Link>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/1191166484/136305533.false"
                alt="Solar panel cleaning in progress"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Responding to the increase of residential solar panels, AwnGuard added Residential Solar Panel Cleaning to its service options in 2023. Our dedicated residential cleaning crews are trained for a variety of roofing types, with safety protocols in place and the shared goal to increase energy production. By offering before/after pictures of your solar panels, you can visually see the difference that cleaning will make - but the real benefit will come in the increased energy output. AwnGuard uses a deionized water system, which is the most effective cleaning method, avoiding the addition of unnecessary chemicals into the environment. It's a win-win!
              </p>

              <p>
                We also offer{' '}
                <Link
                  href="/services/solar-panel-cleaning/commercial"
                  className="text-[#425051] underline hover:text-[#a77332] transition-colors"
                >
                  commercial solar panel cleaning services
                </Link>
                .
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#a77332] text-white px-12 py-4 rounded-full text-lg font-normal hover:bg-[#8d5f28] transition-colors shadow-lg no-underline"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senate Bill Information Section */}
      <section className="py-16 bg-[#f8f7f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <p className="text-gray-600 italic leading-relaxed">
              Senate Bill 100 (2018) set a renewable goal of 60 percent renewables by 2030 and a longer-term goal of serving 100 percent of California's retail sales and state loads with RPS-certified renewable and zero carbon energy by 2045.
            </p>
            <p>
              <a
                href="http://www.energy.ca.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#425051] underline hover:text-[#a77332] transition-colors italic"
              >
                www.energy.ca.gov
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#89a8bc] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo - Left */}
            <div className="flex justify-start">
              <Image
                src="https://ext.same-assets.com/1191166484/1571360890.png"
                alt="AwnGuard Logo"
                width={200}
                height={100}
              />
            </div>

            {/* Navigation Links - Center */}
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-white justify-center">
              <Link href="/about-us" className="hover:text-[#a77332] transition-colors">
                About Us
              </Link>
              <Link href="/gallery" className="hover:text-[#a77332] transition-colors">
                Our Work
              </Link>
              <Link href="/contact" className="hover:text-[#a77332] transition-colors">
                Careers
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-[#a77332] transition-colors">
                Terms and Conditions
              </Link>
              <Link href="/privacy-policy" className="hover:text-[#a77332] transition-colors">
                Privacy Policy
              </Link>
            </nav>

            {/* Contact Info - Right */}
            <div className="text-white md:text-right space-y-2">
              <p className="text-2xl font-normal">
                <a href="tel:7604351367" className="hover:text-[#a77332] transition-colors">
                  (760) 435-1367
                </a>
              </p>
              <p className="text-lg">
                <a href="mailto:contact@awnguard.com" className="hover:text-[#a77332] transition-colors">
                  contact@awnguard.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
