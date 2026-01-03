import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Minimize2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

// Enhanced AI response system with semantic matching
const knowledgeBase = {
  formations: {
    keywords: ['formation', 'cours', 'programme', 'apprendre', 'étudier', 'course', 'learn', 'study', 'training'],
    fr: `Nous proposons plusieurs formations IT de qualité :

🖥️ **Développement Web & Mobile** - React, Node.js, Flutter
🤖 **Data & Intelligence Artificielle** - Python, ML, Deep Learning
🔒 **Cybersécurité** - Ethical Hacking, Sécurité réseau
☁️ **Cloud & DevOps** - AWS, Azure, Docker, Kubernetes
🎨 **UI/UX Design** - Figma, Adobe XD, Design Thinking
📊 **Marketing Digital** - SEO, Social Media, Analytics
⚙️ **Odoo ERP** - Administration, Développement modules
💼 **Bureautique Avancée** - Excel, Word, PowerPoint
✏️ **Design Graphique** - Photoshop, Illustrator

Quelle formation vous intéresse le plus ?`,
    en: `We offer several quality IT training programs:

🖥️ **Web & Mobile Development** - React, Node.js, Flutter
🤖 **Data & Artificial Intelligence** - Python, ML, Deep Learning
🔒 **Cybersecurity** - Ethical Hacking, Network Security
☁️ **Cloud & DevOps** - AWS, Azure, Docker, Kubernetes
🎨 **UI/UX Design** - Figma, Adobe XD, Design Thinking
📊 **Digital Marketing** - SEO, Social Media, Analytics
⚙️ **Odoo ERP** - Administration, Module Development
💼 **Advanced Office Suite** - Excel, Word, PowerPoint
✏️ **Graphic Design** - Photoshop, Illustrator

Which training interests you the most?`
  },
  prix: {
    keywords: ['prix', 'tarif', 'coût', 'combien', 'price', 'cost', 'how much', 'fees', 'payer', 'argent'],
    fr: `💰 **Nos tarifs varient selon les programmes :**

• **Bureautique** : 250 000 FCFA (2-3 mois)
• **Design Graphique** : 300 000 FCFA (4 mois)
• **UI/UX Design** : 400 000 FCFA (6 mois)
• **Marketing Digital** : 350 000 FCFA (4 mois)
• **Développement Web** : 450 000 FCFA (6-12 mois)
• **Odoo ERP** : 400 000 FCFA (4 mois)
• **Data & IA** : 500 000 FCFA (6-9 mois)
• **Cloud & DevOps** : 480 000 FCFA (6 mois)
• **Cybersécurité** : 550 000 FCFA (6-9 mois)

✅ Paiement en 2, 3 ou 4 fois sans frais
✅ Réductions pour inscriptions anticipées
✅ Tarifs préférentiels pour groupes`,
    en: `💰 **Our rates vary by program:**

• **Office Suite** : 250,000 FCFA (2-3 months)
• **Graphic Design** : 300,000 FCFA (4 months)
• **UI/UX Design** : 400,000 FCFA (6 months)
• **Digital Marketing** : 350,000 FCFA (4 months)
• **Web Development** : 450,000 FCFA (6-12 months)
• **Odoo ERP** : 400,000 FCFA (4 months)
• **Data & AI** : 500,000 FCFA (6-9 months)
• **Cloud & DevOps** : 480,000 FCFA (6 months)
• **Cybersecurity** : 550,000 FCFA (6-9 months)

✅ Payment in 2, 3 or 4 installments
✅ Early registration discounts
✅ Group rates available`
  },
  inscription: {
    keywords: ['inscription', 'inscrire', 'enregistrer', 'register', 'sign up', 'enroll', 'join', 'candidature'],
    fr: `📝 **Pour vous inscrire chez DJEUTCH ACADEMY :**

1️⃣ Rendez-vous sur notre page **Inscription**
2️⃣ Remplissez le formulaire avec vos informations
3️⃣ Joignez votre CV et lettre de motivation
4️⃣ Choisissez votre mode de paiement
5️⃣ Notre équipe vous contacte sous **48h**

📞 Besoin d'aide ? Appelez le +237 6 00 00 00 00
📧 Ou écrivez à contact@djeutch-academy.com

Vous pouvez aussi faire notre **test d'orientation** pour trouver la formation idéale !`,
    en: `📝 **To register at DJEUTCH ACADEMY:**

1️⃣ Go to our **Registration** page
2️⃣ Fill out the form with your information
3️⃣ Attach your CV and cover letter
4️⃣ Choose your payment method
5️⃣ Our team will contact you within **48h**

📞 Need help? Call +237 6 00 00 00 00
📧 Or write to contact@djeutch-academy.com

You can also take our **orientation test** to find the ideal training!`
  },
  contact: {
    keywords: ['contact', 'joindre', 'appeler', 'téléphone', 'email', 'adresse', 'reach', 'call', 'phone', 'address', 'whatsapp'],
    fr: `📍 **Contactez DJEUTCH ACADEMY :**

📧 **Email** : contact@djeutch-academy.com
📞 **Téléphone** : +237 6 00 00 00 00
📱 **WhatsApp** : +237 6 00 00 00 00
🏢 **Adresse** : Douala, Cameroun

⏰ **Horaires d'ouverture :**
• Lundi - Vendredi : 8h - 18h
• Samedi : 9h - 14h
• Dimanche : Fermé

N'hésitez pas à nous écrire, nous répondons rapidement ! 🚀`,
    en: `📍 **Contact DJEUTCH ACADEMY:**

📧 **Email** : contact@djeutch-academy.com
📞 **Phone** : +237 6 00 00 00 00
📱 **WhatsApp** : +237 6 00 00 00 00
🏢 **Address** : Douala, Cameroon

⏰ **Opening hours:**
• Monday - Friday: 8am - 6pm
• Saturday: 9am - 2pm
• Sunday: Closed

Feel free to write to us, we respond quickly! 🚀`
  },
  duree: {
    keywords: ['durée', 'temps', 'combien temps', 'mois', 'semaine', 'duration', 'how long', 'months', 'weeks'],
    fr: `⏱️ **Durée de nos formations :**

• **Bureautique** : 2-3 mois
• **Design Graphique** : 4 mois
• **Marketing Digital** : 4 mois
• **UI/UX Design** : 4-6 mois
• **Odoo ERP** : 4 mois
• **Développement Web** : 6-12 mois
• **Data & IA** : 6-9 mois
• **Cloud & DevOps** : 6 mois
• **Cybersécurité** : 6-9 mois

Les cours ont lieu 3 à 5 fois par semaine selon le programme. Format présentiel, en ligne ou hybride disponible !`,
    en: `⏱️ **Duration of our training programs:**

• **Office Suite** : 2-3 months
• **Graphic Design** : 4 months
• **Digital Marketing** : 4 months
• **UI/UX Design** : 4-6 months
• **Odoo ERP** : 4 months
• **Web Development** : 6-12 months
• **Data & AI** : 6-9 months
• **Cloud & DevOps** : 6 months
• **Cybersecurity** : 6-9 months

Classes are held 3-5 times per week depending on the program. In-person, online, or hybrid format available!`
  },
  stage: {
    keywords: ['stage', 'emploi', 'travail', 'job', 'work', 'internship', 'career', 'entreprise', 'partenaire'],
    fr: `💼 **Insertion professionnelle DJEUTCH ACADEMY :**

✅ **92%** de taux d'insertion dans les 6 mois
✅ **+50 entreprises partenaires** au Cameroun et en Afrique
✅ Stage inclus dans la plupart des formations
✅ Accompagnement CV et entretiens

🎯 Nous vous préparons à :
• Rédiger un CV percutant
• Réussir vos entretiens
• Créer votre portfolio
• Développer votre réseau professionnel

Notre objectif : votre réussite professionnelle ! 🚀`,
    en: `💼 **DJEUTCH ACADEMY Professional Integration:**

✅ **92%** job placement rate within 6 months
✅ **+50 partner companies** in Cameroon and Africa
✅ Internship included in most programs
✅ CV and interview coaching

🎯 We prepare you to:
• Write an impactful CV
• Succeed in your interviews
• Create your portfolio
• Build your professional network

Our goal: your professional success! 🚀`
  },
  certificat: {
    keywords: ['certificat', 'diplôme', 'attestation', 'certification', 'certificate', 'diploma', 'credential'],
    fr: `🏆 **Certifications DJEUTCH ACADEMY :**

À la fin de chaque formation, vous recevez :
• ✅ Attestation de compétences DJEUTCH ACADEMY
• ✅ Certificat détaillant les modules validés

🎯 **Préparation aux certifications internationales :**
• AWS (Cloud)
• Microsoft Azure
• Google Cloud
• Cisco (Réseaux)
• CompTIA Security+
• Scrum Master

Ces certifications sont reconnues mondialement et boostent votre employabilité ! 💪`,
    en: `🏆 **DJEUTCH ACADEMY Certifications:**

At the end of each training, you receive:
• ✅ DJEUTCH ACADEMY skills certificate
• ✅ Certificate detailing validated modules

🎯 **Preparation for international certifications:**
• AWS (Cloud)
• Microsoft Azure
• Google Cloud
• Cisco (Networks)
• CompTIA Security+
• Scrum Master

These certifications are globally recognized and boost your employability! 💪`
  },
  test: {
    keywords: ['test', 'orientation', 'quiz', 'profil', 'recommandation', 'quel', 'which', 'recommend', 'suitable'],
    fr: `🧭 **Test d'Orientation IT DJEUTCH ACADEMY**

Pas sûr de quelle formation choisir ? Notre test d'orientation vous aide !

✨ **Avantages :**
• 100% gratuit
• 5 minutes seulement
• Résultat personnalisé
• Recommandations basées sur votre profil

👉 Rendez-vous sur la page **Test d'orientation** pour découvrir la formation qui vous correspond !

Ou dites-moi vos centres d'intérêt et je vous conseillerai ! 😊`,
    en: `🧭 **DJEUTCH ACADEMY IT Orientation Test**

Not sure which training to choose? Our orientation test helps!

✨ **Benefits:**
• 100% free
• Only 5 minutes
• Personalized result
• Recommendations based on your profile

👉 Go to the **Orientation Test** page to discover the training that suits you!

Or tell me your interests and I'll advise you! 😊`
  },
  greeting: {
    keywords: ['bonjour', 'salut', 'hello', 'hi', 'hey', 'bonsoir', 'coucou', 'good morning', 'good evening'],
    fr: `Bonjour ! 👋 Je suis l'assistant IA de DJEUTCH ACADEMY.

Je peux vous aider avec :
• 📚 Informations sur nos formations
• 💰 Tarifs et paiements
• 📝 Processus d'inscription
• 🧭 Test d'orientation
• 📍 Contact et horaires

Que souhaitez-vous savoir ? 🎯`,
    en: `Hello! 👋 I'm the AI assistant of DJEUTCH ACADEMY.

I can help you with:
• 📚 Information about our courses
• 💰 Prices and payments
• 📝 Registration process
• 🧭 Orientation test
• 📍 Contact and hours

What would you like to know? 🎯`
  }
};

const defaultResponses = {
  fr: `Je ne suis pas sûr de comprendre votre demande. 🤔

Voici ce que je peux vous aider à découvrir :
• 📚 **"formations"** - Nos programmes disponibles
• 💰 **"tarifs"** - Prix et paiements
• 📝 **"inscription"** - Comment s'inscrire
• 🧭 **"test"** - Test d'orientation IT
• 📍 **"contact"** - Nous joindre

Reformulez votre question ou cliquez sur une suggestion ci-dessous ! 😊`,
  en: `I'm not sure I understand your request. 🤔

Here's what I can help you discover:
• 📚 **"courses"** - Our available programs
• 💰 **"prices"** - Costs and payments
• 📝 **"register"** - How to sign up
• 🧭 **"test"** - IT orientation test
• 📍 **"contact"** - Reach us

Rephrase your question or click a suggestion below! 😊`
};

const Chatbot = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message based on language
  useEffect(() => {
    setMessages([{
      id: 1,
      type: 'bot',
      content: t('chat.welcome'),
      timestamp: new Date()
    }]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI-powered response function with semantic matching
  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    let bestMatch: { topic: string; score: number } = { topic: '', score: 0 };
    
    // Calculate semantic similarity for each topic
    for (const [topic, data] of Object.entries(knowledgeBase)) {
      let score = 0;
      for (const keyword of data.keywords) {
        const normalizedKeyword = keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (lowerMessage.includes(normalizedKeyword)) {
          score += keyword.length; // Longer keyword matches are more specific
        }
      }
      
      if (score > bestMatch.score) {
        bestMatch = { topic, score };
      }
    }
    
    // Return matched response or default
    if (bestMatch.score > 0) {
      const topicData = knowledgeBase[bestMatch.topic as keyof typeof knowledgeBase];
      return topicData[language as 'fr' | 'en'];
    }
    
    return defaultResponses[language as 'fr' | 'en'];
  };

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking with variable delay for realism
    const thinkingTime = 800 + Math.random() * 700;
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: getAIResponse(messageText),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, thinkingTime);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickReplies = language === 'fr' 
    ? ["Formations disponibles", "Tarifs", "Comment s'inscrire", "Test d'orientation", "Contact"]
    : ["Available courses", "Prices", "How to register", "Orientation test", "Contact"];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-elevated hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center group"
        aria-label={language === 'fr' ? "Ouvrir le chat" : "Open chat"}
      >
        <MessageCircle className="w-7 h-7 group-hover:hidden" />
        <Sparkles className="w-7 h-7 hidden group-hover:block animate-pulse" />
      </button>
    );
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-card border border-border rounded-2xl shadow-elevated overflow-hidden transition-all ${
        isMinimized ? 'h-16' : 'h-[600px] max-h-[calc(100vh-120px)]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold flex items-center gap-2">
              {t('chat.title')}
              <span className="text-xs bg-primary-foreground/20 px-2 py-0.5 rounded-full">AI</span>
            </h3>
            <p className="text-xs text-primary-foreground/70">
              {language === 'fr' ? 'En ligne • Intelligence Artificielle' : 'Online • Artificial Intelligence'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 hover:bg-primary-foreground/10 rounded-lg transition-colors"
          >
            <Minimize2 className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-primary-foreground/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto h-[420px] space-y-4 bg-muted/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-sm'
                      : 'bg-card border border-border rounded-tl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-primary-foreground/60' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString(language === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-accent" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse" />
                </div>
                <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:0.1s]" />
                    <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 border-t border-border overflow-x-auto">
            <div className="flex gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(reply)}
                  className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={t('chat.placeholder')}
                className="flex-1 px-4 py-3 rounded-xl bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                size="icon"
                className="w-12 h-12 rounded-xl"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;
