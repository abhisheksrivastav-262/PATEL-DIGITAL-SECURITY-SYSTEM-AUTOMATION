import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../config/businessConfig'

export default function Projects() {
  const cats = ['All', ...new Set(projects.map(p=>p.category))]
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const filtered = active==='All' ? projects : projects.filter(p=>p.category===active)

  return (
    <div className="bg-[#060A14] pt-[68px] lg:pt-[76px]">
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <SectionHeading eyebrow="Projects & Work Gallery" title="Real work. Real sites. Real protection." desc="Selected installations across Ahmedabad & Gujarat. Replace placeholders with actual business photos when available." />

        <div className="mt-8 flex flex-wrap gap-2">
          {cats.map(c=>(
            <button key={c} onClick={()=>setActive(c)} className={`px-5 py-2 rounded-full text-sm font-bold border transition ${active===c ? 'bg-blue-600 text-white border-blue-600' : 'bg-white/[0.06] text-slate-300 border-white/10 hover:bg-white/[0.1]'}`}>{c}</button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i)=>(
            <button key={i} onClick={()=>setLightbox(p)} className="group text-left rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.07] hover:border-blue-500/30 transition">
              <div className="h-[220px] overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#060A14]/80 backdrop-blur border border-white/10 text-white text-xs font-bold">{p.category}</span>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold leading-tight">{p.title}</h3>
                <p className="text-slate-400 text-xs mt-1">{p.location}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">Images are high-quality placeholders. Replace with your actual project photos in <code className="text-slate-300">/assets/images/projects/</code>.</p>
      </section>

      {lightbox && (
        <div onClick={()=>setLightbox(null)} className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4">
          <div className="max-w-3xl w-full rounded-2xl overflow-hidden bg-[#0A1020] border border-white/10" onClick={e=>e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} className="w-full h-auto max-h-[70vh] object-contain bg-black" />
            <div className="p-5 flex items-center justify-between">
              <div><h3 className="text-white font-bold">{lightbox.title}</h3><p className="text-slate-400 text-sm">{lightbox.location} • {lightbox.category}</p></div>
              <button onClick={()=>setLightbox(null)} className="px-5 py-2 rounded-full bg-white text-[#060A14] font-bold text-sm">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
