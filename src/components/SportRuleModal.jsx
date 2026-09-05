import React from "react";
import { X, Trophy, MapPin, Users, IndianRupee, Flame, Download, CheckCircle } from "lucide-react";

export function SportRuleModal({ sport, onClose, onRegisterForSport, onShowToast }) {
  if (!sport) return null;

  const handleDownload = () => {
    onShowToast(`Downloading official rulebook for ${sport.name}...`);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <span style={{ fontSize: "32px" }}>{sport.icon}</span>
            <span className={`sport-badge ${sport.category}`}>{sport.category}</span>
          </div>
          <h2>{sport.name}</h2>
          <p>{sport.tagline}</p>
        </div>

        {/* Quick parameters grid */}
        <div className="rule-meta-grid">
          <div className="rule-meta-item">
            <strong>{sport.teamSize}</strong>
            <span>Squad Size</span>
          </div>
          <div className="rule-meta-item">
            <strong>{sport.fee}</strong>
            <span>Registration Fee</span>
          </div>
          <div className="rule-meta-item">
            <strong>{sport.prize}</strong>
            <span>Prize Pool</span>
          </div>
        </div>

        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)", fontSize: "14px" }}>
          <MapPin size={16} color="var(--primary)" />
          <span><strong>Venue:</strong> {sport.venue}</span>
        </div>

        {/* Official Rules List */}
        <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", color: "#fff", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
          <CheckCircle size={18} color="var(--primary)" /> Official Tournament Guidelines & Rules
        </h4>

        <div className="rules-list">
          {sport.rules.map((rule, idx) => (
            <div key={idx} className="rule-list-item">
              <span className="bullet">0{idx + 1}.</span>
              <span>{rule}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "24px" }}>
          <button
            className="btn-secondary"
            style={{ width: "100%", justifyContent: "center", padding: "14px" }}
            onClick={handleDownload}
          >
            <Download size={16} /> Rulebook PDF
          </button>
          <button
            className="form-submit-btn"
            style={{ padding: "14px" }}
            onClick={() => {
              onClose();
              onRegisterForSport(sport.name);
            }}
          >
            <Flame size={16} style={{ display: "inline", marginRight: "6px" }} /> Register Team
          </button>
        </div>
      </div>
    </div>
  );
}
