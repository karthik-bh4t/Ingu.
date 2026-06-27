import { FolkDivider, FolkCornerMandala, FolkCorner } from './FolkArt';
import { InfiniteSlider } from '@/components/core/infinite-slider';

export default function CafeVisualGallery() {
  const photos = [
    {
      src: "/images/cafe_interior_community.png",
      alt: "Cafe interior seating and community table",
      title: "Interior Seating",
    },
    {
      src: "/images/gallery_podi_idli.png",
      alt: "Traditional butter podi idli served on banana leaf",
      title: "Butter Podi Idli",
    },
    {
      src: "/images/gallery_sambar_idli.png",
      alt: "Sambar idli and vada combo in steel plate",
      title: "Sambar Idli & Vada",
    },
    {
      src: "/images/filter_coffee.png",
      alt: "Artisanal filter coffee moments",
      title: "Coffee Moments",
    },
    {
      src: "/images/gallery_noodle.png",
      alt: "Classic Semige Shavige Bath served on banana leaf",
      title: "Shavige Bath",
    },
    {
      src: "/images/gallery_dessert_mango.png",
      alt: "Mango Mastani ice cream dessert with nuts",
      title: "Mango Mastani",
    },
    {
      src: "/images/gallery_dessert_chocolate.png",
      alt: "Premium chocolate Gudbud ice cream dessert",
      title: "Chocolate Gudbud",
    }
  ];

  const row1Photos = [photos[0], photos[1], photos[2], photos[3], photos[4]];
  const row2Photos = [photos[5], photos[6], photos[0], photos[1], photos[3]];

  return (
    <section id="visual-gallery" className="w-full bg-offwhite py-24 md:py-32 px-6 md:px-16 relative overflow-hidden grainy-bg">

      {/* 70% Static Ornaments (Scaled and low opacity on mobile) */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-[0.06] md:opacity-[0.12] text-darkwood w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] pointer-events-none z-0">
        <FolkCornerMandala className="w-full h-full" />
      </div>

      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-[0.06] md:opacity-[0.12] text-terracotta w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] pointer-events-none z-0">
        <FolkCornerMandala className="w-full h-full" />
      </div>

      <div className="absolute top-8 right-8 text-terracotta/20 pointer-events-none hidden md:block z-0">
        <FolkCorner className="w-16 h-16" position="top-right" />
      </div>

      <div className="absolute bottom-8 left-8 text-terracotta/20 pointer-events-none hidden md:block z-0">
        <FolkCorner className="w-16 h-16" position="bottom-left" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.45em] text-terracotta uppercase font-bold block mb-2">
            The Space
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-darkwood font-semibold mt-2 mb-1">
            Cafe Visual Gallery
          </h2>
          <FolkDivider className="my-5 max-w-xl mx-auto" />
          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal/65 max-w-xl mx-auto leading-relaxed">
            Take a visual walk through our spaces, where history, art, and community find a home.
          </p>
        </div>

        {/* Dynamic Double-Row Infinite Marquee Sliders */}
        <div className="flex flex-col gap-6 md:gap-8 w-full overflow-hidden">
          {/* Row 1: Right-to-Left (Normal) */}
          <InfiniteSlider speed={35} speedOnHover={12} gap={24} reverse={false} className="py-2">
            {row1Photos.map((photo, index) => (
              <div 
                key={`row1-${index}`} 
                className="relative overflow-hidden group rounded-2xl border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] w-[260px] sm:w-[320px] md:w-[360px] h-[180px] sm:h-[220px] md:h-[250px]"
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkwood/90 via-darkwood/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Visual Label */}
                <div className="absolute bottom-4 left-4 text-left translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
                  <span className="text-[8px] sm:text-[9px] font-sans tracking-[0.3em] text-warmcream uppercase block mb-0.5 opacity-90 font-bold">
                    Explore
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-semibold text-warmcream tracking-wide">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </InfiniteSlider>

          {/* Row 2: Left-to-Right (Reverse) */}
          <InfiniteSlider speed={35} speedOnHover={12} gap={24} reverse={true} className="py-2">
            {row2Photos.map((photo, index) => (
              <div 
                key={`row2-${index}`} 
                className="relative overflow-hidden group rounded-2xl border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] w-[260px] sm:w-[320px] md:w-[360px] h-[180px] sm:h-[220px] md:h-[250px]"
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkwood/90 via-darkwood/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Visual Label */}
                <div className="absolute bottom-4 left-4 text-left translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
                  <span className="text-[8px] sm:text-[9px] font-sans tracking-[0.3em] text-warmcream uppercase block mb-0.5 opacity-90 font-bold">
                    Explore
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-semibold text-warmcream tracking-wide">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
