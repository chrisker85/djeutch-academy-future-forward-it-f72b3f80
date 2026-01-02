const partners = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/512px-Cisco_logo_blue_2016.svg.png" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/512px-Oracle_logo.svg.png" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png" },
];

const certifications = [
  "AWS Certified",
  "Google Cloud",
  "Cisco CCNA",
  "CompTIA",
  "Microsoft Azure",
  "Scrum Master",
];

const PartnersSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Partenaires & Certifications
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Reconnu par les{" "}
            <span className="text-primary">leaders du secteur</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nos partenariats avec les grandes entreprises tech garantissent 
            des formations alignées sur les standards de l'industrie.
          </p>
        </div>

        {/* Partners Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Certifications préparées
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium text-sm"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
