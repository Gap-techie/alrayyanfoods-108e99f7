import React from 'react';

const productsData = [
  {
    id: 1,
    name: "Classic Basmati",
    description: "Our traditional long-grain basmati, aged for 12 months to develop perfect aroma and texture.",
    image: "/lovable-uploads/d9492563-c3f4-41f0-9e4d-7046c89aa5d9.png",
    features: ["Extra Long Grain", "Premium Quality", "12-Month Aged"]
  },
  {
    id: 2,
    name: "Royal Basmati",
    description: "Our flagship product, aged 24 months for unparalleled flavor and aroma, perfect for special occasions.",
    image: "/lovable-uploads/238c4562-6bfc-4c66-8327-f94c7ca7fe7f.png",
    features: ["24-Month Aged", "Signature Aroma", "Exceptional Length"]
  },
  {
    id: 3,
    name: "Brown Basmati",
    description: "Wholesome brown basmati rice with the bran layer intact, offering more fiber and nutrients.",
    image: "/lovable-uploads/d9492563-c3f4-41f0-9e4d-7046c89aa5d9.png",
    features: ["Higher Fiber", "Nutrient-Rich", "Authentic Taste"]
  },
  {
    id: 4,
    name: "Sella Basmati",
    description: "Parboiled basmati that maintains its shape perfectly when cooked, ideal for biryanis and pilaus.",
    image: "/lovable-uploads/238c4562-6bfc-4c66-8327-f94c7ca7fe7f.png",
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
          className="w-full h-60 object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-playfair font-bold text-al-green mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {product.features.map((feature, index) => (
          <span
            key={index}
            className="text-xs bg-al-gold/10 text-al-green px-3 py-1 rounded-full"
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
      </div>
    </section>
  );
};

export default Products;
