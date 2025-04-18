import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  locale?: string;
  articleMeta?: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    section: string;
    tags: string[];
  };
  productMeta?: {
    price: string;
    currency: string;
    availability: string;
    brand: string;
  };
}

const SEO = ({
  title = "Premium Pakistani Basmati Rice | Al Rayyan | Top Quality Rice in Saudi Arabia",
  description = "Buy authentic Punjab Pakistani Basmati rice in Saudi Arabia. Al Rayyan delivers premium, aromatic long-grain rice perfect for Kabsa, Bukhari, and Mandi dishes. Order online or find in stores.",
  keywords = "basmati rice Saudi Arabia, Pakistani basmati rice, premium Punjab rice, rice for Kabsa, basmati for Saudi dishes, buy premium basmati, aromatic rice Saudi, Al Rayyan rice importer, Pakistani rice in Saudi, long grain basmati",
  ogImage = "/images/og-image.jpg",
  canonicalUrl = "https://alrayyanrice.com",
  locale = "ar_SA",
  articleMeta,
  productMeta
}: SEOProps) => {
  const siteUrl = "https://alrayyanrice.com";
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Al Rayyan Rice" />
      
      {/* Mobile Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#006837" />
      
      {/* Google Fonts with display swap for better performance */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet"
        media="print"
        onLoad="this.media='all'"
      />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={articleMeta ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Al Rayyan Premium Rice" />
      <meta property="og:locale" content={locale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@alrayyanrice" />
      <meta name="twitter:creator" content="@alrayyanrice" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Article specific meta (if provided) */}
      {articleMeta && (
        <>
          <meta property="article:published_time" content={articleMeta.publishedTime} />
          <meta property="article:modified_time" content={articleMeta.modifiedTime} />
          <meta property="article:author" content={articleMeta.author} />
          <meta property="article:section" content={articleMeta.section} />
          {articleMeta.tags.map((tag, index) => (
            <meta property="article:tag" content={tag} key={index} />
          ))}
        </>
      )}
      
      {/* Product specific meta (if provided) */}
      {productMeta && (
        <>
          <meta property="product:price:amount" content={productMeta.price} />
          <meta property="product:price:currency" content={productMeta.currency} />
          <meta property="product:availability" content={productMeta.availability} />
          <meta property="product:brand" content={productMeta.brand} />
        </>
      )}
      
      {/* Link to AMP version if exists */}
      <link rel="amphtml" href={`${canonicalUrl}/amp`} />
      
      {/* Alternate language versions */}
      <link rel="alternate" href={`${siteUrl}`} hrefLang="en" />
      <link rel="alternate" href={`${siteUrl}/ar`} hrefLang="ar" />
      <link rel="alternate" href={`${siteUrl}/ur`} hrefLang="ur" />
      
      {/* Schema.org markup for Google - Enhanced Organization and Product markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              "name": "Al Rayyan Rice",
              "url": siteUrl,
              "logo": {
                "@type": "ImageObject",
                "@id": `${siteUrl}/#logo`,
                "url": `${siteUrl}/lovable-uploads/71d0eb0a-071d-4b53-b9d0-0377fba97623.png`,
                "width": 280,
                "height": 80,
                "caption": "Al Rayyan - Premium Pakistani Basmati Rice"
              },
              "description": "Premium Pakistani Basmati Rice Importer in Saudi Arabia",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "King Fahd Road",
                "addressLocality": "Riyadh",
                "addressRegion": "Riyadh Province",
                "postalCode": "12345",
                "addressCountry": "Saudi Arabia"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+966-50-1234567",
                  "contactType": "customer service",
                  "contactOption": "TollFree",
                  "areaServed": "SA",
                  "availableLanguage": ["en", "ar", "ur"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+966-11-1234567",
                  "contactType": "sales",
                  "areaServed": "SA",
                  "availableLanguage": ["en", "ar", "ur"]
                }
              ],
              "sameAs": [
                "https://www.facebook.com/alrayyanrice",
                "https://www.instagram.com/alrayyanrice",
                "https://twitter.com/alrayyanrice",
                "https://www.youtube.com/alrayyanrice",
                "https://www.linkedin.com/company/alrayyanrice"
              ],
              "founder": {
                "@type": "Person",
                "name": "Ahmed Al-Rayyan"
              },
              "foundingDate": "2005",
              "foundingLocation": "Riyadh, Saudi Arabia",
              "areaServed": {
                "@type": "Country",
                "name": "Saudi Arabia"
              }
            },
            {
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              "url": siteUrl,
              "name": "Al Rayyan Premium Rice",
              "description": "Premium Pakistani Basmati Rice in Saudi Arabia",
              "publisher": {
                "@id": `${siteUrl}/#organization`
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "en-US"
            },
            {
              "@type": "WebPage",
              "@id": `${canonicalUrl}/#webpage`,
              "url": canonicalUrl,
              "name": title,
              "isPartOf": {
                "@id": `${siteUrl}/#website`
              },
              "about": {
                "@id": `${siteUrl}/#organization`
              },
              "description": description,
              "inLanguage": "en-US"
            },
            {
              "@type": "Product",
              "name": "Premium Pakistani Basmati Rice",
              "description": "Authentic long-grain aromatic basmati rice from Punjab, Pakistan",
              "brand": {
                "@type": "Brand",
                "name": "Al Rayyan"
              },
              "offers": {
                "@type": "Offer",
                "url": `${siteUrl}/products/premium-basmati`,
                "priceCurrency": "SAR",
                "price": "25.99",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "785"
              },
              "image": [
                `${siteUrl}/images/products/basmati-1.jpg`,
                `${siteUrl}/images/products/basmati-2.jpg`
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What makes Al Rayyan's basmati rice special?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Al Rayyan's premium basmati rice is sourced directly from the fertile plains of Punjab, Pakistan. Our rice features extra-long grains, distinctive aroma, and perfect texture that enhances traditional Saudi dishes like Kabsa and Bukhari."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where can I buy Al Rayyan basmati rice in Saudi Arabia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Al Rayyan premium basmati rice will be available at major supermarkets across Saudi Arabia including Panda, Danube, Lulu, and Carrefour. You can also order directly through our website for home delivery."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Al Rayyan basmati rice good for Kabsa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our premium basmati rice is perfect for traditional Saudi Kabsa. The long grains maintain their structure during cooking and absorb the rich spices beautifully, resulting in the perfect texture and flavor for authentic Kabsa."
                  }
                }
              ]
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;