import { FolkDivider, KolamCenter, FolkCornerMandala } from './FolkArt';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-offwhite text-charcoal pt-12 md:pt-16 pb-8 md:pb-8 px-4 md:px-8 relative overflow-hidden grainy-bg">
      {/* Handcrafted drifting corner mandalas (opacity < 10%, slow rotating + parallax drift) */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-[0.06] text-warmcream pointer-events-none z-0 animate-footer-mandala-cw w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">
        <FolkCornerMandala className="w-full h-full" />
      </div>

      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-[0.06] text-warmcream pointer-events-none z-0 animate-footer-mandala-ccw w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">
        <FolkCornerMandala className="w-full h-full" />
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-warmcream/10 pointer-events-none hidden md:block"></div>
      <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-warmcream/10 pointer-events-none hidden md:block"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Top Decorative Motif */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-16">
          <KolamCenter className="w-16 h-16 text-warmcream animate-slow-spin-cw opacity-90" />
          <h2 className="font-serif text-3xl md:text-4xl text-warmcream font-semibold mt-4 tracking-wider">INGU CAFE</h2>
          <span className="text-[10px] font-sans tracking-[0.45em] text-charcoal/50 uppercase mt-1">Mysuru's Kitchen Legacy</span>
          <FolkDivider color="#E9D8C7" className="mt-5 max-w-lg opacity-75" />
        </div>

        {/* ─── DESKTOP FOOTER COLUMNS (>=768px) ────────────────────────── */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Column 1: Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-warmcream tracking-wide uppercase">Opening Hours</h4>
            <div className="font-sans text-sm text-charcoal/70 space-y-3">
              <div>
                <p className="font-semibold text-warmcream">Tuesday – Sunday</p>
                <p className="mt-0.5">7:00 AM – 10:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-terracotta">Monday</p>
                <p className="mt-0.5 text-charcoal/50">Closed</p>
              </div>
              <p className="text-xs text-charcoal/50 leading-relaxed border-t border-warmcream/10 pt-3 mt-1">
                Traditional breakfast service begins early each morning. Visit throughout the day for South Indian favourites, sandwiches, desserts and beverages.
              </p>
            </div>
          </div>

          {/* Column 2: Visit Us */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-warmcream tracking-wide uppercase">Visit Us</h4>
            <div className="font-sans text-sm text-charcoal/70 space-y-4 leading-relaxed">
              <p>
                #2993, 10A, 4th Main,<br />
                Kukkarahalli,<br />
                Saraswathipuram,<br />
                Mysuru,<br />
                Karnataka 570009
              </p>
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/place/THE+INGU+CAFE/@12.3054191,76.6270433,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf7b8ff1b632cf:0xd90d3d1638f533b4!8m2!3d12.3054191!4d76.6270433!16s%2Fg%2F11n4n81cwt?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wider text-terracotta hover:text-warmcream uppercase transition-colors group"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-warmcream tracking-wide uppercase">Contact</h4>
            <div className="font-sans text-sm text-charcoal/70 space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-charcoal/40 uppercase tracking-widest font-semibold">Phone</span>
                <a href="tel:+919686710528" className="hover:text-warmcream transition-colors font-medium">
                  +91 9686710528
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-charcoal/40 uppercase tracking-widest font-semibold">Email</span>
                <a href="mailto:hello@ingucafe.com" className="hover:text-warmcream transition-colors font-medium break-all">
                  hello@ingucafe.com
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-charcoal/40 uppercase tracking-widest font-semibold">Instagram</span>
                <a
                  href="https://instagram.com/ingucafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warmcream transition-colors font-medium inline-flex items-center gap-1 group w-max"
                >
                  <span>@ingucafe</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Find Us */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-warmcream tracking-wide uppercase">Find Us</h4>
            <div className="relative rounded-md overflow-hidden border border-terracotta/25 shadow-[0_6px_16px_rgba(0,0,0,0.2)] group aspect-video lg:aspect-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.13426744878!2d76.62485461141785!3d12.305419099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b8ff1b632cf%3A0xd90d3d1638f533b4!2sTHE%20INGU%20CAFE!5e0!3m2!1sen!2sin!4v1718615000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ingu Cafe Location Map"
                className="w-full h-[220px] filter brightness-[0.93] contrast-[1.03] group-hover:brightness-100 transition-all duration-500"
              ></iframe>
              <a
                href="https://www.google.com/maps/place/THE+INGU+CAFE/@12.3054191,76.6270433,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf7b8ff1b632cf:0xd90d3d1638f533b4!8m2!3d12.3054191!4d76.6270433!16s%2Fg%2F11n4n81cwt?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-transparent pointer-events-auto z-20 cursor-pointer md:pointer-events-none"
                aria-label="View large map in Google Maps"
              ></a>
            </div>
          </div>

        </div>

        {/* ─── MOBILE FOOTER LAYOUT (<768px) ─────────────────────────── */}
        <div className="flex flex-col items-center space-y-6 md:hidden pb-6 text-center">
          {/* Items 1 & 2 (Logo & Cafe Info) are handled by the main top header container above */}

          {/* 3. Address (Visit Us) */}
          <div className="space-y-1.5 px-4">
            <h4 className="font-serif text-[13px] font-bold text-warmcream tracking-widest uppercase">Visit Us</h4>
            <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
              #2993, 10A, 4th Main, Kukkarahalli,<br />
              Saraswathipuram, Mysuru, Karnataka 570009
            </p>
            <div className="pt-0.5">
              <a
                href="https://www.google.com/maps/place/THE+INGU+CAFE/@12.3054191,76.6270433,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf7b8ff1b632cf:0xd90d3d1638f533b4!8m2!3d12.3054191!4d76.6270433!16s%2Fg%2F11n4n81cwt?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[12px] font-sans font-semibold tracking-wider text-terracotta hover:text-warmcream uppercase"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-2.5 h-2.5 text-terracotta" />
              </a>
            </div>
          </div>

          {/* 4. Embedded Map (Responsive, rounded corners, shorter height scaled by 10%) */}
          <div className="w-full max-w-sm px-4">
            <div className="relative rounded-2xl overflow-hidden border border-terracotta/15 shadow-[0_4px_12px_rgba(0,0,0,0.2)] h-[135px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.13426744878!2d76.62485461141785!3d12.305419099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b8ff1b632cf%3A0xd90d3d1638f533b4!2sTHE%20INGU%20CAFE!5e0!3m2!1sen!2sin!4v1718615000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ingu Cafe Mobile Location Map"
                className="w-full h-full filter brightness-[0.93] contrast-[1.03]"
              ></iframe>
              <a
                href="https://www.google.com/maps/place/THE+INGU+CAFE/@12.3054191,76.6270433,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf7b8ff1b632cf:0xd90d3d1638f533b4!8m2!3d12.3054191!4d76.6270433!16s%2Fg%2F11n4n81cwt?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-transparent pointer-events-auto z-20 cursor-pointer"
                aria-label="View large map in Google Maps"
              ></a>
            </div>
          </div>

          {/* 5, 6, 7. Compact 3-Column Contact Grid */}
          <div className="grid grid-cols-3 w-full max-w-sm divide-x divide-warmcream/10 text-center px-2">
            {/* Phone Column */}
            <div className="px-1">
              <a href="tel:+919686710528" className="group block">
                <div className="w-9 h-9 rounded-full border border-warmcream/15 flex items-center justify-center text-warmcream mx-auto mb-1.5 group-hover:border-terracotta group-hover:text-terracotta transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-charcoal/40 block mb-0.5 font-bold">Phone</span>
                <span className="text-[12px] font-sans text-warmcream/90 font-semibold group-hover:text-terracotta transition-colors block leading-tight">
                  +91 9686710528
                </span>
              </a>
            </div>

            {/* Email Column */}
            <div className="px-1">
              <a href="mailto:hello@ingucafe.com" className="group block">
                <div className="w-9 h-9 rounded-full border border-warmcream/15 flex items-center justify-center text-warmcream mx-auto mb-1.5 group-hover:border-terracotta group-hover:text-terracotta transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-charcoal/40 block mb-0.5 font-bold">Email</span>
                <span className="text-[11px] font-sans text-warmcream/90 font-semibold group-hover:text-terracotta transition-colors block leading-tight break-all">
                  hello@ingucafe.com
                </span>
              </a>
            </div>

            {/* Instagram Column */}
            <div className="px-1">
              <a href="https://instagram.com/ingucafe" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="w-9 h-9 rounded-full border border-warmcream/15 flex items-center justify-center text-warmcream mx-auto mb-1.5 group-hover:border-terracotta group-hover:text-terracotta transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-charcoal/40 block mb-0.5 font-bold">Instagram</span>
                <span className="text-[12px] font-sans text-warmcream/90 font-semibold group-hover:text-terracotta transition-colors block leading-tight">
                  @ingucafe
                </span>
              </a>
            </div>
          </div>

          {/* 8. Opening Hours (Compact Card) */}
          <div className="border border-warmcream/10 rounded-2xl bg-black/10 py-3 px-5 w-full max-w-sm mx-auto space-y-1.5">
            <div className="flex items-center justify-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-warmcream/80"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span className="font-serif text-[13px] font-bold text-warmcream tracking-widest uppercase">Opening Hours</span>
            </div>
            <div className="font-sans text-[12px] sm:text-[13px] text-charcoal/85 flex justify-center gap-x-2 items-center leading-none">
              <span>Tue – Sun  |  7:00 AM – 10:00 PM</span>
              <span className="text-charcoal/20">|</span>
              <span className="text-terracotta font-semibold">Mon  |  Closed</span>
            </div>
          </div>

          {/* 9. Copyright */}
          <div className="flex flex-col items-center gap-1.5 pt-3 w-full px-6">
            <div className="h-[1px] w-12 bg-warmcream/15 mb-1.5"></div>
            <span className="text-[11px] font-sans text-charcoal/40">© 2026 Ingu Cafe. All Rights Reserved.</span>
            <span className="italic font-serif text-[12px] text-warmcream/60">"Rooted in tradition. Crafted for every generation."</span>
          </div>

        </div>

        {/* Bottom Bar with thin divider line (Desktop Only) */}
        <div className="border-t border-warmcream/10 pt-8 mt-4 hidden md:flex flex-row justify-between items-center text-xs font-sans text-charcoal/45 gap-4">
          <div>
            <span>© 2026 Ingu Cafe. All Rights Reserved.</span>
          </div>

          {/* Tagline */}
          <div>
            <span className="italic font-serif text-sm tracking-wide text-warmcream/80">"Rooted in tradition. Crafted for every generation."</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
