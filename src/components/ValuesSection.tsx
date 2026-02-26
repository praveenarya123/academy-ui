import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import valuesImg from "@/assets/values.jpg";

const ValuesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={valuesImg}
                alt="Students in the library"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-sm -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-sm -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
              Our Foundation
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Live <span className="text-accent italic">Honorably</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              Our Honor System affects every NA student in profound and permanent ways.
              Respect, honesty, and integrity define the entire Norfolk Academy
              experience—and every member of our community.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Open lockers are the school's most visible emblem of the Honor System
              and the way it shapes every aspect of school life. Open and trusting
              relationships are a hallmark of school culture.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm tracking-widest uppercase text-primary hover:text-accent transition-colors border-b-2 border-accent pb-1"
            >
              Our Values
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
