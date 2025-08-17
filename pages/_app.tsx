import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
