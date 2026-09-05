import React from "react";
import { teamMembers } from "../data/festivalData";
import { Mail, Phone, Shield, Code, UserCheck } from "lucide-react";

export function TeamSection() {
  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">05 // Leadership & Organization</div>
          <h2 className="section-title">THE ORGANIZING COMMITTEE</h2>
          <p className="section-desc">
            The dedicated team behind Vriddhi 2026 ensuring seamless tournament execution, referee coordination, and contingent hospitality.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-avatar">
                {member.avatar}
              </div>
              <div className="team-role">{member.role}</div>
              <h3>{member.name}</h3>
              <div className="team-dept">{member.department}</div>

              <div className="team-contact">
                <a href={`tel:${member.contact.replace(/[^0-9+]/g, '')}`}>
                  <Phone size={13} /> {member.contact}
                </a>
                <a href={`mailto:${member.email}`}>
                  <Mail size={13} /> {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
