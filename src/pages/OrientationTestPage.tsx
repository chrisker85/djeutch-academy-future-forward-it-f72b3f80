import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle, RotateCcw, Code, Database, Shield, Cloud, Palette, Server, TrendingUp, Settings, FileText, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";

const formations = {
  dev: { id: "dev-web", title: "Développement Web & Mobile", titleEn: "Web & Mobile Development", icon: Code, description: "Créez des applications web et mobiles modernes avec les dernières technologies.", descriptionEn: "Create modern web and mobile applications with the latest technologies.", color: "from-blue-500 to-cyan-500" },
  data: { id: "data-ia", title: "Data & Intelligence Artificielle", titleEn: "Data & Artificial Intelligence", icon: Database, description: "Maîtrisez l'analyse de données et le machine learning pour des solutions intelligentes.", descriptionEn: "Master data analysis and machine learning for intelligent solutions.", color: "from-purple-500 to-pink-500" },
  cyber: { id: "cybersecurite", title: "Cybersécurité", titleEn: "Cybersecurity", icon: Shield, description: "Protégez les systèmes d'information et devenez expert en sécurité informatique.", descriptionEn: "Protect information systems and become an IT security expert.", color: "from-red-500 to-orange-500" },
  cloud: { id: "cloud-devops", title: "Cloud & DevOps", titleEn: "Cloud & DevOps", icon: Cloud, description: "Déployez et gérez des infrastructures cloud avec les pratiques DevOps modernes.", descriptionEn: "Deploy and manage cloud infrastructures with modern DevOps practices.", color: "from-amber-500 to-yellow-500" },
  design: { id: "design-ui-ux", title: "UI/UX Design", titleEn: "UI/UX Design", icon: Palette, description: "Concevez des interfaces utilisateur intuitives et des expériences mémorables.", descriptionEn: "Design intuitive user interfaces and memorable experiences.", color: "from-green-500 to-emerald-500" },
  reseaux: { id: "reseaux", title: "Réseaux & Systèmes", titleEn: "Networks & Systems", icon: Server, description: "Administrez les infrastructures réseau et les systèmes d'entreprise.", descriptionEn: "Administer network infrastructures and enterprise systems.", color: "from-indigo-500 to-violet-500" },
  marketing: { id: "marketing-digital", title: "Marketing Digital", titleEn: "Digital Marketing", icon: TrendingUp, description: "Maîtrisez les stratégies digitales pour développer la visibilité en ligne.", descriptionEn: "Master digital strategies to develop online visibility.", color: "from-pink-500 to-rose-500" },
  odoo: { id: "odoo", title: "Odoo ERP", titleEn: "Odoo ERP", icon: Settings, description: "Implémentez et personnalisez Odoo pour optimiser la gestion d'entreprise.", descriptionEn: "Implement and customize Odoo to optimize business management.", color: "from-violet-500 to-purple-500" },
  bureautique: { id: "bureautique", title: "Bureautique Avancée", titleEn: "Advanced Office Suite", icon: FileText, description: "Maîtrisez les outils bureautiques pour une productivité optimale.", descriptionEn: "Master office tools for optimal productivity.", color: "from-slate-500 to-gray-500" },
  graphique: { id: "design-graphique", title: "Design Graphique", titleEn: "Graphic Design", icon: PenTool, description: "Créez des visuels percutants et des identités de marque professionnelles.", descriptionEn: "Create striking visuals and professional brand identities.", color: "from-teal-500 to-cyan-500" }
};

type FormationKey = keyof typeof formations;

const OrientationTestPage = () => {
  const { t, language } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [scores, setScores] = useState<Record<FormationKey, number>>({
    dev: 0, data: 0, cyber: 0, cloud: 0, design: 0,
    reseaux: 0, marketing: 0, odoo: 0, bureautique: 0, graphique: 0
  });
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1, question: t('orientation.q1'),
      options: [
        { text: t('orientation.q1.o1'), scores: { dev: 3, design: 2, marketing: 1 } },
        { text: t('orientation.q1.o2'), scores: { data: 3, bureautique: 1 } },
        { text: t('orientation.q1.o3'), scores: { cyber: 3, reseaux: 1 } },
        { text: t('orientation.q1.o4'), scores: { cloud: 2, odoo: 3 } },
      ]
    },
    {
      id: 2, question: t('orientation.q2'),
      options: [
        { text: t('orientation.q2.o1'), scores: { dev: 2, cyber: 2, reseaux: 2 } },
        { text: t('orientation.q2.o2'), scores: { design: 3, graphique: 2, marketing: 1 } },
        { text: t('orientation.q2.o3'), scores: { data: 3, bureautique: 2 } },
        { text: t('orientation.q2.o4'), scores: { marketing: 2, odoo: 2 } },
      ]
    },
    {
      id: 3, question: t('orientation.q3'),
      options: [
        { text: t('orientation.q3.o1'), scores: { dev: 3 } },
        { text: t('orientation.q3.o2'), scores: { data: 3, bureautique: 1 } },
        { text: t('orientation.q3.o3'), scores: { graphique: 3, design: 2 } },
        { text: t('orientation.q3.o4'), scores: { cloud: 3, cyber: 1 } },
      ]
    },
    {
      id: 4, question: t('orientation.q4'),
      options: [
        { text: t('orientation.q4.o1'), scores: { dev: 3, cloud: 1 } },
        { text: t('orientation.q4.o2'), scores: { data: 2, bureautique: 3 } },
        { text: t('orientation.q4.o3'), scores: { design: 2, graphique: 3 } },
        { text: t('orientation.q4.o4'), scores: { cloud: 3, cyber: 1 } },
      ]
    },
    {
      id: 5, question: t('orientation.q5'),
      options: [
        { text: t('orientation.q5.o1'), scores: { dev: 3, data: 1 } },
        { text: t('orientation.q5.o2'), scores: { design: 3, dev: 1 } },
        { text: t('orientation.q5.o3'), scores: { cyber: 3, reseaux: 1 } },
        { text: t('orientation.q5.o4'), scores: { reseaux: 3, cloud: 1 } },
      ]
    },
    {
      id: 6, question: t('orientation.q6'),
      options: [
        { text: t('orientation.q6.o1'), scores: { dev: 2, cloud: 2, design: 1 } },
        { text: t('orientation.q6.o2'), scores: { data: 2, cyber: 2, bureautique: 1 } },
        { text: t('orientation.q6.o3'), scores: { marketing: 3, graphique: 2 } },
        { text: t('orientation.q6.o4'), scores: { odoo: 3, reseaux: 1 } },
      ]
    },
    {
      id: 7, question: t('orientation.q7'),
      options: [
        { text: t('orientation.q7.o1'), scores: { bureautique: 2, design: 1, marketing: 1 } },
        { text: t('orientation.q7.o2'), scores: { dev: 1, data: 1, cloud: 1 } },
        { text: t('orientation.q7.o3'), scores: { cyber: 1, cloud: 1, data: 1 } },
        { text: t('orientation.q7.o4'), scores: { odoo: 2, bureautique: 2 } },
      ]
    },
    {
      id: 8, question: t('orientation.q8'),
      options: [
        { text: t('orientation.q8.o1'), scores: { dev: 3 } },
        { text: t('orientation.q8.o2'), scores: { data: 3 } },
        { text: t('orientation.q8.o3'), scores: { design: 2, graphique: 2 } },
        { text: t('orientation.q8.o4'), scores: { odoo: 2, marketing: 2, cloud: 1 } },
      ]
    }
  ];

  const handleAnswer = (optionIndex: number, optionScores: Record<string, number>) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    const newScores = { ...scores };
    Object.entries(optionScores).forEach(([key, value]) => {
      if (key in newScores) {
        newScores[key as FormationKey] += value;
      }
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScores({ dev: 0, data: 0, cyber: 0, cloud: 0, design: 0, reseaux: 0, marketing: 0, odoo: 0, bureautique: 0, graphique: 0 });
    setShowResults(false);
  };

  const getTopFormations = () => {
    const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a).slice(0, 3);
    return sorted.map(([key]) => formations[key as FormationKey]);
  };

  const getFormationTitle = (formation: typeof formations.dev) => language === 'en' ? formation.titleEn : formation.title;
  const getFormationDesc = (formation: typeof formations.dev) => language === 'en' ? formation.descriptionEn : formation.description;

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const topFormations = getTopFormations();
    const primaryFormation = topFormations[0];
    const PrimaryIcon = primaryFormation.icon;

    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-20 bg-hero-gradient text-primary-foreground">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  {t('orientation.results')}
                </h1>
                <p className="text-xl text-primary-foreground/70">
                  {t('orientation.resultsDesc')}
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <div className={`relative rounded-3xl bg-gradient-to-br ${primaryFormation.color} p-8 mb-8 text-white`}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold mb-4">
                  {t('orientation.recommended')}
                </span>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <PrimaryIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                      {getFormationTitle(primaryFormation)}
                    </h2>
                    <p className="text-white/80 mb-6">
                      {getFormationDesc(primaryFormation)}
                    </p>
                    <Button variant="secondary" size="lg" asChild>
                      <Link to={`/formations/${primaryFormation.id}`}>
                        {t('orientation.discover')}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                {t('orientation.otherFormations')}
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {topFormations.slice(1).map((formation, index) => {
                  const Icon = formation.icon;
                  return (
                    <Link key={index} to={`/formations/${formation.id}`} className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-card transition-all">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${formation.color} flex items-center justify-center text-white flex-shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{getFormationTitle(formation)}</h4>
                        <p className="text-sm text-muted-foreground">{getFormationDesc(formation)}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/inscription">
                    {t('orientation.registerNow')}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" onClick={restart}>
                  <RotateCcw className="w-5 h-5" />
                  {t('orientation.retake')}
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-semibold mb-6">
                {t('orientation.title')}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {t('orientation.findIdeal')}
              </h1>
              <p className="text-xl text-primary-foreground/70">
                {t('orientation.answerQuestions')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>{t('orientation.question')} {currentQuestion + 1} {t('orientation.of')} {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                {question.question}
              </h2>
              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index, option.scores)}
                    className="w-full text-left p-5 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <span className="text-foreground group-hover:text-primary font-medium">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={goBack} disabled={currentQuestion === 0}>
                <ArrowLeft className="w-4 h-4" />
                {t('orientation.previous')}
              </Button>
              <Button variant="ghost" onClick={restart}>
                <RotateCcw className="w-4 h-4" />
                {t('orientation.restart')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrientationTestPage;
