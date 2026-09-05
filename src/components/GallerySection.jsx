import React, { useState } from "react";
import { galleryItems } from "../data/festivalData";
import { X, ZoomIn, Image as ImageIcon } from "lucide-react";

export function GallerySection() {
  const [filter, setFilter] = useState("all");
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = galleryItems.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section id="gallery" className="section" style={{ background: "rgba(10, 6, 9, 0.6)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">04 // Moments of Triumph</div>
          <h2 className="section-title">THE GALLERY</h2>
          <p className="section-desc">
            Relive unforgettable victories, stadium roars, and intense athletic highlights from previous editions of Vriddhi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="sports-tabs">
          <button
            className={`sports-tab-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Photos
          </button>
          <button
            className={`sports-tab-btn ${filter === "sports" ? "active" : ""}`}
            onClick={() => setFilter("sports")}
          >
            Sports Action
          </button>
          <button
            className={`sports-tab-btn ${filter === "esports" ? "active" : ""}`}
            onClick={() => setFilter("esports")}
          >
            Esports Arena
          </button>
          <button
            className={`sports-tab-btn ${filter === "ceremony" ? "active" : ""}`}
            onClick={() => setFilter("ceremony")}
          >
            Ceremonies
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setActiveImage(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <span className="sport-badge" style={{ alignSelf: "flex-start", marginBottom: "6px" }}>
                  {item.tag}
                </span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="modal-backdrop" onClick={() => setActiveImage(null)}>
            <div
              className="modal-dialog"
              style={{ maxWidth: "840px", padding: "16px", background: "#0a0609" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setActiveImage(null)}
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>
              <img
                src={activeImage.image}
                alt={activeImage.title}
                style={{ width: "100%", maxHeight: "65vh", objectFit: "cover", borderRadius: "14px" }}
              />
              <div style={{ padding: "20px 10px 10px" }}>
                <span className="sport-badge" style={{ marginBottom: "8px", display: "inline-block" }}>
                  {activeImage.tag}
                </span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", color: "#fff", marginBottom: "6px" }}>
                  {activeImage.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  {activeImage.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
