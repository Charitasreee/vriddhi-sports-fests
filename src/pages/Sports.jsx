import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { X, Trophy, ArrowRight } from "lucide-react";

export function Sports() {
  const [selectedSport, setSelectedSport] = useState(null);

  const esportsEvents = [
    {
      name: "BGMI",
      icon: "🎮",
      image: "/assets/bgmi-BYtgDJwx.webp",
      rules: [
        "Teams of 4 players compete in battle royale format.",
        "Only the registered ID is allowed for participation; new IDs will not be accepted after registration.",
        "Players cannot change their BGMI name once registered for the tournament.",
        "Players can only participate using a mobile phone.",
        "Every teammember should carry a proper college ID."
      ]
    },
    {
      name: "FREEFIRE",
      icon: "🎮",
      image: "/assets/freefire-B6cKQf9a.jpg",
      rules: [
        "Teams of 4 players compete in battle royale format.",
        "Only the registered ID is allowed for participation; new IDs will not be accepted after registration.",
        "Players cannot change their Freefire name once registered for the tournament.",
        "Players can only participate using a mobile phone.",
        "Every teammember should carry a proper college ID."
      ]
    }
  ];

  const mainSports = [
    {
      name: "BASKETBALL",
      icon: "🏀",
      image: "/assets/basketball-BXWAxlDH.webp",
      rules: [
        "The tournament will be conducted according to the International Basketball Federation Rules.",
        "The number of players representing any college shall not be more than 12 in the case of both men and women.",
        "A teammember is entitled to play when his name has been entered on the score sheet before the start of the game.",
        "Each team shall report at the match venue 30 minutes before the scheduled start of their match.",
        "Every teammember should carry a proper college ID."
      ]
    },
    {
      name: "CHESS",
      icon: "♟️",
      image: "/assets/chess-B6vMfESr.jpg",
      rules: [
        "Chess competition will be played per the FIDE Laws of Chess.",
        "It is a team event, and the team needs 5 players.",
        "A minimum of 4 players are a must for a team.",
        "There will be no separate tournament for girls instead, only a single tournament open to all.",
        "Every teammember should carry a proper college ID."
      ]
    },
    {
      name: "TABLE TENNIS",
      icon: "🏓",
      image: "/assets/tt-CwDEPiKd.png",
      rules: [
        "The racket may be of any size, shape, or weight but the blade shall be flat and rigid.",
        "A side of the blade used for striking the ball shall be covered with either ordinary pimpled rubber.",
        "A player shall inform the opponent and the Umpire in case of changing his/her racquet.",
        "Every teammember should carry a proper college ID."
      ]
    },
    {
      name: "CRICKET",
      icon: "🏏",
      image: "/assets/cricket-CFw2X2XS.png",
      rules: [
        "ALL ICC T20 RULES ARE TO BE APPLIED.",
        "All matches will be played with a white leather ball.",
        "There will be no DRS and The umpire's decision will be final.",
        "The league matches will be 15 overs in which there will be a 4-over powerplay.",
        "The final match will be of 20 overs in which there will be a 6-over powerplay.",
        "Every teammember should carry a proper college ID."
      ]
    },
    {
      name: "FOOTBALL",
      icon: "⚽",
      image: "/assets/football-CcbewbCE.jpg",
      rules: [
        "The venue will be DTS ground with standard dimensions.",
        "Duration of league / round robin / elimination match 50 minutes, 2 halves each of 25 minutes.",
        "Duration of final match 60 minutes, 2 halves each of 30 minutes.",
        "Offside can be called when an attacking player is in front of the last defender when the pass is played through to them.",
        "Every teammember should carry a proper college ID."
      ]
    },
    {
      name: "YOGA",
      icon: "🧘",
      image: "/assets/yoga-BNHOieV8.png",
      rules: [
        "The list of asanas for men and women will be provided beforehand.",
        "There will be some compulsory and some optional asanas.",
        "Marks will be given for accuracy of the posture, mounting and dismounting.",
        "Posture must be held for the mentioned holding time else, deduction of marks will be there.",
        "Every teammember should carry a proper college ID."
      ]
    },
    {
      name: "BADMINTON",
      icon: "🏸",
      image: "/assets/badminton-Dk80X64q.png",
      rules: [
        "Each team should have 6 (5+1S) members.",
        "Each player can play a maximum of one single and one double.",
        "A match consists of the best of 3 rounds, each consisting of 15 points.",
        "The side winning a round will serve first in the next round.",
        "Every teammember should carry a proper college ID."
      ]
    },
    {
      name: "KHO KHO",
      icon: "🏃",
      image: "/assets/khokho-Dv7k9BKQ.png",
      rules: [
        "A team consists 12 player and 9 player will take the field.",
        "Each game consists 2 innings and each innings consists of 2 turns (chasing and defending turns) each of 9 minute duration.",
        "The chasing team scores one point for each runner who is out.",
        "The captain who won the toss will choose running or defending.",
        "Every teammember should carry a proper college ID."
      ]
    },
    {
      name: "VOLLEYBALL",
      icon: "🏐",
      image: "/assets/volleyball-BXFONRvU.png",
      rules: [
        "The league / elimination matches will be evaluated based on the best of 3 sets of 25 points each.",
        "The semi-finals and finals will be evaluated based on the best of 5 sets each.",
        "The interval between sets should not be more than 2 minutes.",
        "2 timeouts to each team per set with a duration of 30s.",
        "Every teammember should carry a proper college ID."
      ]
    },
    {
      name: "KABADDI",
      icon: "💪",
      image: "/assets/kabaddi-JWWC-4Ju.png",
      rules: [
        "The match starts with a coin toss between the two teams.",
        "Each team is allowed two time-outs in a half.",
        "Each team has 7 players and 5 substitutes.",
        "The duration of the match shall be two halves of 20 minutes.",
        "Every teammember should carry a proper college ID."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bangers text-primary mb-4 tracking-wider">
            EVENTS
          </h1>
          <p className="text-muted-foreground text-lg">
            Compete across exciting sports and e-sports events!
          </p>
        </div>

        {/* ESPORTS CATEGORY */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-russo text-primary mb-8 text-center">
            ESPORTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {esportsEvents.map((sport) => (
              <div
                key={sport.name}
                onClick={() => setSelectedSport(sport)}
                className="group relative h-64 overflow-hidden rounded-lg cursor-pointer bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary"
              >
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-center">
                  <h3 className="text-2xl font-russo text-white mb-2 drop-shadow-lg">
                    {sport.name}
                  </h3>
                  <div className="w-6 h-6 text-accent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN SPORTS CATEGORY */}
        <div>
          <h2 className="text-3xl md:text-4xl font-russo text-primary mb-8 text-center">
            SPORTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mainSports.map((sport) => (
              <div
                key={sport.name}
                onClick={() => setSelectedSport(sport)}
                className="group relative h-64 overflow-hidden rounded-lg cursor-pointer bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary"
              >
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-center">
                  <h3 className="text-2xl font-russo text-white mb-2 drop-shadow-lg">
                    {sport.name}
                  </h3>
                  <div className="w-6 h-6 text-accent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Rules Dialog Modal */}
      {selectedSport && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedSport(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-card border border-primary/30 rounded-xl p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSport(null)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <span className="text-4xl mb-2 inline-block">{selectedSport.icon}</span>
              <h2 className="text-3xl font-russo text-primary tracking-wide">
                {selectedSport.name} RULES
              </h2>
            </div>

            <div className="space-y-3 mb-8">
              {selectedSport.rules.map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-sm text-foreground/90 bg-muted/30 p-3 rounded-lg border border-border"
                >
                  <span className="text-primary font-bold">{idx + 1}.</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link to="/register">
                <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium px-6 py-3 bg-primary text-primary-foreground shadow-glow-primary hover:bg-primary/90 transition-all">
                  Register for {selectedSport.name} <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
