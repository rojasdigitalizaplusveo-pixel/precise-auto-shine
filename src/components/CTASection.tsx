import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";

const CTASection = () => (
  <section className="py-24 bg-card">
    <div className="section-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 max-w-2xl mx-auto">
          ¿Necesita cambiar o reparar su <span className="text-primary">parabrisas</span>?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Contáctenos ahora y reciba una cotización sin compromiso. Respuesta en menos de 15 minutos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/56912345678?text=Hola%2C%20necesito%20una%20cotización"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-8 py-4"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a href="#contacto" className="btn-outline-light text-lg px-8 py-4">
            <FileText className="w-5 h-5" />
            Solicitar cotización
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
