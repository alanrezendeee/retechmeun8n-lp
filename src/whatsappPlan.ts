import { SITE_URL } from './constants'

/**
 * DDI + DDD + número, apenas dígitos (ex.: 5511987654321).
 * Defina VITE_WHATSAPP_NUMBER no .env local ou nas variáveis de build (Railway).
 */
function whatsappDigits(): string {
  const raw = import.meta.env.VITE_WHATSAPP_NUMBER
  if (typeof raw !== 'string' || !raw.trim()) return ''
  return raw.replace(/\D/g, '')
}

/** Abre conversa no WhatsApp com plano e texto padrão (automação pode ler a primeira mensagem). */
export function whatsAppUrlForPlan(planName: string, price: string): string {
  const host = new URL(SITE_URL).host
  const message = [
    `Olá! Vim pelo site *Meu n8n* (${host}).`,
    '',
    `Quero seguir com o plano *${planName}* — *R$ ${price}/mês*.`,
    '',
    'Podem me orientar na contratação?',
  ].join('\n')

  const text = encodeURIComponent(message)
  const num = whatsappDigits()

  if (!num && import.meta.env.DEV) {
    console.warn(
      '[Meu n8n] Defina VITE_WHATSAPP_NUMBER (só dígitos) para o link do WhatsApp nos planos.',
    )
  }

  return num
    ? `https://wa.me/${num}?text=${text}`
    : `https://api.whatsapp.com/send?text=${text}`
}
