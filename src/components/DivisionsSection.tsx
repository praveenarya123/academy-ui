import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const divisions = [
  {
    name: "Lower School",
    grades: "Grades 1–5",
    description: "A joyful beginning where curiosity thrives and every child is known and celebrated.",
    color: "bg-accent",
  },
  {
    name: "Middle School",
    grades: "Grades 6–8",
    description: "A bridge to independence where students explore passions and build lasting friendships.",
    color: "bg-navy-light",
  },
  {
    name: "Upper School",
    grades: "Grades 9–12",
    description: "A transformative experience preparing citizen-scholars for college and beyond.",
    color: "bg-primary",
  },
];

const DivisionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
            Our Schools
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Three Divisions, <span className="text-accent italic">One Community</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center group cursor-pointer"
            >
              <div className={`${d.color} w-full h-2 rounded-t-sm mb-8 group-hover:h-3 transition-all duration-300`} />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {d.name}
              </h3>
              <span className="font-body text-sm text-accent font-semibold tracking-wider uppercase">
                {d.grades}
              </span>
              <p className="font-body text-muted-foreground mt-4 leading-relaxed">
                {d.description}
              </p>
              <a
                href="#"
                className="inline-block mt-6 font-body text-sm font-semibold text-primary hover:text-accent transition-colors tracking-widest uppercase border-b border-accent pb-1"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
