import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.formations': 'Formations',
    'nav.gallery': 'Galerie',
    'nav.faq': 'FAQ',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.quote': 'Demander un devis',
    'nav.register': "S'inscrire",
    
    // Hero
    'hero.title': 'Formez-vous aux métiers du numérique',
    'hero.subtitle': 'Développez vos compétences avec des formations professionnelles adaptées au marché africain',
    'hero.cta': 'Découvrir nos formations',
    'hero.test': 'Test d\'orientation',
    
    // Chatbot
    'chat.title': 'Assistant DJEUTCH',
    'chat.placeholder': 'Posez votre question...',
    'chat.welcome': 'Bonjour ! 👋 Je suis l\'assistant virtuel de DJEUTCH ACADEMY. Comment puis-je vous aider ?',
    'chat.quick.formations': 'Quelles formations ?',
    'chat.quick.price': 'Tarifs',
    'chat.quick.inscription': 'Comment s\'inscrire ?',
    'chat.quick.contact': 'Contact',
    'chat.quick.duration': 'Durée des formations',
    
    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Trouvez rapidement des réponses à vos questions',
    
    // Gallery
    'gallery.title': 'Notre Galerie',
    'gallery.subtitle': 'Découvrez notre centre et nos activités en images',
    
    // Orientation
    'orientation.title': 'Test d\'Orientation IT',
    'orientation.subtitle': 'Découvrez la formation qui vous correspond',
    'orientation.start': 'Commencer le test',
    'orientation.next': 'Question suivante',
    'orientation.result': 'Voir mon résultat',
    
    // Common
    'common.learn_more': 'En savoir plus',
    'common.see_all': 'Voir tout',
    'common.back': 'Retour',
    'common.send': 'Envoyer',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.formations': 'Courses',
    'nav.gallery': 'Gallery',
    'nav.faq': 'FAQ',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.quote': 'Request a quote',
    'nav.register': 'Register',
    
    // Hero
    'hero.title': 'Train for digital careers',
    'hero.subtitle': 'Develop your skills with professional training adapted to the African market',
    'hero.cta': 'Discover our courses',
    'hero.test': 'Orientation Test',
    
    // Chatbot
    'chat.title': 'DJEUTCH Assistant',
    'chat.placeholder': 'Ask your question...',
    'chat.welcome': 'Hello! 👋 I am the virtual assistant of DJEUTCH ACADEMY. How can I help you?',
    'chat.quick.formations': 'What courses?',
    'chat.quick.price': 'Prices',
    'chat.quick.inscription': 'How to register?',
    'chat.quick.contact': 'Contact',
    'chat.quick.duration': 'Course duration',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Quickly find answers to your questions',
    
    // Gallery
    'gallery.title': 'Our Gallery',
    'gallery.subtitle': 'Discover our center and activities in pictures',
    
    // Orientation
    'orientation.title': 'IT Orientation Test',
    'orientation.subtitle': 'Find the right course for you',
    'orientation.start': 'Start the test',
    'orientation.next': 'Next question',
    'orientation.result': 'See my result',
    
    // Common
    'common.learn_more': 'Learn more',
    'common.see_all': 'See all',
    'common.back': 'Back',
    'common.send': 'Send',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
