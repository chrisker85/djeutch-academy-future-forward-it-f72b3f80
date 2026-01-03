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
    'hero.test': "Test d'orientation",
    
    // Chatbot
    'chat.title': 'Assistant DJEUTCH',
    'chat.placeholder': 'Posez votre question...',
    'chat.welcome': "Bonjour ! 👋 Je suis l'assistant virtuel de DJEUTCH ACADEMY. Comment puis-je vous aider ?",
    'chat.quick.formations': 'Quelles formations ?',
    'chat.quick.price': 'Tarifs',
    'chat.quick.inscription': "Comment s'inscrire ?",
    'chat.quick.contact': 'Contact',
    'chat.quick.duration': 'Durée des formations',
    
    // FAQ Page
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Retrouvez les réponses à toutes vos questions sur nos formations et notre centre.',
    'faq.notFound': "Vous n'avez pas trouvé votre réponse ?",
    'faq.notFoundDesc': 'Notre équipe est disponible pour répondre à toutes vos questions.',
    'faq.contactUs': 'Nous contacter',
    
    // FAQ Categories
    'faq.cat.admissions': 'Inscriptions & Admissions',
    'faq.cat.programs': 'Formations & Programmes',
    'faq.cat.payment': 'Financement & Paiement',
    'faq.cat.pedagogy': 'Déroulement & Pédagogie',
    'faq.cat.career': 'Carrière & Insertion',
    
    // FAQ Questions - Admissions
    'faq.q1': "Comment puis-je m'inscrire à une formation ?",
    'faq.a1': "L'inscription se fait en ligne via notre formulaire d'inscription. Vous devez remplir vos informations personnelles, choisir votre formation et téléverser votre CV et lettre de motivation. Notre équipe vous contactera sous 48h pour confirmer votre inscription.",
    'faq.q2': 'Quels sont les prérequis pour intégrer une formation ?',
    'faq.a2': "Les prérequis varient selon les formations. Certaines sont accessibles aux débutants, d'autres nécessitent des connaissances de base en informatique. Consultez la fiche détaillée de chaque formation ou contactez-nous pour plus d'informations.",
    'faq.q3': "Y a-t-il un test d'entrée ?",
    'faq.a3': "Pour certaines formations avancées, un test de niveau ou un entretien peut être requis. Nous proposons également un test d'orientation gratuit pour vous aider à choisir la formation adaptée à votre profil.",
    'faq.q4': "Puis-je m'inscrire en cours d'année ?",
    'faq.a4': "Oui, nous proposons des sessions de formation tout au long de l'année. Consultez notre calendrier des sessions pour connaître les prochaines dates de démarrage.",
    
    // FAQ Questions - Programs
    'faq.q5': 'Quelles formations proposez-vous ?',
    'faq.a5': 'Nous proposons des formations dans les domaines IT les plus demandés : Développement Web & Mobile, Data & IA, Cybersécurité, Cloud & DevOps, UI/UX Design, Réseaux & Systèmes, Marketing Digital, Odoo, Bureautique et Design Graphique.',
    'faq.q6': 'Quelle est la durée des formations ?',
    'faq.a6': "La durée varie de 3 à 12 mois selon les formations. Chaque programme est conçu pour vous permettre d'acquérir des compétences opérationnelles dans un délai optimisé.",
    'faq.q7': 'Les formations sont-elles certifiantes ?',
    'faq.a7': "Oui, à l'issue de chaque formation, vous recevez une attestation de compétences DJEUTCH ACADEMY. Nous préparons également aux certifications professionnelles reconnues (AWS, Azure, Cisco, etc.).",
    'faq.q8': 'Proposez-vous des formations en ligne ?',
    'faq.a8': 'Oui, nous proposons trois modalités : présentiel, en ligne (100% à distance) et hybride (mix des deux). Vous pouvez choisir selon vos contraintes et préférences.',
    
    // FAQ Questions - Payment
    'faq.q9': 'Quels sont les tarifs des formations ?',
    'faq.a9': 'Les tarifs varient selon les formations, de 250 000 à 550 000 FCFA. Consultez les fiches formations pour les tarifs détaillés ou demandez un devis personnalisé.',
    'faq.q10': 'Proposez-vous des facilités de paiement ?',
    'faq.a10': "Oui, nous proposons un paiement en plusieurs fois sans frais (jusqu'à 4 mensualités). Des réductions sont également disponibles pour les inscriptions anticipées et les groupes.",
    'faq.q11': 'Y a-t-il des bourses ou aides financières ?',
    'faq.a11': "Nous proposons des réductions pour les étudiants et demandeurs d'emploi. Des partenariats avec des entreprises permettent également de financer certaines formations. Contactez-nous pour en savoir plus.",
    'faq.q12': 'Comment obtenir un devis pour une entreprise ?',
    'faq.a12': 'Vous pouvez demander un devis personnalisé via notre formulaire de demande de devis. Notre équipe commerciale vous répondra sous 24h avec une proposition adaptée à vos besoins.',
    
    // FAQ Questions - Pedagogy
    'faq.q13': 'Comment se déroulent les cours ?',
    'faq.a13': "Les cours combinent théorie et pratique avec 70% de projets concrets. Vous travaillez sur des cas réels, en équipe, avec l'accompagnement de formateurs experts du terrain.",
    'faq.q14': 'Quelle est la taille des classes ?',
    'faq.a14': 'Nos classes sont limitées à 15-20 apprenants maximum pour garantir un suivi personnalisé et une interaction optimale avec les formateurs.',
    'faq.q15': 'Quels outils sont utilisés ?',
    'faq.a15': "Nous utilisons les outils et technologies utilisés en entreprise : environnements de développement professionnels, plateformes cloud, outils de collaboration (Slack, GitHub, Jira, etc.).",
    'faq.q16': "Y a-t-il un accompagnement après la formation ?",
    'faq.a16': "Oui, nous proposons un accompagnement à l'insertion professionnelle : aide à la rédaction de CV, préparation aux entretiens, mise en relation avec nos entreprises partenaires.",
    
    // FAQ Questions - Career
    'faq.q17': "Quel est le taux d'insertion professionnelle ?",
    'faq.a17': "Notre taux d'insertion est de 92% dans les 6 mois suivant la fin de formation. Nos partenariats avec plus de 50 entreprises facilitent l'accès à l'emploi.",
    'faq.q18': 'Proposez-vous des stages ?',
    'faq.a18': "Oui, la plupart de nos formations incluent une période de stage en entreprise. Nous vous accompagnons dans la recherche et nous avons un réseau d'entreprises partenaires.",
    'faq.q19': 'Les certifications sont-elles reconnues ?',
    'faq.a19': "Nos formations préparent aux certifications internationalement reconnues (AWS, Azure, Google, Cisco, etc.). Notre attestation DJEUTCH ACADEMY est également reconnue par nos entreprises partenaires.",
    
    // Gallery Page
    'gallery.title': 'Notre Galerie',
    'gallery.subtitle': 'Découvrez notre centre et nos activités en images',
    'gallery.all': 'Tout',
    'gallery.campus': 'Campus',
    'gallery.trainings': 'Formations',
    'gallery.events': 'Événements',
    'gallery.projects': 'Projets étudiants',
    'gallery.partners': 'Partenaires',
    
    // Orientation Test
    'orientation.title': "Test d'Orientation IT",
    'orientation.subtitle': 'Découvrez la formation qui vous correspond',
    'orientation.findIdeal': 'Trouvez votre formation idéale',
    'orientation.answerQuestions': 'Répondez à quelques questions pour découvrir les formations adaptées à votre profil.',
    'orientation.question': 'Question',
    'orientation.of': 'sur',
    'orientation.previous': 'Précédent',
    'orientation.restart': 'Recommencer',
    'orientation.results': 'Vos résultats',
    'orientation.resultsDesc': 'Découvrez les formations qui correspondent à votre profil',
    'orientation.recommended': '🎯 Formation recommandée',
    'orientation.discover': 'Découvrir cette formation',
    'orientation.otherFormations': 'Autres formations adaptées à votre profil',
    'orientation.registerNow': "S'inscrire maintenant",
    'orientation.retake': 'Refaire le test',
    
    // Orientation Questions
    'orientation.q1': "Qu'est-ce qui vous attire le plus dans le domaine IT ?",
    'orientation.q1.o1': 'Créer des sites web et applications visibles par tous',
    'orientation.q1.o2': 'Analyser des données pour prendre des décisions éclairées',
    'orientation.q1.o3': 'Protéger les systèmes contre les attaques',
    'orientation.q1.o4': 'Automatiser et optimiser les processus',
    'orientation.q2': 'Comment préférez-vous travailler ?',
    'orientation.q2.o1': 'Résoudre des problèmes techniques complexes',
    'orientation.q2.o2': 'Créer des visuels et expériences esthétiques',
    'orientation.q2.o3': 'Analyser et interpréter des chiffres',
    'orientation.q2.o4': 'Collaborer et communiquer avec les équipes',
    'orientation.q3': 'Quel type de projet vous enthousiasme le plus ?',
    'orientation.q3.o1': 'Développer une application mobile innovante',
    'orientation.q3.o2': "Créer un tableau de bord d'analyse prédictive",
    'orientation.q3.o3': 'Concevoir une identité visuelle de marque',
    'orientation.q3.o4': 'Mettre en place une infrastructure cloud sécurisée',
    'orientation.q4': 'Quel outil vous attire le plus ?',
    'orientation.q4.o1': 'Visual Studio Code, GitHub',
    'orientation.q4.o2': 'Excel, Power BI, Python',
    'orientation.q4.o3': 'Figma, Photoshop, Illustrator',
    'orientation.q4.o4': 'AWS, Docker, Kubernetes',
    'orientation.q5': 'Quelle compétence souhaitez-vous le plus développer ?',
    'orientation.q5.o1': 'Programmer et coder',
    'orientation.q5.o2': 'Concevoir des interfaces utilisateur',
    'orientation.q5.o3': 'Gérer la sécurité informatique',
    'orientation.q5.o4': 'Administrer des serveurs et réseaux',
    'orientation.q6': 'Quel secteur vous intéresse ?',
    'orientation.q6.o1': 'Startup tech et innovation',
    'orientation.q6.o2': 'Finance et banque',
    'orientation.q6.o3': 'Marketing et communication',
    'orientation.q6.o4': 'Industrie et logistique',
    'orientation.q7': 'Comment décririez-vous votre niveau actuel en informatique ?',
    'orientation.q7.o1': 'Débutant, je veux tout apprendre',
    'orientation.q7.o2': "Intermédiaire, j'ai des bases solides",
    'orientation.q7.o3': 'Avancé, je cherche à me spécialiser',
    'orientation.q7.o4': 'Je me réoriente professionnellement',
    'orientation.q8': 'Quel type de carrière envisagez-vous ?',
    'orientation.q8.o1': 'Développeur / Ingénieur logiciel',
    'orientation.q8.o2': 'Data Scientist / Analyste',
    'orientation.q8.o3': 'Designer / Créatif',
    'orientation.q8.o4': 'Consultant / Chef de projet',
    
    // Formations Page
    'formations.title': 'Nos Formations',
    'formations.subtitle': 'Des programmes conçus pour votre réussite professionnelle',
    'formations.filter.level': 'Niveau',
    'formations.filter.mode': 'Mode',
    'formations.filter.price': 'Budget',
    'formations.filter.all': 'Tous',
    'formations.filter.beginner': 'Débutant',
    'formations.filter.intermediate': 'Intermédiaire',
    'formations.filter.advanced': 'Avancé',
    'formations.filter.onsite': 'Présentiel',
    'formations.filter.online': 'En ligne',
    'formations.filter.hybrid': 'Hybride',
    'formations.filter.lowBudget': '< 300 000 FCFA',
    'formations.filter.midBudget': '300-500 000 FCFA',
    'formations.filter.highBudget': '> 500 000 FCFA',
    'formations.duration': 'Durée',
    'formations.level': 'Niveau',
    'formations.from': 'À partir de',
    'formations.modality': 'Modalité',
    'formations.onsite': 'Présentiel',
    'formations.online': 'En ligne',
    'formations.live': 'Live',
    'formations.mixed': 'Mixte',
    'formations.voiceover': 'Voix off',
    'formations.technologies': 'Technologies',
    'formations.objectives': 'Objectifs',
    'formations.careers': 'Débouchés',
    'formations.register': "S'inscrire à cette formation",
    'formations.quote': 'Demander un devis',
    
    // Common
    'common.learn_more': 'En savoir plus',
    'common.see_all': 'Voir tout',
    'common.back': 'Retour',
    'common.send': 'Envoyer',
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
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
    
    // FAQ Page
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to all your questions about our courses and center.',
    'faq.notFound': "Didn't find your answer?",
    'faq.notFoundDesc': 'Our team is available to answer all your questions.',
    'faq.contactUs': 'Contact us',
    
    // FAQ Categories
    'faq.cat.admissions': 'Registration & Admissions',
    'faq.cat.programs': 'Courses & Programs',
    'faq.cat.payment': 'Financing & Payment',
    'faq.cat.pedagogy': 'Process & Pedagogy',
    'faq.cat.career': 'Career & Employment',
    
    // FAQ Questions - Admissions
    'faq.q1': 'How can I register for a course?',
    'faq.a1': 'Registration is done online via our registration form. You must fill in your personal information, choose your course and upload your CV and cover letter. Our team will contact you within 48 hours to confirm your registration.',
    'faq.q2': 'What are the prerequisites for joining a course?',
    'faq.a2': 'Prerequisites vary depending on the courses. Some are accessible to beginners, others require basic computer knowledge. Check the detailed description of each course or contact us for more information.',
    'faq.q3': 'Is there an entrance test?',
    'faq.a3': 'For some advanced courses, a level test or interview may be required. We also offer a free orientation test to help you choose the right course for your profile.',
    'faq.q4': 'Can I register during the year?',
    'faq.a4': 'Yes, we offer training sessions throughout the year. Check our session calendar for the next start dates.',
    
    // FAQ Questions - Programs
    'faq.q5': 'What courses do you offer?',
    'faq.a5': 'We offer training in the most in-demand IT fields: Web & Mobile Development, Data & AI, Cybersecurity, Cloud & DevOps, UI/UX Design, Networks & Systems, Digital Marketing, Odoo, Office Suite and Graphic Design.',
    'faq.q6': 'What is the duration of the courses?',
    'faq.a6': 'The duration varies from 3 to 12 months depending on the courses. Each program is designed to allow you to acquire operational skills in an optimized time.',
    'faq.q7': 'Are the courses certified?',
    'faq.a7': 'Yes, at the end of each course, you receive a DJEUTCH ACADEMY skills certificate. We also prepare for recognized professional certifications (AWS, Azure, Cisco, etc.).',
    'faq.q8': 'Do you offer online courses?',
    'faq.a8': 'Yes, we offer three modalities: on-site, online (100% remote) and hybrid (mix of both). You can choose according to your constraints and preferences.',
    
    // FAQ Questions - Payment
    'faq.q9': 'What are the course fees?',
    'faq.a9': 'Fees vary depending on the courses, from 250,000 to 550,000 FCFA. Check the course descriptions for detailed prices or request a personalized quote.',
    'faq.q10': 'Do you offer payment plans?',
    'faq.a10': 'Yes, we offer interest-free installment payments (up to 4 installments). Discounts are also available for early registration and groups.',
    'faq.q11': 'Are there scholarships or financial aid?',
    'faq.a11': 'We offer discounts for students and job seekers. Partnerships with companies also help finance some courses. Contact us to learn more.',
    'faq.q12': 'How can I get a quote for a company?',
    'faq.a12': 'You can request a personalized quote via our quote request form. Our sales team will respond within 24 hours with a proposal tailored to your needs.',
    
    // FAQ Questions - Pedagogy
    'faq.q13': 'How are the classes conducted?',
    'faq.a13': 'Classes combine theory and practice with 70% hands-on projects. You work on real cases, in teams, with the support of expert trainers from the field.',
    'faq.q14': 'What is the class size?',
    'faq.a14': 'Our classes are limited to 15-20 students maximum to ensure personalized follow-up and optimal interaction with trainers.',
    'faq.q15': 'What tools are used?',
    'faq.a15': 'We use tools and technologies used in business: professional development environments, cloud platforms, collaboration tools (Slack, GitHub, Jira, etc.).',
    'faq.q16': 'Is there support after the course?',
    'faq.a16': 'Yes, we offer professional integration support: CV writing assistance, interview preparation, networking with our partner companies.',
    
    // FAQ Questions - Career
    'faq.q17': 'What is the job placement rate?',
    'faq.a17': 'Our placement rate is 92% within 6 months of completing the course. Our partnerships with over 50 companies facilitate access to employment.',
    'faq.q18': 'Do you offer internships?',
    'faq.a18': 'Yes, most of our courses include an internship period. We support you in your search and have a network of partner companies.',
    'faq.q19': 'Are the certifications recognized?',
    'faq.a19': 'Our courses prepare for internationally recognized certifications (AWS, Azure, Google, Cisco, etc.). Our DJEUTCH ACADEMY certificate is also recognized by our partner companies.',
    
    // Gallery Page
    'gallery.title': 'Our Gallery',
    'gallery.subtitle': 'Discover our center and activities in pictures',
    'gallery.all': 'All',
    'gallery.campus': 'Campus',
    'gallery.trainings': 'Training',
    'gallery.events': 'Events',
    'gallery.projects': 'Student Projects',
    'gallery.partners': 'Partners',
    
    // Orientation Test
    'orientation.title': 'IT Orientation Test',
    'orientation.subtitle': 'Find the right course for you',
    'orientation.findIdeal': 'Find your ideal course',
    'orientation.answerQuestions': 'Answer a few questions to discover courses suited to your profile.',
    'orientation.question': 'Question',
    'orientation.of': 'of',
    'orientation.previous': 'Previous',
    'orientation.restart': 'Restart',
    'orientation.results': 'Your results',
    'orientation.resultsDesc': 'Discover the courses that match your profile',
    'orientation.recommended': '🎯 Recommended course',
    'orientation.discover': 'Discover this course',
    'orientation.otherFormations': 'Other courses suited to your profile',
    'orientation.registerNow': 'Register now',
    'orientation.retake': 'Retake the test',
    
    // Orientation Questions
    'orientation.q1': 'What attracts you most in the IT field?',
    'orientation.q1.o1': 'Creating websites and applications visible to everyone',
    'orientation.q1.o2': 'Analyzing data to make informed decisions',
    'orientation.q1.o3': 'Protecting systems against attacks',
    'orientation.q1.o4': 'Automating and optimizing processes',
    'orientation.q2': 'How do you prefer to work?',
    'orientation.q2.o1': 'Solving complex technical problems',
    'orientation.q2.o2': 'Creating visuals and aesthetic experiences',
    'orientation.q2.o3': 'Analyzing and interpreting numbers',
    'orientation.q2.o4': 'Collaborating and communicating with teams',
    'orientation.q3': 'What type of project excites you the most?',
    'orientation.q3.o1': 'Developing an innovative mobile application',
    'orientation.q3.o2': 'Creating a predictive analytics dashboard',
    'orientation.q3.o3': 'Designing a brand visual identity',
    'orientation.q3.o4': 'Setting up a secure cloud infrastructure',
    'orientation.q4': 'Which tool attracts you the most?',
    'orientation.q4.o1': 'Visual Studio Code, GitHub',
    'orientation.q4.o2': 'Excel, Power BI, Python',
    'orientation.q4.o3': 'Figma, Photoshop, Illustrator',
    'orientation.q4.o4': 'AWS, Docker, Kubernetes',
    'orientation.q5': 'What skill do you most want to develop?',
    'orientation.q5.o1': 'Programming and coding',
    'orientation.q5.o2': 'Designing user interfaces',
    'orientation.q5.o3': 'Managing IT security',
    'orientation.q5.o4': 'Administering servers and networks',
    'orientation.q6': 'What sector interests you?',
    'orientation.q6.o1': 'Tech startup and innovation',
    'orientation.q6.o2': 'Finance and banking',
    'orientation.q6.o3': 'Marketing and communication',
    'orientation.q6.o4': 'Industry and logistics',
    'orientation.q7': 'How would you describe your current computer level?',
    'orientation.q7.o1': 'Beginner, I want to learn everything',
    'orientation.q7.o2': 'Intermediate, I have solid foundations',
    'orientation.q7.o3': 'Advanced, I want to specialize',
    'orientation.q7.o4': 'I am reorienting professionally',
    'orientation.q8': 'What type of career do you envision?',
    'orientation.q8.o1': 'Developer / Software Engineer',
    'orientation.q8.o2': 'Data Scientist / Analyst',
    'orientation.q8.o3': 'Designer / Creative',
    'orientation.q8.o4': 'Consultant / Project Manager',
    
    // Formations Page
    'formations.title': 'Our Courses',
    'formations.subtitle': 'Programs designed for your professional success',
    'formations.filter.level': 'Level',
    'formations.filter.mode': 'Mode',
    'formations.filter.price': 'Budget',
    'formations.filter.all': 'All',
    'formations.filter.beginner': 'Beginner',
    'formations.filter.intermediate': 'Intermediate',
    'formations.filter.advanced': 'Advanced',
    'formations.filter.onsite': 'On-site',
    'formations.filter.online': 'Online',
    'formations.filter.hybrid': 'Hybrid',
    'formations.filter.lowBudget': '< 300,000 FCFA',
    'formations.filter.midBudget': '300-500,000 FCFA',
    'formations.filter.highBudget': '> 500,000 FCFA',
    'formations.duration': 'Duration',
    'formations.level': 'Level',
    'formations.from': 'From',
    'formations.modality': 'Modality',
    'formations.onsite': 'On-site',
    'formations.online': 'Online',
    'formations.live': 'Live',
    'formations.mixed': 'Mixed',
    'formations.voiceover': 'Voice-over',
    'formations.technologies': 'Technologies',
    'formations.objectives': 'Objectives',
    'formations.careers': 'Career opportunities',
    'formations.register': 'Register for this course',
    'formations.quote': 'Request a quote',
    
    // Common
    'common.learn_more': 'Learn more',
    'common.see_all': 'See all',
    'common.back': 'Back',
    'common.send': 'Send',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
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
