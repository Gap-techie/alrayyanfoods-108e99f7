
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiryType: 'general'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // In a real app, you would send this data to your server or a form service
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
        inquiryType: 'general'
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact & Export Inquiries</h2>
          <p className="section-subtitle">
            Interested in our products? We export worldwide and offer flexible
            options for businesses of all sizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-al-green mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been received. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-al-green"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-al-green"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-al-green"
                  />
                </div>
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formState.inquiryType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-al-green"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="wholesale">Wholesale Order</option>
                    <option value="distribution">Distribution Partnership</option>
                    <option value="bulk">Bulk Purchase</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-al-green"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-playfair font-bold text-al-green mb-4">Our Office</h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-al-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">
                    <b>Al Rayyan Food imports</b> <br />
                    Old Yanbu Road, Old Industrial<br />
                    Madinah Al-Munawarah<br />
                    Kingdom of Saudi Arabia
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-playfair font-bold text-al-green mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-al-gold flex-shrink-0" />
                  <a href="mailto:info@alrayyanrice.com" className="text-gray-700 hover:text-al-green">
                    info@alrayyanfoods.co
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-al-gold flex-shrink-0" />
                  <a href="tel:+966575649264" className="text-gray-700 hover:text-al-green">
                    +966 575 649 264
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-playfair font-bold text-al-green mb-4">Export Information</h3>
              <p className="text-gray-700 mb-4">
                We pride ourselves on our efficient international shipping process, with export capabilities worldwide.
              </p>
              <ul className="space-y-2">
                {[
                  "Available in bulk quantities from 1 to 1000 metric tons",
                  "Customized packaging options for distributors",
                  // "HACCP and ISO certified export processes",
                  "Fast and reliable shipping worldwide"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-al-gold mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
