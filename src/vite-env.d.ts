/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Obrigatória no build: DDI + DDD + número, apenas dígitos (ex.: 5511987654321). */
  readonly VITE_WHATSAPP_NUMBER: string
  /** Opcional: URL do projeto Supabase (contador “online agora” via Realtime). */
  readonly VITE_SUPABASE_URL?: string
  /** Opcional: chave anon pública do Supabase (Settings → API). */
  readonly VITE_SUPABASE_ANON_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
