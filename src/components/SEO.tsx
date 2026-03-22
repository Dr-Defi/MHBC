import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string[];
  structuredData?: object;
}

export const SEO = ({
  title = 'Home Butler Club',
  description = 'Machines helping mankind. A population of helpful teles giving humanity space for life. The screen finally cares.',
  image = '/og-image.png',
  url = '/',
  type = 'website',
  keywords = ['Home Butler Club', 'Tele', 'Elevated Home Living', 'Space for Life', 'Conversational Labor', 'The Screen Finally Cares'],
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Home Butler Club', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]');

      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }

      scriptElement.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, image, url, type, keywords, structuredData]);

  return null;
};

// Pre-configured SEO for sections - Home Butler Club Platform
export const sectionSEO = {
  welcome: {
    title: 'Home Butler Club',
    description: 'Experience Elevated Home Living. Conversational labor that helps you. The screen finally cares.',
    keywords: ['Home Butler Club', 'Elevated Home Living', 'Tele', 'Space for Life', 'The Screen Finally Cares'],
  },

  platform: {
    title: 'The Home Butler Club Platform | Operating System for Conversational Labor',
    description: 'Built on six agnostic foundations. Model, cloud, device, channel, language, and use case agnostic.',
    keywords: ['Home Butler Club Platform', 'Conversational Labor', 'Tele', 'Infrastructure'],
  },

  teles: {
    title: 'The Tele Population | Helpful Conversational Workers',
    description: 'A population of helpful teles — conversational workers accelerating Elevated Home Living.',
    keywords: ['Tele', 'Tele Population', 'Conversational Workers', 'The Screen Finally Cares'],
  },

  future: {
    title: 'Elevated Home Living | Space for Life',
    description: 'A world where machines truly help mankind, giving humanity space for life. Time for family, creativity, and joy.',
    keywords: ['Elevated Home Living', 'Space for Life', 'Machines Helping Mankind'],
  },

  launch: {
    title: 'Population Party | Elevated Home Living Arrives',
    description: 'March 15, 2026 - Join the Population Party. Music, dancing, celebration. RSVP now.',
    keywords: ['Population Party', 'Elevated Home Living', 'Home Butler Club', 'March 2026', 'Celebration'],
  },

  home: {
    title: 'Home Butler Club',
    description: 'Experience Elevated Home Living.',
    keywords: ['Home Butler Club', 'Elevated Home Living', 'Tele', 'Space for Life'],
  },
};
