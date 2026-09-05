import { CheckCircle2, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'

const detailed = [
  {
    title: 'CCTV Camera Installation & Service',
    tag: 'Visibility. Security. Peace of mind.',
    img: '/image/b.png',
    desc: 'Professional surveillance solutions for homes, shops, offices, warehouses and societies. HD/4K clarity, day & night protection.',
    features: ['Indoor dome & bullet cameras','Outdoor weatherproof IP66','Night vision & IR','Remote mobile monitoring','HD/4K recording','Professional installation & AMC'],
    ideal: 'Homes, offices, retail, godowns, societies, factories'
  },
  {
    title: 'IP Camera & NVR Solutions',
    tag: 'Intelligent IP ecosystems',
    img: '/image/b1.png',
    desc: 'Future-ready IP surveillance with PoE, AI analytics and scalable NVR architecture — from 4CH to 64CH.',
    features: ['PoE IP cameras','4CH–64CH NVR with H.265+','AI motion & intrusion alerts','Cloud & remote access','ANPR & face detection ready'],
    ideal: 'Enterprises, large residences, retail chains'
  },
  {
    title: 'Networking & Wi-Fi Solutions',
    tag: 'Enterprise-grade connectivity',
    img: '/image/b2.png',
    desc: 'Structured cabling, racks, switches, firewalls and high-performance Wi-Fi — for seamless, secure connectivity.',
    features: ['Structured cabling','Rack & switch setup','Mesh & enterprise APs','Outdoor point-to-point','Firewall & security'],
    ideal: 'Offices, warehouses, campuses, homes'
  },
  {
    title: 'Video Door Phone',
    tag: 'See. Speak. Secure.',
    img: '/image/b3.png',
    desc: 'HD video door phones with intercom, door lock integration and smartphone connectivity.',
    features: ['7" HD display','Mobile app & Wi-Fi','Door lock integration','Multi-flat support','Night vision'],
    ideal: 'Apartments, villas, offices'
  },
  {
    title: 'Access Control & Biometric',
    tag: 'Control who enters — with precision',
    img: '/image/b4.png',
    desc: 'Fingerprint, face and card-based systems for doors, gates, lifts and attendance.',
    features: ['Fingerprint / Face / Card','Door & gate automation','Lift access control','Attendance & payroll','Cloud reports'],
    ideal: 'Offices, factories, societies, gyms'
  },
  {
    title: 'Home & Office Automation',
    tag: 'Smarter spaces, every day',
    img: '/image/b5.png',
    desc: 'Zigbee / Wi-Fi automation for lighting, curtains, AC, security & scenes — app & voice controlled.',
    features: ['Smart lighting & dimming','Curtain / blinds automation','Climate & AC control','Scene & schedule','Alexa / Google voice'],
    ideal: 'Premium homes, offices, showrooms'
  },
]

export default function Services() {
  return (
    <div className="bg-[#060A14] pt-[68px] lg:pt-[76px]">
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <SectionHeading eyebrow="Our Services" title="Complete security, networking & automation — under one roof" desc="Ten core services. One professional team. Every solution designed around your site, needs and budget." />
      </section>

      <div className="max-w-[1280px] mx-auto px-6 pb-16 space-y-8">
        {detailed.map((s, i)=>(
          <div key={s.title} className={`rounded-[24px] overflow-hidden border border-white/[0.07] bg-white/[0.04] ${i%2===1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>

            {/* ── Mobile / Tablet: full aspect-ratio image, nothing cropped ── */}
            <div className="lg:hidden relative w-full" style={{aspectRatio:'16/9', background:'#0A1020'}}>
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-contain object-center"
                style={{padding:'14px', boxSizing:'border-box'}}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#060A14]/50 to-transparent pointer-events-none" />
            </div>

            {/* ── Desktop: side-by-side 2-col grid ── */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-0">
              <div className={`relative min-h-[440px] overflow-hidden ${i%2===1 ? 'order-2' : ''}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/40 to-transparent" />
              </div>
              <div className="p-10">
                <p className="text-[11px] tracking-[0.2em] font-bold uppercase text-blue-400">{s.tag}</p>
                <h3 className="mt-2 text-2xl font-black text-white leading-tight">{s.title}</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5">
                  <p className="text-xs tracking-widest font-bold text-white uppercase">Key Features</p>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.features.map(f=> <li key={f} className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0"/>{f}</li>)}
                  </ul>
                </div>
                <p className="mt-4 text-xs text-slate-500"><span className="text-slate-300 font-semibold">Ideal for:</span> {s.ideal}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 text-sm">Enquire Now <ArrowRight className="w-4 h-4"/></Link>
              </div>
            </div>

            {/* ── Mobile: text content below image ── */}
            <div className="lg:hidden p-6 sm:p-8">
              <p className="text-[11px] tracking-[0.2em] font-bold uppercase text-blue-400">{s.tag}</p>
              <h3 className="mt-2 text-xl font-black text-white leading-tight">{s.title}</h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4">
                <p className="text-xs tracking-widest font-bold text-white uppercase">Key Features</p>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {s.features.map(f=> <li key={f} className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0"/>{f}</li>)}
                </ul>
              </div>
              <p className="mt-3 text-xs text-slate-500"><span className="text-slate-300 font-semibold">Ideal for:</span> {s.ideal}</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 text-sm">Enquire Now <ArrowRight className="w-4 h-4"/></Link>
            </div>

          </div>
        ))}
      </div>

      {/* remaining compact */}
      <section className="bg-white text-[#060A14]">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <h3 className="text-xl font-black">More Solutions</h3>
          <div className="mt-6 grid md:grid-cols-4 gap-4">
            {[
              { t:'Smart Home Solutions', d:'Unified app for lights, sensors, locks & more.'},
              { t:'Security AMC & Maintenance', d:'Preventive care, spares & priority visits.'},
              { t:'AI & Digital Solutions', d:'ANPR, people counting & analytics.'},
              { t:'Custom Solutions', d:'Tailored design for unique requirements.'},
            ].map(x=>(
              <div key={x.t} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
                <h4 className="font-black">{x.t}</h4>
                <p className="text-sm text-slate-600 mt-1">{x.d}</p>
                <Link to="/contact" className="mt-4 inline-flex text-sm font-bold text-blue-600">Enquire →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
