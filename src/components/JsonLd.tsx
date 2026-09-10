import React from 'react';
import { CONFIG } from '../config';
import { FAQS } from '../data/harmonyData';
import { PageRoute } from '../types';

interface JsonLdProps {
  page: PageRoute;
}

export const JsonLd: React.FC<JsonLdProps> = ({ page }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": CONFIG.COMPANY_NAME,
    "legalName": CONFIG.LEGAL_NAME,
    "url": "https://harmonyclube.com.br",
    "logo": "https://harmonyclube.com.br/assets/logos/logo.png",
    "taxID": CONFIG.CNPJ,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": CONFIG.PHONE,
        "contactType": "customer service",
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      },
      {
        "@type": "ContactPoint",
        "telephone": CONFIG.PHONE_ASSISTANCE_24H,
        "contactType": "emergency",
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONFIG.ADDRESS,
      "addressLocality": CONFIG.CITY,
      "addressRegion": CONFIG.STATE,
      "postalCode": CONFIG.ZIP,
      "addressCountry": "BR"
    },
    "sameAs": [
      CONFIG.SOCIAL_LINKS.instagram,
      CONFIG.SOCIAL_LINKS.facebook,
      CONFIG.SOCIAL_LINKS.linkedin,
      CONFIG.SOCIAL_LINKS.youtube
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Harmony Clube de Benefícios",
    "url": "https://harmonyclube.com.br",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://harmonyclube.com.br/cotacao?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://harmonyclube.com.br/"
      },
      page !== 'home' ? {
        "@type": "ListItem",
        "position": 2,
        "name": page.toUpperCase(),
        "item": `https://harmonyclube.com.br/${page}`
      } : null
    ].filter(Boolean)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {page === 'home' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
};
