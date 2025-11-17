import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

export default function WindowWashing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Bubbles Background */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bubbles2.jpg"
            alt="Bubbles Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 tracking-wide">
            WINDOW WASHING SERVICE
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md">
                <Image
                  src="https://ext.same-assets.com/1191166484/3558857120.webp"
                  alt="Window Washing"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  WINDOW WASHING
                </h2>
                <div className="w-32 h-1 mb-6" style={{ backgroundColor: '#C8A67A' }}></div>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At AwnGuard, we believe clean windows do more than let in light — they shape the experience of your property. Sparkling glass enhances curb appeal, uplifts tenants and visitors, and contributes to the kind of calm, well-maintained environment that defines an Urban Oasis.
                </p>
                <p>
                  That's why we've added professional window washing to our services — built specifically for property managers who care about consistent quality and a reliable service partner.
                </p>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Specialize in low to mid-rise commercial properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>All accessible exterior windows, doors, and glass panels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Interior window cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Frames and sills wiped clean</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Pure water window cleaning using deionized water filtration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Water-fed pole technology for streak-free finishes up to 5 stories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>No harsh chemicals – spot-free drying and no residue</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Safety-first operation with minimal equipment footprint</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo - Left */}
            <div className="flex justify-start">
              <Image
                src="https://ext.same-assets.com/1191166484/1472326302.png"
                alt="AwnGuard Logo"
                width={200}
                height={80}
              />
            </div>

            {/* Navigation Links - Center */}
            <nav className="flex flex-wrap gap-6 text-white justify-center">
              <a href="#about" className="text-[#000000] hover:text-primary transition-colors">About Us</a>
              <a href="/gallery" className="text-[#000000] hover:text-primary transition-colors">Gallery</a>
              <a href="/blog" className="text-[#000000] hover:text-primary transition-colors">Blog</a>
              <a href="/testimonials" className="text-[#000000] hover:text-primary transition-colors">Testimonials</a>
              <a href="/terms-and-conditions" className="text-[#000000] hover:text-primary transition-colors">Terms and Conditions</a>
              <a href="/privacy-policy" className="text-[#000000] hover:text-primary transition-colors">Privacy Policy</a>
            </nav>

            {/* Contact Info - Right */}
            <div className="text-[#000000] text-right">
              <p className="text-2xl font-bold mb-2">(760) 435-1367</p>
              <p className="text-lg">contact@awnguard.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
