import { MapPin, Phone, Clock, Mail } from "lucide-react";
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
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Dirección, Villarrica, Chile</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary shrink-0" /> +56 9 1234 5678</li>
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
