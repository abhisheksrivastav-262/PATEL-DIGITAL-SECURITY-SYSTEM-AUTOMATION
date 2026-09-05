import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { businessConfig, isPlaceholder } from '../config/businessConfig'

export default function Contact() {
  return (
    <div className="bg-[#060A14] pt-[68px] lg:pt-[76px]">
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <SectionHeading eyebrow="Contact Us" title="Let’s secure & automate your space" desc="Tell us your requirement — we’ll respond quickly via Call & WhatsApp. Serving Ahmedabad → Entire Gujarat." />

        <div className="mt-10 grid lg:grid-cols-5 gap-8">
          {/* info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-6">
              <h3 className="text-white font-black">{businessConfig.name}</h3>
              <p className="text-blue-400 text-xs tracking-widest font-bold uppercase mt-1">{businessConfig.tagline}</p>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex gap-3"><span className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shrink-0"><MapPin className="w-4 h-4 text-white"/></span><div><div className="text-white font-semibold">Location</div><div className="text-slate-400">{businessConfig.location.full}</div><div className="text-slate-500 text-xs">Service: {businessConfig.location.serviceArea}</div></div></div>
                <div className="flex gap-3"><span className="w-9 h-9 rounded-xl bg-white text-[#060A14] flex items-center justify-center shrink-0"><Phone className="w-4 h-4"/></span><div><div className="text-white font-semibold">Phone</div><div className="text-slate-300">{businessConfig.contact.phone}</div>{isPlaceholder(businessConfig.contact.phone) && <div className="text-amber-300 text-xs">Placeholder — replace with real number</div>}</div></div>
                <div className="flex gap-3"><span className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0"><MessageCircle className="w-4 h-4 text-white"/></span><div><div className="text-white font-semibold">WhatsApp</div><div className="text-slate-300">{businessConfig.contact.whatsapp}</div></div></div>
                <div className="flex gap-3"><span className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0"><Mail className="w-4 h-4 text-white"/></span><div><div className="text-white font-semibold">Email</div><div className="text-slate-300">{businessConfig.contact.email}</div></div></div>
                <div className="flex gap-3"><span className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0"><Clock className="w-4 h-4 text-white"/></span><div><div className="text-white font-semibold">Business Hours</div><div className="text-slate-300">{businessConfig.contact.hours}</div></div></div>
              </div>
            </div>

            {/* map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[300px] bg-[#0A1020]">
              <iframe title="map" src={businessConfig.location.mapEmbed} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* form */}
          <div className="lg:col-span-3 rounded-[24px] bg-white/[0.04] border border-white/[0.07] p-6 lg:p-8">
            <h3 className="text-white font-black text-xl">Send an Enquiry</h3>
            <p className="text-slate-400 text-sm mt-1">Form submits to WhatsApp with pre-filled details.</p>
            <div className="mt-6">
              <ContactForm />
            </div>

            {/* FAQ mini */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-white font-bold text-sm">FAQs</h4>
              <div className="mt-3 space-y-3 text-sm">
                <details className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                  <summary className="font-semibold text-white cursor-pointer">How soon can you visit the site?</summary>
                  <p className="text-slate-400 mt-2">Typically within 24–48 hours in Ahmedabad. Gujarat-wide visits scheduled quickly.</p>
                </details>
                <details className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                  <summary className="font-semibold text-white cursor-pointer">Do you provide AMC?</summary>
                  <p className="text-slate-400 mt-2">Yes — comprehensive annual maintenance with preventive checks and priority support.</p>
                </details>
                <details className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                  <summary className="font-semibold text-white cursor-pointer">Which brands do you deal in?</summary>
                  <p className="text-slate-400 mt-2">We recommend based on site & budget. Share your requirement for a tailored BOQ.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
