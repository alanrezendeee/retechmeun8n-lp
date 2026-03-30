import { useEffect, useState } from 'react'
import { getSupabaseBrowser, isLiveVisitorsEnabled } from '../lib/supabaseClient'

const CHANNEL = 'meun8n_lp_presence'
const HEARTBEAT_MS = 25_000

/**
 * Contagem aproximada de visitantes com abas abertas na LP (Presença Realtime).
 * Requer VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY; sem isso não renderiza nada.
 */
export function LiveVisitorsBadge() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    if (!isLiveVisitorsEnabled()) return

    const supabase = getSupabaseBrowser()
    if (!supabase) return

    const sessionKey = crypto.randomUUID()
    const channel = supabase.channel(CHANNEL, {
      config: { presence: { key: sessionKey } },
    })

    const refresh = () => {
      const state = channel.presenceState()
      setCount(Object.keys(state).length)
    }

    channel
      .on('presence', { event: 'sync' }, refresh)
      .on('presence', { event: 'join' }, refresh)
      .on('presence', { event: 'leave' }, refresh)

    void channel.subscribe(async (status) => {
      if (status === 'SUBSCRIBED') {
        await channel.track({ at: Date.now() })
        refresh()
      }
    })

    const heartbeat = window.setInterval(() => {
      void channel.track({ at: Date.now() })
    }, HEARTBEAT_MS)

    return () => {
      window.clearInterval(heartbeat)
      void supabase.removeChannel(channel)
    }
  }, [])

  if (!isLiveVisitorsEnabled()) return null

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs text-zinc-300 shadow-lg backdrop-blur-md sm:bottom-6 sm:right-6 sm:px-4 sm:py-2 sm:text-sm"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span
        className="relative flex h-2 w-2 shrink-0 sm:h-2.5 sm:w-2.5"
        aria-hidden
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-neon shadow-[0_0_10px_#00e676] sm:h-2.5 sm:w-2.5" />
      </span>
      <span className="tabular-nums">
        {count === null ? (
          <span className="text-zinc-500">Conectando…</span>
        ) : (
          <>
            <span className="font-semibold text-neon-bright">{count}</span>
            <span className="text-zinc-400">
              {count === 1 ? ' pessoa online' : ' pessoas online'}
            </span>
          </>
        )}
      </span>
    </div>
  )
}
