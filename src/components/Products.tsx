
import React from 'react';

const productsData = [
  {
    id: 1,
    name: "Classic Basmati",
    description: "Our traditional long-grain basmati, aged for 12 months to develop perfect aroma and texture.",
    image: "/images/classic-basmati.jpg",
    features: ["Extra Long Grain", "Premium Quality", "12-Month Aged"]
  },
  {
    id: 2,
    name: "Royal Basmati",
    description: "Our flagship product, aged 24 months for unparalleled flavor and aroma, perfect for special occasions.",
    image: "/images/royal-basmati.jpg",
    features: ["24-Month Aged", "Signature Aroma", "Exceptional Length"]
  },
  {
    id: 3,
    name: "Brown Basmati",
    description: "Wholesome brown basmati rice with the bran layer intact, offering more fiber and nutrients.",
    image: "/images/brown-basmati.jpg",
    features: ["Higher Fiber", "Nutrient-Rich", "Authentic Taste"]
  },
  {
    id: 4,
    name: "Sella Basmati",
    description: "Parboiled basmati that maintains its shape perfectly when cooked, ideal for biryanis and pilaus.",
    image: "/images/sella-basmati.jpg",
    features: ["Parboiled", "Non-Sticky", "Perfect for Biryani"]
  }
];

const ProductCard = ({ product }: { product: typeof productsData[0] }) => {
  return (
    <div className="glass-card p-6 group h-full flex flex-col">
      <div className="relative mb-6 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-playfair font-bold text-al-green mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {product.features.map((feature, index) => (
          <span 
            key={index} 
            className="text-xs bg-al-gold-faded text-al-gold-dark px-3 py-1 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section id="products" className="section-padding bg-gradient-to-b from-al-cream to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Discover our premium selection of authentic Pakistani basmati rice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-al-green mb-6">Our Quality Certifications</h3>
          <div className="flex justify-center flex-wrap gap-8">
            <div className="glass-panel px-6 py-4 rounded-lg">
              <p className="font-semibold">ISO 22000</p>
            </div>
            <div className="glass-panel px-6 py-4 rounded-lg">
              <p className="font-semibold">HACCP Certified</p>
            </div>
            <div className="glass-panel px-6 py-4 rounded-lg">
              <p className="font-semibold">Halal Certified</p>
            </div>
            <div className="glass-panel px-6 py-4 rounded-lg">
              <p className="font-semibold">Organic Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
