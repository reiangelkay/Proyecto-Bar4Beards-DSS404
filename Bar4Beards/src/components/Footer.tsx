// src/components/Footer.tsx
// Componente Footer - Bar4Beards
// Autor: Sergio
// Uso: importar y colocar <Footer /> al final de cada página

import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3b6a64] text-white border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">

        {/* Sección principal: 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Logo y descripción */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border-2 border-[#f3d0c6] bg-[#2f5b56] flex items-center justify-center shadow-md overflow-hidden">
                <img
                  src="/logo-bar4beards.svg"
                  alt="Bar4Beards"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl tracking-wide text-white">Bar4Beards</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Tu barbería de confianza. Cortes, estilos y atención premium para el hombre moderno.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest border-b border-white/20 pb-2">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'INICIO' },
                { to: '/store', label: 'SERVICIOS' },
                { to: '/appointments', label: 'AGENDAR' },
                { to: '/chat', label: 'CHAT' },
                { to: '/profile', label: 'PERFIL' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/70 hover:text-[#F15515] transition-colors duration-200 uppercase tracking-wider font-semibold text-xs"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest border-b border-white/20 pb-2">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>📍 San Salvador, El Salvador</li>
              <li>📞 +503 0000-0000</li>
              <li>✉️ contacto@bar4beards.com</li>
              <li>🕐 Lun – Sáb: 8:00 AM – 7:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-2">
          <p>© {currentYear} Bar4Beards. Todos los derechos reservados.</p>
          <p>Desarrollado por el equipo DSS404</p>
        </div>

      </div>
    </footer>
  );
}