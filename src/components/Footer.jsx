import React from "react";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card/80 backdrop-blur-lg border-t border-primary/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto items-start">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start">
            <img
              className="w-32 h-20 mb-8 object-contain"
              src="/assets/Mask group (4)-UDg_JYYC.png"
              alt="Vriddhi logo"
              title="Vriddhi"
            />
            <p className="text-muted-foreground text-sm leading-relaxed text-center md:text-left max-w-xs">
              Vriddhi is the annual sports fest of NIT Rourkela, bringing together athletes and sports enthusiasts from across the nation. Experience the thrill of competition, sportsmanship, and camaraderie as we celebrate the spirit of sports.
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-russo text-foreground mb-4">Location</h3>
            <div className="rounded-lg overflow-hidden border border-border w-full max-w-xs bg-muted/30">
              <iframe
                title="NIT Rourkela Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.6577317769517!2d84.90371497593258!3d22.25122607972132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201e791f2bf141%3A0xa91e5dbf75473588!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="h-40 sm:h-48 w-full border-0"
                loading="lazy"
              />
            </div>
            <div className="mt-2 text-xs text-muted-foreground text-center md:text-left max-w-xs">
              <div>NIT Rourkela, Sector 1, Rourkela, Odisha</div>
              <div className="flex gap-2 items-center justify-center md:justify-start mt-1">
                <a
                  href="https://www.google.com/maps/place/National+Institute+of+Technology,+Sector+1,+Rourkela,+Odisha/@22.250453,84.8844766,14z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs underline"
                >
                  Open in Google Maps
                </a>
                <span>•</span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=22.2512261,84.9062899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs underline"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-russo text-foreground mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:nitrkl.vriddhi@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>nitrkl.vriddhi@gmail.com</span>
              </a>
              <a
                href="tel:+919110570159"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Jana Chandrashekhar(Convenor): 9110570159</span>
              </a>
              <a
                href="tel:+917735656041"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Tangudu Adarsa(Convenor): 7735656041</span>
              </a>
              <a
                href="https://instagram.com/vriddhi_nitr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Instagram className="w-5 h-5 text-accent flex-shrink-0" />
                <span>@vriddhi_nitr</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Vriddhi. All rights reserved. Made with ❤️ by 3D Team.</p>
        </div>
      </div>
    </footer>
  );
}
