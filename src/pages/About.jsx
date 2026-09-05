import { Shield, Target, Eye, Heart, Award, Users, Wrench, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { businessConfig } from '../config/businessConfig'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="bg-[#060A14] pt-[68px] lg:pt-[76px]">
      {/* header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="office" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060A14] via-[#060A14]/80 to-[#060A14]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
          <p className="text-[11px] tracking-[0.2em] font-bold uppercase text-blue-400">About Us</p>
          <h1 className="mt-3 text-[36px] lg:text-[56px] font-black leading-[0.9] tracking-[-0.02em] text-white">Technology.<br/><span className="text-blue-400">Security.</span> Reliability.</h1>
          <p className="mt-6 max-w-3xl text-slate-300 leading-relaxed">
            <span className="text-white font-semibold">{businessConfig.name}</span> — based in {businessConfig.location.full} — delivers integrated security, surveillance, networking, automation and digital technology solutions. We serve homes, offices, retail, warehouses and enterprises across <span className="text-white">Ahmedabad and Gujarat</span> with quality installation, reliable technology and long-term maintenance.
          </p>
        </div>
      </section>

      {/* intro grid */}
      <section className="max-w-[1280px] mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight">Professional security & automation, without compromise</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">We began with a simple belief: every home and business deserves visibility, control and peace of mind. From a single CCTV to a 64-channel IP ecosystem, from a small office Wi-Fi to a multi-building network, we design and deliver with the same attention to detail.</p>
          <ul className="mt-6 space-y-3">
            {['Quality installation & neat cabling','Genuine products & warranty support','Custom solutions for every budget','AMC & priority after-sales service','Customer satisfaction at the core'].map(x=> <li key={x} className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0"/>{x}</li>)}
          </ul>
          <Link to="/contact" className="mt-8 inline-flex px-7 py-3 rounded-full bg-blue-600 text-white font-bold">Talk to an Expert →</Link>
        </div>
        <div className="rounded-[24px] overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80" alt="Technician" className="w-full h-[420px] object-cover" />
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title:'Our Mission', desc:'Make advanced security & automation accessible, reliable and human-friendly for every home and business in Gujarat.'},
            { icon: Eye, title:'Our Vision', desc:'Be Gujarat’s most trusted security technology partner — known for integrity, innovation and service excellence.'},
            { icon: Heart, title:'Our Values', desc:'Honesty, quality, punctuality, transparency and a relentless focus on customer satisfaction.'},
          ].map(c=>(
            <div key={c.title} className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center"><c.icon className="w-6 h-6 text-white"/></div>
              <h3 className="mt-4 text-white font-black text-lg">{c.title}</h3>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* approach */}
      <section className="bg-white text-[#060A14]">
        <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
          <SectionHeading eyebrow="How we work" title="A professional approach, from survey to support" desc="Every project is documented, tested and handed over with training." light={false} />
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              { t:'Consult & Survey', d:'On-site assessment, coverage planning & BOQ.'},
              { t:'Design & Quote', d:'Transparent proposal with product options.'},
              { t:'Install & Test', d:'Professional installation & system testing.'},
              { t:'Train & Support', d:'User training + AMC & priority care.'},
            ].map(x=>(
              <div key={x.t} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
                <div className="w-10 h-10 rounded-xl bg-[#060A14] text-white flex items-center justify-center font-black">{x.t[0]}</div>
                <h4 className="mt-3 font-black">{x.t}</h4>
                <p className="mt-1 text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#060A14] text-white p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black">Coverage: {businessConfig.location.serviceArea}</h3>
              <p className="text-slate-400 text-sm mt-1">Headquartered at Kathwada, Ahmedabad — serving residential, commercial & industrial clients across Gujarat.</p>
            </div>
            <Link to="/contact" className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold shrink-0">Request Site Visit</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
