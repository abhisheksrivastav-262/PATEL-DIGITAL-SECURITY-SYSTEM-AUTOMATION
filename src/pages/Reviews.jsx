import SectionHeading from '../components/SectionHeading'
import { Star, Quote } from 'lucide-react'

export default function Reviews() {
  return (
    <div className="bg-[#060A14] pt-[68px] lg:pt-[76px]">
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <SectionHeading eyebrow="Customer Reviews" title="Trusted by homes & businesses across Gujarat" desc="Placeholder review cards below — replace with real Google reviews when available. No fake names are presented as real." />
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/20 text-amber-300 text-xs font-bold">★ Replace with real reviews — do not publish placeholders as real testimonials</div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { name:'[Customer Name]', company:'[Business / Society]', text:'Sample testimonial — Patel Digital installed our office CCTV and networking. Professional team, neat work and quick support. Highly recommended.', rating:5 },
            { name:'[Customer Name]', company:'[Residential Client]', text:'Sample — Smart home automation works flawlessly. App control is smooth and the after-sales service is excellent.', rating:5 },
            { name:'[Customer Name]', company:'[Warehouse Client]', text:'Sample — From site survey to final handover, everything was transparent and on time. AMC support is very responsive.', rating:5 },
            { name:'[Customer Name]', company:'[Retail Chain]', text:'Sample — Multi-store CCTV rollout completed across Gujarat. Central monitoring is now effortless.', rating:5 },
            { name:'[Customer Name]', company:'[Society Client]', text:'Sample — Access control and video door phone installation was clean and well-explained. Great experience.', rating:5 },
            { name:'[Customer Name]', company:'[Office Client]', text:'Sample — Networking and Wi-Fi performance improved drastically after Patel Digital’s restructuring.', rating:5 },
          ].map((r,i)=>(
            <div key={i} className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-6 relative">
              <Quote className="w-6 h-6 text-blue-400/50 absolute top-5 right-5" />
              <div className="flex gap-1">
                {Array.from({length:r.rating}).map((_,j)=><Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400"/>)}
              </div>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">“{r.text}”</p>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <div className="text-white font-bold text-sm">{r.name}</div>
                <div className="text-slate-500 text-xs">{r.company}</div>
              </div>
              <span className="mt-3 inline-block text-[10px] tracking-widest font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-full">PLACEHOLDER</span>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-black text-[#060A14]">Have you worked with us?</h4>
            <p className="text-sm text-slate-600">We’d love your Google review — it helps others choose with confidence.</p>
          </div>
          <a href="#" className="px-6 py-3 rounded-full bg-[#060A14] text-white font-bold text-sm">Leave a Review</a>
        </div>
      </section>
    </div>
  )
}
