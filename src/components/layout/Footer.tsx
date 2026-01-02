import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="DJEUTCH ACADEMY" className="h-16 w-auto" />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Centre de formation IT d'excellence, formant les talents numériques de demain avec passion et expertise.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Formations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/formations/developpement-web" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Développement Web & Mobile
                </Link>
              </li>
              <li>
                <Link to="/formations/data-ia" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Data & Intelligence Artificielle
                </Link>
              </li>
              <li>
                <Link to="/formations/cybersecurite" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Cybersécurité
                </Link>
              </li>
              <li>
                <Link to="/formations/cloud-devops" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/formations/design" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">L'Académie</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/a-propos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/evenements" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Événements
                </Link>
              </li>
              <li>
                <Link to="/partenaires" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Douala, Cameroun
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+237600000000" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  +237 6XX XXX XXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:contact@djeutch-academy.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  contact@djeutch-academy.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} DJEUTCH ACADEMY. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/mentions-legales" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
