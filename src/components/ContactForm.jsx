import { useState } from 'react'
import { getWhatsAppLink } from '../config/businessConfig'

export default function ContactForm({ defaultService = '' }) {
  const [form, setForm] = useState({ name:'', phone:'', email:'', service: defaultService, location:'', message:'' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || form.phone.replace(/\D/g,'').length < 10) e.phone = 'Valid phone required'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim() && !form.service) e.message = 'Please describe requirement'
    setErrors(e)
    return Object.keys(e).length===0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    const link = getWhatsAppLink(form)
    window.open(link, '_blank')
    setSent(true)
    setTimeout(()=>setSent(false), 4000)
  }

  const inputCls = "w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] text-sm"

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input className={inputCls + (errors.name?' border-red-500':'')} placeholder="Full Name *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
        </div>
        <div>
          <input className={inputCls + (errors.phone?' border-red-500':'')} placeholder="Phone Number *" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
          {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input className={inputCls + (errors.email?' border-red-500':'')} placeholder="Email (optional)" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
        </div>
        <select className={inputCls} value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
          <option value="" className="bg-[#0A1020]">Service Required</option>
          <option className="bg-[#0A1020]">CCTV Camera Installation</option>
          <option className="bg-[#0A1020]">IP Camera & NVR</option>
          <option className="bg-[#0A1020]">Networking & Wi-Fi</option>
          <option className="bg-[#0A1020]">Video Door Phone</option>
          <option className="bg-[#0A1020]">Access Control / Biometric</option>
          <option className="bg-[#0A1020]">Home / Office Automation</option>
          <option className="bg-[#0A1020]">AMC & Maintenance</option>
          <option className="bg-[#0A1020]">Other / Custom</option>
        </select>
      </div>

      <input className={inputCls} placeholder="Location (e.g. Kathwada, Ahmedabad)" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} />

      <div>
        <textarea rows={4} className={inputCls + " resize-none" + (errors.message?' border-red-500':'')} placeholder="Describe your requirement..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
      </div>

      <button type="submit" className="w-full py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition shadow-[0_0_24px_rgba(37,99,235,0.35)]">
        {sent ? '✓ Opening WhatsApp…' : 'Send Enquiry via WhatsApp →'}
      </button>
      {sent && <p className="text-center text-xs text-emerald-400">Redirecting to WhatsApp with your details. Please tap Send.</p>}
      <p className="text-center text-[11px] text-slate-500">By submitting, you agree to be contacted via Call/WhatsApp.</p>
    </form>
  )
}
