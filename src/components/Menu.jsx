import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { 
  FolkDivider, 
  KolamCenter, 
  CoffeeLeafMotif, 
  DosaVadaMotif, 
  SpiceMotif, 
  FolkCornerMandala, 
  FolkFoodMandala 
} from './FolkArt';

export default function Menu() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const menuCategories = [
    {
      title: "Breakfast Classics",
      motif: "dosa",
      image: "/images/menu_breakfast.png",
      items: [
        "Idly",
        "Idly with Chutney",
        "Idly with Soup Dip",
        "Ghee Button Idly",
        "Ghee Pudi Button Idly",
        "Khaara Idly"
      ]
    },
    {
      title: "Signature Dosas",
      motif: "dosa",
      image: "/images/menu_dosa.png",
      items: [
        "OG Masala Dose",
        "Ghee Pudi Masala Dose",
        "Plain Dose",
        "Ingu Special Dose",
        "Bath Masala Dose"
      ]
    },
    {
      title: "Rice & Tiffin",
      motif: "spice",
      image: "/images/menu_rice.png",
      items: [
        "Upma",
        "Kesaribath",
        "Othu Shyavige",
        "Kaayi Haalu",
        "Rice Bath",
        "Vaadappa",
        "Khaara Vaadappa"
      ]
    },
    {
      title: "Artisan Sandwiches",
      motif: "kolam",
      image: "/images/menu_sandwich.png",
      items: [
        "Simply Veg Sandwich",
        "Peri Peri Paneer",
        "Mushroom Magic",
        "Cheesy Peezy",
        "Chocolate Toastie",
        "OG Butter Jam"
      ]
    },
    {
      title: "Milkshakes & Beverages",
      motif: "leaf",
      image: "/images/menu_beverage.png",
      items: [
        "Lime Soda",
        "Masala Soft Drinks",
        "Cold Coffee",
        "Cold Chocolate",
        "Vanilla Shake",
        "Oreo Shake",
        "Choco Banana Shake"
      ]
    },
    {
      title: "Ice Cream & Desserts",
      motif: "food",
      image: "/images/menu_dessert.png",
      items: [
        "Hot Choco Fudge",
        "Brownie Fudge",
        "DBC",
        "Seasonal Fruit Ice Cream",
        "Gudbud",
        "Assorted Scoops"
      ]
    },
    {
      title: "Chaats",
      motif: "spice",
      image: "/images/menu_chaat.png",
      items: [
        "Ingu Chakuli",
        "Ghee Mandakki",
        "Mosaru Boondi",
        "Mosaru Avalakki"
      ]
    },
    {
      title: "Add-ons",
      motif: "kolam",
      image: "/images/menu_addons.png",
      items: [
        "Extra Butter",
        "Extra Ghee",
        "Extra Chocolate Sauce",
        "Extra Nuts",
        "Extra Kaayi Haalu",
        "Extra Sweet Pudi"
      ]
    }
  ];

  const renderMotif = (motif, className = "w-5 h-5") => {
    switch (motif) {
      case 'dosa':   return <DosaVadaMotif className={className} />;
      case 'spice':  return <SpiceMotif className={className} />;
      case 'leaf':   return <CoffeeLeafMotif className={className} />;
      case 'kolam':  return <KolamCenter className={className} color="#B65E47" />;
      case 'food':   return <FolkFoodMandala className={className} color="#B65E47" />;
      default:       return <KolamCenter className={className} color="#B65E47" />;
    }
  };

  return (
    <section id="menu" className="w-full bg-chocolate py-24 px-4 md:px-8 relative overflow-hidden grainy-bg">
      {/* Background decorative mandalas (scaled on mobile) */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-[0.05] md:opacity-[0.07] text-terracotta pointer-events-none z-0 animate-slow-spin-cw w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px]">
        <FolkCornerMandala className="w-full h-full" />
      </div>
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.05] md:opacity-[0.07] text-mutedolive pointer-events-none z-0 animate-slow-spin-ccw w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px]">
        <FolkFoodMandala className="w-full h-full" />
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 w-14 h-14 border-t border-l border-terracotta/20 pointer-events-none hidden md:block"></div>
      <div className="absolute top-8 right-8 w-14 h-14 border-t border-r border-terracotta/20 pointer-events-none hidden md:block"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ─── SECTION HEADER ─────────────────────────────────── */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.45em] text-terracotta uppercase font-bold block mb-2">
            The Ingu Experience
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-darkwood font-semibold mt-2 mb-1">
            Explore Our Menu
          </h2>
          <FolkDivider className="my-5 max-w-xl mx-auto" />
          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal/65 max-w-xl mx-auto leading-relaxed">
            Traditional breakfasts, family favorites, handcrafted cafe offerings, and sweet indulgences curated for every generation.
          </p>
        </div>

        {/* ─── DESKTOP GRID LAYOUT (Hidden on mobile/tablet) ────────────────────── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {menuCategories.map((category, index) => (
            <div key={index} className="flex flex-col scroll-reveal">
              {/* Category Header */}
              <div className="flex items-center gap-2 pb-2 border-b border-terracotta/25">
                {renderMotif(category.motif, "w-5 h-5 text-terracotta flex-shrink-0")}
                <h3 className="font-serif text-sm font-bold text-darkwood tracking-widest uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Category Image */}
              <div className="w-full aspect-[16/10] overflow-hidden border border-black/10 shadow-[0_2px_8px_rgba(0,0,0,0.08)] my-4 relative group">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-terracotta/5 mix-blend-multiply pointer-events-none"></div>
              </div>

              {/* Item List */}
              <div className="flex flex-col gap-2.5 pl-1">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-charcoal/80 group">
                    <span className="text-terracotta font-serif text-[10px] select-none opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                      ◆
                    </span>
                    <span className="tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ─── MOBILE ACCORDION LAYOUT (Hidden on desktop) ─────────────────── */}
        <div className="flex flex-col gap-4 md:hidden">
          {menuCategories.map((category, index) => {
            const isExpanded = expandedCategory === index;
            return (
              <div 
                key={index} 
                className="flex flex-col border border-terracotta/15 bg-offwhite rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300"
              >
                {/* Accordion Header (Large Touch Target: 64px min-height) */}
                <button 
                  onClick={() => setExpandedCategory(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none transition-colors duration-300 cursor-pointer active:bg-terracotta/[0.03]"
                  style={{ minHeight: '64px' }}
                >
                  <div className="flex items-center gap-3">
                    {/* Category Thumbnail */}
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-black/10 flex-shrink-0 relative">
                      <img 
                        src={category.image} 
                        alt={category.title} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-terracotta/5 mix-blend-multiply pointer-events-none"></div>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-[9px] font-sans tracking-[0.2em] text-darkwood uppercase font-bold flex items-center gap-1">
                        {renderMotif(category.motif, "w-2.5 h-2.5 text-darkwood")} 
                        {category.motif === 'dosa' ? 'Dosa & Idly' : category.motif === 'spice' ? 'Spiced' : category.motif === 'leaf' ? 'Artisan' : 'Classic'}
                      </span>
                      <h3 className="font-serif text-sm font-bold text-darkwood tracking-wide uppercase mt-0.5">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Chevron Right/Down Indicator */}
                  <div className="p-1">
                    <ChevronRight 
                      className={`w-5 h-5 text-darkwood transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
                    />
                  </div>
                </button>

                {/* Items List (Smooth expand/collapse transition) */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[500px] opacity-100 border-t border-terracotta/5 bg-offwhite' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 py-4 flex flex-col gap-1 pl-16">
                    {category.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 text-xs sm:text-sm font-sans text-charcoal/80 py-2.5 border-b border-terracotta/5 last:border-b-0"
                      >
                        <span className="text-darkwood font-serif text-[9px] select-none opacity-60">
                          ◆
                        </span>
                        <span className="tracking-wide font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-4 mt-20 opacity-40">
          <span className="h-[1px] w-24 bg-terracotta/30"></span>
          <span className="text-terracotta text-[8px] select-none">◆</span>
          <span className="font-serif text-xs italic text-terracotta tracking-widest">Ingu Cafe</span>
          <span className="text-terracotta text-[8px] select-none">◆</span>
          <span className="h-[1px] w-24 bg-terracotta/30"></span>
        </div>
      </div>
    </section>
  );
}
