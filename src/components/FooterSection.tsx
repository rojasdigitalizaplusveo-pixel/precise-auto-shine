import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => (
  <footer id="contacto" className="py-16 border-t border-border">
    <div className="section-container">
      {/* Google Maps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 rounded-2xl overflow-hidden border border-border"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5!2d-72.2272!3d-39.2842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDE3JzAzLjEiUyA3MsKwMTMnMzcuOSJX!5e0!3m2!1ses!2scl!4v1"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Parabrisas Villarrica"
        />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="Parabrisas Villarrica" className="h-24 sm:h-28 md:h-32 w-auto mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Más de 25 años de experiencia en vidrios y accesorios automotrices en Villarrica.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              Valentín Letelier #525, Villarrica
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+56952264328" className="hover:text-foreground transition-colors">+56 9 5226 4328</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+56996438729" className="hover:text-foreground transition-colors">+56 9 9643 8729</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+56452413877" className="hover:text-foreground transition-colors">45 2413877</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:parabrisas-villarrica@hotmail.com" className="hover:text-foreground transition-colors">parabrisas-villarrica@hotmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:contacto@parabrisasvillarrica.cl" className="hover:text-foreground transition-colors">contacto@parabrisasvillarrica.cl</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              Lun–Vie: 8:45 – 18:45
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Redes Sociales</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/parabrisas_villarrica"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575906784901"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>

          <h4 className="font-heading font-semibold mb-4 mt-6">Menú</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a></li>
            <li><a href="#stats" className="hover:text-foreground transition-colors">Experiencia</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Parabrisas Villarrica. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default FooterSection;
