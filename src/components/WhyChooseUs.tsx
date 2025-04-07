
import React from 'react';
import { Star, Award, Shield, Check, Clock, Leaf, Truck } from 'lucide-react';

const features = [
  {
    icon: <Star className="w-10 h-10 text-al-gold" />,
    title: "Superior Aroma",
    description: "Our basmati rice is known for its exceptional fragrance, filling your kitchen with an enticing aroma during cooking."
  },
  {
    icon: <Award className="w-10 h-10 text-al-gold" />,
    title: "Premium Quality",
    description: "Only the finest 2% of harvested rice meets our strict quality standards, ensuring an exceptional dining experience."
  },
  {
    icon: <Shield className="w-10 h-10 text-al-gold" />,
    title: "100% Pure Basmati",
    description: "We guarantee pure, unadulterated basmati with no blending of inferior rice varieties."
  },
  {
    icon: <Leaf className="w-10 h-10 text-al-gold" />,
    title: "Naturally Grown",
    description: "Our rice is cultivated using traditional methods that respect the environment and preserve the soil's health."
  },
  {
    icon: <Clock className="w-10 h-10 text-al-gold" />,
    title: "Aged to Perfection",
    description: "Our rice is aged for 12-24 months, enhancing its flavor, aroma, and enabling the grains to reach their full length."
  },
  {
    icon: <Truck className="w-10 h-10 text-al-gold" />,
    title: "Global Export",
    description: "We export to over 20 countries worldwide, with reliable shipping and consistent quality in every package."
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="glass-card p-6 h-full flex flex-col transition duration-300 hover:translate-y-[-5px]">
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-xl font-playfair font-bold text-al-green mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-al-green-faded">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Al Rayyan</h2>
          <p className="section-subtitle">
            Discover what makes our basmati rice stand out from the rest
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        <div className="mt-16 glass-panel p-8 rounded-xl text-center">
          <h3 className="text-2xl font-playfair font-bold text-al-green mb-4">The Al Rayyan Difference</h3>
          <p className="text-gray-700 mb-6">
            From our carefully selected seeds to our meticulous processing and aging techniques, 
            every step in our production chain is designed to deliver rice of exceptional quality.
          </p>
          <ul className="max-w-lg mx-auto text-left space-y-2">
            {[
              "Hand-selected grains for consistent quality",
              "Traditional stone-ground milling preserves natural aroma",
              "Stringent quality control at every production stage",
              "Vacuum-sealed packaging to maintain freshness"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-al-gold mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
