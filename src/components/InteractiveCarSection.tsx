import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface Zone {
  id: string;
  label: string;
  description: string;
  path: string;
}

const zones: Zone[] = [
  {
    id: "windshield-front",
    label: "Parabrisas Delantero",
    description: "Cambio e instalación de parabrisas delantero para todas las marcas.",
    path: "M 180 120 Q 300 85 420 120 L 400 140 Q 300 110 200 140 Z",
  },
  {
    id: "windshield-rear",
    label: "Parabrisas Trasero",
    description: "Reemplazo de luneta trasera con calefacción y antena integrada.",
    path: "M 460 125 Q 520 100 580 130 L 570 155 Q 520 130 470 150 Z",
  },
  {
    id: "side-left",
    label: "Vidrios Laterales",
    description: "Vidrios laterales fijos y corredizos, con o sin polarizado.",
    path: "M 200 145 L 180 200 L 240 200 L 220 145 Z",
  },
  {
    id: "door-glass",
    label: "Vidrio de Puerta",
    description: "Reemplazo de vidrios de puerta delantera y trasera.",
    path: "M 250 145 L 240 210 L 380 210 L 390 145 Z",
  },
  {
    id: "sunroof",
    label: "Sunroof",
    description: "Instalación y reparación de techos solares y panorámicos.",
    path: "M 300 95 Q 350 85 400 95 L 395 115 Q 350 105 305 115 Z",
  },
  {
    id: "mirrors",
    label: "Espejos",
    description: "Cristales de espejo retrovisor lateral, originales y compatibles.",
    path: "M 160 155 L 145 165 L 150 180 L 170 170 Z",
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
            Seleccione la zona del vehículo para conocer nuestros servicios
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* SVG Car */}
          <div className="flex-1 w-full max-w-2xl">
            <svg viewBox="100 60 550 200" className="w-full h-auto">
              {/* Car body */}
              <path
                d="M 150 200 Q 150 170 180 145 Q 220 100 300 90 Q 400 80 460 100 Q 530 85 580 130 Q 610 150 610 200 Z"
                fill="hsl(200, 25%, 12%)"
                stroke="hsl(200, 15%, 25%)"
                strokeWidth="1.5"
              />
              {/* Wheels */}
              <circle cx="230" cy="210" r="28" fill="hsl(200, 15%, 8%)" stroke="hsl(200, 10%, 30%)" strokeWidth="2" />
              <circle cx="230" cy="210" r="14" fill="hsl(200, 10%, 18%)" />
              <circle cx="500" cy="210" r="28" fill="hsl(200, 15%, 8%)" stroke="hsl(200, 10%, 30%)" strokeWidth="2" />
              <circle cx="500" cy="210" r="14" fill="hsl(200, 10%, 18%)" />
              {/* Bottom line */}
              <line x1="258" y1="210" x2="472" y2="210" stroke="hsl(200, 15%, 15%)" strokeWidth="2" />

              {/* Interactive zones */}
              {zones.map((zone) => (
                <path
                  key={zone.id}
                  d={zone.path}
                  fill={active === zone.id ? "hsla(40, 90%, 50%, 0.4)" : "hsla(200, 50%, 50%, 0.08)"}
                  stroke={active === zone.id ? "hsl(40, 90%, 50%)" : "hsla(200, 50%, 60%, 0.3)"}
                  strokeWidth={active === zone.id ? "2" : "1"}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActive(zone.id)}
                  onClick={() => setActive(zone.id)}
                />
              ))}
            </svg>
            <p className="text-muted-foreground text-sm text-center mt-4 lg:hidden">
              Toque una zona del vehículo
            </p>
          </div>

          {/* Info Panel */}
          <div className="flex-1 w-full max-w-md min-h-[200px]">
            <AnimatePresence mode="wait">
              {activeZone ? (
                <motion.div
                  key={activeZone.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="card-service"
                >
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
                  className="card-service flex items-center justify-center h-[200px]"
                >
                  <p className="text-muted-foreground text-center">
                    Pase el cursor sobre el vehículo para explorar nuestros servicios
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
