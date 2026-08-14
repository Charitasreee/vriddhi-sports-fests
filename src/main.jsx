import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ChevronDown, MapPin, CalendarDays, Trophy, Instagram, Mail, Phone } from "lucide-react";
import "./styles.css";

const faqs = [
  "What is the format of the competition?",
  "Does Vriddhi provide accommodation for participants?",
  "Where can we find the confirmation letter required for the registration process?",
  "Can we register on the spot at the venue if we haven't registered online?",
  "Is there a registration fee?",
  "What happens in case of bad weather or unexpected circumstances?"
];

function App() {
  const [open, setOpen] = useState(null);

  return (
    <div className="app">
      <header className="nav">
        <div className="brand">
          <div className="logoBox">
            <div className="sacMark">SAC</div>
            <span>STUDENT ACTIVITY CENTRE</span>
          </div>
          <div className="divider" />
          <div className="logoBox small">
            <div className="vriddhiMark">V</div>
            <span>VRIDDHI</span>
          </div>
          <div className="wordmark">VRIDDHI</div>
        </div>
        <a className="navRegister" href="#register">Register Now</a>
      </header>

      <main>
        <section className="hero">
          <div className="heroGlow" />
          <div className="brush brushOne" />
          <div className="brush brushTwo" />
          <div className="stars" />
          <div className="heroContent">
            <p className="eyebrow">NIT Rourkela's Annual Sports Festival</p>
            <h1>VRIDDHI <span>2026</span></h1>
            <p className="tagline">NIT Rourkela's Annual Sports Festival</p>
            <a id="register" className="cta" href="#about">Register Now</a>
          </div>
          <div className="mascot" aria-hidden="true">
            <div className="head">◉ ◉</div>
            <div className="body">8</div>
            <div className="legs">▐ ▌</div>
          </div>
        </section>

        <section className="stats">
          <div><CalendarDays size={28}/><strong>16th - 18th</strong><span>January 2026</span></div>
          <div><MapPin size={28}/><strong>NIT Rourkela</strong><span>Odisha, India</span></div>
          <div><Trophy size={28}/><strong>10+ Sports</strong><span>Multiple Tournaments</span></div>
        </section>

        <section id="about" className="section about">
          <div className="sectionTitle">
            <span>01</span>
            <h2>ABOUT US</h2>
          </div>
          <p>
            Vriddhi, the official sports fest of NIT Rourkela, is a vibrant celebration of
            athletic spirit, teamwork, and youthful energy. Bringing together students from
            across the country, the fest showcases a diverse range of sports—from
            high-intensity competitions to thrilling team events—creating an atmosphere of
            passion and camaraderie.
          </p>
          <p>
            With enthusiastic participation, electrifying matches, and a culture of excellence,
            Vriddhi stands as a symbol of growth, determination, and the unstoppable spirit of
            sportsmanship on campus. Beyond the competitions, the fest fosters meaningful
            interactions, inspiring moments, and unforgettable memories.
          </p>
        </section>

        <section className="section highlights">
          <div className="sectionTitle">
            <span>02</span>
            <h2>THE FEST</h2>
          </div>
          <div className="cards">
            <article><div className="cardIcon">01</div><h3>COMPETE</h3><p>Test your skills against talented athletes from across the country.</p></article>
            <article><div className="cardIcon">02</div><h3>CONNECT</h3><p>Meet sports enthusiasts and create unforgettable memories.</p></article>
            <article><div className="cardIcon">03</div><h3>CELEBRATE</h3><p>Experience the energy, passion and spirit of Vriddhi.</p></article>
          </div>
        </section>

        <section className="section faq">
          <div className="sectionTitle">
            <span>03</span>
            <h2>FAQ<span>S</span></h2>
          </div>
          <div className="faqList">
            {faqs.map((q, i) => (
              <button className={`faqItem ${open === i ? "open" : ""}`} key={q} onClick={() => setOpen(open === i ? null : i)}>
                <span>{q}</span><ChevronDown size={22}/>
                {open === i && <p>Detailed information for this question will be available through the official Vriddhi registration and information channels.</p>}
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="wordmark footerLogo">VRIDDHI</div>
          <p>Vriddhi is the annual sports fest of NIT Rourkela, bringing together athletes and sports enthusiasts from across the nation.</p>
        </div>
        <div>
          <h3>LOCATION</h3>
          <p><MapPin size={16}/> NIT Rourkela, Sector 1, Rourkela, Odisha</p>
        </div>
        <div>
          <h3>CONTACT US</h3>
          <p><Mail size={16}/> nitrkl.vriddhi@gmail.com</p>
          <p><Phone size={16}/> Jana Chandrashekhar: 9110570159</p>
          <p><Phone size={16}/> Tangudu Adarsa: 7735656041</p>
          <p><Instagram size={16}/> @vriddhi_nitr</p>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
