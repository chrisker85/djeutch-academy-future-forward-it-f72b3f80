import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Shield, Cloud, Palette, Server, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: "dev-web",
    icon: Code,
    title: "Développement Web & Mobile",
    shortDesc: "Maîtrisez les technologies frontend et backend",
    fullDesc: "Formation complète pour devenir développeur web et mobile. Apprenez les langages et frameworks les plus demandés sur le marché.",
    duration: "6-12 mois",
    level: "Débutant à Avancé",
    modality: "Présentiel / En ligne",
    price: "450 000 FCFA",
    technologies: ["HTML/CSS", "JavaScript", "React", "Node.js", "PHP", "Laravel", "Flutter", "MySQL"],
    objectives: [
      "Créer des sites web responsive et modernes",
      "Développer des applications mobiles cross-platform",
      "Maîtriser les bases de données et les API REST",
      "Comprendre les bonnes pratiques de développement",
    ],
    careers: ["Développeur Frontend", "Développeur Backend", "Développeur Full Stack", "Développeur Mobile"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "data-ia",
    icon: Database,
    title: "Data & Intelligence Artificielle",
    shortDesc: "Exploitez la puissance des données et de l'IA",
    fullDesc: "Devenez expert en analyse de données et en intelligence artificielle. Transformez les données en insights actionnables.",
    duration: "6-9 mois",
    level: "Intermédiaire à Avancé",
    modality: "Présentiel / Hybride",
    price: "500 000 FCFA",
    technologies: ["Python", "SQL", "TensorFlow", "Scikit-learn", "Power BI", "Tableau", "Pandas", "NumPy"],
    objectives: [
      "Collecter, nettoyer et analyser des données complexes",
      "Créer des modèles de machine learning performants",
      "Visualiser les données avec des outils BI",
      "Déployer des solutions IA en production",
    ],
    careers: ["Data Analyst", "Data Scientist", "ML Engineer", "BI Analyst"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "cybersecurite",
    icon: Shield,
    title: "Cybersécurité",
    shortDesc: "Protégez les systèmes contre les menaces",
    fullDesc: "Formation intensive en sécurité informatique. Apprenez à identifier, prévenir et contrer les cybermenaces.",
    duration: "6-9 mois",
    level: "Intermédiaire à Avancé",
    modality: "Présentiel",
    price: "550 000 FCFA",
    technologies: ["Ethical Hacking", "Kali Linux", "SIEM", "Forensics", "Pentest", "SOC", "Firewall", "VPN"],
    objectives: [
      "Réaliser des audits de sécurité complets",
      "Mettre en place des stratégies de défense",
      "Gérer les incidents de sécurité",
      "Préparer les certifications reconnues",
    ],
    careers: ["Analyste SOC", "Pentester", "Consultant Cybersécurité", "RSSI Junior"],
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    shortDesc: "Déployez des infrastructures cloud évolutives",
    fullDesc: "Maîtrisez les pratiques DevOps et les plateformes cloud pour automatiser et optimiser les déploiements.",
    duration: "6-9 mois",
    level: "Intermédiaire",
    modality: "Présentiel / En ligne",
    price: "480 000 FCFA",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "Git", "Linux"],
    objectives: [
      "Concevoir des architectures cloud scalables",
      "Mettre en place des pipelines CI/CD",
      "Containeriser et orchestrer des applications",
      "Automatiser l'infrastructure avec l'IaC",
    ],
    careers: ["DevOps Engineer", "Cloud Architect", "SRE", "Platform Engineer"],
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    shortDesc: "Concevez des expériences utilisateur mémorables",
    fullDesc: "Formation complète en design d'interfaces et d'expériences utilisateur. Créez des produits digitaux intuitifs et esthétiques.",
    duration: "4-6 mois",
    level: "Débutant à Intermédiaire",
    modality: "Présentiel / Hybride",
    price: "350 000 FCFA",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Design System", "Usability Testing"],
    objectives: [
      "Mener des recherches utilisateur approfondies",
      "Créer des wireframes et prototypes interactifs",
      "Concevoir des interfaces visuellement attrayantes",
      "Construire et maintenir des design systems",
    ],
    careers: ["UI Designer", "UX Designer", "Product Designer", "UX Researcher"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "reseaux",
    icon: Server,
    title: "Réseaux & Systèmes",
    shortDesc: "Administrez les infrastructures IT",
    fullDesc: "Devenez administrateur système et réseau. Gérez les infrastructures informatiques d'entreprise avec expertise.",
    duration: "6-9 mois",
    level: "Débutant à Intermédiaire",
    modality: "Présentiel",
    price: "420 000 FCFA",
    technologies: ["Cisco", "Windows Server", "Linux", "VMware", "Active Directory", "TCP/IP", "VoIP", "Monitoring"],
    objectives: [
      "Concevoir et déployer des réseaux d'entreprise",
      "Administrer des serveurs Windows et Linux",
      "Gérer la virtualisation et le stockage",
      "Assurer la supervision et la maintenance",
    ],
    careers: ["Administrateur Système", "Administrateur Réseau", "Ingénieur Support", "Technicien IT"],
    color: "from-indigo-500/20 to-violet-500/20",
  },
];

const FormationsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-semibold mb-6">
                Catalogue de Formations
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Nos filières IT
              </h1>
              <p className="text-xl text-primary-foreground/70">
                Des programmes conçus avec des experts pour répondre aux besoins du marché.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Navigation */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 scrollbar-hide">
              {programs.map((program) => (
                <button
                  key={program.id}
                  onClick={() => setSelectedProgram(program)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap font-medium text-sm transition-all ${
                    selectedProgram.id === program.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <program.icon className="w-4 h-4" />
                  {program.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Program Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className={`relative rounded-3xl bg-gradient-to-br ${selectedProgram.color} p-8 mb-8`}>
                  <selectedProgram.icon className="w-16 h-16 text-primary mb-4" />
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {selectedProgram.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {selectedProgram.fullDesc}
                  </p>
                </div>

                {/* Objectives */}
                <div className="mb-10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Objectifs de la formation
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedProgram.objectives.map((obj, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Technologies enseignées
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProgram.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Careers */}
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Débouchés métiers
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedProgram.careers.map((career, index) => (
                      <div key={index} className="p-4 rounded-xl border border-border bg-card">
                        <span className="font-medium text-foreground">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-48 bg-card rounded-2xl border border-border p-6 shadow-card">
                  <div className="text-3xl font-bold text-primary font-display mb-6">
                    {selectedProgram.price}
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Durée</p>
                        <p className="font-medium text-foreground">{selectedProgram.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Niveau</p>
                        <p className="font-medium text-foreground">{selectedProgram.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Server className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Modalité</p>
                        <p className="font-medium text-foreground">{selectedProgram.modality}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="accent" className="w-full" size="lg" asChild>
                      <Link to="/inscription">
                        S'inscrire maintenant
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <Link to="/contact">Demander plus d'infos</Link>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Paiement en plusieurs fois possible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FormationsPage;
