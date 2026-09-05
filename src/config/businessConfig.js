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
  { category: "CCTV Cameras", desc: "Dome, bullet & PTZ cameras — HD to 4K with intelligent IR night vision.", image: "/image/c.png" },
  { category: "IP Cameras", desc: "PoE IP cameras with AI detection & cloud-ready NVR integration.", image: "/image/c1.png" },
  { category: "NVR / DVR Systems", desc: "4CH to 64CH recorders with H.265+ compression & remote access.", image: "/image/c2.png" },
  { category: "Networking Equipment", desc: "Switches, routers, racks & structured cabling solutions.", image: "/image/c3.png" },
  { category: "Wi-Fi Solutions", desc: "Mesh, enterprise APs & long-range outdoor wireless connectivity.", image: "/image/c4.png" },
  { category: "Video Door Phones", desc: "Wired & Wi-Fi VDP with HD display & mobile app integration.", image: "/image/c5.png" },
  { category: "Access Control", desc: "Card, PIN & QR-based door & gate access automation.", image: "/image/c6.png" },
  { category: "Biometric Systems", desc: "Fingerprint & face recognition for attendance & access control.", image: "/image/c7.png" },
  { category: "Smart Home Devices", desc: "Smart switches, sensors, locks & voice control systems.", image: "/image/c8.png" },
  { category: "Automation Systems", desc: "KNX, Zigbee & Wi-Fi based building & home automation.", image: "/image/c9.png" },
];

export const projects = [
  { title: "CCTV & Security Installation", category: "CCTV Installation", location: "Ahmedabad, Gujarat", image: "/image/d.png" },
  { title: "Security System Project", category: "Office Security", location: "SG Highway, Ahmedabad", image: "/image/d1.png" },
  { title: "Networking & Infrastructure", category: "Networking", location: "Kathwada GIDC, Ahmedabad", image: "/image/d2.png" },
  { title: "Access Control Solution", category: "Access Control", location: "South Bopal, Ahmedabad", image: "/image/d3.png" },
  { title: "Residential Security Setup", category: "CCTV Installation", location: "Prahlad Nagar, Ahmedabad", image: "/image/d4.png" },
  { title: "Automation Installation", category: "Automation", location: "Bopal, Ahmedabad", image: "/image/d5.png" },
];
