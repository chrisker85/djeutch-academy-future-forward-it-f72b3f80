import { Link } from "react-router-dom";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingSessions = [
  {
    id: 1,
    title: "Développement Web Full Stack",
    startDate: "15 Février 2025",
    duration: "6 mois",
    spots: 12,
    totalSpots: 20,
    status: "open",
    price: "450 000 FCFA",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    startDate: "1er Mars 2025",
    duration: "6 mois",
    spots: 8,
    totalSpots: 15,
    status: "open",
    price: "500 000 FCFA",
  },
  {
    id: 3,
    title: "Cybersécurité - Niveau 1",
    startDate: "10 Mars 2025",
    duration: "4 mois",
    spots: 15,
    totalSpots: 15,
    status: "coming",
    price: "400 000 FCFA",
  },
  {
    id: 4,
    title: "UI/UX Design Intensive",
    startDate: "20 Mars 2025",
    duration: "4 mois",
    spots: 0,
    totalSpots: 12,
    status: "full",
    price: "350 000 FCFA",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "open":
      return (
        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-semibold">
          Inscriptions ouvertes
        </span>
      );
    case "coming":
      return (
        <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-semibold">
          Bientôt disponible
        </span>
      );
    case "full":
      return (
        <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-600 text-xs font-semibold">
          Complet
        </span>
      );
    default:
      return null;
  }
};

const SessionsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Calendrier
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Prochaines <span className="text-primary">sessions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Consultez notre calendrier et réservez votre place pour la prochaine session de formation.
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {upcomingSessions.map((session) => (
            <div
              key={session.id}
              className={`bg-card rounded-2xl border border-border p-6 hover:shadow-card transition-all duration-300 ${
                session.status === "full" ? "opacity-60" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {session.title}
                </h3>
                {getStatusBadge(session.status)}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{session.startDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{session.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{session.spots}/{session.totalSpots} places</span>
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {session.price}
                </div>
              </div>

              {/* Progress Bar */}
              {session.status !== "coming" && (
                <div className="mb-4">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        session.status === "full" ? "bg-accent" : "bg-primary"
                      }`}
                      style={{
                        width: `${((session.totalSpots - session.spots) / session.totalSpots) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              <Button
                variant={session.status === "open" ? "default" : "outline"}
                className="w-full"
                disabled={session.status === "full"}
                asChild={session.status !== "full"}
              >
                {session.status === "full" ? (
                  <span>Liste d'attente</span>
                ) : session.status === "coming" ? (
                  <Link to="/contact">Me notifier</Link>
                ) : (
                  <Link to="/inscription">
                    S'inscrire
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/calendrier">
              Voir le calendrier complet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
