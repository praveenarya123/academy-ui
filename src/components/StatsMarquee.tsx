import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "AP Exams Taken Last Year" },
  { value: "64", label: "Acre Campus" },
  { value: "78%", label: "Faculty with Advanced Degrees" },
  { value: "17×", label: "Fields of Excellence Awards" },
  { value: "1,200", label: "Students in Grades 1–12" },
  { value: "100%", label: "Graduates Admitted to 4-Year Colleges" },
  { value: "1728", label: "Year Founded" },
  { value: "36%", label: "Racial/Ethnic Diversity" },
  { value: "12", label: "Avg. Years Faculty Teaching at NA" },
  { value: "8:1", label: "Student-to-Teacher Ratio" },
];

const StatsMarquee = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-primary overflow-hidden">
      <div className="flex animate-scroll-left">
        {[...stats, ...stats].map((stat, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-10 md:px-14 flex flex-col items-center text-center min-w-[200px]"
          >
            <span className="font-display text-3xl md:text-4xl font-bold text-gold mb-2">
              {stat.value}
            </span>
            <span className="font-body text-xs md:text-sm text-primary-foreground/70 tracking-wider uppercase whitespace-nowrap">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsMarquee;
