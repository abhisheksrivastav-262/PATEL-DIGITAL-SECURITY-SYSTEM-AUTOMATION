import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle, Shield } from 'lucide-react'
import { businessConfig, isPlaceholder } from '../config/businessConfig'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  const nav = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Projects', path: '/projects' },
    { label: 'Why Us', path: '/why-us' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact', path: '/contact' },
  ]

  const phone = businessConfig.contact.phone
  const wa = businessConfig.contact.whatsapp

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#060A14]/95 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent border-b border-transparent'}`}>
      {/* top trust bar - hidden on scrolled or mobile minimal */}
      {!scrolled && (
        <div className="hidden lg:block border-b border-white/[0.06] bg-white/[0.02]">
          <div className="max-w-[1280px] mx-auto px-6 py-2 flex items-center justify-between text-[11px] tracking-widest uppercase text-slate-400">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Serving Ahmedabad → Entire Gujarat  •  Professional • Reliable • 24/7 Support</span>
            <span className="flex items-center gap-4">
              <span>{businessConfig.location.full}</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-slate-300">{isPlaceholder(phone) ? 'Call for enquiry' : phone}</span>
            </span>
          </div>
        </div>
      )}

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[68px] lg:h-[76px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] shrink-0">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-black tracking-[0.02em] leading-none text-white text-[13px] sm:text-[15px] lg:text-[16px]">PATEL DIGITAL</span>
            <span className="text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.18em] text-blue-400 font-semibold leading-none mt-[2px] truncate">SECURITY SYSTEM & AUTOMATION</span>
            <span className="hidden lg:block text-[10px] tracking-widest text-slate-500 mt-[1px]">CCTV • NETWORKING • AUTOMATION</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-lg text-[13px] font-medium tracking-wide transition-all ${location.pathname === item.path ? 'text-white bg-white/[0.08] border border-white/[0.08]' : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={isPlaceholder(phone) ? '#contact' : `tel:${phone.replace(/\s/g,'')}`} className="flex items-center gap-2 px-5 py-[10px] rounded-full bg-white text-[#060A14] text-sm font-bold hover:bg-slate-100 transition">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a href={isPlaceholder(wa) ? '/contact' : `https://wa.me/${wa.replace(/\D/g,'')}`} target={isPlaceholder(wa)?'_self':'_blank'} rel="noreferrer" className="flex items-center gap-2 px-5 py-[10px] rounded-full bg-[#25D366] text-white text-sm font-bold hover:bg-[#20bd5a] transition shadow-[0_0_20px_rgba(37,211,102,0.3)]">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.1] flex items-center justify-center text-white">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden absolute inset-x-0 top-[68px] bg-[#0A1020] border-t border-white/[0.08] shadow-2xl animate-in">
          <nav className="px-4 py-4 flex flex-col">
            {nav.map(item => (
              <Link key={item.path} to={item.path} className={`px-4 py-3 rounded-xl text-[14px] font-medium ${location.pathname===item.path ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'}`}>
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <a href={isPlaceholder(phone)?'/contact':`tel:${phone}`} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-[#060A14] font-bold text-sm"><Phone className="w-4 h-4"/> Call Now</a>
              <a href={isPlaceholder(wa)?'/contact':`https://wa.me/${wa.replace(/\D/g,'')}`} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm"><MessageCircle className="w-4 h-4"/> WhatsApp</a>
            </div>
            <p className="text-center text-[11px] tracking-widest text-slate-500 mt-4 uppercase">{businessConfig.location.full}</p>
          </nav>
        </div>
      )}
    </header>
  )
}
