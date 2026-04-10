import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const brands = ["Toyota", "Hyundai", "Kia", "Chevrolet", "Nissan", "Suzuki", "Peugeot", "Volkswagen", "Mercedes-Benz", "Mitsubishi", "Changan", "Mazda"];

const BrandsSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [modelo, setModelo] = useState("");
  const [año, setAño] = useState("");

  const handleBrandClick = (brand: string) => {
    setSelectedBrand(brand);
    setShowForm(true);
  };

  const whatsappUrl = `https://wa.me/56952264328?text=${encodeURIComponent(
    `Hola, necesito cotizar para mi ${selectedBrand} ${modelo} ${año}`.trim()
  )}`;

  return (
    <section className="py-20 border-y border-border overflow-hidden">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-10"
        >
          Trabajamos con todas las marcas
        </motion.p>

        {/* Marquee */}
        <div className="relative mb-8">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...brands, ...brands].map((brand, i) => (
                <button
                  key={`${brand}-${i}`}
                  onClick={() => handleBrandClick(brand)}
                  className="flex items-center justify-center h-16 px-8 rounded-lg border border-border bg-card/50 text-muted-foreground font-heading font-semibold text-sm transition-all duration-300 hover:text-primary hover:border-primary/30 hover:shadow-[var(--shadow-glow)] whitespace-nowrap cursor-pointer shrink-0"
                >
                  {brand}
                </button>
              ))}
            </motion.div>
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        <p className="text-center text-muted-foreground text-xs">
          Haz clic en una marca para cotizar
        </p>
      </div>

      {/* Cotización form modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-2xl p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-heading text-2xl font-bold mb-2">
                Indícanos tu vehículo
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                y te cotizamos de inmediato
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Marca</label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground"
                  >
                    {brands.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Modelo</label>
                  <input
                    type="text"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    placeholder="Ej: Corolla, Tucson, Sportage..."
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Año</label>
                  <input
                    type="text"
                    value={año}
                    onChange={(e) => setAño(e.target.value)}
                    placeholder="Ej: 2022"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-lg py-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Cotizar por WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BrandsSection;
