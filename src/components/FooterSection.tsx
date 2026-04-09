import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => (
  <footer id="contacto" className="py-16 border-t border-border">
    <div className="section-container">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="Parabrisas Villarrica" className="h-12 w-auto mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Más de 25 años de experiencia en instalación y reparación de vidrios automotrices en la Región de La Araucanía.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/parabrisas_villarrica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/parabrisasvillarrica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Valentín Letelier #525, Villarrica, Chile</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary shrink-0" /> +56 9 9643 8729</li>
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary shrink-0" /> contacto@parabrisasvillarrica.cl</li>
            <li className="flex items-start gap-3"><Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Lunes a Sábado: 8:30 – 18:30</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-primary transition-colors cursor-pointer">Parabrisas delantero</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Luneta trasera</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Vidrios laterales</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Sunroof</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Reparación de trizaduras</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Polarizado</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} Parabrisas Villarrica. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default FooterSection;
