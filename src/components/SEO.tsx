
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SEO = ({
  title = "Al Rayyan - Premium Pakistani Basmati Rice",
  description = "Experience authentic Pakistani Basmati rice of the highest quality. Al Rayyan brings traditionally grown, aromatic long-grain rice from the fertile plains of Punjab to your table.",
  keywords = "basmati rice, Pakistani rice, premium rice, rice exporter, long grain rice, Al Rayyan rice, buy basmati rice, wholesale rice, bulk rice supply",
  ogImage = "/images/og-image.jpg"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Al Rayyan",
          "url": "https://alrayyanrice.com",
          "logo": "/lovable-uploads/71d0eb0a-071d-4b53-b9d0-0377fba97623.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lahore",
            "addressRegion": "Punjab",
            "addressCountry": "Pakistan"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+923001234567",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.facebook.com/alrayyanrice",
            "https://www.instagram.com/alrayyanrice",
            "https://twitter.com/alrayyanrice"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
