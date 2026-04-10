import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-windshield.jpg";

const slides = [
  {
    badge: "Más de 25 años de experiencia",
    title: (
      <>
        Especialistas en <span className="text-primary">parabrisas</span> y accesorios automotrices en Villarrica
      </>
    ),
    subtitle: "Servicio profesional, instalación precisa y atención rápida para su vehículo. Confianza respaldada por décadas de trabajo.",
  },
  {
    badge: "Calidad Würth",
    title: (
      <>
        <span className="text-primary">Plumillas</span> para todos los modelos de vehículos
      </>
    ),
    subtitle: "Plumillas de alta calidad marca Würth. Instalación inmediata y asesoría experta para mantener su visibilidad al máximo.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Instalación profesional de parabrisas"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

      <div className="relative z-10 section-container text-center py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block text-primary font-medium text-sm tracking-widest uppercase mb-4">
              {slide.badge}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
              {slide.title}
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/56952264328?text=Hola%2C%20necesito%20una%20cotización"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-lg px-8 py-4"
              >
                <MessageCircle className="w-5 h-5" />
                Cotizar por WhatsApp
              </a>
              <a href="#servicios" className="btn-outline-light text-lg px-8 py-4">
                Ver servicios
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex gap-2 justify-center mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-8" : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
