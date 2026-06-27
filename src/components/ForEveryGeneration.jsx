import { FolkFoodMandala, FolkCorner } from './FolkArt';

export default function ForEveryGeneration() {
  return (
    <section className="w-full relative py-20 sm:py-28 md:py-36 px-6 text-center overflow-hidden bg-gradient-to-br from-terracotta to-[#994732] text-charcoal">

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] md:opacity-[0.10] text-warmcream pointer-events-none w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[650px] md:h-[650px] animate-slow-spin-cw z-0">
        <FolkFoodMandala className="w-full h-full" />
      </div>

      {/* 70% Static Ornaments (No movement, white line art on dark background) */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 text-warmcream/20 pointer-events-none z-10">
        <FolkCorner className="w-10 h-10 sm:w-16 sm:h-16" position="top-left" color="currentColor" />
      </div>

      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-warmcream/20 pointer-events-none z-10">
        <FolkCorner className="w-10 h-10 sm:w-16 sm:h-16" position="top-right" color="currentColor" />
      </div>

      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-warmcream/20 pointer-events-none z-10">
        <FolkCorner className="w-10 h-10 sm:w-16 sm:h-16" position="bottom-left" color="currentColor" />
      </div>

      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-warmcream/20 pointer-events-none z-10">
        <FolkCorner className="w-10 h-10 sm:w-16 sm:h-16" position="bottom-right" color="currentColor" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 space-y-8 md:space-y-10 scroll-reveal">
        <span className="text-[10px] sm:text-xs font-sans tracking-[0.45em] text-warmcream/90 uppercase font-bold block">
          A Welcome Table
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-warmcream font-semibold leading-tight">
          For Every Generation
        </h2>

        <p className="font-serif text-lg sm:text-xl md:text-2xl italic text-charcoal/90 max-w-2xl mx-auto leading-relaxed">
          Whether you come for breakfast, a coffee break, an evening conversation, or a family gathering, there is always a place for you at INGU.
        </p>

        {/* CTA Button */}
        <div className="pt-6">
          <a 
            href="#footer"
            className="inline-block px-8 py-3.5 border-2 border-warmcream text-warmcream hover:bg-warmcream hover:text-darkwood transition-all duration-300 font-sans text-xs sm:text-sm tracking-widest uppercase font-bold rounded-sm shadow-md hover:shadow-lg"
          >
            Visit Us In Mysuru
          </a>
        </div>
      </div>
    </section>
  );
}
