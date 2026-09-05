// CENTRAL BUSINESS CONFIG — update here to propagate across entire site
export const businessConfig = {
  name: "PATEL DIGITAL SECURITY SYSTEM & AUTOMATION",
  shortName: "PATEL DIGITAL",
  tagline: "Security Systems • CCTV • Networking • Automation • Digital Solutions",
  location: {
    area: "Kathwada",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    full: "Kathwada, Ahmedabad, Gujarat, India",
    serviceArea: "Ahmedabad → Entire Gujarat",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.68!3d23.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e800000000001%3A0x0!2sKathwada%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  contact: {
    phone: "[PHONE NUMBER]", // e.g. +91 98765 43210
    whatsapp: "[WHATSAPP NUMBER]", // e.g. 919876543210 — without + or spaces
    email: "[EMAIL]",
    hours: "[BUSINESS HOURS] e.g. Mon–Sat: 9:00 AM – 8:00 PM",
  },
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    googleBusiness: "",
  },
  logo: {
    text: "PATEL DIGITAL",
    subtext: "SECURITY SYSTEM & AUTOMATION",
    // replace with path e.g. "/assets/logo.png" when available
    image: null,
  },
  seo: {
    title: "PATEL DIGITAL SECURITY SYSTEM & AUTOMATION | CCTV, Security & Automation Ahmedabad",
    description: "Professional CCTV, security systems, networking, access control, automation and digital solutions in Ahmedabad and across Gujarat.",
    keywords: "CCTV installation Ahmedabad, CCTV camera service Ahmedabad, security system Ahmedabad, IP camera Ahmedabad, NVR solutions Ahmedabad, networking solutions Ahmedabad, WiFi solutions Ahmedabad, access control Ahmedabad, biometric system Ahmedabad, home automation Ahmedabad",
    ogImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&q=80",
  }
};

// Detect if placeholder still active
export const isPlaceholder = (val) => !val || val.startsWith("[") || val === "";

export const getWhatsAppLink = ({ name, phone, email, service, location, message }) => {
  const waNumber = businessConfig.contact.whatsapp;
  // fallback to phone if whatsapp not set yet
  const number = isPlaceholder(waNumber) ? "919999999999" : waNumber.replace(/\D/g, "");
  const text = `Hello ${businessConfig.name},\n\nI would like to enquire about your services.\n\nName: ${name || "-"}\nPhone: ${phone || "-"}\nEmail: ${email || "-"}\nService: ${service || "-"}\nLocation: ${location || "-"}\nMessage: ${message || "-"}\n\nPlease contact me regarding my requirement.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

export const services = [
  { id: "cctv", title: "CCTV Camera Installation & Service", desc: "Professional HD/4K surveillance with indoor, outdoor & night-vision coverage.", icon: "cctv" },
  { id: "ipcam", title: "IP Camera & NVR Solutions", desc: "Next-gen IP surveillance with remote monitoring & intelligent NVR recording.", icon: "ipcam" },
  { id: "networking", title: "Networking & Wi-Fi Solutions", desc: "Enterprise-grade structured networking & high-speed Wi-Fi infrastructure.", icon: "networking" },
  { id: "vdphone", title: "Video Door Phone", desc: "Secure visitor verification with HD video, intercom & mobile integration.", icon: "vdphone" },
  { id: "access", title: "Access Control & Biometric", desc: "Fingerprint, face & card-based access control for offices & societies.", icon: "access" },
  { id: "automation", title: "Home & Office Automation", desc: "Smart lighting, curtains, climate & scene automation for modern spaces.", icon: "automation" },
  { id: "smarthome", title: "Smart Home Solutions", desc: "Unified smart home ecosystem — control everything from your phone.", icon: "smarthome" },
  { id: "amc", title: "Security System AMC & Maintenance", desc: "Annual maintenance contracts with priority support & preventive care.", icon: "amc" },
  { id: "ai", title: "AI & Digital Business Solutions", desc: "AI analytics, ANPR, people-counting & digital transformation services.", icon: "ai" },
  { id: "custom", title: "Customized Security Solutions", desc: "Tailored end-to-end security & automation for every scale & budget.", icon: "custom" },
];

export const products = [
  { category: "CCTV Cameras", desc: "Dome, bullet & PTZ cameras — HD to 4K with intelligent IR.", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80" },
  { category: "IP Cameras", desc: "PoE IP cameras with AI detection & cloud-ready NVR.", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80" },
  { category: "NVR / DVR Systems", desc: "4CH to 64CH recorders with H.265+ & remote access.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" },
  { category: "Networking Equipment", desc: "Switches, routers, racks & structured cabling solutions.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80" },
  { category: "Wi-Fi Solutions", desc: "Mesh, enterprise APs & long-range outdoor wireless.", image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&q=80" },
  { category: "Video Door Phones", desc: "Wired & Wi-Fi VDP with mobile app integration.", image: "https://images.unsplash.com/photo-1558000143-a42f1ea4d0d3?w=600&q=80" },
  { category: "Access Control", desc: "Card, PIN & QR-based door & gate automation.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { category: "Biometric Systems", desc: "Fingerprint & face recognition attendance & access.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80" },
  { category: "Smart Home Devices", desc: "Smart switches, sensors, locks & voice control.", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80" },
  { category: "Automation Systems", desc: "KNX, Zigbee & Wi-Fi based building automation.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
];

export const projects = [
  { title: "Corporate Office Surveillance", category: "CCTV Installation", location: "SG Highway, Ahmedabad", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  { title: "Luxury Villa Smart Home", category: "Automation", location: "Bopal, Ahmedabad", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { title: "Warehouse Networking Infra", category: "Networking", location: "Kathwada GIDC", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
  { title: "Society Access Control", category: "Access Control", location: "South Bopal", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { title: "Retail Chain CCTV Rollout", category: "CCTV Installation", location: "Gujarat – 12 Stores", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80" },
  { title: "3BHK Home Automation", category: "Smart Home", location: "Prahlad Nagar", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80" },
];
