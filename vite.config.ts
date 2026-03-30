import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const WHATSAPP_ENV_KEY = 'VITE_WHATSAPP_NUMBER'

function assertWhatsappNumberLoaded(env: Record<string, string>) {
  const raw = env[WHATSAPP_ENV_KEY]
  const digits = (typeof raw === 'string' ? raw : '').replace(/\D/g, '')
  if (digits.length < 10) {
    throw new Error(
      `${WHATSAPP_ENV_KEY} é obrigatória: defina no arquivo .env (local) ou nas variáveis do serviço ` +
        `antes do build (ex.: Railway). Use só dígitos, com DDI — exemplo Brasil: 5511987654321.`,
    )
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  assertWhatsappNumberLoaded(env)

  return {
    plugins: [react(), tailwindcss()],
  }
})
