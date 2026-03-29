'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=700&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-[#0F172A]/85" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-[#DC2626]">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have questions? Our team is ready to help. Reach out and we&apos;ll respond as quickly as possible.
          </p>
        </div>
      </section>

      {/* Floating Contact Cards */}
      <section className="relative z-10 -mt-16 pb-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Call Us",
                sub: "Available 24/7",
                value: "(555) 123-4567",
                href: "tel:5551234567",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
              },
              {
                title: "Email Us",
                sub: "Reply within 24h",
                value: "info@sohotrans.com",
                href: "mailto:info@sohotrans.com",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
              },
              {
                title: "Visit Us",
                sub: "Mon–Fri, 8am–6pm",
                value: "123 Transport Way, Houston TX",
                href: "#",
                icon: (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </>
                ),
              },
            ].map((card, i) => (
              <a
                key={i}
                href={card.href}
                className="group bg-white rounded-2xl shadow-xl p-7 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#DC2626] to-[#B91C1C] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-1">{card.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{card.sub}</p>
                <p className="text-[#DC2626] font-semibold">{card.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-3">Message Sent!</h3>
                  <p className="text-gray-500 mb-8 max-w-sm mx-auto">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#DC2626] text-white font-semibold rounded-xl hover:bg-[#B91C1C] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-[#DC2626]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#1F2937]">Send Us a Message</h2>
                  </div>
                  <p className="text-gray-500 mb-8 pl-1">Fill out the form and we&apos;ll respond shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-[#DC2626]">*</span>
                        </label>
                        <div className="relative">
                          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email Address <span className="text-[#DC2626]">*</span>
                        </label>
                        <div className="relative">
                          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                        <div className="relative">
                          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                        <div className="relative">
                          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Subject <span className="text-[#DC2626]">*</span>
                      </label>
                      <div className="relative">
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        <select name="subject" required value={formData.subject} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent appearance-none bg-white text-gray-700 transition-all">
                          <option value="">Select a subject</option>
                          <option value="quote">Request a Quote</option>
                          <option value="driver">Driver Application</option>
                          <option value="owner">Owner-Operator Program</option>
                          <option value="equipment">Equipment Sales/Rental</option>
                          <option value="support">Customer Support</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message <span className="text-[#DC2626]">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent resize-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-semibold rounded-xl hover:from-[#B91C1C] hover:to-[#991B1B] transition-all text-lg flex items-center justify-center space-x-2 shadow-lg shadow-red-100"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>Send Message</span>
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
                <div className="flex items-center space-x-3 mb-5">
                  <div className="w-10 h-10 bg-[#DC2626]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2937]">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM", open: true },
                    { day: "Saturday", hours: "9:00 AM – 2:00 PM", open: true },
                    { day: "Sunday", hours: "Closed", open: false },
                    { day: "Emergency Support", hours: "24/7 Available", highlight: true },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center py-2.5 px-3 rounded-lg ${
                        row.highlight
                          ? 'bg-[#DC2626]/5 border border-[#DC2626]/20'
                          : 'border-b border-gray-50 last:border-0'
                      }`}
                    >
                      <span className={`text-sm ${row.highlight ? 'font-semibold text-[#1F2937]' : 'text-gray-500'}`}>{row.day}</span>
                      <span className={`text-sm font-semibold ${row.highlight ? 'text-[#DC2626]' : row.open ? 'text-[#1F2937]' : 'text-gray-400'}`}>{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Immediate Help — with bg image */}
              <div className="relative rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-[#DC2626]/90" />
                <div className="relative p-7 text-white">
                  <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                  <p className="text-white/80 text-sm mb-5 leading-relaxed">
                    For urgent matters, our support team is available around the clock.
                  </p>
                  <a
                    href="tel:5551234567"
                    className="inline-flex items-center space-x-2 bg-white text-[#DC2626] font-semibold px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call (555) 123-4567</span>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
                <h3 className="text-lg font-bold text-[#1F2937] mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  {[
                    { label: "Facebook", hover: "hover:bg-blue-600", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                    { label: "Twitter / X", hover: "hover:bg-gray-900", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                    { label: "LinkedIn", hover: "hover:bg-blue-700", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                    { label: "Instagram", hover: "hover:bg-pink-600", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      title={s.label}
                      className={`w-10 h-10 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center ${s.hover} hover:text-white transition-all duration-200`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Contact by Department</h2>
            <p className="text-xl text-gray-500">Reach the right team directly for a faster response</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                dept: "Sales",
                desc: "Quotes & new business",
                email: "sales@sohotrans.com",
                phone: "(555) 123-4568",
                gradient: "from-blue-500 to-blue-600",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
              },
              {
                dept: "Driver Recruiting",
                desc: "Join our driver team",
                email: "recruiting@sohotrans.com",
                phone: "(555) 123-4569",
                gradient: "from-green-500 to-green-600",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
              },
              {
                dept: "Dispatch",
                desc: "Freight & logistics",
                email: "dispatch@sohotrans.com",
                phone: "(555) 123-4570",
                gradient: "from-orange-500 to-orange-600",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />,
              },
              {
                dept: "Billing",
                desc: "Invoices & payments",
                email: "billing@sohotrans.com",
                phone: "(555) 123-4571",
                gradient: "from-purple-500 to-purple-600",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />,
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className={`h-1.5 bg-gradient-to-r ${contact.gradient}`} />
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {contact.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2937] mb-1">{contact.dept}</h3>
                  <p className="text-gray-400 text-sm mb-4">{contact.desc}</p>
                  <div className="space-y-2.5">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center space-x-2 text-gray-500 hover:text-[#DC2626] transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="truncate">{contact.email}</span>
                    </a>
                    <a
                      href={`tel:${contact.phone.replace(/[^\d]/g, '')}`}
                      className="flex items-center space-x-2 text-gray-500 hover:text-[#DC2626] transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{contact.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
