/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Obrigatória no build: DDI + DDD + número, apenas dígitos (ex.: 5511987654321). */
  readonly VITE_WHATSAPP_NUMBER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
