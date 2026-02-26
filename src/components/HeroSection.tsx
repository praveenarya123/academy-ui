import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Norfolk Academy Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Where Tradition
            <br />
            <span className="text-gold italic font-medium">Meets Tomorrow</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Since 1728, Norfolk Academy has shaped confident, compassionate leaders
            through rigorous academics, vibrant arts, and a culture of honor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); const el = document.querySelector('#about'); if (el) { const offset = 65; const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset); window.scrollTo({ top, behavior: 'smooth' }); } }}
              className="px-8 py-4 bg-accent text-accent-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:brightness-110 transition-all duration-300"
            >
              Explore Our Campus
            </a>
            <a
              href="#admissions"
              onClick={(e) => { e.preventDefault(); const el = document.querySelector('#admissions'); if (el) { const offset = 65; const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset); window.scrollTo({ top, behavior: 'smooth' }); } }}
              className="px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-primary-foreground/60" size={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
