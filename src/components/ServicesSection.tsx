import { motion } from "framer-motion";
import { Shield, Wrench, Car, Eye, Droplets, Lightbulb, Layers } from "lucide-react";
import logoFuyao from "@/assets/logo-fuyao.png";
import logoXyg from "@/assets/logo-xyg.png";
import logoWurth from "@/assets/logo-wurth.png";
import logoBrm from "@/assets/logo-brm.jpg";

const services = [
  { icon: Shield, title: "Parabrisas Certificados", desc: "Vidrios certificados Fuyao y XYG. Originales y alternativas de calidad para Mercedes, Toyota, Changan, L200 y todas las marcas." },
  { icon: Lightbulb, title: "Ampolletas Halógenas", desc: "Ampolletas halógenas de alta duración para todo tipo de vehículo. Asesoría e instalación." },
  { icon: Droplets, title: "Plumillas BRM y Würth", desc: "Plumillas de calidad premium BRM y Würth para todos los modelos. Instalación inmediata." },
  { icon: Layers, title: "Aditivos", desc: "Aditivos para motor, refrigerante y limpieza de inyectores." },
  { icon: Car, title: "Accesorios", desc: "Accesorios automotrices Aaron, BRM y Würth." },
];

const additionalServices = [
  { icon: Eye, title: "Eliminación de Polarizado", desc: "Retiro profesional de láminas antiguas o dañadas." },
  { icon: Wrench, title: "Grabado de Patentes", desc: "Grabado de seguridad en vidrios según normativa." },
  { icon: Droplets, title: "Instalación de Plumillas", desc: "Instalación de plumillas y accesorios en el acto." },
];

const brandLogos = [
  { src: logoFuyao, alt: "Fuyao Glass" },
  { src: logoXyg, alt: "XYG" },
  { src: logoWurth, alt: "Würth" },
  { src: logoBrm, alt: "BRM" },
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="card-service group"
          >
            <s.icon className="w-10 h-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-heading text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Brands we work with */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-border bg-card/50 p-8 sm:p-12 mb-16"
      >
        <h3 className="font-heading text-2xl font-bold text-center mb-3">
          Marcas <span className="text-primary">certificadas</span>
        </h3>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-8 text-sm">
          Todos nuestros vidrios son certificados. Trabajamos con marcas reconocidas ofreciendo tanto originales como alternativas de calidad.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {brandLogos.map((b) => (
            <img
              key={b.alt}
              src={b.src}
              alt={b.alt}
              className="h-12 sm:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
            />
          ))}
        </div>
      </motion.div>

      {/* Würth / BRM Plumillas Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden mb-16 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/20"
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
            <s.icon className="w-8 h-8 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-heading text-lg font-semibold mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
