import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const traditions = [
  {
    title: "The Handshake",
    description: "A greeting that says 'I see you. I know you. I respect you.' Whether formal or informal, it delivers a powerful message.",
  },
  {
    title: "Family-Style Lunch",
    description: "Students and faculty gather at round tables for lunch — a beloved tradition where conversations flow and stories are shared.",
  },
  {
    title: "Pit Ball",
    description: "Played in the Kennon Forum, this unique game has students defending their step from a ball using only their feet.",
  },
  {
    title: "Open Lockers",
    description: "The school's most visible emblem of the Honor System, representing the trust and integrity that define our community.",
  },
];

const TraditionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
            Culture
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Beloved <span className="text-accent italic">Traditions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {traditions.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8 rounded-sm border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-500 group"
            >
              <div className="w-10 h-1 bg-accent mb-6 group-hover:w-16 transition-all duration-500" />
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {t.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TraditionsSection;
