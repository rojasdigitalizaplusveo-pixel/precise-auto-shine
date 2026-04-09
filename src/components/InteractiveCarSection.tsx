import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import carImg from "@/assets/car-interactive.jpg";

interface Zone {
  id: string;
  label: string;
  description: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

const zones: Zone[] = [
  {
    id: "windshield",
    label: "Parabrisas Delantero",
    description: "Cambio e instalación de parabrisas delantero para todas las marcas con adhesivos certificados.",
    top: "18%", left: "48%", width: "22%", height: "28%",
  },
  {
    id: "rear",
    label: "Parabrisas Trasero",
    description: "Reemplazo de luneta trasera con calefacción y antena integrada.",
    top: "20%", left: "12%", width: "18%", height: "24%",
  },
  {
    id: "side-rear",
    label: "Vidrio Lateral Trasero",
    description: "Vidrios laterales fijos y corredizos, con o sin polarizado.",
    top: "22%", left: "30%", width: "12%", height: "22%",
  },
  {
    id: "door",
    label: "Vidrio de Puerta",
    description: "Reemplazo de vidrios de puerta delantera y trasera para todos los modelos.",
    top: "24%", left: "42%", width: "10%", height: "20%",
  },
  {
    id: "sunroof",
    label: "Sunroof / Techo Solar",
    description: "Instalación y reparación de techos solares y panorámicos.",
    top: "8%", left: "30%", width: "20%", height: "14%",
  },
  {
    id: "mirror",
    label: "Espejo Retrovisor",
    description: "Cristales de espejo retrovisor lateral, originales y compatibles.",
    top: "38%", left: "72%", width: "8%", height: "10%",
  },
];

const InteractiveCarSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const activeZone = zones.find((z) => z.id === active);

  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            ¿Qué vidrio <span className="text-primary">necesita</span>?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Toque o pase el cursor sobre las zonas iluminadas del vehículo
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Car image with hotspots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-3xl relative"
          >
            <img
              src={carImg}
              alt="Seleccione la zona del vidrio que necesita"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
              width={1920}
              height={1080}
            />

            {/* Clickable zones overlay */}
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setActive(active === zone.id ? null : zone.id)}
                onMouseEnter={() => setActive(zone.id)}
                className={`absolute rounded-lg border-2 transition-all duration-300 group ${
                  active === zone.id
                    ? "border-primary bg-primary/20 shadow-[0_0_20px_hsla(40,90%,50%,0.4)]"
                    : "border-primary/40 bg-primary/5 hover:border-primary hover:bg-primary/15"
                }`}
                style={{
                  top: zone.top,
                  left: zone.left,
                  width: zone.width,
                  height: zone.height,
                }}
                aria-label={zone.label}
              >
                {/* Pulse dot */}
                <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary ${
                  active === zone.id ? "animate-ping" : "animate-pulse"
                }`} />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                
                {/* Label tooltip */}
                <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium px-2 py-1 rounded bg-background/90 border border-border transition-opacity duration-200 ${
                  active === zone.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}>
                  {zone.label}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Info Panel */}
          <div className="flex-1 w-full max-w-md min-h-[220px]">
            <AnimatePresence mode="wait">
              {activeZone ? (
                <motion.div
                  key={activeZone.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="card-service relative"
                >
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <h3 className="font-heading text-2xl font-bold mb-3 text-primary">
                    {activeZone.label}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {activeZone.description}
                  </p>
                  <a
                    href={`https://wa.me/56912345678?text=Hola%2C%20necesito%20cotizar%20${encodeURIComponent(activeZone.label)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Cotizar {activeZone.label}
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="card-service flex flex-col items-center justify-center h-[220px] text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  </div>
                  <p className="text-muted-foreground">
                    Seleccione una zona iluminada del vehículo para ver el servicio disponible
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCarSection;
