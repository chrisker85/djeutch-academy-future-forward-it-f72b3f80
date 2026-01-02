import { GraduationCap, Users, Target, Laptop, Clock, Award } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Formateurs Experts",
    description: "Des professionnels certifiés avec plus de 10 ans d'expérience dans l'industrie IT.",
  },
  {
    icon: Target,
    title: "Approche Pratique",
    description: "80% de pratique, 20% de théorie. Travaillez sur des projets réels dès le premier jour.",
  },
  {
    icon: Laptop,
    title: "Technologies Actuelles",
    description: "Programmes mis à jour régulièrement selon les tendances et besoins du marché.",
  },
  {
    icon: Users,
    title: "Réseau Professionnel",
    description: "Accédez à notre réseau de partenaires et d'entreprises pour votre insertion.",
  },
  {
    icon: Clock,
    title: "Flexibilité",
    description: "Formations en présentiel, en ligne ou hybride selon vos disponibilités.",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Obtenez des certifications reconnues internationalement à la fin de votre parcours.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Pourquoi nous choisir
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Une formation{" "}
              <span className="text-primary">d'excellence</span>{" "}
              pour votre réussite
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Chez DJEUTCH ACADEMY, nous ne formons pas seulement des techniciens, 
              nous créons des professionnels capables de s'adapter et d'innover 
              dans un monde digital en constante évolution.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <div className="font-display text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <div className="font-display text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Partenaires</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <div className="font-display text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Formations</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
