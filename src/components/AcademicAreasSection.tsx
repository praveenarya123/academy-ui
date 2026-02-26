import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import academicsImg from "@/assets/academics.jpg";
import fineArtsImg from "@/assets/fine-arts.jpg";
import athleticsImg from "@/assets/athletics.jpg";

const areas = [
  {
    title: "Academics",
    description:
      "A rigorous, engaging curriculum that develops critical thinkers and lifelong learners across all disciplines.",
    image: academicsImg,
    link: "#academics",
  },
  {
    title: "Fine Arts",
    description:
      "From visual arts to performing arts, students discover and develop their creative voice in inspiring spaces.",
    image: fineArtsImg,
    link: "#fine-arts",
  },
  {
    title: "Athletics",
    description:
      "Our teacher-coach model builds character, discipline, and teamwork through competitive sports programs.",
    image: athleticsImg,
    link: "#",
  },
];

const AcademicAreasSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academics" ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
            Discover
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            The Academy <span className="text-accent italic">Experience</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <motion.a
              key={area.title}
              href={area.link}
              onClick={(e) => { e.preventDefault(); const el = document.querySelector(area.link); if (el) { const offset = 65; const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset); window.scrollTo({ top, behavior: 'smooth' }); } }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-sm bg-card shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicAreasSection;
