import { CheckCircle2, Wrench, Shield, Cpu, Headset, MapPin, Layers, BadgeCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { businessConfig } from '../config/businessConfig'
import { Link } from 'react-router-dom'

export default function WhyUs() {
  const points = [
    { icon: Wrench, n:'01', t:'Professional Installation', d:'Levelled cameras, concealed wiring, labelled racks & tested handover — workmanship that lasts.'},
    { icon: Layers, n:'02', t:'Customized Solutions', d:'Every site is different. We design around your layout, goals & budget — no forced packages.'},
    { icon: Cpu, n:'03', t:'Modern Technology', d:'HD/4K, IP, AI analytics, cloud & mobile — future-ready platforms, not outdated stock.'},
    { icon: Headset, n:'04', t:'Reliable Support', d:'On-call assistance, remote troubleshooting & priority AMC visits across Gujarat.'},
    { icon: Shield, n:'05', t:'Security-Focused', d:'Privacy-first setup, secure remote access & data protection best practices.'},
    { icon: BadgeCheck, n:'06', t:'AMC & Maintenance', d:'Preventive checks, cleaning, firmware updates & rapid replacements.'},
    { icon: MapPin, n:'07', t:'Ahmedabad → Gujarat', d:`Headquartered at ${businessConfig.location.area}, serving entire Gujarat with local speed.`},
    { icon: Layers, n:'08', t:'Integrated Expertise', d:'Security + Networking + Automation — one partner for everything, no coordination headaches.'},
  ]

  return (
    <div className="bg-[#060A14] pt-[68px] lg:pt-[76px]">
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <SectionHeading eyebrow="Why Choose Us" title="WHY PATEL DIGITAL SECURITY SYSTEM & AUTOMATION?" desc="Eight reasons clients trust us for their most critical asset — safety." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(p=>(
            <div key={p.n} className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-6 hover:border-blue-500/30 transition">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center"><p.icon className="w-5 h-5 text-white"/></div>
                <span className="text-2xl font-black text-white/10">{p.n}</span>
              </div>
              <h3 className="mt-4 text-white font-black leading-tight">{p.t}</h3>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white text-[#060A14]">
        <div className="max-w-[1280px] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-black leading-tight">Integrated Security + Networking + Automation</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">Most vendors do one thing. We bring three disciplines together — so your CCTV, network, access and automation work as one system, not four disconnected ones.</p>
            <ul className="mt-6 space-y-2">
              {['Single point of responsibility','Coordinated design & execution','Lower total cost & faster turnaround','One AMC for everything'].map(x=> <li key={x} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-600"/>{x}</li>)}
            </ul>
            <Link to="/contact" className="mt-6 inline-flex px-7 py-3 rounded-full bg-[#060A14] text-white font-bold">Consult Our Team</Link>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80" alt="team" className="w-full h-[380px] object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
