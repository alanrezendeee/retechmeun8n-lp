import { SITE_URL } from './constants'

function whatsappDigits(): string {
  return import.meta.env.VITE_WHATSAPP_NUMBER.replace(/\D/g, '')
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

  return `https://wa.me/${num}?text=${text}`
}
