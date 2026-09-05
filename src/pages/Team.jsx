import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Phone, MessageCircle } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Tangudu Adarsa",
      position: "Convenor",
      phone: "7735656041",
      image: "/assets/adarsh-BPaR7WcP.jpeg"
    },
    {
      name: "Jana Chandrashekhar",
      position: "Convenor",
      phone: "9110570159",
      image: "/assets/jana-C5k1eZct.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bangers text-primary mb-4 tracking-wider">
            Our Team
          </h1>
          <p className="text-muted-foreground text-lg">
            Meet the brilliant minds behind Vriddhi 2026.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-card/60 border border-border rounded-lg p-8 shadow-xl hover:border-primary/50 transition-all hover:scale-105"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-6 bg-gradient-cyber flex items-center justify-center text-6xl shadow-glow-secondary border-2 border-primary/40">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-russo text-foreground mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 text-center">
                {member.position}
              </p>
              <p className="text-foreground font-medium mb-4 text-center">
                Phone: {member.phone}
              </p>

              <div className="flex gap-4 justify-center">
                <a
                  href={`https://wa.me/91${member.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/60 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={`WhatsApp ${member.name}`}
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href={`tel:+91${member.phone}`}
                  className="p-2 rounded-full bg-muted/60 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={`Call ${member.name}`}
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-12 text-center">
          <p className="text-muted-foreground text-sm italic">
            And many more promising core team members and coordinators.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
