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

  return (
    <section id="visual-gallery" className="w-full bg-offwhite py-20 md:py-28 px-6 relative overflow-hidden grainy-bg">

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
        <div className="text-center mb-12 scroll-reveal">
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

        {/* Dynamic Single-Row Infinite Marquee Slider */}
        <div className="w-full overflow-hidden py-4">
          <InfiniteSlider gap={28} reverse speed={40} speedOnHover={15}>
            {photos.map((photo, index) => (
              <img 
                key={index} 
                src={photo.src} 
                alt={photo.alt}
                className="h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] w-auto rounded-3xl object-cover border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
