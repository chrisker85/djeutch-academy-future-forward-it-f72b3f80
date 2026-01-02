import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Prêt à lancer votre carrière dans l'IT ?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Rejoignez les milliers d'apprenants qui ont transformé leur avenir 
            avec DJEUTCH ACADEMY. Les inscriptions pour la prochaine session sont ouvertes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/inscription">
                S'inscrire maintenant
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                <Calendar className="w-5 h-5" />
                Prendre rendez-vous
              </Link>
            </Button>
          </div>

          {/* Download Brochure */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
            <Download className="w-5 h-5 text-accent" />
            <span className="text-primary-foreground/80 text-sm">
              Téléchargez notre brochure complète
            </span>
            <a 
              href="#" 
              className="text-accent font-semibold text-sm hover:underline"
            >
              Télécharger (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
