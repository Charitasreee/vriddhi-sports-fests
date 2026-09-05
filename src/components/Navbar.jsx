import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Trophy, UserPlus, Image as ImageIcon, Users, Menu } from "lucide-react";

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { to: "/sports", label: "Sports", icon: <Trophy className="w-4 h-4" /> },
    { to: "/register", label: "Register", icon: <UserPlus className="w-4 h-4" /> },
    { to: "/gallery", label: "Gallery", icon: <ImageIcon className="w-4 h-4" /> },
    { to: "/team", label: "Our Team", icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            className="w-12 h-10 object-contain"
            src="/assets/SAC PNG MERCH 1-DbuEmHQN.png"
            alt="SAC logo"
            title="SAC"
          />
          <span className="w-px h-8 bg-primary/80" aria-hidden="true" />
          <img
            className="w-10 h-8 sm:w-14 sm:h-10 object-contain"
            src="/assets/Mask group (4)-UDg_JYYC.png"
            alt="Vriddhi logo"
            title="Vriddhi"
          />
          <span className="text-xl font-shuriken tracking-wider text-primary ml-2">
            VRIDDHI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              <button
                className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-9 px-3 gap-2 ${
                  isActive(item.to)
                    ? "bg-primary text-primary-foreground shadow-glow-primary"
                    : "hover:bg-accent hover:text-accent-foreground text-foreground"
                }`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Dropdown */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-accent text-foreground"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {mobileOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-card border border-primary/20 rounded-md shadow-2xl flex flex-col z-50 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                    isActive(item.to)
                      ? "bg-primary/20 text-primary font-semibold"
                      : "text-foreground hover:bg-primary/10"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
