import { useEffect } from 'react';
import Hero from './components/Hero';
import OurRoots from './components/OurRoots';
import AuthenticSouthIndian from './components/AuthenticSouthIndian';
import StoryOfVaadappa from './components/StoryOfVaadappa';
import MothersStory from './components/MothersStory';
import CafeVisualGallery from './components/CafeVisualGallery';
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent';
import ForEveryGeneration from './components/ForEveryGeneration';
import Menu from './components/Menu';
import Footer from './components/Footer';

export default function App() {
  // Setup standard IntersectionObserver for subtle scroll-reveals
  useEffect(() => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // triggers slightly before scrolling fully in
      }
    );

    reveals.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-offwhite text-charcoal">
      {/* 1. HERO SECTION (Diagonal Split-Screen) */}
      <Hero />

      {/* 2. OUR ROOTS (Editorial Family Kitchen & Preserved Recipes Story) */}
      <OurRoots />

      {/* 3. AUTHENTIC SOUTH INDIAN (Fusion and Contemporary South Indian) */}
      <AuthenticSouthIndian />

      {/* 4. THE STORY OF VAADAPPA (Emotional Signature Item spotlight) */}
      <StoryOfVaadappa />

      {/* 5. FROM OUR HOME TO YOURS / MOTHER'S STORY */}
      <MothersStory />

      {/* 6. CAFE VISUAL GALLERY (Asymmetrical editorial collage) */}
      <CafeVisualGallery />

      {/* 7. WHAT MAKES US DIFFERENT (Typography-driven horizontal brand pillars grid) */}
      <WhatMakesUsDifferent />

      {/* 8. FOR EVERY GENERATION (Terracotta gradient emotional closer) */}
      <ForEveryGeneration />

      {/* 9. FEATURED FAVORITES & DETAILED MENU */}
      <Menu />

      {/* 10. FOOTER (Essential Info, Contacts, Hours & Ordering Channels) */}
      <Footer />
    </div>
  );
}
