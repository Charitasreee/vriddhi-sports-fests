# 🏆 Vriddhi 2026 — NIT Rourkela Annual Sports Fest

<p align="center">
  <strong>Official Website Experience for Vriddhi 2026 — NIT Rourkela's Flagship Annual Sports Festival</strong>
</p>

<p align="center">
  <a href="https://www.vriddhi.co/">🌐 Live Website</a>
  &nbsp; • &nbsp;
  <a href="https://github.com/Charitasreee/vriddhi-sports-fests">💻 GitHub Repository</a>
</p>

---

## 📌 About Vriddhi

**Vriddhi** is the premier annual sports festival of **National Institute of Technology Rourkela (NIT Rourkela)**, organized under the aegis of the **Student Activity Centre (SAC)**. 

Bringing together over **1,500 collegiate athletes, gamers, and strategists from 80+ universities across India**, Vriddhi celebrates athletic excellence, teamwork, passion, and tactical mastery across 3 non-stop days of championship competition.

🔗 **Live Website:** [https://www.vriddhi.co/](https://www.vriddhi.co/)

---

## ✨ Features & Architecture

* 🎨 **Anime-Sports Aesthetic**: High-energy cyberpunk and dark manga visual theme with glow accents, cyber-gradients, and custom typography (`Bangers`, `Russo One`, `Inter`, `Rajdhani`).
* 📱 **Fully Responsive UI**: Fluid layout adapting across mobile screens, tablets, and ultra-wide desktop monitors with slide-out drawer menus.
* 🏆 **12-Event Tournament Arena**:
  * **Esports**: Battle Royale Showdown in **BGMI** & **Free Fire**.
  * **Outdoor Stadium Sports**: **Football (11v11)**, **Cricket (T20 Leather Ball)**, **Basketball (FIBA)**, **Volleyball**, **Kabaddi**, and **Kho Kho**.
  * **Indoor & Mind Games**: **Badminton**, **Table Tennis**, **Chess (FIDE Rapid)**, and **Yoga**.
* 📜 **Interactive Rulebook Modals**: Complete official tournament rules, squad sizes, match formats, and venue guidelines for every sport.
* 📝 **Team Registration Portal**:
  * Full non-NITR contingent entry form.
  * Fields for Team Name, Sport selection, College name, Captain credentials, Squad size, Gender category, and Student ID card proof.
  * Live validation, dynamic fee computation, celebratory confetti effects, and toast alert confirmations.
* 📅 **3-Day Match Timeline & Schedule**: Interactive Day 1, Day 2, and Day 3 fixture schedule with venues, time slots, and event categories.
* 📸 **Filterable Photo Gallery & Lightbox**: High-resolution action photography across Sports, Esports, Ceremonies, and Crowd moments.
* 👥 **Organizing Committee Directory**: Direct contact links for SAC leadership, Convenors (Jana Chandrashekhar & Tangudu Adarsa), and the 3D Technical Team.
* ❓ **Comprehensive FAQ Accordion**: Clear answers on tournament rules, team eligibility, hostel accommodation, and match logistics.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **React 19** | Component-based modern UI library |
| **Vite 7** | Next-generation fast frontend tooling |
| **Vanilla CSS Design System** | Custom cyberpunk/anime sports styling and glow tokens |
| **Lucide React** | Modern iconography set |
| **Canvas Confetti** | Celebration visual particle physics |

---

## 📂 Project Structure

```text
vriddhi-sports-fests/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed navigation & mobile drawer
│   │   ├── Hero.jsx             # Hero banner with stats bar
│   │   ├── AboutSection.jsx     # Overview & 3 core pillars
│   │   ├── SportsSection.jsx    # 12-sport catalog with category filter
│   │   ├── SportRuleModal.jsx   # Rulebook & guidelines popup
│   │   ├── RegisterModal.jsx    # Team registration form with validation
│   │   ├── ScheduleSection.jsx  # Day 1-3 interactive timeline
│   │   ├── GallerySection.jsx   # Photo gallery with lightbox
│   │   ├── TeamSection.jsx      # Committee & convenors directory
│   │   ├── FAQSection.jsx       # Accordion FAQ answers
│   │   ├── Footer.jsx           # NIT Rourkela info & contacts
│   │   └── Toast.jsx            # Floating notification alerts
│   │
│   ├── data/
│   │   ├── sportsData.js        # 12-sport rules, fees, and parameters
│   │   └── festivalData.js      # Schedule, gallery, committee & FAQs
│   │
│   ├── main.jsx                 # Main application state orchestration
│   └── styles.css               # Design system & CSS custom properties
│
├── index.html                   # HTML template with Google Fonts & SEO
├── package.json                 # Dependencies & scripts
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

---

## 📍 National Institute of Technology Rourkela
**Student Activity Centre (SAC)**  
Sector 1, Rourkela, Odisha, India - 769008  
📧 Email: nitrkl.vriddhi@gmail.com  
📱 Convenors: Jana Chandrashekhar (9110570159) • Tangudu Adarsa (7735656041)  
📸 Instagram: [@vriddhi_nitr](https://instagram.com/vriddhi_nitr)

---

<p align="center">
  Built with ❤️ by the <strong>3D Team</strong> for <strong>Vriddhi 2026</strong> • NIT Rourkela
</p>
