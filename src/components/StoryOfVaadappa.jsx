import { DosaVadaMotif, FolkDivider, FolkCornerMandala, FolkCorner } from './FolkArt';
import Noise from '@/components/core/Noise';

export default function StoryOfVaadappa() {
  return (
    <section id="vaadappa-story" className="w-full bg-offwhite py-24 md:py-32 px-6 md:px-16 relative overflow-hidden">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={3}
        patternAlpha={10}
      />
      {/* 20% Rotating Mandalas (Scaled proportionally on mobile) */}
      <div className="absolute top-12 right-0 translate-x-1/2 opacity-[0.07] md:opacity-[0.12] text-darkwood w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] animate-slow-spin-ccw pointer-events-none z-0">
        <FolkCornerMandala className="w-full h-full" />
      </div>

      {/* Left-bottom rotating mandala */}
      <div className="absolute left-0 bottom-0 -translate-x-1/4 translate-y-1/4 opacity-[0.07] md:opacity-[0.12] text-terracotta w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] animate-slow-spin-cw pointer-events-none z-0">
        <FolkCornerMandala className="w-full h-full" />
      </div>

      <div className="absolute top-8 left-8 text-terracotta/25 pointer-events-none z-0">
        <FolkCorner className="w-14 h-14" position="top-left" />
      </div>

      <div className="absolute bottom-8 right-8 text-terracotta/25 pointer-events-none z-0">
        <FolkCorner className="w-14 h-14" position="bottom-right" />
      </div>

      {/* Subtle background motif */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-[0.04] md:opacity-[0.06] text-terracotta pointer-events-none w-52 h-52 sm:w-72 sm:h-72">
        <DosaVadaMotif className="w-full h-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16 scroll-reveal">
          <div className="flex justify-center mb-3 text-terracotta/60">
            <DosaVadaMotif className="w-12 h-12" />
          </div>
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.45em] text-terracotta uppercase font-bold block mb-2">
            Signature Creation
          </span>
          <h2 className="font-ebgaramond text-3xl sm:text-4xl md:text-5xl text-darkwood font-semibold mt-2 mb-1">
            The Story Of Vaadappa
          </h2>
          <FolkDivider className="my-4 max-w-lg mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Content (take 6 columns) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left order-2 lg:order-1 scroll-reveal">
            <h3 className="font-ebgaramond text-2xl sm:text-3xl text-darkwood font-bold italic leading-snug">
              Vaadappa is more than a dish.<br />It is a memory.
            </h3>
            
            <p className="font-manrope text-sm sm:text-base text-charcoal/75 leading-relaxed">
              A recipe carried through generations, served with pride and reintroduced for a new generation. Originating in grandmother Radha's kitchen, this recipe represents the soul of our heritage.
            </p>

            <div className="border-l-2 border-terracotta/35 pl-4 py-2 italic font-ebgaramond text-sm sm:text-base text-darkwood">
              "We took the traditional rice-flour fritter of Karnataka, spiced it with grandmother's secret pudis, and turned it into the defining taste of our café."
            </div>

            <p className="font-manrope text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              Every crispy bite, seasoned with roasted cumin and aromatic curry leaves, carries the warmth of the wood-fired kitchens where it first began.
            </p>
          </div>

          {/* Right: Large Hero Image of Vaadappa (take 6 columns) */}
          <div className="lg:col-span-6 order-1 lg:order-2 scroll-reveal">
            <div className="relative p-2 bg-offwhite border border-terracotta/25 shadow-[0_12px_40px_rgba(58,42,36,0.08)] rounded-2xl lg:rounded-none overflow-hidden">
              <img 
                src="/images/podi_vada.png" 
                alt="INGU Signature Vaadappa dish" 
                className="w-full h-[280px] sm:h-[400px] object-cover object-[50%_75%] rounded-xl lg:rounded-none"
              />
              {/* Overlay corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-terracotta/30 pointer-events-none rounded-tl-lg lg:rounded-none"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-terracotta/30 pointer-events-none rounded-br-lg lg:rounded-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
