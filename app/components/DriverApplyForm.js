'use client';

import { useState } from 'react';

export default function DriverApplyForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', experience: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) return;
    setLoading(true);
    try {
      await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Drivers',
          data: form,
        }),
      });
      setSuccess(true);
      setForm({ name: '', phone: '', email: '', experience: '' });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 className="text-xl font-bold text-[#1F2937] mb-2">Application Sent!</h3>
        <p className="text-gray-500 text-sm">We&apos;ll contact you within 24 hours.</p>
        <button onClick={() => setSuccess(false)} className="mt-4 text-[#DC2626] font-semibold text-sm hover:underline">
          Submit another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Quick Apply</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
        />
        <select
          value={form.experience}
          onChange={e => setForm(p => ({ ...p, experience: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
        >
          <option value="">Years of Experience</option>
          <option value="1-2 Years">1-2 Years</option>
          <option value="3-5 Years">3-5 Years</option>
          <option value="5+ Years">5+ Years</option>
        </select>
        <button
          onClick={handleSubmit}
          disabled={loading || !form.name || !form.phone || !form.email}
          className="w-full py-4 bg-[#DC2626] text-white font-semibold rounded-lg hover:bg-[#B91C1C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Submit Application'}
        </button>
      </div>
    </div>
  );
}
