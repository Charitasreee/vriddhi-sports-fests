import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { X } from "lucide-react";

export function Gallery() {
  const images = [
    { id: 1, src: "/assets/IMG_2231-BkPog_7C.jpg", alt: "Vriddhi 2025 Match Moment 1" },
    { id: 2, src: "/assets/IMG_2247-Beq-XO60.jpg", alt: "Vriddhi 2025 Match Moment 2" },
    { id: 3, src: "/assets/IMG_8232 (1)-BfIqM9sU.jpg", alt: "Vriddhi 2025 Stadium Match" },
    { id: 4, src: "/assets/IMG_9096-B952Cy6g.jpg", alt: "Vriddhi 2025 Basketball Clash" },
    { id: 5, src: "/assets/MIL_9948-BGDNl6Wv.jpg", alt: "Vriddhi 2025 Football Action" },
    { id: 6, src: "/assets/VRIDDHI (15)-CwP3qGff.jpg", alt: "Vriddhi 2025 Ceremony" },
    { id: 7, src: "/assets/aadi-2-17-BshLmYcu.jpg", alt: "Vriddhi 2025 Action Shot 1" },
    { id: 8, src: "/assets/aadi-2-4-BDWNrzdl.jpg", alt: "Vriddhi 2025 Action Shot 2" },
    { id: 9, src: "/assets/aadi-22-DUxd96I1.jpg", alt: "Vriddhi 2025 Action Shot 3" },
    { id: 10, src: "/assets/aadi-24-DRU_Qn5_.jpg", alt: "Vriddhi 2025 Action Shot 4" },
    { id: 11, src: "/assets/aadi-3-BGKdErlh.jpg", alt: "Vriddhi 2025 Action Shot 5" },
    { id: 12, src: "/assets/aadi-4-B9hsaIjV.jpg", alt: "Vriddhi 2025 Action Shot 6" },
    { id: 13, src: "/assets/aadi-5-Cd4_YHep.jpg", alt: "Vriddhi 2025 Action Shot 7" },
    { id: 14, src: "/assets/aadi-8-CvaJIGTS.jpg", alt: "Vriddhi 2025 Action Shot 8" },
    { id: 15, src: "/assets/aadi-9-BZ80ObfS.jpg", alt: "Vriddhi 2025 Action Shot 9" },
    { id: 16, src: "/assets/ayush-col-43-CtBXKDLk.jpg", alt: "Vriddhi 2025 Campus Match" },
    { id: 17, src: "/assets/ayush-col-45-CtvrCyBN.jpg", alt: "Vriddhi 2025 Volleyball Smash" },
    { id: 18, src: "/assets/ayush-col-49-Dzmc4l5p.jpg", alt: "Vriddhi 2025 Cricket Bowling" },
    { id: 19, src: "/assets/chayan-1-12-xGDYnlKr.JPG", alt: "Vriddhi 2025 Badminton Rally" },
    { id: 20, src: "/assets/chayan-1-5-DRAIZvDe.JPG", alt: "Vriddhi 2025 Table Tennis" },
    { id: 21, src: "/assets/chayan-5-CSb9aWCt.JPG", alt: "Vriddhi 2025 Kabaddi Raid" },
    { id: 22, src: "/assets/vriddhi (1)-C2U7fR-c.jpg", alt: "Vriddhi 2025 Trophy Victory" },
    { id: 23, src: "/assets/kk-D-xNWi9Z.png", alt: "Vriddhi 2025 Kho Kho" }
  ];

  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bangers text-primary mb-4 tracking-wider">
            GALLERY
          </h1>
          <p className="text-muted-foreground text-lg">
            Relive the thrilling moments from Vriddhi 2025 edition !!
          </p>
        </div>

        {/* 3-Column Responsive Aspect Ratio Grid matching vriddhi.co */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              role="button"
              tabIndex={0}
              className="group relative overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 aspect-[4/3] sm:aspect-[16/10] lg:aspect-video cursor-pointer shadow-lg hover:shadow-glow-primary"
              style={{ animationDelay: `${idx * 0.03}s` }}
            >
              <div className="absolute inset-0">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-hero opacity-10 group-hover:opacity-25 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox Dialog Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-black rounded-lg overflow-hidden border border-primary/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 p-2 bg-black/60 rounded-full text-white hover:text-primary transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
