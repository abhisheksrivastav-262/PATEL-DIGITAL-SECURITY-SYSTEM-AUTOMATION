import { Phone, MessageCircle } from 'lucide-react'
import { businessConfig, isPlaceholder } from '../config/businessConfig'

export default function FloatingButtons() {
  const phone = businessConfig.contact.phone
  const wa = businessConfig.contact.whatsapp

  const waHref = isPlaceholder(wa) ? '/contact' : `https://wa.me/${wa.replace(/\D/g,'')}?text=${encodeURIComponent('Hello Patel Digital Security System & Automation, I would like to enquire about your services.')}`

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={waHref}
        target={isPlaceholder(wa) ? '_self' : '_blank'}
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
      {/* Call */}
      <a
        href={isPlaceholder(phone) ? '/contact' : `tel:${phone.replace(/\s/g,'')}`}
        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:scale-105 transition"
        aria-label="Call"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  )
}
