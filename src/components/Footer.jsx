import { Link } from 'react-router-dom'
import { Shield, Phone, MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { businessConfig, isPlaceholder } from '../config/businessConfig'

export default function Footer() {
  return (
    <footer className="bg-[#050914] border-t border-white/[0.06]">
      {/* CTA strip */}
      <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[11px] tracking-[0.2em] text-blue-400 font-bold uppercase">Ready to secure your space?</p>
          <h3 className="text-2xl lg:text-3xl font-black text-white mt-1">Let’s build a safer, smarter environment.</h3>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link to="/contact" className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition flex items-center gap-2">Request Free Consultation <ArrowUpRight className="w-4 h-4"/></Link>
        </div>
      </div>

      <div className="border-t border-white/[0.06]" />

      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center"><Shield className="w-5 h-5 text-white"/></div>
              <div>
                <div className="font-black text-white text-sm leading-none">PATEL DIGITAL</div>
                <div className="text-[9px] tracking-[0.18em] text-blue-400 font-semibold">SECURITY SYSTEM & AUTOMATION</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">Professional CCTV, networking, access control & automation solutions across Ahmedabad & Gujarat. Reliable technology, professional installation, lifelong support.</p>
            <p className="text-xs text-slate-500 mt-3 flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-blue-400"/> {businessConfig.location.full}</p>
            <p className="text-xs text-slate-500 mt-1">Service: {businessConfig.location.serviceArea}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {[
                ['Home','/'],['About','/about'],['Services','/services'],['Products','/products'],['Projects','/projects'],['Why Choose Us','/why-us'],['Reviews','/reviews'],['Contact','/contact']
              ].map(([l,p]) => <li key={p}><Link to={p} className="hover:text-white transition">{l}</Link></li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>CCTV Installation & Service</li>
              <li>IP Camera & NVR Solutions</li>
              <li>Networking & Wi-Fi</li>
              <li>Access Control & Biometric</li>
              <li>Home & Office Automation</li>
              <li>AMC & Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide">Contact</h4>
            <div className="mt-4 space-y-3 text-sm">
              <a href={isPlaceholder(businessConfig.contact.phone)?'/contact':`tel:${businessConfig.contact.phone}`} className="flex items-center gap-3 text-slate-300 hover:text-white"><span className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center"><Phone className="w-4 h-4"/></span>{businessConfig.contact.phone}</a>
              <a href={isPlaceholder(businessConfig.contact.whatsapp)?'/contact':`https://wa.me/${businessConfig.contact.whatsapp.replace(/\D/g,'')}`} className="flex items-center gap-3 text-slate-300 hover:text-white"><span className="w-8 h-8 rounded-lg bg-[#25D366]/20 border border-[#25D366]/20 flex items-center justify-center"><MessageCircle className="w-4 h-4 text-[#25D366]"/></span>{businessConfig.contact.whatsapp}</a>
              <span className="flex items-center gap-3 text-slate-400"><span className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center"><Mail className="w-4 h-4"/></span>{businessConfig.contact.email}</span>
              <span className="flex items-start gap-3 text-slate-400"><span className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5"><MapPin className="w-4 h-4"/></span><span>{businessConfig.location.full}<br/><span className="text-xs text-slate-500">{businessConfig.contact.hours}</span></span></span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col lg:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2026 {businessConfig.name}. All Rights Reserved.</span>
          <span className="flex gap-4"><Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link><Link to="/terms" className="hover:text-slate-300">Terms & Conditions</Link></span>
        </div>
      </div>
    </footer>
  )
}
