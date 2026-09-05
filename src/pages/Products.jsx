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
            <div key={p.category} className="rounded-2xl overflow-hidden bg-white border border-slate-200 group">
              <div className="h-[180px] bg-slate-100 overflow-hidden">
                <img src={p.image} alt={p.category} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-5">
                <h3 className="font-black text-[#060A14]">{p.category}</h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed min-h-[40px]">{p.desc}</p>
                <Link to="/contact" className="mt-4 inline-flex px-5 py-2 rounded-full bg-[#060A14] text-white text-sm font-bold hover:bg-black">Enquire Now</Link>
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
