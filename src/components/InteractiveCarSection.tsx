import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import autoImg from "@/assets/auto-vidrios.png";

const zones = [
  {
    id: "windshield",
    label: "Parabrisas Delantero",
    desc: "Instalación y reemplazo de parabrisas delantero para todas las marcas. Vidrios certificados Fuyao y XYG.",
    top: "32%",
    left: "62%",
  },
  {
    id: "rear",
    label: "Parabrisas Trasero",
    desc: "Parabrisas trasero original y alternativo con garantía de instalación profesional.",
    top: "30%",
    left: "22%",
  },
  {
    id: "door",
    label: "Vidrio Puerta",
    desc: "Vidrios de puerta delantera y trasera. Stock permanente para los modelos más populares.",
    top: "48%",
    left: "50%",
  },
  {
    id: "side",
    label: "Vidrio Lateral",
    desc: "Vidrios laterales fijos (custodios). Reemplazo rápido y seguro.",
    top: "38%",
    left: "35%",
  },
  {
    id: "sunroof",
    label: "Sunroof",
    desc: "Vidrio de techo solar. Trabajamos con medidas específicas para cada modelo.",
    top: "22%",
    left: "42%",
  },
  {
    id: "mirror",
    label: "Vidrio Espejo",
    desc: "Vidrios de espejo retrovisor lateral. Disponibles para la mayoría de vehículos.",
    top: "50%",
    left: "74%",
  },
];

const InteractiveCarSection = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-24 bg-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            ¿Qué vidrio necesita tu <span className="text-primary">vehículo</span>?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Selecciona la zona del vidrio que necesitas reemplazar
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Car image with hotspots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full max-w-3xl mx-auto"
          >
            <img
              src={autoImg}
              alt="Mercedes-Benz GLE 450 — Identificación de vidrios"
              className="w-full h-auto"
            />

            {/* Hotspot dots */}
            {zones.map((z) => (
              <button
                key={z.id}
                onClick={() => setActive(active === z.id ? null : z.id)}
                className={`absolute w-7 h-7 rounded-full border-2 transition-all duration-300 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
                  active === z.id
                    ? "bg-primary border-primary scale-125 shadow-[0_0_16px_hsl(var(--primary)/0.5)]"
                    : "bg-primary/30 border-primary/60 hover:bg-primary/60 hover:scale-110"
                }`}
                style={{ top: z.top, left: z.left }}
                aria-label={z.label}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                {active !== z.id && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Zone selector panel */}
          <div className="space-y-3">
            {zones.map((z) => (
              <button
                key={z.id}
                onClick={() => setActive(active === z.id ? null : z.id)}
                className={`w-full text-left rounded-xl border px-5 py-4 transition-all duration-300 ${
                  active === z.id
                    ? "border-primary bg-primary/10 shadow-lg"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <h4 className="font-heading font-semibold text-sm">{z.label}</h4>
                {active === z.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                      {z.desc}
                    </p>
                    <a
                      href={`https://wa.me/56952264328?text=${encodeURIComponent(`Hola, necesito cotizar: ${z.label}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp mt-3 text-sm px-4 py-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Cotizar
                    </a>
                  </motion.div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCarSection;
