import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { HelpCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQPage = () => {
  const { t, language } = useLanguage();

  const faqCategories = [
    {
      title: t('faq.cat.admissions'),
      icon: "📝",
      questions: [
        { question: t('faq.q1'), answer: t('faq.a1') },
        { question: t('faq.q2'), answer: t('faq.a2') },
        { question: t('faq.q3'), answer: t('faq.a3') },
        { question: t('faq.q4'), answer: t('faq.a4') },
      ]
    },
    {
      title: t('faq.cat.programs'),
      icon: "🎓",
      questions: [
        { question: t('faq.q5'), answer: t('faq.a5') },
        { question: t('faq.q6'), answer: t('faq.a6') },
        { question: t('faq.q7'), answer: t('faq.a7') },
        { question: t('faq.q8'), answer: t('faq.a8') },
      ]
    },
    {
      title: t('faq.cat.payment'),
      icon: "💰",
      questions: [
        { question: t('faq.q9'), answer: t('faq.a9') },
        { question: t('faq.q10'), answer: t('faq.a10') },
        { question: t('faq.q11'), answer: t('faq.a11') },
        { question: t('faq.q12'), answer: t('faq.a12') },
      ]
    },
    {
      title: t('faq.cat.pedagogy'),
      icon: "📚",
      questions: [
        { question: t('faq.q13'), answer: t('faq.a13') },
        { question: t('faq.q14'), answer: t('faq.a14') },
        { question: t('faq.q15'), answer: t('faq.a15') },
        { question: t('faq.q16'), answer: t('faq.a16') },
      ]
    },
    {
      title: t('faq.cat.career'),
      icon: "🚀",
      questions: [
        { question: t('faq.q17'), answer: t('faq.a17') },
        { question: t('faq.q18'), answer: t('faq.a18') },
        { question: t('faq.q19'), answer: t('faq.a19') },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-semibold mb-6">
                FAQ
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {t('faq.title')}
              </h1>
              <p className="text-xl text-primary-foreground/70">
                {t('faq.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-card"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t('faq.notFound')}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t('faq.notFoundDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">
                    <Mail className="w-5 h-5" />
                    {t('faq.contactUs')}
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+237600000000">
                    <Phone className="w-5 h-5" />
                    +237 6 00 00 00 00
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
