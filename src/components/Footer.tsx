import { MapPin, Phone, Mail } from "lucide-react";

const scrollToSection = (href: string) => {
  if (!href || href === "#") return;
  const el = document.querySelector(href);
  if (el) {
    const offset = 65;
    const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset);
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display text-lg font-bold tracking-[0.2em] text-primary-foreground">
              NORFOLK ACADEMY
            </span>
            <p className="font-body text-sm text-primary-foreground/50 mt-3 leading-relaxed">
              Valued Voices. Exciting Choices.
              <br />
              Since 1728.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Admissions", href: "#admissions" },
                { label: "Academics", href: "#academics" },
                { label: "Fine Arts", href: "#fine-arts" },
                { label: "Giving", href: "#giving" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.href);
                  }}
                  className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              Resources
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                "News & Calendar",
                "Alumni",
                "Community Login",
                "Employment",
                "Privacy Policy",
              ].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="font-body text-sm text-primary-foreground/60 flex items-start gap-2">
                <MapPin size={14} className="mt-1 flex-shrink-0 text-gold" />
                1585 Wesleyan Drive, Norfolk, VA 23502
              </p>
              <p className="font-body text-sm text-primary-foreground/60 flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0 text-gold" />
                (757) 461-6236
              </p>
              <p className="font-body text-sm text-primary-foreground/60 flex items-center gap-2">
                <Mail size={14} className="flex-shrink-0 text-gold" />
                info@norfolkacademy.org
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Norfolk Academy. All rights reserved.
          </p>
          <p className="font-body text-xs text-gold mt-2">
            Developed with ❤️ by{" "}
            <a
              href="https://github.com/praveenarya123"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              Praveen Arya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;