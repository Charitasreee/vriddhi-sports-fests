import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Calendar, MapPin, Trophy, ChevronDown } from "lucide-react";

export function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is the format of the competition?",
      answer: "The format of competition depends on the sport and the number of participants/teams. Further details will be shared in due time."
    },
    {
      question: "Does Vriddhi provide accommodation for participants?",
      answer: "Yes, outstation participants are provided accommodation in Halls of Residence, usually including mattresses and basic amenities."
    },
    {
      question: "Where can we find the confirmation letter required for the registration process?",
      answer: "The confirmation letter must be provided by the participant. It should be signed by college Dean/Principal/Director of the participant, confirming that they have received permission to attend Vriddhi 2026."
    },
    {
      question: "Can we register on the spot at the venue if we haven't registered online?",
      answer: "No, spot registration will not be entertained. You can only register for Vriddhi through the official website."
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, most sports involve a team or individual registration fee. The fee details are visbile in the registration form."
    },
    {
      question: "What happens in case of bad weather or unexpected circumstances?",
      answer: "We are not responsible for unforeseen weather conditions or other unexpected events, and no refunds will be provided in such cases."
    }
  ];

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />

      {/* Floating Mascot with Animated Speech Bubble */}
      <div className="fixed right-6 bottom-8 z-40 flex flex-col items-center pointer-events-none sm:pointer-events-auto">
        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-russo shadow-lg mb-2 animate-bounce">
          Register before it's too late!!
        </div>
        <img
          src="/assets/mascot-1VO8Fec7.png"
          alt="Vriddhi Mascot"
          className="w-28 sm:w-36 md:w-44 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-transform hover:scale-110 hover:-translate-y-2 cursor-grab"
        />
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/bg2-CGRnm_77.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

        <div className="mb-20 md:mb-0 relative z-10 text-center px-4 pt-24">
          <h1 className="text-6xl md:text-9xl font-bangers text-primary mb-6 tracking-wider animate-fade-in drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)]">
            VRIDDHI 2026
          </h1>
          <p className="text-2xl md:text-3xl font-russo text-secondary mb-8 animate-fade-in drop-shadow-lg">
            NIT Rourkela's Annual Sports Festival
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/register">
              <button className="inline-flex items-center justify-center rounded-md font-medium text-lg px-8 py-4 bg-primary text-primary-foreground shadow-glow-primary hover:bg-primary/90 transition-all transform hover:scale-105">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Overview 3 Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm text-card-foreground shadow-sm hover:border-primary/50 transition-all hover:scale-105 hover:shadow-glow-primary">
            <div className="p-6 text-center">
              <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-russo text-foreground mb-2">Event Dates</h3>
              <p className="text-muted-foreground">16th - 18th January 2026</p>
            </div>
          </div>

          <div className="rounded-lg border border-secondary/20 bg-card/50 backdrop-blur-sm text-card-foreground shadow-sm hover:border-secondary/50 transition-all hover:scale-105 hover:shadow-glow-secondary">
            <div className="p-6 text-center">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-russo text-foreground mb-2">Venue</h3>
              <p className="text-muted-foreground">NIT Rourkela, Odisha</p>
            </div>
          </div>

          <div className="rounded-lg border border-accent/20 bg-card/50 backdrop-blur-sm text-card-foreground shadow-sm hover:border-accent/50 transition-all hover:scale-105 hover:shadow-glow-accent">
            <div className="p-6 text-center">
              <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-russo text-foreground mb-2">10+ Sports</h3>
              <p className="text-muted-foreground">Multiple Tournaments</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Card */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bangers text-primary mb-6 tracking-wider">
              ABOUT US
            </h2>
          </div>
          <div className="rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm p-8 md:p-12 shadow-xl">
            <p className="text-lg text-foreground/90 leading-relaxed text-center">
              Vriddhi, the official sports fest of NIT Rourkela, is a vibrant celebration of athletic spirit, teamwork, and youthful energy. Bringing together students from across the country, the fest showcases a diverse range of sports—from high-intensity competitions to{" "}
              <span className="text-primary font-semibold">thrilling team events</span> creating an atmosphere of{" "}
              <span className="text-accent font-semibold">passion and camaraderie.</span> With enthusiastic participation, electrifying matches, and a culture of excellence, Vriddhi stands as a{" "}
              <span className="text-secondary font-semibold">
                symbol of growth, determination, and the unstoppable spirit of sportsmanship
              </span>{" "}
              on campus. Beyond the competitions, the fest fosters meaningful interactions, inspiring moments, and unforgettable memories that strengthen bonds among participants. The energetic crowd, spirited cheers, and commitment of athletes transform the campus into a hub of motivation and unity. As each year adds new milestones and stories, Vriddhi continues to evolve, inspiring students to push their limits and celebrate the true essence of sports.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bangers text-primary mb-6 tracking-wider">
              FAQ<span className="text-4xl md:text-5xl">s</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-card/50 backdrop-blur-sm border rounded-lg px-6 transition-all ${
                    isOpen ? "border-primary/50 shadow-glow-primary/20" : "border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 flex items-center justify-between text-left font-russo text-foreground hover:text-primary transition-colors text-lg"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
