import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-windshield.jpg";

const HeroSection = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Más de 25 años de experiencia
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Especialistas en{" "}
            <span className="text-primary">parabrisas</span>{" "}
            en Villarrica
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Servicio profesional, instalación precisa y atención rápida para su vehículo. Confianza respaldada por décadas de trabajo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/56912345678?text=Hola%2C%20necesito%20una%20cotización"
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
