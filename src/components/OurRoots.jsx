import { FolkCornerMandala, FolkCorner } from './FolkArt';

export default function OurRoots() {
  return (
    <section id="roots" className="w-full bg-chocolate py-24 md:py-32 px-6 md:px-16 relative overflow-hidden grainy-bg">
      {/* 20% Rotating Mandalas (Increased opacity for better visibility) */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.14] text-terracotta w-[350px] h-[350px] animate-slow-spin-cw pointer-events-none z-0">
        <FolkCornerMandala className="w-full h-full" />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.12] text-terracotta pointer-events-none w-[360px] h-[360px] animate-slow-spin-cw z-0">
        <FolkCornerMandala className="w-full h-full" />
      </div>

      {/* 70% Static Ornaments (No movement, visual stability) */}
      <div className="absolute top-8 right-8 text-terracotta/25 pointer-events-none hidden md:block z-0">
        <FolkCorner className="w-16 h-16" position="top-right" />
      </div>

      <div className="absolute bottom-8 left-8 text-terracotta/25 pointer-events-none hidden md:block z-0">
        <FolkCorner className="w-16 h-16" position="bottom-left" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left: Large Heritage Image */}
          <div className="md:col-span-6 scroll-reveal">
            <div className="relative p-2 bg-offwhite border border-terracotta/20 shadow-[0_8px_30px_rgba(58,42,36,0.06)] rounded-2xl md:rounded-none">
              <img 
                src="/images/family_heritage.png" 
                alt="Family Heritage Journal" 
                className="w-full h-[300px] sm:h-[400px] object-cover grayscale brightness-95 sepia-[0.1] rounded-xl md:rounded-none"
              />
              <div className="absolute inset-0 border border-dashed border-terracotta/15 m-4 pointer-events-none rounded-lg md:rounded-none"></div>
            </div>
          </div>

          {/* Right: Story Content */}
          <div className="md:col-span-6 flex flex-col justify-center space-y-6 md:space-y-8 text-left scroll-reveal">
            <div>
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.45em] text-terracotta uppercase font-bold block mb-3">
                Our Roots
              </span>
              <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-darkwood font-semibold leading-tight">
                From Family Kitchen<br />To Community Table
              </h2>
            </div>
            
            <p className="font-cormorant text-xl md:text-2xl italic text-terracotta/90 leading-relaxed font-medium">
              Recipes preserved through generations,<br />shared with every generation.
            </p>

            <div className="w-16 h-[2px] bg-terracotta/60"></div>

            <div className="space-y-4 font-inter text-sm sm:text-base text-charcoal/75 leading-relaxed max-w-lg">
              <p>
                INGU began with a simple belief: food made with care brings people together.
              </p>
              <p>
                Inspired by family recipes passed down through generations, our kitchen celebrates the flavours we grew up with while welcoming new tastes and ideas.
              </p>
              <p>
                Every dosa, every coffee, every serving of Vaadappa carries a piece of that journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
