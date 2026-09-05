import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Projects from './pages/Projects'
import WhyUs from './pages/WhyUs'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function ScrollToTop(){
  const { pathname } = useLocation()
  useEffect(()=>{ window.scrollTo(0,0) },[pathname])
  return null
}

export default function App(){
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/why-us" element={<WhyUs/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms/>} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  )
}
