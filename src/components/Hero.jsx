import React from "react";
import { Calendar, MapPin, Trophy, Users, Flame, Gamepad2, ArrowRight } from "lucide-react";

export function Hero({ onOpenRegister }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-bg" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-pill">
            <Flame size={15} /> NIT Rourkela's Annual Sports Festival
          </div>

          <h1 className="hero-title">
            VRIDDHI <span>2026</span>
          </h1>

          <p className="hero-tagline">
            Ignite Your Passion • Dominate The Arena
          </p>

          <p className="hero-description">
            Experience Eastern India's largest collegiate anime-themed sports carnival. 
            Over 1,500 athletes and gamers collide across 12 high-octane sports and esports tournaments 
            competing for glory, honour, and massive prize pools.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => onOpenRegister()}>
              <Flame size={18} /> Register Your Team <ArrowRight size={18} />
            </button>
            <a href="#events" className="btn-secondary">
              <Gamepad2 size={18} /> Explore Tournaments
            </a>
          </div>

          {/* Quick stats strip */}
          <div className="hero-stats-grid">
            <div className="stat-card">
              <div className="stat-icon-box">
                <Calendar size={24} />
              </div>
              <div className="stat-info">
                <strong>16th - 18th</strong>
                <span>January 2026</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-box">
                <MapPin size={24} />
              </div>
              <div className="stat-info">
                <strong>NIT Rourkela</strong>
                <span>Odisha, India</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-box">
                <Trophy size={24} />
              </div>
              <div className="stat-info">
                <strong>12+ Events</strong>
                <span>Sports & Esports</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-box">
                <Users size={24} />
              </div>
              <div className="stat-info">
                <strong>₹3,00,000+</strong>
                <span>Total Prize Pool</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
