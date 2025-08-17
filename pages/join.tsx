import { motion } from "framer-motion";
import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Cómo Unirse a Close Friends</h1>
      
      <div className="space-y-6">
        <Step number={1} title="Prepara tus materiales">
          <p>Reúne las imágenes que deseas aportar.</p>
        </Step>

        <Step number={2} title="Envía un correo">
          <p>
            Manda un email a: 
            <span className="font-mono bg-yellow-100 px-2 py-1 rounded ml-2">
              LosJarochitos@proton.me
            </span>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Asunto: <span className="font-mono">[Mejores Amigos] o [PACK]</span>
          </p>
        </Step>

        <Step number={3} title="Incluye esta información">
          <ul className="list-disc pl-5 space-y-2">
            <li>Tu apodo</li>
            <li>Enlace a tu perfil de Telegram (Donde te llegara el link para unirse)</li>
            <li>Breve descripción de tu aporte</li>
            <li>Imágenes adjuntas (TU APORTE)</li>
          </ul>
        </Step>

        <Step number={4} title="Espera confirmación">
          <p>Te responderemos en 24-48 horas con acceso al grupo</p>
        </Step>
        <Step number={5} title="Aviso">
            <p>El link solo es de un solo uso, por lo cual asegurate de unirte con la cuenta que deseas.</p>
          <p>Deberas aportar minimo mensualmente.</p>
          <p>Una vez dentro del grupo lee las reglas del mismo que estaran fijadas.</p>
        </Step>
        <Step number={6} title="Pago">
          <p>¿No tienes material para aportar? Envia un correo, 
            donde incluyas tu pais para hacerte llegar la cantidad a pagar...
          </p>
        </Step>
      </div>

      <div className="mt-12 border-t pt-6">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}

const Step = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: number * 0.1 }}
    className="border-l-4 border-purple-500 pl-4 py-2"
  >
    <div className="flex items-center mb-2">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white mr-3">
        {number}
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    <div className="pl-11">{children}</div>
  </motion.div>
);