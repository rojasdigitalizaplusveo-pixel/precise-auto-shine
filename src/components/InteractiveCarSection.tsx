import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, RotateCcw } from "lucide-react";
import Car3D from "./Car3D";

interface Zone {
  id: string;
  label: string;
  description: string;
  rotation: number; // Y-axis rotation in radians to best view this zone
}

const zones: Zone[] = [
  {
    id: "windshield",
    label: "Parabrisas Delantero",
    description: "Cambio e instalación de parabrisas delantero para todas las marcas con adhesivos certificados.",
    rotation: Math.PI * 0.25, // front 3/4 view
  },
  {
    id: "rear",
    label: "Parabrisas Trasero",
    description: "Reemplazo de luneta trasera con calefacción y antena integrada.",
    rotation: Math.PI * 1.25, // rear 3/4 view
  },
  {
    id: "side-rear",
    label: "Vidrio Lateral Trasero",
    description: "Vidrios laterales fijos y corredizos, con o sin polarizado.",
    rotation: Math.PI * 0.75, // side view
  },
  {
    id: "door",
    label: "Vidrio de Puerta",
    description: "Reemplazo de vidrios de puerta delantera y trasera para todos los modelos.",
    rotation: Math.PI * 0.6, // front-side view
  },
  {
    id: "sunroof",
    label: "Sunroof / Techo Solar",
    description: "Instalación y reparación de techos solares y panorámicos.",
    rotation: Math.PI * 0.25, // top-ish view (camera is above)
  },
  {
    id: "mirror",
    label: "Espejo Retrovisor",
    description: "Cristales de espejo retrovisor lateral, originales y compatibles.",
    rotation: Math.PI * 0.5, // side view for mirrors
  },
];

const InteractiveCarSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const activeZone = zones.find((z) => z.id === active);
  const targetRotation = activeZone ? activeZone.rotation : 0;

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
            Seleccione una zona del vehículo — el auto girará para mostrarle la pieza
          </p>
        </motion.div>

        {/* Zone selector buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setActive(active === zone.id ? null : zone.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                active === zone.id
                  ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-glow)]"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {zone.label}
            </button>
          ))}
          {active && (
            <button
              onClick={() => setActive(null)}
              className="px-3 py-2 rounded-lg text-sm border border-border bg-card text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          )}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* 3D Car */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-3xl"
          >
            <Suspense
              fallback={
                <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl bg-card border border-border flex items-center justify-center">
                  <div className="text-muted-foreground animate-pulse">Cargando modelo 3D…</div>
                </div>
              }
            >
              <Car3D activeZone={active} targetRotation={targetRotation} />
            </Suspense>
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
                    href={`https://wa.me/56996438729?text=Hola%2C%20necesito%20cotizar%20${encodeURIComponent(activeZone.label)}`}
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
                    Seleccione una zona del vehículo para ver el servicio disponible
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
