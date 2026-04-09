import { motion } from "framer-motion";
import { Settings, BadgeCheck, Zap, HeadphonesIcon, Award } from "lucide-react";

const benefits = [
  { icon: Settings, title: "Instalación profesional", desc: "Técnicos capacitados con herramientas especializadas." },
  { icon: BadgeCheck, title: "Materiales certificados", desc: "Vidrios de calidad OEM y adhesivos industriales." },
  { icon: Zap, title: "Atención rápida", desc: "Respuesta inmediata y servicio ágil sin perder calidad." },
  { icon: HeadphonesIcon, title: "Asesoría experta", desc: "Le ayudamos a elegir la mejor solución para su vehículo." },
  { icon: Award, title: "Más de 25 años", desc: "Trayectoria y experiencia que respaldan nuestro trabajo." },
];

const BenefitsSection = () => (
  <section className="py-24 bg-card">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          ¿Por qué <span className="text-primary">elegirnos</span>?
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
