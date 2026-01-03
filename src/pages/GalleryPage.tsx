import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const galleryCategories = [
  { id: "all", label: "Tout" },
  { id: "campus", label: "Campus" },
  { id: "formations", label: "Formations" },
  { id: "evenements", label: "Événements" },
  { id: "projets", label: "Projets étudiants" },
  { id: "partenaires", label: "Partenaires" },
];

const galleryImages = [
  {
    id: 1,
    src: "/uploads/centre/pic005_centre.jpeg",
    type: "image",
    alt: "Étudiants en formation",
    category: "formations",
    title: "Session de formation en IA",
  },
  {
    id: 2,
    src: "/uploads/centre/vid008_centre.mp4",
    type: "video",
    alt: "Formation data science",
    category: "formations",
    title: "Cours de Data Science et Python",
  },
  {
    id: 3,
    src: "/uploads/centre/pic004_centre.jpeg",
    type: "image",
    alt: "Workshop design",
    category: "formations",
    title: "Atelier UI/UX Design en action",
  },
  {
    id: 4,
    src: "/uploads/centre/pic003_centre.jpeg",
    type: "image",
    alt: "Campus",
    category: "campus",
    title: "Notre espace de coworking moderne",
  },
  {
    id: 5,
    src: "/uploads/centre/pic006_centre.jpeg",
    type: "image",
    alt: "Flyer pub",
    category: "evenements",
    title: "Fiche d'informations",
  },
  {
    id: 6,
    src: "/uploads/centre/pic007_centre.jpeg",
    type: "image",
    alt: "Flyer pub",
    category: "evenements",
    title: "Fiche d'informations",
  },
  {
    id: 7,
    src: "/uploads/centre/pic008_centre.jpeg",
    type: "image",
    alt: "Flyer pub",
    category: "evenements",
    title: "Fiche d'informations",
  },
  {
    id: 8,
    src: "/uploads/centre/pic009_centre.jpeg",
    type: "image",
    alt: "Flyer pub",
    category: "evenements",
    title: "Fiche d'informations",
  },
  {
    id: 9,
    src: "/uploads/centre/pic010_centre.jpeg",
    type: "image",
    alt: "Flyer pub",
    category: "evenements",
    title: "Fiche d'informations",
  },
  {
    id: 10,
    src: "/uploads/centre/vid003_centre.mp4",
    type: "video",
    alt: "Partenaires",
    category: "partenaires",
    title: "Réunion sur la présentation des modules / formateur ",
  },
  {
    id: 11,
    src: "/uploads/centre/vid004_centre.mp4",
    type: "video",
    alt: "Partenaires",
    category: "partenaires",
    title: "Réunion sur la présentation des modules / formateur ",
  },
  {
    id: 12,
    src: "/uploads/centre/vid005_centre.mp4",
    type: "video",
    alt: "Partenaires",
    category: "partenaires",
    title: "Réunion sur la présentation des modules / formateur ",
  },
  {
    id: 13,
    src: "/uploads/centre/vid006_centre.mp4",
    type: "video",
    alt: "Partenaires",
    category: "partenaires",
    title: "Réunion sur la présentation des modules / formateur ",
  },
  {
    id: 14,
    src: "/uploads/centre/vid001_centre.mp4",
    type: "video",
    alt: "Campus",
    category: "campus",
    title: "Notre espace de coworking moderne",
  },
  {
    id: 15,
    src: "/uploads/centre/vid011_centre.mp4",
    type: "video",
    alt: "Formations",
    category: "formations",
    title: "Echange sur la culture de l'IA",
  },
  {
    id: 16,
    src: "/uploads/centre/vid007_centre.mp4",
    type: "video",
    alt: "Formations",
    category: "formations",
    title: "Echange sur la culture de l'IA",
  },
  {
    id: 17,
    src: "/uploads/centre/vid008_centre.mp4",
    type: "video",
    alt: "Formations",
    category: "formations",
    title: "Echange sur la culture de l'IA",
  },
  {
    id: 18,
    src: "/uploads/centre/vid009_centre.mp4",
    type: "video",
    alt: "Formations",
    category: "formations",
    title: "Echange sur la culture de l'IA",
  },
  {
    id: 19,
    src: "/uploads/centre/vid010_centre.mp4",
    type: "video",
    alt: "Formations",
    category: "formations",
    title: "Echange sur la culture de l'IA",
  },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxMedia, setLightboxMedia] = useState<number | null>(null);

  const filteredImages =
      selectedCategory === "all"
          ? galleryImages
          : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (id: number) => {
    setLightboxMedia(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxMedia(null);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxMedia === null) return;

    const currentIndex = filteredImages.findIndex(
        (img) => img.id === lightboxMedia
    );

    const newIndex =
        direction === "prev"
            ? currentIndex === 0
                ? filteredImages.length - 1
                : currentIndex - 1
            : currentIndex === filteredImages.length - 1
                ? 0
                : currentIndex + 1;

    setLightboxMedia(filteredImages[newIndex].id);
  };

  const currentMedia = galleryImages.find((img) => img.id === lightboxMedia);

  return (
      <div className="min-h-screen">
        <Header />

        <main className="pt-20">
          {/* Filters */}
          <section className="py-8 bg-background border-b sticky top-20 z-40">
            <div className="container mx-auto px-4 flex gap-2 overflow-x-auto">
              {galleryCategories.map((cat) => (
                  <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-5 py-2 rounded-full text-sm font-medium ${
                          selectedCategory === cat.id
                              ? "bg-primary text-white"
                              : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {cat.label}
                  </button>
              ))}
            </div>
          </section>

          {/* Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((media) => (
                  <div
                      key={media.id}
                      onClick={() => openLightbox(media.id)}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                  >
                    {media.type === "image" ? (
                        <img
                            src={media.src}
                            alt={media.alt}
                            className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                    ) : (
                        <>
                          <video
                              src={media.src}
                              muted
                              preload="metadata"
                              className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <Play className="w-14 h-14 text-white" />
                          </div>
                        </>
                    )}

                    <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/70 w-full">
                      <h3 className="text-white font-semibold">{media.title}</h3>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Lightbox */}
          {lightboxMedia !== null && currentMedia && (
              <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
                <button
                    onClick={closeLightbox}
                    className="absolute top-6 right-6 text-white"
                >
                  <X className="w-8 h-8" />
                </button>

                <button
                    onClick={() => navigateLightbox("prev")}
                    className="absolute left-6 text-white"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>

                <button
                    onClick={() => navigateLightbox("next")}
                    className="absolute right-6 text-white"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>

                <div className="max-w-5xl max-h-[80vh] px-10">
                  {currentMedia.type === "image" ? (
                      <img
                          src={currentMedia.src}
                          alt={currentMedia.alt}
                          className="max-h-[70vh] mx-auto rounded-lg"
                      />
                  ) : (
                      <video
                          src={currentMedia.src}
                          controls
                          autoPlay
                          className="max-h-[70vh] mx-auto rounded-lg"
                      />
                  )}

                  <div className="text-center mt-6">
                    <h3 className="text-white font-semibold text-lg">
                      {currentMedia.title}
                    </h3>
                  </div>
                </div>
              </div>
          )}
        </main>

        <Footer />
      </div>
  );
};

export default GalleryPage;
