import React, { useState } from 'react';

export default function ITBAServiceWebsite() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      'http://localhost:5000/api/leads',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
    );

    if (!response.ok) {
      throw new Error('Failed to submit');
    }

    const data = await response.json();

    alert('Inquiry Submitted Successfully!');

    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });

    console.log(data);

  } catch (error) {
    console.error(error);
    alert('Submission Failed');
  }
};
  const services = [
  {
    title: 'Business Analysis & Requirement Gathering',
    desc: 'Transform business goals into actionable technical requirements, BRDs, user stories, workflows, and implementation roadmaps.'
  },
  {
    title: 'Digital Transformation Consulting',
    desc: 'Modernize operations using AI, automation, analytics, and scalable digital ecosystems tailored for enterprises and SMEs.'
  },
  {
    title: 'Website & E-Commerce Solutions',
    desc: 'End-to-end website planning, UX strategy, CMS integrations, analytics setup, and scalable e-commerce consulting.'
  },
  {
    title: 'AI & Analytics Enablement',
    desc: 'Leverage dashboards, reporting, automation workflows, and AI-assisted operations to improve business efficiency.'
  }
];

  const faqs = [
    {
      q: 'What industries do you work with?',
      a: 'We support publishing, e-commerce, IT services, retail, logistics, and growing digital-first businesses.'
    },
    {
      q: 'Do you provide technical development?',
      a: 'Yes. We help with requirement planning, vendor coordination, UX strategy, and full website implementation support.'
    },
    {
      q: 'Can you help with AI adoption?',
      a: 'Absolutely. We help businesses identify practical AI use cases, workflow automation opportunities, and digital optimization strategies.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-cyan-500/30">
              BA
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide">Nexora IT Consulting</h1>
              <p className="text-sm text-slate-400">Business Analysis • Digital Growth • AI Strategy</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#about" className="hover:text-cyan-400 transition">About Us</a>
            <a href="#solutions" className="hover:text-cyan-400 transition">Solutions</a>
            <a href="#faq" className="hover:text-cyan-400 transition">FAQ</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>

          <button className="bg-cyan-500 hover:bg-cyan-400 transition text-black px-5 py-2 rounded-xl font-semibold shadow-lg shadow-cyan-500/20">
            Book Consultation
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
              AI-Driven IT Business Consulting
            </div>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Building Digital Growth Through
              <span className="text-cyan-400"> Smart IT Solutions</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              We help businesses transform digitally through business analysis, AI enablement, process optimization, and scalable website strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-500 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-cyan-400 transition">
                Get Started
              </button>

              <button className="border border-slate-700 px-6 py-3 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition">
                Explore Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
                <p className="text-slate-400 text-sm">Projects Supported</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">98%</h3>
                <p className="text-slate-400 text-sm">Client Satisfaction</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
                <p className="text-slate-400 text-sm">Consulting Support</p>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div id="contact" className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">Request a Consultation</h3>
              <p className="text-slate-400">Capture leads and connect with potential business clients.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm text-slate-400 block mb-2">Full Name</label>
                <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your name"
  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400"
/>
              </div>

              <div>
                <label className="text-sm text-slate-400 block mb-2">Email Address</label>
                <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400"
/>
              </div>

              <div>
                <label className="text-sm text-slate-400 block mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 block mb-2">Service Interested In</label>
                <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400"
>
                  <option>Business Analysis</option>
                  <option>Digital Transformation</option>
                  <option>AI Consulting</option>
                  <option>Website Development</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-400 block mb-2">Project Details</label>
                <textarea
  rows="4"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Tell us about your requirements"
  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400"
/>
              </div>

              <button
  type="submit"
  className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/20"
>
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Enterprise-focused consulting and implementation services for businesses looking to scale digitally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Nexora IT Consulting is a modern IT business consulting firm focused on helping companies transition into scalable digital ecosystems.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              Our expertise spans business analysis, AI-driven transformation, digital product strategy, website modernization, analytics, and operational optimization.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">AI</h3>
                <p className="text-slate-400 text-sm">Automation & AI adoption consulting</p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">UX</h3>
                <p className="text-slate-400 text-sm">Customer-centric digital experiences</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-slate-800 rounded-[32px] p-10 backdrop-blur-xl">
            <h3 className="text-3xl font-bold mb-8">Why Businesses Choose Us</h3>

            <div className="space-y-6">
              {[
                'Requirement analysis and strategic consulting',
                'AI-powered digital transformation approach',
                'Scalable and future-ready website ecosystems',
                'Data analytics and reporting enablement',
                'Cross-functional collaboration and implementation support'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold text-sm mt-1">
                    ✓
                  </div>
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Integrated Digital Solutions</h2>
          <p className="text-slate-400 max-w-3xl mx-auto mb-16">
            Essential tools and business integrations commonly required for modern IT consulting and lead-generation websites.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'CRM Integration',
              'Google Analytics & Tag Manager',
              'SEO Optimization',
              'Live Chat Support',
              'Lead Management Dashboard',
              'Email Automation'
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition"
              >
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">{tool}</h3>
                <p className="text-slate-400 text-sm">
                  Enterprise-ready implementation support for business scalability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">
              Common questions businesses ask before starting their digital transformation journey.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-black font-bold text-xl">
                BA
              </div>

              <div>
                <h3 className="font-bold text-lg">Nexora IT Consulting</h3>
                <p className="text-slate-500 text-sm">Digital Growth & IT Strategy</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses with scalable IT consulting, AI transformation, and digital solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-5">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-cyan-400">About Us</a></li>
              <li><a href="#services" className="hover:text-cyan-400">Services</a></li>
              <li><a href="#faq" className="hover:text-cyan-400">FAQ</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5">Legal</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-cyan-400">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400">Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Email: hello@nexorait.com</li>
              <li>Phone: +91 98XXXXXX21</li>
              <li>Mon - Sat | 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 py-6 text-center text-slate-500 text-sm">
          © 2026 Nexora IT Consulting. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
