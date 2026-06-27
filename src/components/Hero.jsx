import { useState, useEffect, useRef } from 'react';
import { FolkCornerMandala } from './FolkArt';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [hovered, setHovered] = useState(null); // 'left', 'right', or null
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // Apply parallax and disc scale only if the hero section is in viewport
      if (scrolled < window.innerHeight) {
        // Heritage image (left/top) scrolls slower
        if (leftImageRef.current) {
          leftImageRef.current.style.transform = `translate3d(0, ${scrolled * 0.06}px, 0) scale(1.05)`;
        }
        // Contemporary image (right/bottom) scrolls faster
        if (rightImageRef.current) {
          rightImageRef.current.style.transform = `translate3d(0, ${scrolled * -0.06}px, 0) scale(1.03)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-offwhite grainy-bg">
      {/* ─── DESKTOP HERO (>=768px) ────────────────────────── */}
      <div className="hidden md:flex h-screen w-full relative flex-row overflow-hidden">
        {/* Left Side: Traditional Heritage (Clear Image, Dark Fallback) */}
        <div
          className={`absolute inset-0 w-full h-full md:relative md:h-screen bg-[#2B2B2B] text-charcoal flex flex-col justify-between px-6 pt-6 pb-6 md:p-16 overflow-hidden clip-left z-10 isolate transition-all duration-700 ease-in-out ${hovered === 'left' ? 'md:w-[65vw]' : hovered === 'right' ? 'md:w-[45vw]' : 'md:w-[55vw]'
            }`}
          onMouseEnter={() => setHovered('left')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Background Decorative Image - Clear & Visible */}
          <div className="absolute inset-0 z-0 transition-transform duration-1000 hover:scale-102 overflow-hidden">
            <img
              ref={leftImageRef}
              src="/images/hero_traditional.jpg"
              alt="Traditional South Indian Kitchen"
              className="w-full h-full object-cover parallax-img"
              style={{ transform: 'translate3d(0, 0, 0) scale(1.05)', objectPosition: '50% 70%' }}
            />
            {/* Subtle dark gradient overlay to ensure text contrast and legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10 md:to-transparent"></div>
          </div>

          {/* Decorative corner mandala - slow spin, cropped */}
          <FolkCornerMandala
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-20 md:opacity-25 text-warmcream pointer-events-none animate-slow-spin-cw w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[480px] md:h-[480px] z-10"
          />

          {/* Decorative corner */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-charcoal/40 pointer-events-none"></div>

          {/* Content Wrapper */}
          <div className="relative z-20 flex flex-col justify-between h-[38vh] md:h-full md:flex-1 w-full isolate">
            <div>
              <span className="text-xs sm:text-sm font-instrumentsans font-semibold tracking-[0.25em] text-[#FAF7F2] uppercase block mb-1">South Indian Richness</span>
            </div>

            <div className="my-auto max-w-[180px] xs:max-w-[200px] md:max-w-[190px] lg:max-w-[240px] xl:max-w-[280px] pt-4 md:pt-0 transition-all duration-500">
              <h3 className="font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-warmcream leading-tight">
                Rooted in Tradition
              </h3>
              <div className="w-10 h-[1.5px] bg-warmcream/60 my-2 md:my-3"></div>
              <p className="font-instrumentsans font-medium text-[11px] sm:text-sm md:text-[11px] lg:text-xs xl:text-sm text-[#FAF7F2]/90 leading-relaxed">
                Generations of family recipes perfected in our grandmother's Mysuru kitchen.
              </p>
            </div>

            {/* Traditional motif badge */}
            <div className="hidden md:block">
              <div className="border border-charcoal/20 inline-flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-sm bg-black/10">
                <span className="w-2 h-2 rounded-full bg-warmcream animate-pulse"></span>
                <span className="text-[10px] font-sans tracking-widest uppercase text-charcoal/85">Mysuru, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Modern Cafe (Clear Image, Light Fallback) */}
        <div
          className={`absolute inset-0 w-full h-full md:relative md:h-screen bg-warmcream text-darkwood flex flex-col justify-between px-6 pb-6 pt-6 md:p-16 overflow-hidden md:-ml-[10vw] z-0 isolate transition-all duration-700 ease-in-out ${hovered === 'right' ? 'md:w-[65vw]' : hovered === 'left' ? 'md:w-[45vw]' : 'md:w-[55vw]'
            }`}
          onMouseEnter={() => setHovered('right')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Background Image - Clear & Visible */}
          <div className="absolute inset-0 z-0 transition-transform duration-1000 hover:scale-102 overflow-hidden">
            <img
              ref={rightImageRef}
              src="/images/hero_modern.jpg"
              alt="Modern Cafe Fusion food"
              className="w-full h-full object-cover parallax-img"
              style={{ transform: 'translate3d(0, 0, 0) scale(1.03)', objectPosition: '50% 85%' }}
            />
            {/* Softer light gradient overlay to ensure text contrast while keeping image clear */}
            <div className="absolute inset-0 bg-gradient-to-l from-warmcream/55 via-warmcream/15 to-transparent"></div>
          </div>

          {/* Decorative corner mandala - slow spin, cropped */}
          <FolkCornerMandala
            className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-20 md:opacity-25 text-terracotta pointer-events-none animate-slow-spin-ccw w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[480px] md:h-[480px] z-10"
          />

          {/* Decorative corner */}
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-darkwood/30 pointer-events-none"></div>

          {/* Content Wrapper */}
          <div className="relative z-20 flex flex-col gap-3 md:gap-0 justify-end md:justify-between h-[40vh] mt-auto md:h-full md:flex-grow w-full items-end text-right md:pl-[10vw]">
            <div className="w-full max-w-[180px] md:max-w-none ml-auto">
              <span className="text-xs sm:text-sm font-instrumentsans font-semibold tracking-[0.25em] text-black uppercase block mb-1">Western Cafe</span>
            </div>

            <div className="max-w-[180px] xs:max-w-[200px] md:max-w-[190px] lg:max-w-[240px] xl:max-w-[280px] md:my-auto ml-auto transition-all duration-500">
              <h3 className="font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-terracotta leading-tight">
                Preserved &amp; Reimagined
              </h3>
              <div className="w-10 h-[1.5px] bg-terracotta my-2 md:my-3 ml-auto"></div>
              <p className="font-instrumentsans font-medium text-[11px] text-black leading-relaxed">
                All kinds of sandwiches and milkshakes.
              </p>
            </div>

            <div className="w-full hidden md:block">
              <span className="text-[10px] font-sans tracking-widest uppercase text-charcoal/60">ESTD. 2018</span>
            </div>
          </div>
        </div>

        {/* Centerpiece Container: Medallion and Buttons with explicit gap */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none px-4">
          <div className="flex flex-col items-center justify-center gap-[110px]">

            {/* Medallion Wrapper with z-index, hover scale, and soft glow background */}
            <div className="relative w-[35vh] h-[35vh] min-w-[220px] min-h-[220px] max-w-[320px] max-h-[320px] pointer-events-auto transition-transform duration-500 ease-out hover:scale-[1.03] select-none">

              {/* Soft radial glow underneath the medallion for maximum legibility */}
              <div className="bg-radial-glow absolute inset-[-30px] rounded-full z-0"></div>

              {/* Layer 2: Rotating outer mandala ring (Ambient, slow 40s spin) */}
              <div className="rotating-mandala absolute inset-0 w-full h-full z-10">
                <img
                  src="/images/hero_mandala.png"
                  alt="Rotating Mandala Art"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Solid cream background inside the gold ring (z-15) */}
              <div className="logo-center-bg"></div>

              {/* Layer 1: Static gold ring and text overlay */}
              <div className="absolute inset-0 w-full h-full z-20 flex items-center justify-center">
                <img
                  src="/images/hero_logo_center.png"
                  alt="INGU Cafe Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Centered CTA Buttons - Desktop Only, positioned exactly below the 110px responsive gap */}
            <div className="hidden md:flex flex-row gap-4 justify-center items-center pointer-events-auto">
              <button
                onClick={() => scrollToSection('menu')}
                className="w-full sm:w-auto px-6 py-2.5 md:px-8 md:py-3 bg-darkwood hover:bg-charcoal text-[#3A2A24] font-sans text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors duration-300 rounded-sm cursor-pointer shadow-md"
              >
                View Menu
              </button>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 cursor-pointer text-charcoal animate-pulse hidden md:flex pointer-events-auto"
          onClick={() => scrollToSection('roots')}
        >
          <span className="text-xs tracking-[0.2em] font-sans text-charcoal/60 uppercase">Scroll to discover</span>
          <ChevronDown className="w-5 h-5 text-terracotta" />
        </div>
      </div>

      {/* ─── MOBILE HERO (<768px) ─────────────────────────── */}
      <div className="relative w-full flex flex-col md:hidden overflow-hidden bg-offwhite">
        {/* SECTION 1: Traditional Heritage */}
        <div className="relative w-full h-[50vh] min-h-[380px] bg-charcoal text-offwhite overflow-hidden flex flex-col justify-between p-6 pb-24">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero_traditional.jpg"
              alt="Traditional South Indian Kitchen"
              className="w-full h-full object-cover object-[50%_70%] scale-[1.05]"
            />
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/10"></div>
          </div>

          {/* Decorative Corner Mandala */}
          <FolkCornerMandala
            className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-[0.22] text-warmcream/80 pointer-events-none animate-slow-spin-cw w-[240px] h-[240px]"
          />

          {/* Content (Top Aligned) */}
          <div className="relative z-10 flex flex-col justify-start h-full max-w-[280px] pt-2">
            <span className="text-xs font-instrumentsans font-semibold tracking-[0.25em] text-[#FAF7F2] uppercase block mb-1">
              South Indian Richness
            </span>
            <h3 className="font-serif text-xl text-warmcream leading-tight">
              Rooted in Tradition
            </h3>
            <div className="w-8 h-[1.5px] bg-warmcream/60 my-2"></div>
            <p className="font-instrumentsans font-medium text-[11px] text-[#FAF7F2]/90 leading-relaxed">
              Generations of family recipes perfected in our grandmother's Mysuru kitchen.
            </p>
          </div>

          {/* Location Pill (Bottom Left) */}
          <div className="relative z-10 self-start mt-auto">
            <div className="border border-charcoal/20 inline-flex items-center gap-2 px-3.5 py-1 rounded-full backdrop-blur-sm bg-black/20">
              <span className="w-1.5 h-1.5 rounded-full bg-warmcream animate-pulse"></span>
              <span className="text-[9px] font-sans tracking-widest uppercase text-charcoal/85">Mysuru, India</span>
            </div>
          </div>
        </div>

        {/* SECTION 2 & 3 CONTAINER */}
        <div className="relative w-full flex flex-col">
          {/* SECTION 2: Medallion overlapping mobile panel borders */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none">
            {/* Non-interactive centerpiece disc */}
            <div
              className="relative w-[150px] h-[150px] xs:w-[170px] xs:h-[170px] pointer-events-auto"
            >
              {/* Soft radial glow underneath the medallion for maximum legibility */}
              <div className="bg-radial-glow absolute inset-[-20px] rounded-full z-0"></div>

              {/* Layer 2: Rotating outer mandala ring (Ambient, slow 40s spin) */}
              <div className="rotating-mandala absolute inset-0 w-full h-full z-10">
                <img
                  src="/images/hero_mandala.png"
                  alt="Rotating Mandala Art"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Solid cream background inside the gold ring (z-15) */}
              <div className="logo-center-bg"></div>

              {/* Layer 1: Static gold ring and text overlay */}
              <div className="absolute inset-0 w-full h-full z-20 flex items-center justify-center">
                <img
                  src="/images/hero_logo_center.png"
                  alt="INGU Cafe Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: Contemporary Cafe */}
          <div className="relative w-full min-h-[380px] bg-warmcream text-darkwood overflow-hidden flex flex-col justify-end p-6 pt-28 pb-6">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/hero_modern.jpg"
                alt="Modern Cafe Fusion food"
                className="w-full h-full object-cover object-[50%_85%]"
              />
              {/* Softer light gradient overlay for legibility and image clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-warmcream/30 via-warmcream/5 to-transparent"></div>
            </div>

            {/* Decorative Corner Mandala */}
            <FolkCornerMandala
              className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-[0.20] text-terracotta pointer-events-none animate-slow-spin-ccw w-[240px] h-[240px]"
            />

            {/* Content (Bottom Aligned, Right Aligned) */}
            <div className="relative z-10 flex flex-col items-end text-right ml-auto max-w-[280px] mb-4 pt-2">
              <span className="text-xs font-instrumentsans font-semibold tracking-[0.25em] text-black uppercase block mb-1">
                Western Cafe
              </span>
              <h3 className="font-serif text-xl text-terracotta leading-tight">
                Preserved & Reimagined
              </h3>
              <div className="w-8 h-[1.5px] bg-terracotta my-2"></div>
              <p className="font-instrumentsans font-medium text-[11px] text-black leading-relaxed">
                All kinds of sandwiches and milkshakes.
              </p>
            </div>

            {/* Buttons (Stack Vertically, Full Width, 44px+ targets) */}
            <div className="relative z-20 flex flex-col gap-2 w-full max-w-sm mx-auto pb-2">
              <button
                onClick={() => scrollToSection('menu')}
                className="w-full flex items-center justify-center bg-terracotta hover:bg-darkwood text-charcoal font-sans text-xs font-bold tracking-wider uppercase transition-colors duration-300 rounded-sm cursor-pointer shadow-md"
                style={{ height: '46px' }}
              >
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
