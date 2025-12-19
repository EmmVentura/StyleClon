import { useState, Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import {
  FaCreditCard,
  FaPaypal,
  FaMoneyBillWave,
  FaQrcode,
  FaStar,
} from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import { FaTelegram, FaTimes, FaBars } from "react-icons/fa";

export default function Home() {
  const [isOxxoOpen, setIsOxxoOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const plans = [
    {
      title: "1 Mes 🗓️",
      price: "$140 MXN",
      desc: "❌ sin mes gratis.",
      links: {
        stripe: "https://buy.stripe.com/bJedRa7Is9Lr54xg4u1kA01",
        mercadopago: "https://mpago.la/1icHUGM",
        paypal: "https://www.paypal.com/ncp/payment/9A8967XM4ZM6C",
      },
    },
    {
      title: "2 Meses 🔥",
      price: "$240 MXN",
      desc: "✅  1 mes gratis 🎁 ",

      featured: true,
      badge: "Popular",
      links: {
        stripe: "https://buy.stripe.com/eVq4gAd2M1eVcwZg4u1kA02",
        mercadopago: "https://mpago.la/2b2Uuix",
        paypal: "https://www.paypal.com/ncp/payment/F2V2LXGS6KDQU",
      },
    },
    {
      title: "3 Meses 🎉",
      price: "$380 MXN",
      desc: "✅ 1 mes gratis 🎁.",
      links: {
        stripe: "https://buy.stripe.com/5kQbJ23scf5L2Wpf0q1kA03",
        mercadopago: "https://mpago.la/1vVUDgm",
        paypal: "https://www.paypal.com/ncp/payment/KQT8R9EV7P6S6",
      },
    },
    {
      title: "6 Meses 📅",
      price: "$520 MXN",
      desc: "✅  Facturado a 86 MXN.",
      featured: true,
      badge: "El mejor precio",
      links: {
        stripe: "https://buy.stripe.com/aFaaEY4wg0aR54x05w1kA04",
        mercadopago: "https://mpago.li/2QPvDJS",
        paypal: "https://www.paypal.com/ncp/payment/QD47PYHCQDRLU",
      },
    },
    {
      title: "1 Año 🏆",
      price: "$820 MXN",
      desc: "✅ Facturado a 68 MXN.",
      links: {
        stripe: "https://buy.stripe.com/9B600ke6Qe1H0Oh9G61kA05",
        mercadopago: "https://mpago.li/13UfbH8",
        paypal: "https://www.paypal.com/ncp/payment/AXYDVE6UGCAQU",
      },
    },
  ];

  // Animaciones
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
      <header className="bg-white/90 shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4  flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            StyleClon
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Planes
            </Link>

            <Link
              href="/legal"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Legal
            </Link>
            <Link
              href="/list"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Artistas
            </Link>

            <Link
              href="/comunidad"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Comunidad
            </Link>
            <Link
              href="https://t.me/ASMR_Latam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1"
            >
              <FaTelegram className="text-xl" />
              <span></span>
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none z-50" // Added z-50
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

        {/* Mobile Menu*/}
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
              <Link
                href="/list"
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-gray-100 pb-4 text-gray-900"
              >
                Artistas
              </Link>
              <Link
                href="/comunidad"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Comunidad
              </Link>
              <Link
                href="https://t.me/ASMR_Latam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 border-b border-gray-100 pb-4"
              >
                <FaTelegram className="text-xl" />
                Unirse al Canal
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className=" bg-white flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Contenido{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Premium
            </span>{" "}
            en tu bolsillo
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            🔥 Accede a nuestro grupo privado de Telegram 🔥
          </p>
          <p className="mt-6 text-lg text-gray-600">
            📥 Actualizaciones constantes y material único que no encontrarás en
            ningún otro lugar.
          </p>

          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Ver Planes Disponibles
          </motion.a>
        </motion.div>
      </section>

      {/* Pricing Section*/}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Planes
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades y comienza hoy
              mismo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className={`relative rounded-2xl p-6 border-2 transition-all duration-300 shadow-lg flex flex-col justify-between
                ${
                  plan.featured
                    ? "border-purple-500 bg-white shadow-xl ring-2 ring-purple-200"
                    : "border-gray-200 bg-white hover:shadow-md hover:border-purple-300"
                }`}
              >
                {plan.featured && (
                  <div
                    className={`absolute -top-3 -right-3 text-xs font-bold px-3 py-1 rounded-full flex items-center
    ${
      plan.badge === "Popular"
        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white"
        : "bg-gradient-to-r from-green-400 to-green-500 text-white"
    }`}
                  >
                    {plan.badge === "Popular" && <FaStar className="mr-1" />}
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h4
                    className={`text-xl font-bold mb-2 ${
                      plan.featured ? "text-purple-600" : "text-gray-800"
                    }`}
                  >
                    {plan.title}
                  </h4>
                  <p
                    className={`text-3xl font-extrabold mb-4 ${
                      plan.featured ? "text-gray-900" : "text-gray-800"
                    }`}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`text-3xltext-sm  ${
                      plan.featured ? "text-gray-600" : "text-gray-500"
                    }`}
                  >
                    {plan.desc}
                  </p>
                </div>

                {/* Botones de pago mejorados */}
                <div className="mt-6 space-y-3">
                  <motion.a
                    href={plan.links.stripe}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm w-full transition-colors
                      ${
                        plan.featured
                          ? "bg-gray-900 text-white hover:bg-gray-800"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                  >
                    <FaCreditCard /> Stripe
                  </motion.a>

                  <motion.a
                    href={plan.links.mercadopago}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm w-full transition-colors
                      ${
                        plan.featured
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                      }`}
                  >
                    <SiMercadopago className="text-lg" /> MercadoPago
                  </motion.a>

                  <motion.a
                    href={plan.links.paypal}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm w-full transition-colors
                      ${
                        plan.featured
                          ? "bg-blue-400 text-white hover:bg-blue-500"
                          : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                      }`}
                  >
                    <FaPaypal /> PayPal
                  </motion.a>

                  <motion.button
                    onClick={() => setIsTransferOpen(true)}
                    whileHover={{ y: -2 }}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm w-full transition-colors
                      ${
                        plan.featured
                          ? "bg-purple-600 text-white hover:bg-purple-700"
                          : "bg-purple-100 text-purple-800 hover:bg-purple-200"
                      }`}
                  >
                    <FaMoneyBillWave /> Transferencia
                  </motion.button>

                  <motion.button
                    onClick={() => setIsOxxoOpen(true)}
                    whileHover={{ y: -2 }}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm w-full transition-colors
                      ${
                        plan.featured
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-green-100 text-green-800 hover:bg-green-200"
                      }`}
                  >
                    <FaQrcode /> OXXO
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center mb-16 bg-white">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto bg-white">
          Envia tu comprobante de pago via telegram! <br />
          <Link
            href="https://t.me/MrJarochoo"
            className="text-blue-500 hover:underline"
          >
            @MrJarochoo
          </Link>
        </p>
      </div>

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
                    href="#pricing"
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
                  placeholder="No funciona pero se ve bonito!"
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

      <Transition appear show={isTransferOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsTransferOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                <Dialog.Title className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaMoneyBillWave className="text-purple-600" /> Transferencia
                  Bancaria
                </Dialog.Title>

                <div className="space-y-4 mb-6">
                  {[
                    {
                      label: "CLABE",
                      value: "728969000103058864",
                      copy: true,
                    },
                    { label: "Beneficiario", value: "Ventura" },
                    { label: "Banco", value: "Spin by OXXO" },
                    { label: "Concepto", value: "Pago" },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        {item.label}
                      </p>
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <p className="font-mono text-gray-800">{item.value}</p>
                        {item.copy && (
                          <button
                            onClick={() =>
                              navigator.clipboard.writeText(
                                item.value.replace(/\s/g, "")
                              )
                            }
                            className="text-purple-600 hover:text-purple-800"
                            title="Copiar"
                          >
                            <FiSend />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                  <p className="text-sm text-blue-700 flex items-start">
                    <FaTelegram className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
                    Envía tu comprobante por Telegram para activar tu membresía.
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setIsTransferOpen(false)}
                    className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isOxxoOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOxxoOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                <Dialog.Title className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaQrcode className="text-green-600" /> Pago en OXXO
                </Dialog.Title>

                <div className="flex justify-center mb-6">
                  <div className="border-4 border-gray-200 rounded-xl p-4">
                    <img
                      src="/Qr-oxxo.jpg"
                      alt="Código QR para pago en OXXO"
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    {
                      label: "Referencia OXXO",
                      value: "2242 1708 4056 8956",
                      copy: true,
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        {item.label}
                      </p>
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <p className="font-mono text-gray-800">{item.value}</p>
                        {item.copy && (
                          <button
                            onClick={() =>
                              navigator.clipboard.writeText(
                                item.value.replace(/\s/g, "")
                              )
                            }
                            className="text-green-600 hover:text-green-800"
                            title="Copiar"
                          >
                            <FiSend />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
                  <h4 className="font-medium text-yellow-800 mb-2">
                    Instrucciones:
                  </h4>
                  <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                    <li>Acude a cualquier tienda OXXO</li>
                    <li>Indica que deseas realizar un pago de servicio</li>
                    <li>Proporciona la referencia mostrada</li>
                    <li>Guarda tu ticket de pago</li>
                    <li>Envía una foto del ticket por Telegram</li>
                  </ol>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOxxoOpen(false)}
                    className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
