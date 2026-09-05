import React, { useState } from "react";
import { sportsData } from "../data/sportsData";
import { Users, MapPin, Trophy, BookOpen, Flame } from "lucide-react";

export function SportsSection({ onSelectSport }) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSports = sportsData.filter((sport) => {
    if (activeTab === "all") return true;
    return sport.category === activeTab;
  });

  return (
    <section id="events" className="section" style={{ background: "rgba(10, 6, 9, 0.5)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">02 // Tournaments & Rules</div>
          <h2 className="section-title">THE TOURNAMENT ARENA</h2>
          <p className="section-desc">
            Explore rules, team size guidelines, and match formats across 12+ official sports and battle royale esports events.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="sports-tabs">
          <button
            className={`sports-tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Events ({sportsData.length})
          </button>
          <button
            className={`sports-tab-btn ${activeTab === "esports" ? "active" : ""}`}
            onClick={() => setActiveTab("esports")}
          >
            🎮 Esports (2)
          </button>
          <button
            className={`sports-tab-btn ${activeTab === "outdoor" ? "active" : ""}`}
            onClick={() => setActiveTab("outdoor")}
          >
            ⚽ Outdoor Sports (5)
          </button>
          <button
            className={`sports-tab-btn ${activeTab === "indoor" ? "active" : ""}`}
            onClick={() => setActiveTab("indoor")}
          >
            🏸 Indoor & Mind Games (5)
          </button>
        </div>

        {/* Sports Cards Grid */}
        <div className="sports-grid">
          {filteredSports.map((sport) => (
            <div
              key={sport.id}
              className="sport-card"
              onClick={() => onSelectSport(sport)}
            >
              <div>
                <div className="sport-header">
                  <div className="sport-emoji">{sport.icon}</div>
                  <span className={`sport-badge ${sport.category}`}>
                    {sport.category}
                  </span>
                </div>

                <h3>{sport.name}</h3>
                <p className="sport-tagline">{sport.tagline}</p>

                <div className="sport-meta-list">
                  <div className="sport-meta-item">
                    <Users size={15} />
                    <span><strong>Team:</strong> {sport.teamSize}</span>
                  </div>
                  <div className="sport-meta-item">
                    <MapPin size={15} />
                    <span><strong>Venue:</strong> {sport.venue}</span>
                  </div>
                  <div className="sport-meta-item">
                    <Trophy size={15} />
                    <span><strong>Prize:</strong> {sport.prize}</span>
                  </div>
                </div>
              </div>

              <button className="sport-action-btn">
                <BookOpen size={16} /> View Rulebook & Format
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
