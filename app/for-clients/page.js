import Link from 'next/link';

export default function ForClientsPage() {

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Modern Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&auto=format&fit=crop&q=80"
          alt="Freight logistics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937]/92 via-[#0f172a]/88 to-[#0a0a0a]/92"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Shipping
                <span className="block bg-gradient-to-r from-[#DC2626] to-[#f87171] bg-clip-text text-transparent">
                  Reimagined
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Next-generation logistics solutions that transform how your business moves freight. Fast, reliable, and transparent.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-[#DC2626] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <a
                  href="#services"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center backdrop-blur-sm"
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* Modern Feature Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: 'Live Tracking', desc: 'Real-time GPS updates' },
                { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>, title: 'Account Manager', desc: 'Dedicated support' },
                { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: '24/7 Support', desc: 'Always available' },
                { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, title: 'Flexible Schedule', desc: 'Your timeline' }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#DC2626]/30 transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-white mb-4">{feature.icon}</div>
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Modern Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mt-4 mb-6">Our Freight Services</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Comprehensive transportation solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                title: "Full Truckload (FTL)",
                description: "Dedicated truck for your shipment. Ideal for large volumes requiring direct delivery with no stops.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
                title: "Less Than Truckload (LTL)",
                description: "Share truck space with other shipments. Cost-effective solution for smaller freight volumes.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Expedited Shipping",
                description: "Time-critical deliveries with guaranteed pickup and delivery windows. Available 24/7.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                title: "Flatbed Services",
                description: "Specialized equipment for oversized, heavy, or irregularly shaped cargo.",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
                title: "Temperature Controlled",
                description: "Refrigerated transport for perishables, pharmaceuticals, and sensitive goods.",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Hazmat Transport",
                description: "Certified hazardous materials transportation with compliant equipment.",
                gradient: "from-red-500 to-rose-500"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 border border-transparent hover:border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-[#DC2626] transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center text-[#DC2626] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern How It Works Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple, streamlined process from quote to delivery
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Request Quote", description: "Submit your shipment details online or call us", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
                { step: "02", title: "Get Pricing", description: "Receive competitive rates within hours", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { step: "03", title: "Schedule Pickup", description: "Choose your preferred date and time", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
                { step: "04", title: "Track & Receive", description: "Monitor and receive your delivery", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 text-center hover:border-[#DC2626]/50 hover:bg-[#1f1f1f] transition-all duration-500 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#f87171] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-[#DC2626]/20 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[#DC2626] font-mono text-sm">{item.step}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mt-4 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Specialized experience across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Manufacturing",
              "Retail",
              "Automotive",
              "Agriculture",
              "Construction",
              "Food & Beverage",
              "Pharmaceuticals",
              "E-commerce"
            ].map((industry, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-[#1F2937] to-[#374151] text-white rounded-2xl p-6 text-center overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626] to-[#f87171] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <span className="font-semibold text-lg">{industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1F2937] via-[#0f172a] to-[#0a0a0a] relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-[#DC2626] to-[#f87171] bg-clip-text text-transparent">Ship?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Get a competitive quote for your freight needs today. Our team is standing by to help transform your logistics.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#DC2626] text-white font-semibold rounded-2xl hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-all duration-300 text-lg"
          >
            Request a Quote
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
