import { LiveVisitorsBadge } from '../components/LiveVisitorsBadge'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <LiveVisitorsBadge />
    </>
  )
}
