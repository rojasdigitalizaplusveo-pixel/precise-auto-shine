import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Carlos Muñoz", location: "Villarrica", text: "Excelente servicio. Me cambiaron el parabrisas en menos de una hora y quedó perfecto. Muy profesionales." },
  { name: "María Sepúlveda", location: "Pucón", text: "Llevé mi camioneta por una trizadura y la repararon de inmediato. El precio fue muy justo y el trato muy amable." },
  { name: "Roberto Figueroa", location: "Loncoche", text: "Más de 10 años llevando mis vehículos con ellos. Siempre cumplen con el plazo y la calidad es impecable." },
  { name: "Andrea Castillo", location: "Villarrica", text: "Me instalaron el sunroof y quedó espectacular. Se nota la experiencia que tienen. 100% recomendados." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="card-service text-center py-10 px-8"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-heading font-semibold">{testimonials[current].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[current].location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 rounded-lg border border-border hover:border-primary/30 transition-colors" aria-label="Anterior">
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-lg border border-border hover:border-primary/30 transition-colors" aria-label="Siguiente">
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
