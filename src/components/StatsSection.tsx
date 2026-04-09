import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, Clock, ShieldCheck, Headphones } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Clientes satisfechos" },
  { icon: Clock, value: 15, suffix: " min", label: "Tiempo de respuesta" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Garantía" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Atención disponible" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatItem = ({ icon: Icon, value, suffix, label, delay }: { icon: any; value: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
      <div className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground mt-2 text-sm">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => (
  <section id="stats" className="py-20 border-y border-border">
    <div className="section-container grid grid-cols-2 lg:grid-cols-4 gap-10">
      {stats.map((s, i) => (
        <StatItem key={s.label} {...s} delay={i * 0.1} />
      ))}
    </div>
  </section>
);

export default StatsSection;
