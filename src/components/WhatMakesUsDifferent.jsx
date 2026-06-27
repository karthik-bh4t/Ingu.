import { FolkDivider, FolkCorner } from './FolkArt';

export default function WhatMakesUsDifferent() {
  const pillars = [
    {
      num: "01",
      title: "Family Heritage",
      desc: "Recipes rooted in generations of tradition.",
      icon: (className) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      num: "02",
      title: "South Indian Fusion",
      desc: "Classic flavours reimagined for modern tastes.",
      icon: (className) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v3" />
          <path d="M8 2v3" />
          <path d="M16 2v3" />
          <path d="M3 11h18a1 1 0 0 1 1 1c0 4.42-3.58 8-8 8h-4c-4.42 0-8-3.58-8-8a1 1 0 0 1 1-1z" />
        </svg>
      )
    },
    {
      num: "03",
      title: "For Every Generation",
      desc: "A place for children, families, students and friends.",
      icon: (className) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <circle cx="6" cy="11" r="3" />
          <path d="M2 21v-1a3 3 0 0 1 3-3h1" />
          <circle cx="18" cy="11" r="3" />
          <path d="M18 17h1a3 3 0 0 1 3 3v1" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Warm Hospitality",
      desc: "Everyone is welcome at our table.",
      icon: (className) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 18s-5-3.5-5-6a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0c0 2.5-5 6-5 6z" />
          <path d="M2 13c3 1 5 3 6 5.5" />
          <path d="M22 13c-3 1-5 3-6 5.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="different" className="w-full bg-chocolate py-24 md:py-32 px-6 md:px-16 relative overflow-hidden grainy-bg">
      {/* 70% Static Ornaments (No movement, pure decorative architecture) */}
      <div className="absolute top-8 left-8 text-terracotta/25 pointer-events-none z-0">
        <FolkCorner className="w-14 h-14" position="top-left" />
      </div>

      <div className="absolute top-8 right-8 text-terracotta/25 pointer-events-none z-0">
        <FolkCorner className="w-14 h-14" position="top-right" />
      </div>

      <div className="absolute bottom-8 left-8 text-terracotta/25 pointer-events-none z-0">
        <FolkCorner className="w-14 h-14" position="bottom-left" />
      </div>

      <div className="absolute bottom-8 right-8 text-terracotta/25 pointer-events-none z-0">
        <FolkCorner className="w-14 h-14" position="bottom-right" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 scroll-reveal">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.45em] text-terracotta uppercase font-bold block mb-2">
            Our Pillars
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-darkwood font-semibold mt-2 mb-1">
            What Makes Us Different
          </h2>
          <FolkDivider className="my-5 max-w-xl mx-auto" />
        </div>

        {/* ─── DESKTOP LAYOUT (Visible only on screens >= 1024px) ─── */}
        <div className="hidden lg:grid grid-cols-4 gap-x-8 gap-y-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col text-left space-y-6 scroll-reveal">
              {/* Giant elegant number */}
              <span className="font-serif text-5xl md:text-6xl text-terracotta/25 font-bold block border-b border-terracotta/15 pb-2">
                {pillar.num}
              </span>

              {/* Content */}
              <div className="space-y-2.5">
                <h3 className="font-serif text-lg md:text-xl text-darkwood font-bold tracking-wide">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-charcoal/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── MOBILE & TABLET LAYOUT (Visible on screens < 1024px) ─── */}
        <div className="grid grid-cols-2 lg:hidden gap-4">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative bg-offwhite border border-terracotta/15 rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.02)] overflow-hidden scroll-reveal flex flex-col justify-between h-full"
            >
              {/* Corner decorative frame (top-right) */}
              <div className="absolute top-2.5 right-2.5 text-darkwood/20 pointer-events-none">
                <FolkCorner className="w-5 h-5" position="top-right" />
              </div>

              {/* Card Content */}
              <div className="flex flex-col space-y-2.5">
                {/* Number */}
                <span className="font-serif text-2xl sm:text-3xl text-darkwood/50 font-semibold block">
                  {pillar.num}
                </span>

                {/* Subtle Divider Ornament */}
                <div className="flex items-center gap-1 opacity-35 my-0.5">
                  <span className="h-[1px] w-5 bg-darkwood/30"></span>
                  <span className="w-1 h-1 rotate-45 bg-darkwood/30"></span>
                  <span className="h-[1px] w-5 bg-darkwood/30"></span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-sm sm:text-base text-darkwood font-bold tracking-wide">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[11px] sm:text-xs text-charcoal/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom-left Icon ornament */}
              <div className="pt-4 text-left">
                {pillar.icon("w-7 h-7 text-darkwood/60")}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
