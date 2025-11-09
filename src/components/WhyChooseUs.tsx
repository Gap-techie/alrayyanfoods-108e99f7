import React from 'react';
import { Star, Award, Shield, Check, Clock, Leaf, Truck } from 'lucide-react';

const features = [
	{
		icon: <Star className="w-10 h-10 text-al-gold" />,
		title: 'Superior Aroma',
		description:
			'Our basmati rice is known for its exceptional fragrance, filling your kitchen with an enticing aroma during cooking.',
	},
	{
		icon: <Award className="w-10 h-10 text-al-gold" />,
		title: 'Premium Quality',
		description:
			'Only the finest 2% of harvested rice meets our strict quality standards, ensuring an exceptional dining experience.',
	},
	{
		icon: <Shield className="w-10 h-10 text-al-gold" />,
		title: '100% Pure Basmati',
		description:
			'We guarantee pure, unadulterated basmati with no blending of inferior rice varieties.',
	},
	{
		icon: <Leaf className="w-10 h-10 text-al-gold" />,
		title: 'Naturally Grown',
		description:
			'Our rice is cultivated using traditional methods that respect the environment and preserve the soil\'s health.',
	},
	{
		icon: <Clock className="w-10 h-10 text-al-gold" />,
		title: 'Aged to Perfection',
		description:
			'Our rice is aged for 12-24 months, enhancing its flavor, aroma, and enabling the grains to reach their full length.',
	},
	{
		icon: <Truck className="w-10 h-10 text-al-gold" />,
		title: 'Global Export',
		description:
			'We export to over 20 countries worldwide, with reliable shipping and consistent quality in every package.',
	},
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
	return (
		<div className="bg-gradient-to-br from-[#414d36] via-[#3a3f2d] to-[#232526] border border-al-gold shadow-md rounded-xl p-6 h-full flex flex-col transition duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-[#f7e08c]">
			<div className="mb-4">{feature.icon}</div>
			<h3 className="text-xl font-playfair font-bold text-white mb-2">
				{feature.title}
			</h3>
			<p className="text-gray-100">{feature.description}</p>
		</div>
	);
};

const WhyChooseUs = () => {
			return (
				<section id="why-us" className="section-padding bg-gradient-to-br from-[#f7e08c] via-[#e6d98a] to-[#b2e2c9] relative overflow-hidden">
					{/* Arabic Dot Pattern */}
					<div className="absolute inset-0 pointer-events-none z-0">
						<svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
							<circle cx="100" cy="100" r="4" fill="#c2b280" opacity="0.25" />
							<circle cx="300" cy="200" r="3" fill="#c2b280" opacity="0.18" />
							<circle cx="500" cy="400" r="5" fill="#c2b280" opacity="0.22" />
							<circle cx="900" cy="150" r="3.5" fill="#c2b280" opacity="0.20" />
							<circle cx="1200" cy="350" r="4.5" fill="#c2b280" opacity="0.15" />
							<circle cx="700" cy="500" r="2.5" fill="#c2b280" opacity="0.18" />
							<circle cx="400" cy="550" r="3.5" fill="#c2b280" opacity="0.13" />
							<circle cx="1100" cy="80" r="2.5" fill="#c2b280" opacity="0.18" />
						</svg>
					</div>
					<div className="container-custom relative z-10">
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

						<div
							className="mt-16 bg-gradient-to-r from-[#232526] via-[#414345] to-[#232526] p-8 rounded-xl text-center shadow-lg flex flex-col items-center justify-center w-full mx-auto md:p-12 border border-gray-800"
						>
							<h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-4">
								The Al Rayyan Difference
							</h3>
							<p className="text-gray-100 mb-6 max-w-2xl mx-auto text-base md:text-lg">
								From our carefully selected seeds to our meticulous processing and aging techniques, every step in our production chain is designed to deliver rice of exceptional quality.
							</p>
							<ul className="max-w-lg w-full mx-auto text-left space-y-2">
								{[
									'Hand-selected grains for consistent quality',
									'Traditional stone-ground milling preserves natural aroma',
									'Stringent quality control at every production stage',
									'Vacuum-sealed packaging to maintain freshness',
								].map((item, index) => (
									<li key={index} className="flex items-start">
										<Check className="w-5 h-5 text-al-gold mr-2 flex-shrink-0 mt-1" />
										<span className="text-white text-sm md:text-base font-medium">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
