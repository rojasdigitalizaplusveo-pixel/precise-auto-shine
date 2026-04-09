import { motion } from "framer-motion";

const brands = ["Toyota", "Hyundai", "Kia", "Chevrolet", "Nissan", "Suzuki", "Peugeot", "Volkswagen"];

const BrandsSection = () => (
  <section className="py-20 border-y border-border">
    <div className="section-container">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-10"
      >
        Trabajamos con todas las marcas
      </motion.p>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
        {brands.map((brand, i) => (
          <motion.div
            key={brand}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center justify-center h-16 rounded-lg border border-border bg-card/50 text-muted-foreground font-heading font-semibold text-sm transition-all duration-300 hover:text-primary hover:border-primary/30 hover:shadow-[var(--shadow-glow)] cursor-default"
          >
            {brand}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;
