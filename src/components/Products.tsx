import React from 'react';

const productsData = [
  {
    id: 1,
    name: "Royal Basmati",
    description: "12-month aged premium basmati rice from Pakistan, known for its extra-long grains, sweet aroma, and creamy texture. Perfect for  Kabsa, Bukhari, Biryani, Pulao, and festive meals. Enjoy authentic flavor and fluffy, separate grains in every dish.",
    image: "/lovable-uploads/238c4562-6bfc-4c66-8327-f94c7ca7fe7f.png",
    features: [
      "Extra Long Grain",
      "Nutrient-Rich", 
      "Aged Basmati Rice",
      "Pakistani Premium Rice",
      "Extra-Long Grain Rice",
      "Fluffy and Separate Grains",
      "Creamy Texture",
      "Authentic Flavor"
    ]
  },
  {
    id: 2,
    name: "Golden Basmati",
    description: "Premium aged golden basmati rice from Pakistan, known for its distinct golden hue, floral aroma, and buttery flavor. Enjoy fluffy, separate grains in biryanis, pulao, and special occasions. A true culinary treasure for authentic and aromatic rice dishes",
    image: "/lovable-uploads/d9492563-c3f4-41f0-9e4d-7046c89aa5d9.png",
    features: [
      "Signature Basmati Aroma",  
      "Nutrient-Rich",
      "Premium Aged",
      "Fluffy Rice",
      "Golden Sella Rice",
      "Extra Long Grain",
      "Authentic Taste",
      "Perfect for Eid and weddings"
    ]
  }
];

const ProductCard = ({ product }: { product: typeof productsData[0] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 group h-full flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-xl mb-6 sm:mb-0">
      <div className="relative mb-6 overflow-hidden rounded-xl flex items-center justify-center bg-al-cream-light" style={{ minHeight: '220px' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-auto h-40 sm:h-56 object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-playfair font-bold text-al-green mb-2 text-center">{product.name}</h3>
      <p className="text-gray-700 mb-4 flex-grow text-center text-sm sm:text-base">{product.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto justify-center">
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
  <section id="products" className="section-padding bg-gradient-to-br from-[#fef5e7] via-[#fff9e6] to-[#f5f3e8] pb-8">
      <div className="container-custom px-2 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl font-bold font-playfair mb-2">Our Products</h2>
          <p className="section-subtitle text-base sm:text-lg text-gray-700">
            Discover our premium selection of authentic Pakistani basmati rice
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-center">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
