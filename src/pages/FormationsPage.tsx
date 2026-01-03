import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Database,
  Shield,
  Cloud,
  Palette,
  Server,
  Clock,
  Users,
  CheckCircle,
  Video,
  Layers,
  Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const programs = [
  {
    id: "dev-web",
    icon: Code,
    title: "Développement Web & Mobile",
    shortDesc: "Maîtrisez les technologies frontend et backend",
    fullDesc: "Formation complète pour devenir développeur web et mobile.",
    duration: "6-12 mois",
    level: "Débutant à Avancé",
    modalities: {
      presentiel: {
        label: "Présentiel",
        price: "450 000 FCFA",
      },
      en_ligne: {
        label: "En ligne",
        modes: {
          live: { label: "Live", price: "420 000 FCFA" },
          mixte: { label: "Mixte", price: "400 000 FCFA" },
          voix_off: { label: "Voix off", price: "350 000 FCFA" },
        },
      },
    },
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Node.js",
      "PHP",
      "Laravel",
      "Flutter",
    ],
    objectives: [
      "Créer des sites web responsive",
      "Développer des applications mobiles",
      "Maîtriser les bases de données",
    ],
    careers: [
      "Développeur Frontend",
      "Développeur Backend",
      "Développeur Full Stack",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "data-ia",
    icon: Database,
    title: "Data & Intelligence Artificielle",
    shortDesc: "Exploitez la puissance des données",
    fullDesc:
        "Devenez expert en analyse de données et intelligence artificielle.",
    duration: "6-9 mois",
    level: "Intermédiaire à Avancé",
    modalities: {
      presentiel: {
        label: "Présentiel",
        price: "150 000 FCFA",
      },
      en_ligne: {
        label: "En ligne",
        modes: {
          live: { label: "Live", price: "100 000 FCFA" },
          mixte: { label: "Mixte", price: "100 000 FCFA" },
          voix_off: { label: "Voix off", price: "25 000 FCFA" },
        },
      },
    },
    technologies: [
      "Python",
      "SQL",
      "TensorFlow",
      "Power BI",
      "Pandas",
    ],
    objectives: [
      "Analyser des données complexes",
      "Créer des modèles ML",
      "Visualiser les données",
    ],
    careers: [
      "Data Analyst",
      "Data Scientist",
      "ML Engineer",
    ],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "cybersecurite",
    icon: Shield,
    title: "Cybersécurité",
    shortDesc: "Protégez les systèmes",
    fullDesc: "Formation intensive en sécurité informatique.",
    duration: "6-9 mois",
    level: "Intermédiaire à Avancé",
    modalities: {
      presentiel: {
        label: "Présentiel",
        price: "450 000 FCFA",
      },
      en_ligne: {
        label: "En ligne",
        modes: {
          live: { label: "Live", price: "420 000 FCFA" },
          mixte: { label: "Mixte", price: "400 000 FCFA" },
          voix_off: { label: "Voix off", price: "350 000 FCFA" },
        },
      },
    },
    technologies: [
      "Ethical Hacking",
      "Kali Linux",
      "SIEM",
      "Forensics",
    ],
    objectives: [
      "Réaliser des audits de sécurité",
      "Gérer les incidents",
    ],
    careers: [
      "Analyste SOC",
      "Pentester",
      "Consultant Cybersécurité",
    ],
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    shortDesc: "Déployez des infrastructures cloud",
    fullDesc:
        "Maîtrisez les pratiques DevOps et plateformes cloud.",
    duration: "6-9 mois",
    level: "Intermédiaire",
    modalities: {
      presentiel: {
        label: "Présentiel",
        price: "450 000 FCFA",
      },
      en_ligne: {
        label: "En ligne",
        modes: {
          live: { label: "Live", price: "420 000 FCFA" },
          mixte: { label: "Mixte", price: "400 000 FCFA" },
          voix_off: { label: "Voix off", price: "350 000 FCFA" },
        },
      },
    },
    technologies: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    objectives: [
      "Concevoir des architectures cloud",
      "Mettre en place des pipelines CI/CD",
    ],
    careers: [
      "DevOps Engineer",
      "Cloud Architect",
    ],
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: "design-ui-ux",
    icon: Palette,
    title: "UI/UX Design",
    shortDesc: "Concevez des expériences mémorables",
    fullDesc: "Formation complète en design d'interfaces.",
    duration: "4-6 mois",
    level: "Débutant à Intermédiaire",
    modalities: {
      presentiel: {
        label: "Présentiel",
        price: "450 000 FCFA",
      },
      en_ligne: {
        label: "En ligne",
        modes: {
          live: { label: "Live", price: "420 000 FCFA" },
          mixte: { label: "Mixte", price: "400 000 FCFA" },
          voix_off: { label: "Voix off", price: "350 000 FCFA" },
        },
      },
    },
    technologies: [
      "Figma",
      "Adobe XD",
      "Prototyping",
      "User Research",
    ],
    objectives: [
      "Mener des recherches utilisateur",
      "Créer des prototypes interactifs",
    ],
    careers: [
      "UI Designer",
      "UX Designer",
      "Product Designer",
    ],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "reseaux",
    icon: Server,
    title: "Réseaux & Systèmes",
    shortDesc: "Administrez les infrastructures IT",
    fullDesc:
        "Devenez administrateur système et réseau.",
    duration: "6-9 mois",
    level: "Débutant à Intermédiaire",
    modalities: {
      presentiel: {
        label: "Présentiel",
        price: "450 000 FCFA",
      },
      en_ligne: {
        label: "En ligne",
        modes: {
          live: { label: "Live", price: "420 000 FCFA" },
          mixte: { label: "Mixte", price: "400 000 FCFA" },
          voix_off: { label: "Voix off", price: "350 000 FCFA" },
        },
      },
    },
    technologies: [
      "Cisco",
      "Windows Server",
      "Linux",
      "VMware",
    ],
    objectives: [
      "Concevoir des réseaux d'entreprise",
      "Administrer des serveurs",
    ],
    careers: [
      "Administrateur Système",
      "Administrateur Réseau",
    ],
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    id: "marketing-digital",
    icon: Code,
    title: "Marketing Digital",
    shortDesc:
        "Stratégies digitales et visibilité en ligne",
    fullDesc:
        "Maîtrisez le marketing digital et les réseaux sociaux.",
    duration: "3-6 mois",
    level: "Débutant",
    modalities: {
      presentiel: {
        label: "Présentiel",
        price: "450 000 FCFA",
      },
      en_ligne: {
        label: "En ligne",
        modes: {
          live: { label: "Live", price: "420 000 FCFA" },
          mixte: { label: "Mixte", price: "400 000 FCFA" },
          voix_off: { label: "Voix off", price: "350 000 FCFA" },
        },
      },
    },
    technologies: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Analytics",
      "Content Marketing",
    ],
    objectives: [
      "Créer des campagnes publicitaires",
      "Optimiser le référencement",
      "Analyser les performances",
    ],
    careers: [
      "Community Manager",
      "Traffic Manager",
      "Growth Hacker",
    ],
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: "odoo",
    icon: Server,
    title: "Odoo ERP",
    shortDesc: "Gestion d'entreprise avec Odoo",
    fullDesc:
        "Implémentez et personnalisez Odoo pour optimiser la gestion.",
    duration: "3-6 mois",
    level: "Intermédiaire",
    modalities: {
      presentiel: {
        label: "Présentiel",
        price: "450 000 FCFA",
      },
      en_ligne: {
        label: "En ligne",
        modes: {
          live: { label: "Live", price: "420 000 FCFA" },
          mixte: { label: "Mixte", price: "400 000 FCFA" },
          voix_off: { label: "Voix off", price: "350 000 FCFA" },
        },
      },
    },
    technologies: [
      "Odoo",
      "Python",
      "PostgreSQL",
      "XML",
      "JavaScript",
    ],
    objectives: [
      "Installer et configurer Odoo",
      "Personnaliser les modules",
      "Former les utilisateurs",
    ],
    careers: [
      "Consultant Odoo",
      "Développeur Odoo",
      "Chef de projet ERP",
    ],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: "bureautique",
    icon: Database,
    title: "Bureautique Avancée",
    shortDesc:
        "Maîtrisez les outils de productivité",
    fullDesc:
        "Formation complète sur les outils bureautiques.",
    duration: "2-3 mois",
    level: "Débutant",
    modalities: {
      presentiel: {
        label: "Présentiel",
        price: "450 000 FCFA",
      },
      en_ligne: {
        label: "En ligne",
        modes: {
          live: { label: "Live", price: "420 000 FCFA" },
          mixte: { label: "Mixte", price: "400 000 FCFA" },
          voix_off: { label: "Voix off", price: "350 000 FCFA" },
        },
      },
    },
    technologies: [
      "Excel",
      "Word",
      "PowerPoint",
      "Outlook",
      "Google Workspace",
    ],
    objectives: [
      "Créer des documents professionnels",
      "Automatiser avec Excel",
      "Gérer emails efficacement",
    ],
    careers: [
      "Assistant administratif",
      "Secrétaire de direction",
      "Office Manager",
    ],
    color: "from-slate-500/20 to-gray-500/20",
  },
  {
    id: "design-graphique",
    icon: Palette,
    title: "Design Graphique",
    shortDesc: "Créez des visuels percutants",
    fullDesc:
        "Maîtrisez les outils de création graphique.",
    duration: "4-6 mois",
    level: "Débutant à Intermédiaire",
    modalities: {
      presentiel: {
        label: "Présentiel",
        price: "450 000 FCFA",
      },
      en_ligne: {
        label: "En ligne",
        modes: {
          live: { label: "Live", price: "420 000 FCFA" },
          mixte: { label: "Mixte", price: "400 000 FCFA" },
          voix_off: { label: "Voix off", price: "350 000 FCFA" },
        },
      },
    },
    technologies: [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "After Effects",
    ],
    objectives: [
      "Créer des identités visuelles",
      "Concevoir des supports print",
      "Réaliser des animations",
    ],
    careers: [
      "Graphiste",
      "Directeur artistique",
      "Motion Designer",
    ],
    color: "from-teal-500/20 to-cyan-500/20",
  },
];

const FormationsPage = () => {
  const { t, language } = useLanguage();
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);
  const [selectedModality, setSelectedModality] = useState("presentiel");
  const [selectedOnlineMode, setSelectedOnlineMode] = useState(null);
  /* ===== AJOUT LOGIQUE FILTRAGE (SANS TOUCHER AU RESTE) ===== */
  const [filterLevel, setFilterLevel] = useState("");
  const [filterMode, setFilterMode] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  const getAllPrices = (program) => {
    const prices: number[] = [];

    // Présentiel
    const presentielPrice = program.modalities?.presentiel?.price;
    if (typeof presentielPrice === "string") {
      prices.push(parseInt(presentielPrice.replace(/\s/g, "")));
    }

    // En ligne (Live / Mixte / Voix off)
    const onlineModes = program.modalities?.en_ligne?.modes;
    if (onlineModes) {
      Object.values(onlineModes).forEach((mode: any) => {
        if (typeof mode?.price === "string") {
          prices.push(parseInt(mode.price.replace(/\s/g, "")));
        }
      });
    }

    return prices;
  };

  const filteredPrograms = programs.filter((program) => {
    const levelOk = filterLevel
        ? program.level.toLowerCase().includes(filterLevel)
        : true;

    const modeOk = filterMode
        ? filterMode === "présentiel"
            ? !!program.modalities?.presentiel
            : filterMode === "en ligne"
                ? !!program.modalities?.en_ligne
                : filterMode === "hybride"
                    ? program.modalities?.en_ligne && program.modalities?.presentiel
                    : true
        : true;

    const prices = getAllPrices(program);

    const priceOk =
        filterPrice === "low"
            ? prices.some((p) => p <= 300000)
            : filterPrice === "mid"
                ? prices.some((p) => p > 300000 && p <= 500000)
                : filterPrice === "high"
                    ? prices.some((p) => p > 500000)
                    : true;

    return levelOk && modeOk && priceOk;
  });

  /* ===== FIN AJOUT ===== */

  const price =
      selectedModality === "presentiel"
          ? selectedProgram.modalities.presentiel.price
          : selectedOnlineMode
              ? selectedProgram.modalities.en_ligne.modes[selectedOnlineMode].price
              : "";
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-semibold mb-6">
                {language === 'en' ? 'Course Catalog' : 'Catalogue de Formations'}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {t('formations.title')}
              </h1>
              <p className="text-xl text-primary-foreground/70">
                {t('formations.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* FILTRES */}
        <section className="py-6 bg-background border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="border rounded-lg p-3" onChange={(e) => setFilterLevel(e.target.value)}>
              <option value="">{t('formations.filter.all')} {language === 'en' ? 'levels' : 'niveaux'}</option>
              <option value="débutant">{t('formations.filter.beginner')}</option>
              <option value="intermédiaire">{t('formations.filter.intermediate')}</option>
              <option value="avancé">{t('formations.filter.advanced')}</option>
            </select>

            <select className="border rounded-lg p-3" onChange={(e) => setFilterMode(e.target.value)}>
              <option value="">{t('formations.filter.all')} {language === 'en' ? 'modes' : 'modes'}</option>
              <option value="présentiel">{t('formations.filter.onsite')}</option>
              <option value="en ligne">{t('formations.filter.online')}</option>
              <option value="hybride">{t('formations.filter.hybrid')}</option>
            </select>

            <select className="border rounded-lg p-3" onChange={(e) => setFilterPrice(e.target.value)}>
              <option value="">{t('formations.filter.all')} {language === 'en' ? 'prices' : 'prix'}</option>
              <option value="low">≤ 300 000 FCFA</option>
              <option value="mid">300 000 – 500 000 FCFA</option>
              <option value="high">≥ 500 000 FCFA</option>
            </select>
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
                    {t('formations.objectives')}
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
                    {t('formations.technologies')}
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
                    {t('formations.careers')}
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
                    {price}
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t('formations.duration')}</p>
                        <p className="font-medium text-foreground">{selectedProgram.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t('formations.level')}</p>
                        <p className="font-medium text-foreground">{selectedProgram.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Server className="w-5 h-5 text-muted-foreground"/>
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground mb-2">{t('formations.modality')}</p>
                        <div className="flex gap-2 mb-3">
                          <button
                              onClick={() => {
                                setSelectedModality("presentiel");
                                setSelectedOnlineMode(null);
                              }}
                              className={`px-3 py-2 rounded-lg ${
                                  selectedModality === "presentiel"
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-muted"
                              }`}
                          >
                            {t('formations.onsite')}
                          </button>

                          <button
                              onClick={() => setSelectedModality("en_ligne")}
                              className={`px-3 py-2 rounded-lg ${
                                  selectedModality === "en_ligne"
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-muted"
                              }`}
                          >
                            {t('formations.online')}
                          </button>
                        </div>

                        {selectedModality === "en_ligne" && (
                            <div className="grid grid-cols-3 gap-2">
                              <button
                                  onClick={() => setSelectedOnlineMode("live")}
                                  className={`p-2 rounded-lg flex flex-col items-center ${
                                      selectedOnlineMode === "live"
                                          ? "bg-primary text-primary-foreground"
                                          : "bg-muted"
                                  }`}
                              >
                                <Video className="w-4 h-4 mb-1"/>
                                {t('formations.live')}
                              </button>

                              <button
                                  onClick={() => setSelectedOnlineMode("mixte")}
                                  className={`p-2 rounded-lg flex flex-col items-center ${
                                      selectedOnlineMode === "mixte"
                                          ? "bg-primary text-primary-foreground"
                                          : "bg-muted"
                                  }`}
                              >
                                <Layers className="w-4 h-4 mb-1"/>
                                {t('formations.mixed')}
                              </button>

                              <button
                                  onClick={() => setSelectedOnlineMode("voix_off")}
                                  className={`p-2 rounded-lg flex flex-col items-center ${
                                      selectedOnlineMode === "voix_off"
                                          ? "bg-primary text-primary-foreground"
                                          : "bg-muted"
                                  }`}
                              >
                                <Radio className="w-4 h-4 mb-1"/>
                                {t('formations.voiceover')}
                              </button>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="accent" className="w-full" size="lg" asChild>
                      <Link to="/inscription">
                        {t('formations.register')}
                        <ArrowRight className="w-4 h-4"/>
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <Link to="/contact">{t('formations.quote')}</Link>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    {language === 'en' ? 'Installment payment available' : 'Paiement en plusieurs fois possible'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default FormationsPage;
