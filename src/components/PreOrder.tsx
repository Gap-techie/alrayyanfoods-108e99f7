import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

interface PreOrderFormData {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    address: string;
    product: string;
    quantity: string;
    notes: string;
}

const PreOrder: React.FC = () => {
    const [formData, setFormData] = useState<PreOrderFormData>({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        address: '',
        product: 'Classic Basmati',
        quantity: '',
        notes: ''
    });

    const products = [
        "Royal Basmati",
        "Sella Basmati"
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct WhatsApp message
        const message = `*New Pre-Order Request*%0A
------------------------%0A
*Customer Details*%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Company: ${formData.companyName}%0A
Address: ${formData.address}%0A%0A
*Order Details*%0A
Product: ${formData.product}%0A
Quantity: ${formData.quantity} kg %0A
Notes: ${formData.notes}`;

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/966575649264?text=${message}`, '_blank');

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            companyName: '',
            address: '',
            product: 'Classic Basmati',
            quantity: '',
            notes: ''
        });
    };

    return (
        <section className="px-4 relative">
            <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full"
                    style={{
                        backgroundImage: 'radial-gradient(#2a593e 2px, transparent 2px)',
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>
            <div className="container-custom max-w-4xl relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[#2a593e] hover:text-[#00c400] transition-colors mb-8 group"
                >
                    <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-playfair font-bold text-[#2a593e] mb-4 drop-shadow-sm">Pre-Order</h2>
                    <p className="text-gray-600 text-lg">
                        Fill out the form below to receive a customized quote for your order
                    </p>
                </div>

                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-[#00c400]/10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00c400] focus:ring-2 focus:ring-[#00c400]/20 transition-colors placeholder-gray-400"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00c400] focus:ring-2 focus:ring-[#00c400]/20 transition-colors placeholder-gray-400"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00c400] focus:ring-2 focus:ring-[#00c400]/20 transition-colors placeholder-gray-400"
                                    placeholder="Your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00c400] focus:ring-2 focus:ring-[#00c400]/20 transition-colors placeholder-gray-400"
                                    placeholder="Your company name (optional)"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                                Address
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                rows={3}
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00c400] focus:ring-2 focus:ring-[#00c400]/20 transition-colors placeholder-gray-400"
                                placeholder="Your address (optional)"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="product" className="block text-gray-700 font-medium mb-2">
                                    Product *
                                </label>
                                <select
                                    id="product"
                                    name="product"
                                    required
                                    value={formData.product}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00c400] focus:ring-2 focus:ring-[#00c400]/20 transition-colors appearance-none"
                                >
                                    {products.map((product) => (
                                        <option key={product} value={product}>
                                            {product}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                                    Quantity (in kg) *
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    required
                                    min="1"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00c400] focus:ring-2 focus:ring-[#00c400]/20 transition-colors placeholder-gray-400"
                                    placeholder="Enter quantity"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
                                Additional Notes
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                rows={3}
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00c400] focus:ring-2 focus:ring-[#00c400]/20 transition-colors placeholder-gray-400"
                                placeholder="Any special requirements or notes"
                            />
                        </div>

                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#deff46] to-[#00c400] text-black px-12 py-4 rounded-full font-medium flex items-center gap-2 transition-all hover:scale-105 text-lg shadow-lg hover:shadow-xl hover:brightness-105"
                            >
                                Submit your order
                                <FaWhatsapp className="w-6 h-6" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PreOrder; 