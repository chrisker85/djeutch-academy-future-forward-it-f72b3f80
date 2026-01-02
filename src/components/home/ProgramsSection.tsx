import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Shield, Cloud, Palette, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Code,
    title: "Développement Web & Mobile",
    description: "Maîtrisez les technologies frontend et backend pour créer des applications modernes et performantes.",
    technologies: ["React", "Node.js", "Flutter", "PHP/Laravel"],
    duration: "6-12 mois",
    href: "/formations/developpement-web",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Database,
    title: "Data & Intelligence Artificielle",
    description: "Apprenez à exploiter la puissance des données et de l'IA pour créer des solutions intelligentes.",
    technologies: ["Python", "TensorFlow", "SQL", "Power BI"],
    duration: "6-9 mois",
    href: "/formations/data-ia",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Protégez les systèmes d'information contre les menaces et devenez expert en sécurité informatique.",
    technologies: ["Ethical Hacking", "SOC", "SIEM", "Forensics"],
    duration: "6-9 mois",
    href: "/formations/cybersecurite",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Déployez et gérez des infrastructures cloud évolutives avec les pratiques DevOps modernes.",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
    duration: "6-9 mois",
    href: "/formations/cloud-devops",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Concevez des interfaces utilisateur intuitives et des expériences digitales mémorables.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    duration: "4-6 mois",
    href: "/formations/design",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Server,
    title: "Réseaux & Systèmes",
    description: "Administrez les infrastructures réseau et les systèmes informatiques d'entreprise.",
    technologies: ["Cisco", "Linux", "Windows Server", "VMware"],
    duration: "6-9 mois",
    href: "/formations/reseaux",
    color: "from-indigo-500/20 to-violet-500/20",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nos Filières
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Des formations adaptées aux{" "}
            <span className="text-primary">besoins du marché</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choisissez parmi nos programmes conçus en collaboration avec des experts 
            et des entreprises pour répondre aux exigences du secteur IT.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link
              key={index}
              to={program.href}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <program.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    Durée: <strong className="text-foreground">{program.duration}</strong>
                  </span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/formations">
              Voir toutes les formations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
