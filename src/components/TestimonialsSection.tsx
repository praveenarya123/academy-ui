import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The lessons I've learned regarding discipline, teamwork, and mental strength have been crucial to my development as a person.",
    name: "Dillon '16",
    role: "Alumni",
  },
  {
    quote: "The student-teacher relationships at NA are a facet of this school that makes NA stand out from any other school.",
    name: "Emily '18",
    role: "Alumni",
  },
  {
    quote: "I will never stop asking questions or wondering 'what if,' and I have NA to thank for instilling this quality in me and all my peers.",
    name: "Emily '14",
    role: "Alumni",
  },
  {
    quote: "We value our children learning that education is fun. Learning is fun and that's the environment we want our children to grow up in.",
    name: "Maureen",
    role: "Parent",
  },
  {
    quote: "I think student-teacher relationships on our campus are the core of what Norfolk Academy does well.",
    name: "Jennifer Scott",
    role: "Director of College Counseling",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="admissions" ref={ref} className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-40 h-40 border border-gold/10 rounded-full" />
      <div className="absolute bottom-20 left-20 w-60 h-60 border border-gold/5 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4 block">
            Voices
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Valued <span className="text-gold italic">Voices</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto text-center">
          <Quote className="mx-auto mb-8 text-gold/30" size={48} />

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-2xl md:text-3xl text-primary-foreground italic leading-relaxed mb-8">
              "{testimonials[current].quote}"
            </p>
            <div>
              <span className="font-body font-semibold text-gold text-lg">
                {testimonials[current].name}
              </span>
              <span className="font-body text-primary-foreground/60 text-sm ml-3">
                {testimonials[current].role}
              </span>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="p-3 border border-primary-foreground/20 rounded-full text-primary-foreground/60 hover:text-gold hover:border-gold transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold w-6" : "bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 border border-primary-foreground/20 rounded-full text-primary-foreground/60 hover:text-gold hover:border-gold transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
