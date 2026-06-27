import { useState, useEffect } from 'react';

// Lightweight, passive scroll-parallax hook
function useParallax(speed = 0.05) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      // Calculate delta scroll to prevent infinite offset on large pages
      setOffset(window.pageYOffset * speed);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize offset
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
}

// Parallax container wrapper
export const FolkParallaxWrapper = ({ children, speed = 0.05, className = "" }) => {
  const offset = useParallax(speed);
  return (
    <div 
      className={className} 
      style={{ transform: `translate3d(0, ${offset}px, 0)`, transition: 'transform 0.1s ease-out' }}
    >
      {children}
    </div>
  );
};

// Traditional South Indian Kolam (Mandala) Center Motif
export const KolamCenter = ({ className = "w-24 h-24", color = "currentColor" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    className={`${className} transition-transform duration-1000 hover:rotate-45`}
    fill="none" 
    stroke={color} 
    strokeWidth="1.5"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Center circle */}
    <circle cx="50" cy="50" r="4" fill={color} />
    
    {/* Inner flower petals */}
    <path d="M50 38 C45 42 45 48 50 50 C55 48 55 42 50 38 Z" />
    <path d="M50 62 C45 58 45 52 50 50 C55 52 55 58 50 62 Z" />
    <path d="M38 50 C42 45 48 45 50 50 C48 55 42 55 38 50 Z" />
    <path d="M62 50 C58 45 52 45 50 50 C52 55 58 55 62 50 Z" />
    
    {/* Diagonals */}
    <path d="M41.5 41.5 C41.5 47 47 47 50 50 C47 53 41.5 53 41.5 58.5" strokeDasharray="1 1" />
    <path d="M58.5 41.5 C58.5 47 53 47 50 50 C53 53 58.5 53 58.5 58.5" strokeDasharray="1 1" />

    {/* Outer elegant loops */}
    <path d="M50 22 C35 22 25 35 25 50 C25 65 35 78 50 78 C65 78 75 65 75 50 C75 35 65 22 50 22 Z" strokeWidth="1" />
    
    {/* Intersecting Kolam loops */}
    <path d="M50 14 C60 25 60 35 50 46 C40 35 40 25 50 14 Z" />
    <path d="M50 86 C60 75 60 65 50 54 C40 65 40 75 50 86 Z" />
    <path d="M14 50 C25 60 35 60 46 50 C35 40 25 40 14 50 Z" />
    <path d="M86 50 C75 60 65 60 54 50 C65 40 75 40 86 50 Z" />
    
    {/* Corner loops */}
    <path d="M24.5 24.5 Q50 10 75.5 24.5 Q90 50 75.5 75.5 Q50 90 24.5 75.5 Q10 50 24.5 24.5 Z" strokeWidth="0.75" strokeDasharray="2 2" />
    
    {/* Dots */}
    <circle cx="50" cy="28" r="1.5" fill={color} />
    <circle cx="50" cy="72" r="1.5" fill={color} />
    <circle cx="28" cy="50" r="1.5" fill={color} />
    <circle cx="72" cy="50" r="1.5" fill={color} />
  </svg>
);

// Traditional Corner Border Accent (White/Terracotta)
export const FolkCorner = ({ className = "w-12 h-12", color = "currentColor", position = "top-left" }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': 'rotate-270'
  }[position] || 'rotate-0';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 50 50" 
      className={`${className} ${rotation}`}
      fill="none" 
      stroke={color} 
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      {/* L-Shape frame */}
      <path d="M2 48 V2 H48" />
      <path d="M6 48 V6 H48" strokeWidth="0.75" strokeDasharray="2 2" />
      
      {/* Decorative leaf/bud */}
      <path d="M6 6 Q18 18 18 30" />
      <path d="M6 6 Q18 18 30 18" />
      <circle cx="18" cy="18" r="2.5" fill={color} />
      <circle cx="28" cy="28" r="1.5" fill={color} />
    </svg>
  );
};

// Handcrafted Folk Art Divider
export const FolkDivider = ({ color = "#B65E47", className = "" }) => (
  <div className={`folk-divider ${className}`}>
    <div className="folk-divider-line"></div>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 120 24" 
      className="w-28 h-6 flex-shrink-0"
      fill="none" 
      stroke={color} 
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      {/* Symmetrical wave patterns */}
      <path d="M10 12 Q 20 2, 30 12 T 50 12" />
      <path d="M110 12 Q 100 2, 90 12 T 70 12" />
      
      {/* Center Flower Motif */}
      <circle cx="60" cy="12" r="3" fill={color} />
      <path d="M60 4 C57 8 57 10 60 12 C63 10 63 8 60 4 Z" fill={color} />
      <path d="M60 20 C57 16 57 14 60 12 C63 14 63 16 60 20 Z" fill={color} />
      <path d="M52 12 C56 9 58 9 60 12 C58 15 56 15 52 12 Z" fill={color} />
      <path d="M68 12 C64 9 62 9 60 12 C62 15 64 15 68 12 Z" fill={color} />
      
      {/* Accent Dots */}
      <circle cx="40" cy="12" r="1" fill={color} />
      <circle cx="80" cy="12" r="1" fill={color} />
    </svg>
    <div className="folk-divider-line"></div>
  </div>
);

// Traditional Filter Coffee Brass Cup Line Art Motif
export const CoffeeLeafMotif = ({ className = "w-16 h-16", color = "#B65E47" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 64 64" 
    className={className} 
    fill="none" 
    stroke={color} 
    strokeWidth="1.5"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Steaming lines */}
    <path d="M28 12 Q30 6 32 12" />
    <path d="M34 14 Q36 8 38 14" />
    <path d="M22 15 Q24 9 26 15" />

    {/* Brass Tumbler (top cup) */}
    <path d="M18 20 H46 L42 42 H22 Z" />
    <path d="M18 20 C18 22 46 22 46 20" />
    <path d="M22 42 C22 44 42 44 42 42" strokeWidth="1" />
    
    {/* Davarah (bottom saucer bowl) */}
    <path d="M12 40 H52 L48 54 H16 Z" />
    <path d="M12 40 C12 43 52 43 52 40" />
    <path d="M16 54 C16 57 48 57 48 54" strokeWidth="1" />
    
    {/* Curved coffee flow detail */}
    <path d="M24 30 H40" strokeWidth="0.75" strokeDasharray="2 2" />

    {/* Traditional leaf decoration on sides */}
    <path d="M6 35 Q2 28 8 26 T10 34" strokeWidth="1" />
    <path d="M58 35 Q62 28 56 26 T54 34" strokeWidth="1" />
  </svg>
);

// Dosa & Vada Line Art Motif
export const DosaVadaMotif = ({ className = "w-16 h-16", color = "#B65E47" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 64 64" 
    className={className}
    fill="none" 
    stroke={color} 
    strokeWidth="1.5"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Banana leaf background outline */}
    <path d="M8 44 C8 24 24 8 48 8 C54 8 58 14 54 22 C46 34 30 52 14 56 C10 56 8 50 8 44 Z" strokeWidth="1" strokeDasharray="3 2" />
    <path d="M22 36 L40 18" strokeWidth="0.75" />
    
    {/* Cylindrical Dosa */}
    <path d="M14 26 C12 30 16 34 22 32 L52 16 C56 14 54 10 50 12 Z" />
    {/* Dosa texture rings */}
    <path d="M24 26 C28 20 34 22 38 18" strokeWidth="1" />
    
    {/* Medu Vada (Donut-shaped breakfast item) */}
    <circle cx="26" cy="42" r="10" />
    <circle cx="26" cy="42" r="3" />
    {/* Small sparks / spices on vada */}
    <circle cx="21" cy="38" r="0.75" fill={color} />
    <circle cx="31" cy="45" r="0.75" fill={color} />
    <circle cx="28" cy="38" r="0.75" fill={color} />

    {/* Chutney bowl */}
    <circle cx="46" cy="38" r="6" />
    <circle cx="46" cy="38" r="4" strokeWidth="0.75" strokeDasharray="1 1" />
  </svg>
);

// Spices and Seeds Line Art Motif
export const SpiceMotif = ({ className = "w-16 h-16", color = "#B65E47" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 64 64" 
    className={className}
    fill="none" 
    stroke={color} 
    strokeWidth="1.5"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Cardamom Pod */}
    <path d="M12 42 C6 30 18 20 22 28 C26 36 18 48 12 42 Z" />
    <path d="M10 36 C14 32 18 36 20 32" strokeWidth="0.75" />
    
    {/* Cinnamon Stick */}
    <path d="M38 12 L52 46 C53 49 50 52 46 50 L32 16 C31 13 34 10 38 12 Z" />
    <path d="M35 18 L48 50" strokeWidth="0.75" />
    
    {/* Star Anise */}
    <g transform="translate(36, 36) scale(0.6)">
      <path d="M20 0 L10 10 L0 0 L10 -10 Z" />
      <path d="M20 20 L20 6 L10 10 L6 20 Z" />
      <path d="M0 20 L-10 10 L0 0 L10 10 Z" />
      <circle cx="10" cy="5" r="1.5" fill={color} />
    </g>
    
    {/* Curry leaves branch */}
    <path d="M16 14 Q32 20 44 10" strokeWidth="1" />
    {/* Leaves */}
    <path d="M22 16 Q24 10 28 15 Q24 20 22 16" fill={color} opacity="0.3" />
    <path d="M30 17 Q34 12 36 17 Q32 22 30 17" fill={color} opacity="0.3" />
    <path d="M38 16 Q42 10 44 15 Q40 20 38 16" fill={color} opacity="0.3" />
  </svg>
);

// Large highly detailed corner mandala inspired by Ingu wall mural
export const FolkCornerMandala = ({ className = "w-48 h-48", color = "currentColor" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 200 200" 
    className={`${className}`}
    fill="none" 
    stroke={color} 
    strokeWidth="1.2"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <defs>
      {/* Steaming Coffee Cup Motif */}
      <g id="mandala-cup">
        <path d="M-6 -2 Q0 -2, 6 -2 L4 8 Q0 9, -4 8 Z" fill={color} opacity="0.1" />
        <path d="M-6 -2 Q0 -2, 6 -2 L4 8 Q0 9, -4 8 Z" strokeWidth="1.2" />
        <path d="M5 0 Q8 2, 4 5" strokeWidth="1" />
        <path d="M-2 -6 Q-1 -10, 0 -6" strokeWidth="0.8" />
        <path d="M2 -6 Q3 -10, 4 -6" strokeWidth="0.8" />
      </g>
      
      {/* Paisley/Mango Motif (from input_file_0) */}
      <g id="mandala-paisley">
        <path d="M0 -15 C-8 -15, -10 -5, 0 8 C10 -5, 8 -15, 0 -15 Z" fill={color} opacity="0.1" />
        <path d="M0 -15 C-8 -15, -10 -5, 0 8 C10 -5, 8 -15, 0 -15 Z" strokeWidth="1.2" />
        <circle cx="0" cy="-6" r="1.5" fill={color} stroke="none" />
      </g>
      
      {/* Outer Pointed Petal */}
      <g id="mandala-outer-petal">
        <path d="M0 -12 C-5 -2, -8 4, 0 12 C8 4, 5 -2, 0 -12 Z" strokeWidth="1" />
        <circle cx="0" cy="2" r="1" fill={color} stroke="none" />
      </g>
    </defs>
    
    <circle cx="100" cy="100" r="4" fill={color} stroke="none" />
    <circle cx="100" cy="100" r="12" strokeWidth="1" />
    <circle cx="100" cy="100" r="16" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
    
    {/* Inner flower petals - 8 petals */}
    <g transform="translate(100, 100)">
      {Array.from({ length: 8 }).map((_, i) => (
        <path 
          key={i} 
          d="M0 -12 C-3 -6, -3 -2, 0 0 C3 -2, 3 -6, 0 -12 Z" 
          transform={`rotate(${i * 45})`} 
          strokeWidth="1"
        />
      ))}
    </g>
    
    <circle cx="100" cy="100" r="28" strokeWidth="1" />
    <circle cx="100" cy="100" r="34" strokeWidth="0.75" strokeDasharray="2 2" />
    
    {/* Loop ring at r=40 */}
    <g transform="translate(100, 100)">
      {Array.from({ length: 16 }).map((_, i) => (
        <path 
          key={i} 
          d="M0 -34 Q3 -40, 6 -34" 
          transform={`rotate(${i * 22.5})`} 
          strokeWidth="0.8"
        />
      ))}
    </g>
    
    <circle cx="100" cy="100" r="46" strokeWidth="1.2" />
    
    {/* Coffee Cup ring at r=58 - 12 cups */}
    <g transform="translate(100, 100)">
      {Array.from({ length: 12 }).map((_, i) => (
        <use 
          key={i} 
          href="#mandala-cup" 
          transform={`rotate(${i * 30}) translate(0, -56) rotate(180)`} 
        />
      ))}
    </g>
    
    <circle cx="100" cy="100" r="68" strokeWidth="1.2" />
    <circle cx="100" cy="100" r="72" strokeWidth="0.75" strokeDasharray="2 1" />
    
    {/* Paisley ring at r=82 - 16 paisleys */}
    <g transform="translate(100, 100)">
      {Array.from({ length: 16 }).map((_, i) => (
        <use 
          key={i} 
          href="#mandala-paisley" 
          transform={`rotate(${i * 22.5}) translate(0, -82) rotate(180)`} 
        />
      ))}
    </g>
    
    <circle cx="100" cy="100" r="92" strokeWidth="1.2" />
    
    {/* Outer border petal ring - 24 petals */}
    <g transform="translate(100, 100)">
      {Array.from({ length: 24 }).map((_, i) => (
        <use 
          key={i} 
          href="#mandala-outer-petal" 
          transform={`rotate(${i * 15}) translate(0, -94)`} 
        />
      ))}
    </g>
  </svg>
);

// Traditional temple elephant line art inspired by Ingu wall mural
export const FolkElephant = ({ className = "w-32 h-48", color = "currentColor" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 120 180" 
    className={className}
    fill="none" 
    stroke={color} 
    strokeWidth="1.3"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Head crown (Mukut) */}
    <path d="M50 35 C52 25, 68 25, 70 35 C72 40, 48 40, 50 35 Z" fill={color} opacity="0.1" />
    <path d="M55 27 L60 20 L65 27" />
    <circle cx="60" cy="18" r="1.5" fill={color} stroke="none" />
    
    {/* Elephant Ear (intricate folk design) */}
    <path d="M72 48 C85 45, 98 52, 98 70 C98 88, 80 95, 72 90 Z" fill={color} opacity="0.05" />
    <path d="M72 48 C85 45, 98 52, 98 70 C98 88, 80 95, 72 90" />
    <path d="M75 54 C83 52, 92 56, 92 70 C92 82, 80 87, 75 84" strokeWidth="0.8" strokeDasharray="2 1" />
    <path d="M78 60 C82 59, 86 62, 86 70 C86 76, 80 80, 78 78" strokeWidth="0.8" />
    <circle cx="82" cy="70" r="1.5" fill={color} stroke="none" />

    {/* Forehead decoration (Nettipattam) */}
    <path d="M50 42 C53 45, 67 45, 70 42 C68 65, 52 65, 50 42 Z" fill={color} opacity="0.1" />
    <path d="M50 42 C53 45, 67 45, 70 42 C68 65, 52 65, 50 42 Z" />
    <path d="M54 48 H66" strokeWidth="0.8" />
    <path d="M56 54 H64" strokeWidth="0.8" />
    <circle cx="60" cy="60" r="1.5" fill={color} stroke="none" />
    <path d="M50 42 Q45 42, 45 48 T48 54" />
    
    {/* Trunk (Curving down and inward) */}
    <path d="M48 56 C42 62, 38 72, 38 85 C38 105, 48 115, 44 125 C42 130, 32 130, 28 122 C26 118, 28 112, 34 112 C40 112, 42 118, 38 122" />
    <path d="M42 56 C36 62, 32 72, 32 85 C32 100, 40 108, 38 116 C36 120, 30 120, 28 116" strokeWidth="0.8" />
    {/* Trunk bands */}
    <path d="M36 70 Q40 71, 41 73" strokeWidth="0.8" />
    <path d="M35 78 Q39 79, 40 81" strokeWidth="0.8" />
    <path d="M34 86 Q38 87, 39 89" strokeWidth="0.8" />
    <path d="M35 94 Q39 95, 40 97" strokeWidth="0.8" />
    <path d="M37 102 Q41 103, 42 105" strokeWidth="0.8" />

    {/* Tusks */}
    <path d="M50 68 Q44 72, 40 68" />
    <path d="M50 68 Q46 70, 44 68" strokeWidth="0.8" fill="#fff" />
    
    {/* Head & Back Outline */}
    <path d="M70 42 C75 42, 78 45, 80 48" />
    <path d="M98 70 C105 75, 110 85, 110 100 C110 115, 105 130, 100 145" />

    {/* Front Leg */}
    <path d="M52 110 V155 C52 160, 62 160, 62 155 V110" />
    <path d="M52 145 H62" strokeWidth="0.8" />
    <path d="M52 149 H62" strokeWidth="0.8" />
    <circle cx="57" cy="155" r="1.5" fill={color} stroke="none" />
    
    {/* Back Leg */}
    <path d="M90 110 V155 C90 160, 100 160, 100 155 V110" />
    <path d="M90 145 H100" strokeWidth="0.8" />
    <path d="M90 149 H100" strokeWidth="0.8" />
    <circle cx="95" cy="155" r="1.5" fill={color} stroke="none" />

    {/* Belly Outline */}
    <path d="M62 120 C70 125, 82 125, 90 120" />

    {/* Body cloth / Rug (Jhool) - detailed decorative panel */}
    <path d="M68 90 H102 V118 Q85 125, 68 118 Z" fill={color} opacity="0.08" />
    <path d="M68 90 H102 V118 Q85 125, 68 118 Z" />
    <path d="M72 94 H98 V114 Q85 120, 72 114 Z" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
    {/* Diamonds inside Jhool */}
    <path d="M85 96 L91 104 L85 112 L79 104 Z" />
    <circle cx="85" cy="104" r="1.5" fill={color} stroke="none" />
    <path d="M73 98 L77 104 L73 110" strokeWidth="0.8" />
    <path d="M97 98 L93 104 L97 110" strokeWidth="0.8" strokeDasharray="1 1" />
    
    {/* Hanging bells/tassels */}
    <circle cx="72" cy="121" r="1.5" fill={color} stroke="none" />
    <circle cx="85" cy="123" r="1.5" fill={color} stroke="none" />
    <circle cx="98" cy="121" r="1.5" fill={color} stroke="none" />
    
    {/* Tail */}
    <path d="M106 100 Q112 110, 108 130" />
    <path d="M108 130 Q106 135, 108 140 T109 143" />
    <path d="M106 142 C106 145, 112 145, 110 142 Z" fill={color} />
  </svg>
);

// Circular mandala with food plate in the center inspired by Ingu wall mural
export const FolkFoodMandala = ({ className = "w-32 h-32", color = "currentColor" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 200 200" 
    className={className}
    fill="none" 
    stroke={color} 
    strokeWidth="1.3"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <defs>
      {/* Outer petal shape */}
      <g id="mandala-petal">
        <path d="M 100,24 C 94,40 106,40 100,24 Z" />
        <path d="M 100,10 C 88,32 112,32 100,10 Z" strokeWidth="1" />
        <circle cx="100" cy="16" r="1.5" fill={color} stroke="none" />
      </g>
      {/* Sub petal */}
      <g id="mandala-subpetal">
        <path d="M 100,45 C 96,55 104,55 100,45 Z" />
      </g>
    </defs>
    
    {/* Center food illustration: Steaming Bowl, Idlis and Dosa */}
    {/* Sambar Bowl */}
    <path d="M78 105 C78 125, 122 125, 122 105 Z" fill={color} opacity="0.1" />
    <path d="M78 105 C78 125, 122 125, 122 105 Z" strokeWidth="1.5" />
    <path d="M75 105 H125" strokeWidth="0.8" />
    
    {/* Steam lines */}
    <path d="M90 98 Q93 90, 95 98" strokeWidth="1" />
    <path d="M100 96 Q103 86, 105 96" strokeWidth="1" />
    <path d="M110 98 Q113 90, 115 98" strokeWidth="1" />

    {/* Idlis (fluffy rice cakes) */}
    <ellipse cx="68" cy="116" rx="12" ry="7" transform="rotate(-15 68 116)" fill="#fff" />
    <ellipse cx="68" cy="116" rx="12" ry="7" transform="rotate(-15 68 116)" />
    <ellipse cx="68" cy="116" rx="8" ry="4" transform="rotate(-15 68 116)" strokeDasharray="1.5 1.5" strokeWidth="0.8" />
    
    <ellipse cx="78" cy="126" rx="12" ry="7" transform="rotate(10 78 126)" fill="#fff" />
    <ellipse cx="78" cy="126" rx="12" ry="7" transform="rotate(10 78 126)" />
    
    {/* Dosa roll */}
    <path d="M112 124 Q132 116, 142 120" />
    <path d="M110 127 C108 120, 114 116, 118 120 L144 112 C148 110, 146 116, 142 118 Z" fill="#fff" />
    <path d="M110 127 C108 120, 114 116, 118 120 L144 112 C148 110, 146 116, 142 118 Z" />
    <path d="M118 121 Q128 116, 138 117" strokeWidth="0.8" />

    {/* Food plate (Thali/Banana Leaf base) */}
    <circle cx="100" cy="112" r="50" strokeWidth="0.8" strokeDasharray="3 3" />
    <circle cx="100" cy="112" r="54" strokeWidth="1.3" />

    {/* Concentric rings of mandala */}
    <circle cx="100" cy="112" r="64" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
    <circle cx="100" cy="112" r="70" strokeWidth="1.3" />
    <circle cx="100" cy="112" r="74" strokeWidth="0.75" />
    
    {/* Inner decorative loops around the plate */}
    <circle cx="100" cy="112" r="60" strokeWidth="0.8" strokeDasharray="1 3" />

    {/* Layered outer petals */}
    <g transform="translate(0, 12)">
      {Array.from({ length: 16 }).map((_, i) => (
        <use 
          key={i} 
          href="#mandala-petal" 
          transform={`rotate(${i * 22.5} 100 100)`} 
        />
      ))}
    </g>
    
    {/* Inner petal layer */}
    <g transform="translate(0, 12)">
      {Array.from({ length: 16 }).map((_, i) => (
        <use 
          key={i} 
          href="#mandala-subpetal" 
          transform={`rotate(${i * 22.5 + 11.25} 100 100)`} 
        />
      ))}
    </g>
  </svg>
);

