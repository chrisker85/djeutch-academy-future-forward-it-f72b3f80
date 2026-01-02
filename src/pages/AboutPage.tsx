import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque aspect de notre formation, des programmes aux résultats.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous restons à la pointe des technologies et méthodologies pédagogiques modernes.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Notre passion pour l'IT et l'enseignement se reflète dans chaque session de formation.",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Nous créons une communauté d'apprenants et de professionnels qui s'entraident.",
  },
];

const team = [
  {
    name: "Dr. Emmanuel Djeutch",
    role: "Fondateur & Directeur",
    specialty: "Architecture Logicielle",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Pauline Nkeng",
    role: "Directrice Pédagogique",
    specialty: "Data Science",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Marc Talla",
    role: "Lead Formateur",
    specialty: "Cybersécurité",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Sarah Mballa",
    role: "Responsable Insertion",
    specialty: "Relations Entreprises",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-semibold mb-6">
                Notre Histoire
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Former les talents IT de demain
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed">
                Depuis plus de 10 ans, DJEUTCH ACADEMY accompagne les passionnés de technologie 
                vers l'excellence professionnelle à travers des formations de qualité.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Mission */}
              <div className="bg-card rounded-3xl border border-border p-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Notre Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Démocratiser l'accès aux compétences IT de pointe en Afrique en offrant 
                  des formations professionnalisantes, pratiques et alignées sur les besoins 
                  réels du marché. Nous croyons que chaque talent mérite une chance de briller 
                  dans l'économie numérique.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card rounded-3xl border border-border p-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Notre Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Devenir le centre de référence en formation IT en Afrique Centrale, 
                  reconnu pour la qualité de ses programmes, l'expertise de ses formateurs 
                  et le taux d'insertion professionnelle de ses apprenants. Nous aspirons 
                  à créer un écosystème tech dynamique et innovant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Nos Valeurs
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ce qui nous guide au quotidien
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-card transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  Méthodologie
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Une approche pédagogique unique
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Notre méthode "Learning by Doing" place la pratique au cœur de chaque formation. 
                  Dès le premier jour, vous travaillez sur des projets réels qui enrichissent 
                  votre portfolio et préparent votre insertion professionnelle.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Fondamentaux théoriques</h4>
                      <p className="text-sm text-muted-foreground">Acquisition des concepts clés avec nos experts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Mise en pratique immédiate</h4>
                      <p className="text-sm text-muted-foreground">Exercices et mini-projets pour consolider les acquis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Projet professionnel</h4>
                      <p className="text-sm text-muted-foreground">Réalisation d'un projet complet pour votre portfolio</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card rounded-3xl border border-border p-8 shadow-elevated">
                  <BookOpen className="w-16 h-16 text-primary mb-6" />
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Pratique</span>
                        <span className="text-sm font-bold text-primary">80%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-primary rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Théorie</span>
                        <span className="text-sm font-bold text-accent">20%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-1/5 bg-accent rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Notre Équipe
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Des experts passionnés
              </h2>
              <p className="text-lg text-muted-foreground">
                Notre équipe pédagogique combine expertise technique et talent d'enseignement 
                pour vous offrir la meilleure expérience d'apprentissage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-card transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-hero-gradient">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Rejoignez l'aventure DJEUTCH ACADEMY
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
              Prenez rendez-vous avec notre équipe pour discuter de votre projet de formation.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
