import { motion } from "framer-motion";
import { Shield, Wrench, Car, Eye, Droplets, Lightbulb, Layers, Battery } from "lucide-react";
import logoFuyao from "@/assets/logo-fuyao.png";
import logoXyg from "@/assets/logo-xyg.png";
import logoWurth from "@/assets/logo-wurth.png";
import logoBrm from "@/assets/logo-brm.jpg";

const services = [
  { icon: Shield, title: "Parabrisas Certificados", desc: "Vidrios certificados Fuyao y XYG. Originales y alternativas de calidad para Mercedes, Toyota, Changan, L200 y todas las marcas." },
  { icon: Lightbulb, title: "Ampolletas Halógenas", desc: "Ampolletas halógenas de alta duración para todo tipo de vehículo. Asesoría e instalación." },
  { icon: Droplets, title: "Plumillas BRM y Würth", desc: "Plumillas de calidad premium BRM y Würth para todos los modelos. Instalación inmediata." },
  { icon: Battery, title: "Baterías de Auto", desc: "Baterías de 55 AMP para autos y 90 AMP para camionetas. Rendimiento y durabilidad garantizada." },
  { icon: Layers, title: "Aditivos", desc: "Aditivos para motor, refrigerante y limpieza de inyectores." },
  { icon: Car, title: "Accesorios", desc: "Accesorios automotrices Aaron, BRM y Würth." },
];

const additionalServices = [
  { icon: Eye, title: "Eliminación de Polarizado", desc: "Retiro profesional de láminas antiguas o dañadas." },
  { icon: Wrench, title: "Grabado de Patentes", desc: "Grabado de seguridad en vidrios según normativa." },
  { icon: Droplets, title: "Instalación de Plumillas", desc: "Instalación de plumillas y accesorios en el acto." },
];

const brandLogos = [
  { src: logoFuyao, alt: "Fuyao Glass", desc: "Líder mundial en vidrios automotrices" },
  { src: logoXyg, alt: "XYG", desc: "Vidrios de calidad certificada" },
  { src: logoWurth, alt: "Würth", desc: "Plumillas y accesorios premium" },
  { src: logoBrm, alt: "BRM", desc: "Plumillas de alto rendimiento" },
];

const ServicesSection = () => (
  <section id="servicios" className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          Productos y <span className="text-primary">servicios</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Todo lo que su vehículo necesita en un solo lugar
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="card-service group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary/20">
              <s.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Marcas Certificadas — diseño mejorado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden mb-20"
      >
        {/* Fondo con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-border rounded-2xl" />
        <div className="relative p-10 sm:p-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-primary/40" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Calidad garantizada</span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-3">
            Marcas <span className="text-primary">certificadas</span>
          </h3>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10 text-sm">
            Todos nuestros vidrios son certificados. Trabajamos con marcas reconocidas ofreciendo tanto originales como alternativas de calidad.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {brandLogos.map((b, i) => (
              <motion.div
                key={b.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card/60 hover:border-primary/30 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={b.src}
                    alt={b.alt}
                    className="h-12 sm:h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  />
                </div>
                <span className="text-muted-foreground text-xs text-center leading-tight group-hover:text-foreground transition-colors duration-300">
                  {b.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Würth / BRM Plumillas Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden mb-20 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/20"
      >
        <div className="p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-6">
          <Droplets className="w-16 h-16 text-primary shrink-0" />
          <div className="text-center sm:text-left">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-2">
              Plumillas para todos los modelos
            </h3>
            <p className="text-muted-foreground text-lg">
              Calidad <span className="text-primary font-semibold">Würth</span> y <span className="text-primary font-semibold">BRM</span> — Instalación inmediata
            </p>
          </div>
          <a
            href="https://wa.me/56952264328?text=Hola%2C%20necesito%20plumillas%20para%20mi%20vehículo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp shrink-0"
          >
            Cotizar
          </a>
        </div>
      </motion.div>

      {/* Additional Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="font-heading text-2xl font-bold mb-2">Servicios adicionales</h3>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {additionalServices.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="card-service group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 transition-colors duration-300 group-hover:bg-primary/20">
              <s.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
