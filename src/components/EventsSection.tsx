import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const schoolEvents = [
  { date: "Mar 2–7", title: "Spring Break", time: "All Day" },
  { date: "Mar 14", title: "Lower School Musical", time: "7:00 PM" },
  { date: "Mar 21", title: "Parent-Teacher Conferences", time: "3:30 PM" },
];

const athleticEvents = [
  { date: "Feb 26", title: "Girls Varsity Soccer vs. First Colonial", time: "4:30 PM", location: "Away" },
  { date: "Feb 27", title: "Varsity Baseball vs. Beach Breakers", time: "4:00 PM", location: "Home" },
  { date: "Feb 27", title: "Boys Varsity Lacrosse vs. Christchurch", time: "4:30 PM", location: "Home" },
];

const EventsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="giving" ref={ref} className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4 block">
            What's Happening
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Upcoming <span className="text-gold italic">Events</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* School Events */}
          <div>
            <h3 className="font-display text-xl font-semibold text-gold mb-6 flex items-center gap-2">
              <Calendar size={18} /> School Events
            </h3>
            <div className="space-y-4">
              {schoolEvents.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 border border-primary-foreground/10 rounded-sm hover:border-gold/30 transition-colors group"
                >
                  <span className="font-display text-sm font-bold text-gold min-w-[70px]">{e.date}</span>
                  <div className="flex-1">
                    <span className="font-body text-primary-foreground font-medium group-hover:text-gold transition-colors">{e.title}</span>
                  </div>
                  <span className="font-body text-xs text-primary-foreground/50 flex items-center gap-1">
                    <Clock size={12} /> {e.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Athletic Events */}
          <div>
            <h3 className="font-display text-xl font-semibold text-gold mb-6 flex items-center gap-2">
              <Calendar size={18} /> Athletic Events
            </h3>
            <div className="space-y-4">
              {athleticEvents.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 border border-primary-foreground/10 rounded-sm hover:border-gold/30 transition-colors group"
                >
                  <span className="font-display text-sm font-bold text-gold min-w-[70px]">{e.date}</span>
                  <div className="flex-1">
                    <span className="font-body text-primary-foreground font-medium group-hover:text-gold transition-colors block">{e.title}</span>
                    <span className="font-body text-xs text-primary-foreground/50 flex items-center gap-1 mt-1">
                      <MapPin size={10} /> {e.location}
                    </span>
                  </div>
                  <span className="font-body text-xs text-primary-foreground/50 flex items-center gap-1">
                    <Clock size={12} /> {e.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
