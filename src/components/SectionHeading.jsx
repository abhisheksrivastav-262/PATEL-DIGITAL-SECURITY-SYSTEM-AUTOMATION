export default function SectionHeading({ eyebrow, title, desc, light=false, centered=true }) {
  return (
    <div className={`${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} `}>
      {eyebrow && <p className="text-[11px] tracking-[0.2em] font-bold uppercase text-blue-400 mb-3">{eyebrow}</p>}
      <h2 className={`text-[28px] lg:text-[42px] font-black leading-[0.95] tracking-[-0.02em] ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {desc && <p className={`mt-4 text-[15px] leading-relaxed ${light ? 'text-slate-400' : 'text-slate-400'}`}>{desc}</p>}
    </div>
  )
}
