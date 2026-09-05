import React, { useState, useEffect } from "react";
import { X, Flame, ShieldAlert, CheckCircle, Upload } from "lucide-react";
import confetti from "canvas-confetti";
import { sportsData } from "../data/sportsData";

export function RegisterModal({ isOpen, initialSport, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    sport: "FOOTBALL",
    college: "",
    rollNo: "",
    email: "",
    phone: "",
    membersCount: 11,
    gender: "Men",
    idCardName: "",
    agreeTerms: false
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialSport) {
      setFormData((prev) => ({ ...prev, sport: initialSport }));
    }
  }, [initialSport]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, idCardName: files[0]?.name || "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      alert("Please agree to the tournament fair-play regulations and guidelines.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      
      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log("Confetti effect executed.");
      }

      onShowToast(
        `🎉 Registration Successful! Team "${formData.teamName}" is registered for ${formData.sport}. Verification email dispatched to ${formData.email}.`
      );

      onClose();
    }, 800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close registration modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)", fontWeight: "800", fontFamily: "var(--font-mono)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
            <Flame size={15} /> Vriddhi 2026 Registration Portal
          </div>
          <h2>TEAM REGISTRATION</h2>
          <p>
            Official tournament entry for collegiate teams & non-NITR contingents.
          </p>
        </div>

        <div style={{ background: "rgba(255, 68, 54, 0.08)", border: "1px solid rgba(255, 68, 54, 0.25)", borderRadius: "12px", padding: "14px 18px", display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "24px" }}>
          <ShieldAlert size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
          <p style={{ fontSize: "13px", color: "#ddd", lineHeight: "1.5" }}>
            Ensure all team members possess valid College ID cards. Official team verification will be conducted 30 minutes prior to scheduled matches.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="teamName">
              Team / Squad Name <span className="req">*</span>
            </label>
            <input
              id="teamName"
              name="teamName"
              type="text"
              required
              className="form-input"
              placeholder="e.g., Roaring Tigers / Phoenix FC"
              value={formData.teamName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="sport">
                Tournament / Sport <span className="req">*</span>
              </label>
              <select
                id="sport"
                name="sport"
                required
                className="form-select"
                value={formData.sport}
                onChange={handleChange}
              >
                {sportsData.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.icon} {s.name} ({s.category.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gender">
                Category / Gender <span className="req">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                className="form-select"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Men">Men's Division</option>
                <option value="Women">Women's Division</option>
                <option value="Mixed/Open">Mixed / Open Tournament</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="college">
                College / Institution Name <span className="req">*</span>
              </label>
              <input
                id="college"
                name="college"
                type="text"
                required
                className="form-input"
                placeholder="e.g., IIT Kharagpur / VSSUT / KIIT"
                value={formData.college}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captainName">
                Captain's Full Name <span className="req">*</span>
              </label>
              <input
                id="captainName"
                name="captainName"
                type="text"
                required
                className="form-input"
                placeholder="Enter Captain's name"
                value={formData.captainName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Captain's Email <span className="req">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="form-input"
                placeholder="captain@college.edu"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                Captain's Phone / WhatsApp <span className="req">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="form-input"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="rollNo">
                Captain's Student Roll No <span className="req">*</span>
              </label>
              <input
                id="rollNo"
                name="rollNo"
                type="text"
                required
                className="form-input"
                placeholder="e.g., 22BCSE104"
                value={formData.rollNo}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="membersCount">
                Squad Members Count <span className="req">*</span>
              </label>
              <input
                id="membersCount"
                name="membersCount"
                type="number"
                min="1"
                max="20"
                required
                className="form-input"
                value={formData.membersCount}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="idCard">
              Captain College ID Card Scan / Photo
            </label>
            <div style={{ position: "relative" }}>
              <input
                id="idCard"
                type="file"
                accept="image/*,.pdf"
                onChange={handleChange}
                className="form-input"
                style={{ padding: "10px" }}
              />
            </div>
            {formData.idCardName && (
              <p style={{ fontSize: "12px", color: "var(--secondary)", marginTop: "4px" }}>
                ✓ Selected: {formData.idCardName}
              </p>
            )}
          </div>

          <div className="checkbox-group">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              required
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeTerms">
              I confirm that all squad members are bona fide collegiate students and agree to abide by the official Vriddhi 2026 sports code of conduct and referee decisions.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="form-submit-btn"
          >
            {loading ? "Processing Registration..." : "Submit Team Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}
