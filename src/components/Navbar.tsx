import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#stats", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Parabrisas Villarrica" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/56996438729"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm px-4 py-2"
          >
            Cotizar
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="section-container py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
