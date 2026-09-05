import React from "react";
import { Swords, Users2, PartyPopper, CheckCircle2, Award, Zap, ShieldCheck } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">01 // The Spirit of Vriddhi</div>
          <h2 className="section-title">A Legacy of Sportsmanship & Glory</h2>
          <p className="section-desc">
            Organized under the aegis of the Student Activity Centre (SAC) at National Institute of Technology Rourkela.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              <strong>Vriddhi</strong> is the flagship annual sports festival of NIT Rourkela, 
              bringing together premier athletes, strategists, and collegiate contingents from across India 
              for a high-stakes celebration of athleticism, team grit, and unyielding competitive spirit.
            </p>
            <p>
              Infused with high-octane anime sports themes and state-of-the-art sporting facilities, 
              Vriddhi transforms the 600-acre lush campus of NIT Rourkela into a colossal battleground 
              featuring everything from stadium floodlit cricket and football to nerve-wrecking esports LAN finals.
            </p>

            <div className="about-features-list">
              <div className="about-feature-item">
                <CheckCircle2 size={18} /> FIFA-Dimension Grounds
              </div>
              <div className="about-feature-item">
                <CheckCircle2 size={18} /> Official State Referees
              </div>
              <div className="about-feature-item">
                <CheckCircle2 size={18} /> Pro Esports LAN Stage
              </div>
              <div className="about-feature-item">
                <CheckCircle2 size={18} /> Safe Contingent Hostels
              </div>
            </div>
          </div>

          <div className="about-graphic-card">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Zap size={24} color="var(--primary)" />
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "22px", color: "#fff" }}>
                Festival At A Glance
              </h3>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.7" }}>
              Every edition sets new benchmarks in student participation, match intensity, and broadcast viewership across the national student sporting circuit.
            </p>

            <div className="graphic-stats">
              <div className="graphic-stat-box">
                <div className="number">12+</div>
                <div className="label">Tournaments</div>
              </div>
              <div className="graphic-stat-box">
                <div className="number">80+</div>
                <div className="label">Colleges</div>
              </div>
              <div className="graphic-stat-box">
                <div className="number">1500+</div>
                <div className="label">Athletes</div>
              </div>
              <div className="graphic-stat-box">
                <div className="number">3 Days</div>
                <div className="label">Non-Stop Action</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-number">01</div>
            <div className="pillar-icon">
              <Swords size={28} />
            </div>
            <h3>COMPETE</h3>
            <p>
              Test your tactical prowess and athletic limits against the fiercest collegiate squads in Eastern India under certified federation rules.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">02</div>
            <div className="pillar-icon">
              <Users2 size={28} />
            </div>
            <h3>CONNECT</h3>
            <p>
              Build lasting camaraderie, network with fellow athletes across universities, and celebrate the shared passion for sports and gaming.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">03</div>
            <div className="pillar-icon">
              <PartyPopper size={28} />
            </div>
            <h3>CELEBRATE</h3>
            <p>
              Soak in the electric stadium crowds, dynamic anime visuals, DJ concert evenings, and grand trophy ceremonies at the NITR arena.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
