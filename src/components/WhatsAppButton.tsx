import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/56952264328?text=Hola%2C%20necesito%20información"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    aria-label="Contactar por WhatsApp"
  >
    {/* Pulsing ring */}
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    {/* WhatsApp SVG icon */}
    <svg viewBox="0 0 32 32" className="w-8 h-8 relative z-10" fill="white">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.907 15.907 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.334 22.614c-.39 1.1-2.286 2.1-3.15 2.154-.792.048-1.556.376-5.244-1.092-4.452-1.77-7.286-6.35-7.508-6.646-.216-.296-1.776-2.362-1.776-4.506 0-2.144 1.124-3.198 1.524-3.636.39-.428.862-.536 1.148-.536.286 0 .572.004.82.016.264.012.618-.1.968.738.36.862 1.224 2.984 1.332 3.2.108.216.18.468.036.756-.144.288-.216.468-.432.72-.216.252-.456.564-.648.756-.216.216-.44.452-.19.886.252.432 1.12 1.848 2.404 2.994 1.652 1.476 3.044 1.932 3.476 2.148.432.216.684.18.936-.108.252-.288 1.08-1.26 1.368-1.692.288-.432.576-.36.972-.216.396.144 2.508 1.182 2.94 1.398.432.216.72.324.828.504.108.18.108 1.044-.282 2.144z"/>
    </svg>
  </motion.a>
);

export default WhatsAppButton;
