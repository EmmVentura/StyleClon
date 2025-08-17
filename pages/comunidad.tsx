import Link from "next/link";
import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { FaTelegram, FaTimes, FaBars } from "react-icons/fa";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function LegalPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white/90 shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            StyleClon
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/legal"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Legal
            </Link>
            <a
              href="https://t.me/ASMR_Latam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1"
            >
              <FaTelegram className="text-xl" />
              <span>Canal</span>
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none z-50"
            aria-label="Menú"
          >
            {isMenuOpen ? (
              <div className="fixed top-4 right-6 bg-white p-1 rounded-md shadow-md">
                <FaTimes size={24} />
              </div>
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-lg">
              <Link
                href="#pricing"
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-gray-100 pb-4 text-gray-900"
              >
                Planes
              </Link>
              <Link
                href="/legal"
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-gray-100 pb-4 text-gray-900"
              >
                Legal
              </Link>
              <a
                href="https://t.me/ASMR_Latam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 border-b border-gray-100 pb-4"
              >
                <FaTelegram className="text-xl" />
                Unirse al Canal
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Comunidadl */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 max-w-4xl mx-auto p-6 py-12 w-full bg-white"
      >
        <div className="mb-8">
          <Link href="/" passHref>
            <motion.span
              whileHover={{ x: -5 }}
              className="flex items-center text-blue-600 hover:text-purple-600 hover:underline bg-white"
            >
              ← Volver al inicio
            </motion.span>
          </Link>
        </div>

        <div className="space-y-12">
          <ApuestasSection title="Apuestas Deportivas">
            <Section title="Comunidad de Apuestas ">
              <Link href="https://t.me/Jaiba_Deportiva" passHref>
                <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Unirse
                </button>
              </Link>
            </Section>
          </ApuestasSection>

          <ApuestasSection title="Peliculas y Series">
            <Section title="Comunidad para compartir Peliculas y Series.">
              <Link href="#" passHref>
                <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  En Desarrollo
                </button>
              </Link>
            </Section>
          </ApuestasSection>
          <ApuestasSection title="Close Friends">
            <Section title="">
              <Link href="/join" passHref>
                <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Solicitar Acceso
                </button>
              </Link>
            </Section>
          </ApuestasSection>
          <ApuestasSection title="Trading / Criptomonedas">
            <Section title="Comunidad para aprender y compartir conocimiento!">
             <Link href="#" passHref>
                <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  En Desarrollo
                </button>
              </Link>
            </Section>
          </ApuestasSection>
          <ApuestasSection title="Referencias">
            <Section title="Canal donde se subira referencias de los VIPS, ETC. ">
             <Link href="https://t.me/Referencias_Mrjarocho" passHref>
                <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Unirse
                </button>
              </Link>
            </Section>
          </ApuestasSection>
        </div>
      </motion.main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo y descripción */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                StyleClon
              </h2>
              <p className="text-gray-400">
                Tu acceso exclusivo a contenido premium
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://t.me/ASMR_Latam"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Telegram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.22-.198-.033-.312-.338-.112l-6.874 4.326-2.962-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Enlaces rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Planes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Términos de servicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Contacto
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-400 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">.....</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-400 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">+52 Linea de Perreo</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-gray-400 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400">Veracruz, veracruz, MX</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Suscríbete
              </h3>
              <p className="text-gray-400">
                Recibe actualizaciones y promociones exclusivas.
              </p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="No funciona pero se ve bien!"
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} MrJarocho. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Acordeón
const ApuestasSection: React.FC<SectionProps & { defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.section layout className="border-b border-gray-200 pb-8 ">
      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left items-center"
      >
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gray-500"
        >
          ▼
        </motion.span>
      </motion.button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0.8,
          marginTop: isOpen ? "1rem" : "0",
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

// Sección
const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <div className="text-gray-600 space-y-2">{children}</div>
  </div>
);
