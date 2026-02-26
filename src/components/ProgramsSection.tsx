import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import programsImg from "@/assets/programs.jpg";
import { Globe, Mic, Award, Briefcase, Stethoscope } from "lucide-react";

const programs = [
  { icon: Award, title: "Leadership", description: "9th grade wilderness program building character and teamwork." },
  { icon: Mic, title: "Speech", description: "Public speaking mastery through the Senior Speech tradition." },
  { icon: Globe, title: "Global Programs", description: "International travel experiences that broaden perspectives." },
  { icon: Briefcase, title: "Career Connections", description: "Alumni mentorship and professional exploration." },
  { icon: Stethoscope, title: "Medical Scholars", description: "Pre-medical preparation with hands-on clinical experience." },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fine-arts" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
              Signature Programs
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10 leading-tight">
              Exciting <span className="text-accent italic">Choices</span>
            </h2>

            <div className="space-y-6">
              {programs.map((prog, i) => (
                <motion.div
                  key={prog.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <prog.icon className="text-primary group-hover:text-accent-foreground transition-colors" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {prog.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">{prog.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <img
              src={programsImg}
              alt="Global programs"
              className="w-full h-[550px] object-cover rounded-sm"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
