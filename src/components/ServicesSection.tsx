import { motion } from "framer-motion";
import { Shield, Wrench, Car, Layers, Eye, Droplets } from "lucide-react";
import sunroofImg from "@/assets/sunroof-install.jpg";

const services = [
  { icon: Shield, title: "Parabrisas Delantero", desc: "Instalación y reemplazo con vidrios certificados y sellado profesional." },
  { icon: Car, title: "Luneta Trasera", desc: "Cambio de vidrio trasero con calefacción, antena e integración eléctrica." },
  { icon: Layers, title: "Vidrios Laterales", desc: "Vidrios fijos y corredizos para todas las marcas y modelos." },
  { icon: Eye, title: "Sunroof / Techo Solar", desc: "Instalación y reparación de techos panorámicos y solares." },
  { icon: Wrench, title: "Reparación de Trizaduras", desc: "Reparación de grietas y trizaduras con resina especializada." },
  { icon: Droplets, title: "Polarizado Profesional", desc: "Láminas de seguridad y control solar para mayor confort." },
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
          Nuestros <span className="text-primary">servicios</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Soluciones completas para los vidrios de su vehículo
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

      {/* Sunroof feature image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto"
      >
        <img
          src={sunroofImg}
          alt="Instalación profesional de sunroof"
          className="w-full h-64 sm:h-80 object-cover"
          loading="lazy"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex items-end p-8">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">Instalación de Sunroof</h3>
            <p className="text-muted-foreground max-w-md">
              Trabajo técnico de precisión para techos solares y panorámicos
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
