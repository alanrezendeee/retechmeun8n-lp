import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { Layout } from './layout/Layout'
import { Compare } from './pages/Compare'
import { Home } from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/comparar"
          element={
            <Layout>
              <Compare />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
