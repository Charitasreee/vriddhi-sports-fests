import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ShieldAlert, CheckCircle, Flame } from "lucide-react";
import confetti from "canvas-confetti";

export function Register() {
  const sportsList = [
    "BGMI",
    "Freefire",
    "Basketball",
    "Chess",
    "Table Tennis",
    "Cricket",
    "Football",
    "Yoga",
    "Badminton",
    "Kho Kho",
    "Volleyball",
    "Kabaddi"
  ];

  const genderList = ["Male", "Female"];

  const [formData, setFormData] = useState({
    teamname: "",
    captain_name: "",
    sport: "Football",
    college: "",
    rollno: "",
    email: "",
    phone: "",
    membersCount: 11,
    gender: "Male",
  });

  const [idCardFile, setIdCardFile] = useState(null);
  const [permissionFile, setPermissionFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-lg border border-primary/20 bg-card/60 backdrop-blur-sm shadow-xl p-6 sm:p-10">
            <div className="mb-8 text-center">
              <h1 className="text-4xl sm:text-5xl font-bangers text-primary tracking-wider mb-2">
                TEAM REGISTRATION
              </h1>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
                This is team registration for <strong>non-NITR teams only</strong>. For single events you can register individually in the respective sport.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                <h2 className="text-2xl font-russo text-foreground">
                  Registration Successful!
                </h2>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Team <strong>{formData.teamname}</strong> has been registered for <strong>{formData.sport}</strong>. An official acknowledgment has been sent to <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-primary text-primary-foreground font-russo rounded-md hover:bg-primary/90 transition-colors"
                >
                  Register Another Team
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Team Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground" htmlFor="teamName">
                    Team Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="teamName"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your team name"
                    value={formData.teamname}
                    onChange={(e) => setFormData({ ...formData, teamname: e.target.value })}
                  />
                </div>

                {/* Captain Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground" htmlFor="captainName">
                    Captain's Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="captainName"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your full name"
                    value={formData.captain_name}
                    onChange={(e) => setFormData({ ...formData, captain_name: e.target.value })}
                  />
                </div>

                {/* Sport Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground" htmlFor="sport">
                    Sport <span className="text-primary">*</span>
                  </label>
                  <select
                    id="sport"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.sport}
                    onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
                  >
                    {sportsList.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* College / Institution */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground" htmlFor="college">
                    College/Institution <span className="text-primary">*</span>
                  </label>
                  <input
                    id="college"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your college name"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  />
                </div>

                {/* Roll Number */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground" htmlFor="rollno">
                    Roll Number <span className="text-primary">*</span>
                  </label>
                  <input
                    id="rollno"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your Roll Number"
                    value={formData.rollno}
                    onChange={(e) => setFormData({ ...formData, rollno: e.target.value })}
                  />
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-foreground" htmlFor="email">
                      Captain's Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-foreground" htmlFor="phone">
                      Captain's Phone <span className="text-primary">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 XXXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Number of Members & Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-foreground" htmlFor="membersCount">
                      Number of Team Members <span className="text-primary">*</span>
                    </label>
                    <input
                      id="membersCount"
                      type="number"
                      min="1"
                      max="20"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.membersCount}
                      onChange={(e) => setFormData({ ...formData, membersCount: parseInt(e.target.value) || 1 })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-foreground" htmlFor="gender">
                      Gender <span className="text-primary">*</span>
                    </label>
                    <select
                      id="gender"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    >
                      {genderList.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Captain ID Card */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground" htmlFor="idCard">
                    Captain's ID Card <span className="text-primary">*</span>
                    <span className="ml-1 text-muted-foreground text-xs">(Max 5MB)</span>
                  </label>
                  <input
                    id="idCard"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => setIdCardFile(e.target.files[0]?.name || null)}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground"
                  />
                  {idCardFile && <p className="text-xs text-primary">Selected: {idCardFile}</p>}
                </div>

                {/* College Confirmation Letter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground" htmlFor="confirmationLetter">
                    College Confirmation / Permission Letter
                    <span className="ml-1 text-muted-foreground text-xs">(Signed by Dean/Principal)</span>
                  </label>
                  <input
                    id="confirmationLetter"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => setPermissionFile(e.target.files[0]?.name || null)}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground"
                  />
                  {permissionFile && <p className="text-xs text-primary">Selected: {permissionFile}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-6 py-3 px-4 bg-primary text-primary-foreground font-russo text-lg rounded-md shadow-glow-primary hover:bg-primary/90 transition-all transform hover:scale-[1.02]"
                >
                  {loading ? "Submitting..." : "Submit Registration"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
