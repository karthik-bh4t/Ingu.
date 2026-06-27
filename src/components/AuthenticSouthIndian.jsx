import { KolamCenter, FolkCornerMandala, FolkFoodMandala, FolkCorner, CoffeeLeafMotif } from './FolkArt';

export default function AuthenticSouthIndian() {
  return (
    <section className="w-full relative overflow-hidden bg-chocolate min-h-[600px] md:h-[700px] grid grid-cols-1 md:grid-cols-2">
      
      {/* ─── LEFT COLUMN: PHOTO OF INGU CAFE ─── */}
      <div className="relative w-full h-[320px] md:h-full overflow-hidden z-10 group">
        <img 
          src="/images/cafe_exterior.jpg" 
          alt="INGU Cafe storefront"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {/* Soft dark overlay over the photo */}
        <div className="absolute inset-0 bg-black/25"></div>
        {/* Side fading gradient to blend with the chocolate text section on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-chocolate/40 hidden md:block pointer-events-none"></div>
        
        {/* Decorative corner framing on the image */}
        <div className="absolute top-6 left-6 text-warmcream/20 pointer-events-none">
          <FolkCorner className="w-10 h-10" position="top-left" color="currentColor" />
        </div>
        <div className="absolute bottom-6 left-6 text-warmcream/20 pointer-events-none">
          <FolkCorner className="w-10 h-10" position="bottom-left" color="currentColor" />
        </div>
      </div>

      {/* ─── RIGHT COLUMN: CONTENT & TEXTS ─── */}
      <div className="relative w-full h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 py-16 md:py-0 space-y-6 sm:space-y-8 z-10 bg-chocolate text-left scroll-reveal">
        
        {/* Background Rotating Ornaments behind the text (Low opacity for legibility) */}
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-[0.06] md:opacity-[0.09] text-warmcream w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] animate-slow-spin-cw pointer-events-none z-0">
          <FolkCornerMandala className="w-full h-full" />
        </div>
        
        <div className="absolute left-0 bottom-0 -translate-x-1/4 translate-y-1/4 opacity-[0.06] md:opacity-[0.08] text-warmcream w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] animate-slow-spin-ccw pointer-events-none z-0">
          <FolkFoodMandala className="w-full h-full" />
        </div>

        <div className="absolute right-8 bottom-8 opacity-[0.08] text-warmcream w-16 h-16 pointer-events-none z-0 hidden lg:block">
          <CoffeeLeafMotif className="w-full h-full" color="currentColor" />
        </div>

        {/* Decorative Corner Ornaments */}
        <div className="absolute top-6 right-6 text-warmcream/10 pointer-events-none z-0">
          <FolkCorner className="w-10 h-10" position="top-right" color="currentColor" />
        </div>
        <div className="absolute bottom-6 right-6 text-warmcream/10 pointer-events-none z-0">
          <FolkCorner className="w-10 h-10" position="bottom-right" color="currentColor" />
        </div>

        {/* Text and Pillars Container (z-10 to stay on top of the BG ornaments) */}
        <div className="relative z-10 space-y-6 sm:space-y-8">
          {/* Section Header with Left-aligned Kolam Accent */}
          <div className="flex items-center gap-3">
            <KolamCenter className="w-6 h-6 text-warmcream/60 animate-slow-spin-cw" />
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.45em] text-warmcream/90 uppercase font-bold">
              Culinary Identity
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-warmcream font-semibold leading-tight">
            Authentic South Indian,<br />Beyond Expectations
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-warmcream/80 leading-relaxed max-w-xl">
            While we celebrate Radha's time-honoured secrets—from soft steamed idlis and golden dosas to rich filter coffee—INGU is not just a traditional dining hall. We are a contemporary South Indian fusion kitchen, where heritage recipes meet modern café inspirations to create unexpected flavours.
          </p>

          {/* Highlighted pillars grid in split screen layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-[10px] sm:text-xs font-sans tracking-widest uppercase text-warmcream/85 max-w-lg w-full">
            <div className="border border-warmcream/15 py-2.5 rounded-lg bg-black/15 backdrop-blur-sm text-center font-medium">Idly</div>
            <div className="border border-warmcream/15 py-2.5 rounded-lg bg-black/15 backdrop-blur-sm text-center font-medium">Dosa</div>
            <div className="border border-warmcream/15 py-2.5 rounded-lg bg-black/15 backdrop-blur-sm text-center font-medium">Coffee</div>
            <div className="border border-warmcream/15 py-2.5 rounded-lg bg-black/15 backdrop-blur-sm text-center font-medium">Breakfasts</div>
            <div className="border border-warmcream/15 py-2.5 rounded-lg bg-black/15 backdrop-blur-sm col-span-2 sm:col-span-1 text-center font-medium">Heritage Recipes</div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
