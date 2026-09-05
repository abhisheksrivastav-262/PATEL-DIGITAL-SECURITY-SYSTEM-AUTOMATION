import { Link } from 'react-router-dom'
import { Shield, Wifi, Lock, Home as HomeIcon, Wrench, Cpu, Phone, MessageCircle, ArrowRight, CheckCircle2, Eye, Network, Fingerprint, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { businessConfig, services } from '../config/businessConfig'

const serviceIcons = {
  cctv: Eye, ipcam: Shield, networking: Network, vdphone: Phone, access: Fingerprint, automation: Sparkles, smarthome: HomeIcon, amc: Wrench, ai: Cpu, custom: Shield
}

export default function Home() {
  return (
    <div className="bg-[#060A14]">
      {/* HERO */}
      <section className="relative overflow-hidden pt-[68px] lg:pt-[104px]">
        {/* background */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&q=80" alt="Security control room" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060A14] via-[#060A14]/90 to-[#060A14]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A14] via-transparent to-transparent" />
          {/* grid overlay */}
          <div className="absolute inset-0 grid-pattern opacity-40" />
          {/* blue glow */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* left copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/15 border border-blue-500/20 text-[11px] tracking-widest font-bold text-blue-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Trusted Security Partner • Ahmedabad & Gujarat
            </div>

            <h1 className="mt-6 text-[34px] sm:text-[48px] lg:text-[64px] font-black leading-[0.9] tracking-[-0.03em] text-white">
              SMART<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">SECURITY.</span><br />
              SMART<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">CONNECTIVITY.</span><br />
              SMARTER<br />
              SPACES.
            </h1>

            <p className="mt-6 text-[15px] lg:text-[16px] leading-relaxed text-slate-300 max-w-xl">
              Complete <span className="text-white font-semibold">CCTV, Security, Networking & Automation</span> solutions for homes, offices and businesses across <span className="text-white">Ahmedabad & Gujarat</span>. Professional installation • Reliable technology • Lifelong support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="px-7 py-3.5 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition shadow-[0_0_24px_rgba(37,99,235,0.4)] flex items-center gap-2">Request Free Consultation <ArrowRight className="w-4 h-4"/></Link>
              <Link to="/services" className="px-7 py-3.5 rounded-full bg-white text-[#060A14] font-bold text-sm hover:bg-slate-100 transition">Explore Solutions</Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.1] text-white text-sm font-medium backdrop-blur"><Phone className="w-4 h-4"/> Call Now</a>
              <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-bold"><MessageCircle className="w-4 h-4"/> WhatsApp Us</a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400"/> Professional Installation</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400"/> AMC Support</span>
              <span className="hidden sm:flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400"/> Gujarat-wide Service</span>
            </div>
          </div>

          {/* right glass card + image */}
          <div className="relative">
            {/* main image card */}
            <div className="relative rounded-[24px] overflow-hidden border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.6)] bg-[#0A1020]">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80" alt="Modern CCTV" className="w-full h-[380px] lg:h-[520px] object-cover" />
              {/* HUD overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-[11px] font-bold tracking-widest flex items-center gap-1.5"><span className="w-2 h-2 bg-white rounded-full animate-pulse"/> LIVE • 4K SECURE</span>
                <span className="px-3 py-1.5 rounded-full bg-[#060A14]/80 backdrop-blur border border-white/10 text-white text-xs font-mono">REC ● 24/7</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="rounded-2xl bg-[#060A14]/70 backdrop-blur-xl border border-white/10 p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0"><Shield className="w-6 h-6 text-white"/></div>
                  <div>
                    <div className="text-white font-bold text-sm">24/7 Surveillance Active</div>
                    <div className="text-slate-400 text-xs">Kathwada • Ahmedabad • Encrypted & Monitored</div>
                  </div>
                  <div className="ml-auto hidden sm:flex w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 items-center justify-center"><div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"/></div>
                </div>
              </div>
            </div>

            {/* floating stat cards */}
            <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center"><Wrench className="w-5 h-5 text-white"/></div>
              <div>
                <div className="text-[#060A14] font-black text-sm leading-none">Professional Installation</div>
                <div className="text-slate-500 text-xs">Certified technicians</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-2 lg:-right-6 bg-[#0A1020] border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">Service Coverage</div>
              <div className="text-white font-black text-sm">Ahmedabad → Gujarat</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] backdrop-blur">
        <div className="max-w-[1280px] mx-auto px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { k: 'Professional', v: 'Security Solutions', d: 'End-to-end expertise' },
            { k: 'CCTV &', v: 'Surveillance', d: 'HD / 4K • Night vision' },
            { k: 'Networking', v: 'Infrastructure', d: 'Enterprise Wi-Fi & LAN' },
            { k: 'Smart', v: 'Automation', d: 'Home & office intelligence' },
          ].map(i=>(
            <div key={i.v} className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0"><CheckCircle2 className="w-5 h-5 text-blue-400"/></div>
              <div>
                <div className="text-white font-bold text-sm leading-none">{i.k} <span className="text-blue-400">{i.v}</span></div>
                <div className="text-slate-500 text-xs mt-1">{i.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
        <SectionHeading eyebrow="What we do" title="Security & automation, engineered for the modern world" desc="From CCTV & networking to biometrics & smart automation — one trusted partner for every layer of protection and connectivity." />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s, idx) => {
            const Icon = serviceIcons[s.icon] || Shield
            return (
              <div key={s.id} className="group relative rounded-2xl bg-white/[0.04] border border-white/[0.07] p-6 hover:bg-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-[0_4px_16px_rgba(37,99,235,0.3)]"><Icon className="w-5 h-5 text-white"/></div>
                <div className="mt-4 text-[11px] tracking-widest text-blue-400 font-bold">0{idx+1}</div>
                <h3 className="mt-1 text-white font-bold text-[14px] leading-tight min-h-[40px]">{s.title}</h3>
                <p className="mt-2 text-slate-400 text-xs leading-relaxed min-h-[48px]">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-400 group-hover:gap-2 transition-all">Explore Solution <ArrowRight className="w-3 h-3"/></Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* FEATURED SOLUTIONS */}
      <section className="bg-white text-[#060A14]">
        <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.2em] font-bold uppercase text-blue-600">Featured Solutions</p>
            <h2 className="mt-3 text-[32px] lg:text-[48px] font-black leading-[0.9] tracking-[-0.02em]">Security & automation,<br/> engineered for <span className="text-blue-600">modern life</span></h2>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { title: 'CCTV & Surveillance', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=700&q=80', points: ['4K & HD clarity', 'Night vision & remote view', 'Professional cabling & setup'] },
              { title: 'Networking & Wi-Fi', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80', points: ['Structured cabling', 'Enterprise Wi-Fi & mesh', 'Rack, switch & firewall'] },
              { title: 'Access Control', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80', points: ['Biometric & card', 'Door, gate & lift control', 'Attendance integration'] },
            ].map(card=>(
              <div key={card.title} className="rounded-[20px] overflow-hidden border border-slate-200 bg-slate-50 group">
                <div className="h-[220px] overflow-hidden relative">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-black text-lg">{card.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {card.points.map(p=> <li key={p} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0"/>{p}</li>)}
                  </ul>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#060A14] text-white text-sm font-bold hover:bg-black transition">Explore <ArrowRight className="w-4 h-4"/></Link>
                </div>
              </div>
            ))}
          </div>

          {/* smart automation banner */}
          <div className="mt-6 rounded-[20px] overflow-hidden bg-[#060A14] text-white grid lg:grid-cols-2 gap-0 border border-white/10">
            <div className="p-8 lg:p-10">
              <p className="text-[11px] tracking-[0.2em] text-blue-400 font-bold uppercase">Smart Automation</p>
              <h3 className="mt-2 text-2xl lg:text-3xl font-black leading-tight">Your home, office & business — intelligently automated</h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">Control lighting, curtains, AC, security & scenes from one app. Voice, schedule & sensor-driven automation for true comfort and efficiency.</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {['Smart lighting','Curtain & blinds','Climate control','Scene automation'].map(x=> <li key={x} className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400"/>{x}</li>)}
              </ul>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500">Discover Automation <ArrowRight className="w-4 h-4"/></Link>
            </div>
            <div className="h-[300px] lg:h-auto relative">
              <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80" alt="Smart home" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060A14] via-transparent to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
        <SectionHeading eyebrow="Our Process" title="From enquiry to protection — in 5 seamless steps" desc="Transparent, professional and on-time — every project follows our proven methodology." />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { n:'01', t:'Understand Requirement', d:'We listen, note goals, budget & site details.'},
            { n:'02', t:'Site Assessment', d:'On-site survey for coverage, cabling & feasibility.'},
            { n:'03', t:'Solution Planning', d:'Tailored design with product & cost clarity.'},
            { n:'04', t:'Professional Installation', d:'Neat, tested & documented deployment.'},
            { n:'05', t:'Support & Maintenance', d:'AMC, priority support & upgrades.'},
          ].map(s=>(
            <div key={s.n} className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-6 relative">
              <div className="text-3xl font-black text-white/10">{s.n}</div>
              <h4 className="mt-2 text-white font-bold text-sm leading-tight">{s.t}</h4>
              <p className="mt-2 text-slate-400 text-xs leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white/[0.02] border-y border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[11px] tracking-[0.2em] font-bold uppercase text-blue-400">Why Patel Digital</p>
            <h2 className="mt-3 text-[30px] lg:text-[42px] font-black leading-[0.9] tracking-[-0.02em] text-white">Why businesses & homes<br/> trust <span className="text-blue-400">Patel Digital</span></h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t:'Professional Installation', d:'Neat cabling, tested systems, documented handover.'},
                { t:'Customized Solutions', d:'No one-size-fits-all — built for your site & budget.'},
                { t:'Modern Technology', d:'HD/4K, IP, AI analytics & cloud-ready platforms.'},
                { t:'Reliable Support', d:'Responsive after-sales & AMC maintenance.'},
                { t:'Security-Focused', d:'Privacy & data protection by design.'},
                { t:'Gujarat Coverage', d:'Ahmedabad base, Gujarat-wide service.'},
              ].map(x=>(
                <div key={x.t} className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-white"/></div>
                  <h4 className="mt-3 text-white font-bold text-sm">{x.t}</h4>
                  <p className="mt-1 text-slate-400 text-xs leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] overflow-hidden border border-white/[0.08] bg-[#0A1020] p-6 lg:p-8">
            <h3 className="text-white font-black text-lg">Request a Free Consultation</h3>
            <p className="text-slate-400 text-sm mt-1">Tell us your requirement — we’ll respond via WhatsApp & Call.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="rounded-[24px] bg-gradient-to-br from-blue-600 to-blue-700 p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl lg:text-3xl font-black">Secure your premises today</h3>
            <p className="text-blue-100 mt-2 text-sm">CCTV • Networking • Access Control • Automation — one partner, complete peace of mind.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link to="/contact" className="px-7 py-3 rounded-full bg-white text-blue-700 font-bold hover:bg-slate-100">Contact Us</Link>
            <a href="/contact" className="px-7 py-3 rounded-full bg-[#060A14] text-white font-bold border border-white/20">WhatsApp Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
