import { FolkCornerMandala, FolkCorner, SpiceMotif } from './FolkArt';

export default function MothersStory() {
  return (
    <section id="mothers-story" className="w-full bg-chocolate py-24 md:py-32 px-6 md:px-16 relative overflow-hidden grainy-bg">
      {/* 20% Rotating Mandala (Half-mandala on the right side, scaled on mobile) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-[0.07] md:opacity-[0.14] text-terracotta w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] animate-slow-spin-cw pointer-events-none z-0">
        <FolkCornerMandala className="w-full h-full" />
      </div>

      <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-[0.14] text-terracotta w-20 h-20 pointer-events-none z-0 hidden lg:block">
        <SpiceMotif className="w-full h-full" />
      </div>

      <div className="absolute top-8 right-8 text-terracotta/25 pointer-events-none hidden md:block z-0">
        <FolkCorner className="w-16 h-16" position="top-right" />
      </div>

      <div className="absolute bottom-8 left-8 text-terracotta/25 pointer-events-none hidden md:block z-0">
        <FolkCorner className="w-16 h-16" position="bottom-left" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left: Mother's Photograph */}
          <div className="md:col-span-5 scroll-reveal">
            <div className="relative p-2.5 bg-offwhite border border-terracotta/20 shadow-[0_10px_35px_rgba(58,42,36,0.08)] rounded-2xl md:rounded-none">
              <img 
                src="/images/mother_kitchen.png" 
                alt="The Mother cooking in family kitchen" 
                className="w-full h-[360px] sm:h-[450px] object-cover filter contrast-[1.02] sepia-[0.05] rounded-xl md:rounded-none"
              />
              {/* Elegant paper texture overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-darkwood/10 to-transparent pointer-events-none rounded-xl md:rounded-none"></div>
              <div className="absolute inset-0 border border-dashed border-terracotta/20 m-4 pointer-events-none rounded-lg md:rounded-none"></div>
            </div>
            <p className="font-serif italic text-xs text-center text-charcoal/50 mt-4 tracking-wider">
              Nurturing heritage: The heart of Radha’s family kitchen.
            </p>
          </div>

          {/* Right: Emotional Story Content */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 text-left scroll-reveal">
            <div>
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.45em] text-terracotta uppercase font-bold block mb-3">
                From Our Home to Yours
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-darkwood font-semibold leading-tight">
                The Heart Behind<br />Every Recipe
              </h2>
            </div>

            <div className="h-[1px] w-24 bg-terracotta/40"></div>

            <div className="space-y-5 font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed max-w-xl">
              <p className="font-serif text-lg md:text-xl italic text-darkwood/90 leading-relaxed font-medium">
                "Before INGU became a café, it was a family kitchen."
              </p>
              <p>
                The recipes, flavours and traditions that shaped our menu were nurtured by a mother's care and passed through generations. We learned that the secret to the perfect texture of a rice batter is not a formula, but the temperature of the stone grinder and the patience of hands that have stirred for decades.
              </p>
              <p>
                Today, those same recipes continue to bring people together. Every time a cup of coffee is poured or a hot plate of food reaches your table, we share the same care that was first served to our family.
              </p>
            </div>

            {/* Micro ornament */}
            <div className="flex items-center gap-3 opacity-30 pt-4">
              <span className="w-1.5 h-1.5 rotate-45 bg-terracotta"></span>
              <span className="font-serif text-xs italic tracking-widest text-terracotta">A Family Legacy</span>
              <span className="w-1.5 h-1.5 rotate-45 bg-terracotta"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
