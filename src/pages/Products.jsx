import SectionHeading from '../components/SectionHeading'
import { products } from '../config/businessConfig'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div className="bg-[#060A14] pt-[68px] lg:pt-[76px]">
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <SectionHeading eyebrow="Products & Solutions" title="Professional-grade products — curated for performance" desc="Generic categories shown below. Exact brands/models supplied on enquiry — we recommend the best fit for your site & budget. No fake model claims." />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(p=>(
            <div key={p.category} className="rounded-2xl overflow-hidden bg-[#0D1628] border border-white/[0.07] group hover:border-blue-500/30 hover:shadow-[0_0_24px_rgba(37,99,235,0.12)] transition-all duration-300">
              <div className="h-[200px] bg-[#0A1020] overflow-hidden flex items-center justify-center p-4">
                <img src={p.image} alt={p.category} className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5 border-t border-white/[0.05]">
                <h3 className="font-black text-white text-[15px]">{p.category}</h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed min-h-[40px]">{p.desc}</p>
                <Link to="/contact" className="mt-4 inline-flex px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition">Enquire Now</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-white font-black">Need a tailored BOQ?</h4>
            <p className="text-slate-400 text-sm">Tell us your site size, camera count & features — we’ll share a professional quotation via WhatsApp.</p>
          </div>
          <Link to="/contact" className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold shrink-0">Get Free Quote</Link>
        </div>
      </section>
    </div>
  )
}
