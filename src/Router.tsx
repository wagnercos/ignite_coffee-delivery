import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/layouts/DefaultLayout'
import { CoffeeProvider } from './hooks/useCoffee'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  return (
    <CoffeeProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </CoffeeProvider>
  )
}
