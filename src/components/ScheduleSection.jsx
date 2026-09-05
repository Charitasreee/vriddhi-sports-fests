import React, { useState } from "react";
import { festivalSchedule } from "../data/festivalData";
import { Clock, MapPin, CalendarDays, Flame } from "lucide-react";

export function ScheduleSection() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const currentDay = festivalSchedule[selectedDayIndex];

  return (
    <section id="schedule" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">03 // Timeline & Match Schedule</div>
          <h2 className="section-title">FESTIVAL SCHEDULE</h2>
          <p className="section-desc">
            Catch every second of high-voltage league clashes, tournament knockouts, and stadium finals across 3 action-packed days.
          </p>
        </div>

        {/* Schedule Day Selector Tabs */}
        <div className="schedule-tabs">
          {festivalSchedule.map((day, idx) => (
            <button
              key={day.day}
              className={`schedule-tab-btn ${selectedDayIndex === idx ? "active" : ""}`}
              onClick={() => setSelectedDayIndex(idx)}
            >
              <strong>{day.day}</strong>
              <span>{day.date}</span>
            </button>
          ))}
        </div>

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: "700", color: "var(--secondary)", letterSpacing: "1px", textTransform: "uppercase" }}>
            🔥 Theme: {currentDay.theme}
          </span>
        </div>

        {/* Timeline Events List */}
        <div className="timeline-list">
          {currentDay.events.map((evt, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-time">
                <Clock size={15} />
                <span>{evt.time}</span>
              </div>

              <div className="timeline-info">
                <h4>{evt.title}</h4>
                <p>
                  <MapPin size={13} color="var(--primary)" />
                  <span>{evt.venue}</span>
                </p>
              </div>

              <div>
                <span className="timeline-badge">{evt.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
