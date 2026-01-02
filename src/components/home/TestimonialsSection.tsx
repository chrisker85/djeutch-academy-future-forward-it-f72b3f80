import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jean-Pierre Kamga",
    role: "Développeur Full Stack",
    company: "Startup Tech Douala",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    content: "La formation en développement web chez DJEUTCH ACADEMY a complètement transformé ma carrière. En 6 mois, je suis passé de zéro connaissance à développeur confirmé. L'approche pratique et le suivi personnalisé font vraiment la différence.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marie-Claire Ndongo",
    role: "Data Analyst",
    company: "Orange Cameroun",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    content: "Grâce à la formation Data & IA, j'ai pu décrocher un poste chez Orange Cameroun. Les projets réels et les cas pratiques m'ont permis d'être opérationnelle dès mon premier jour de travail.",
    rating: 5,
  },
  {
    id: 3,
    name: "Thierry Fotso",
    role: "Consultant Cybersécurité",
    company: "Freelance",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    content: "La formation en cybersécurité m'a ouvert les portes d'un domaine passionnant. Les certifications obtenues sont reconnues et m'ont permis de lancer ma propre activité de consultant.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sandrine Mbarga",
    role: "UI/UX Designer",
    company: "Agence Digitale",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    content: "Une équipe pédagogique exceptionnelle et des outils professionnels. J'ai appris Figma, les principes UX et le design thinking. Aujourd'hui, je travaille sur des projets internationaux.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ils ont réussi avec{" "}
            <span className="text-primary">DJEUTCH ACADEMY</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les parcours inspirants de nos anciens apprenants qui ont 
            transformé leur vie grâce à nos formations.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-card">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              "{testimonials[currentIndex].content}"
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <h4 className="font-display font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
