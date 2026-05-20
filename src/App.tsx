import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, MapPin, Facebook, Instagram, Twitter, ArrowRight, CheckCircle, Menu, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function Header({ activeSection }: { activeSection: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Collection', href: '#collection', id: 'collection' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className="bg-[#0a0a0a]/90 backdrop-blur-md fixed top-0 z-50 border-b border-white/5 shadow-sm w-full h-20 transition-all">
        <div className="w-full mx-auto px-6 md:px-10 flex items-center h-full justify-between lg:justify-start gap-6">
          {/* Brand — left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 min-w-0"
          >
            <img src="/images/logo.png" alt="GTB Logo" className="h-10 w-10 md:h-12 md:w-12 object-cover flex-shrink-0 rounded-full shadow-[0_0_20px_rgba(229,184,105,0.4)] border border-[#E5B869]/20" loading="eager" decoding="async" width="48" height="48" />
            <div className="font-serif text-[11px] sm:text-xs md:text-sm lg:text-lg font-bold uppercase tracking-widest text-[#E5B869] flex flex-col lg:block lg:whitespace-nowrap leading-tight">
              <span>Guru Teg Bahadar</span>
              <span className="text-white lg:ml-2">Furniture House</span>
            </div>
          </motion.div>

          {/* Nav — Desktop */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-1 justify-center gap-10 items-center"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                className={`relative group ${activeSection === link.id ? 'text-[#E5B869]' : 'text-zinc-400'} hover:text-[#E5B869] transition-all duration-300 uppercase text-sm font-semibold tracking-widest`}
                href={link.href}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#E5B869] transition-all duration-300 group-hover:w-full ${activeSection === link.id ? 'w-full' : 'w-0'}`}></span>
              </a>
            ))}
          </motion.nav>

          {/* Book Now — Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center"
          >
            <a
              href="#contact"
              className="bg-[#E5B869] text-[#0a0a0a] px-6 py-2.5 uppercase text-xs font-bold tracking-widest rounded-xl shadow-lg shadow-[#E5B869]/20 hover:bg-white hover:shadow-[#E5B869]/40 transition-all"
            >
              Book Now
            </a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              className="text-white p-2 hover:text-[#E5B869] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-black/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <button
          className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <div className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-serif tracking-[0.2em] uppercase ${activeSection === link.id ? 'text-[#E5B869]' : 'text-white'}`}
              href={link.href}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            onClick={() => setIsMenuOpen(false)}
            href="#contact"
            className="mt-8 bg-[#E5B869] text-[#0a0a0a] px-10 py-4 uppercase text-sm font-bold tracking-widest rounded-xl shadow-xl shadow-[#E5B869]/20"
          >
            Book Now
          </motion.a>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] lg:min-h-screen flex items-center bg-[#0a0a0a] pt-12 pb-12 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 w-full h-full">
        <img
          alt="Luxury bespoke furniture living room interior"
          src="/images/hero_bg_option2.png"
          className="w-full h-full object-cover opacity-75"
          fetchpriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Deep left vignette so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 md:via-[#0a0a0a]/55 to-transparent"></div>
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        {/* Warm gold color wash on the far left edge */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#E5B869]/10 to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center mt-0 lg:-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:max-w-3xl mt-12 md:mt-0"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#E5B869]"></div>
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#E5B869]">Premium Interior Solutions</span>
          </div>
          <h1 className="font-serif text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white mb-4 md:mb-6 drop-shadow-lg">
            Crafting Spaces of <br /><span className="italic font-light text-zinc-400">Distinction.</span>
            <span className="block text-sm md:text-xl font-sans font-light not-italic text-zinc-500 mt-2 md:mt-3 tracking-wide">(Creazione di spazi di distinzione)</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-zinc-300 mb-6 md:mb-10 max-w-lg leading-relaxed font-light">
            From the finest bespoke furniture to meticulous PVC solutions and luxury wallpapers. Elevate your space with unmatched Italian craftsmanship.
            <span className="block text-xs md:text-sm text-zinc-500 mt-2 leading-relaxed font-light">(Dai migliori mobili su misura alle meticolose soluzioni in PVC e carte da parati di lusso.)</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#collection"
              className="bg-[#E5B869] text-[#0a0a0a] font-sans text-xs font-bold tracking-widest uppercase px-8 py-5 hover:bg-white hover:text-[#0a0a0a] transition-all shadow-lg shadow-[#E5B869]/30 hover:shadow-[#E5B869]/60 hover:shadow-xl text-center rounded-xl"
            >
              Discover Collections
              <span className="block text-[10px] font-normal tracking-wide normal-case mt-0.5 opacity-60">(Scopri le Collezioni)</span>
            </a>
            <a href="#contact" className="bg-[#E5B869] text-[#0a0a0a] font-sans text-xs font-bold tracking-widest uppercase px-8 py-5 hover:bg-white hover:text-[#0a0a0a] transition-all shadow-lg shadow-[#E5B869]/30 hover:shadow-[#E5B869]/60 hover:shadow-xl text-center rounded-xl flex flex-col items-center justify-center">
              Book a Consultation
              <span className="text-[10px] font-normal tracking-wide normal-case text-zinc-600 mt-0.5">(Prenota una Consulenza)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface CollectionItem {
  name: string;
  italianName: string;
  desc: string;
  src: string;
}

interface CollectionCategoryProps {
  title: string;
  italianTitle: string;
  bannerSrc: string;
  items: CollectionItem[];
  allImages: string[];
}

function CollectionModal({ isOpen, onClose, title, italianTitle, bannerSrc, images }: { isOpen: boolean, onClose: () => void, title: string, italianTitle: string, bannerSrc: string, images: string[] }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black overflow-y-auto"
        >
          <div className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-zinc-400 hover:text-[#E5B869] transition-colors uppercase tracking-widest font-bold text-xs font-sans"
            >
              <ArrowLeft size={16} /> Back
            </button>
            <div className="font-serif text-white text-lg tracking-wider hidden sm:block">{title}</div>
            <div className="w-20"></div>
          </div>

          <div className="relative h-[30vh] sm:h-[40vh] w-full">
            <img
              src={bannerSrc}
              alt={title}
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-10 left-0 w-full text-center">
              <h2 className="text-4xl md:text-6xl text-white font-serif tracking-widest font-semibold drop-shadow-lg">
                {title}
              </h2>
              <span className="block text-lg md:text-2xl font-sans font-light text-[#E5B869] mt-2 tracking-wide">({italianTitle})</span>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {images.map((src, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (idx % 8) * 0.05 }}
                  key={idx}
                  className="relative aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden border border-white/5 group bg-[#141414]"
                >
                  <img
                    src={src}
                    alt={`${title} ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CollectionCategory({ title, italianTitle, bannerSrc, items, allImages }: CollectionCategoryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mb-24">
      <CollectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        italianTitle={italianTitle}
        bannerSrc={bannerSrc}
        images={allImages}
      />
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px", amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative h-[300px] md:h-[400px] mb-12 overflow-hidden border border-white/5 group rounded-2xl"
      >
        <img
          src={bannerSrc}
          alt={`${title} Banner`}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <h3 className="text-3xl md:text-5xl text-white font-serif tracking-widest font-semibold drop-shadow-md">
            {title}
            <span className="block text-base md:text-xl font-sans font-light not-italic text-zinc-300 mt-2 tracking-wide">({italianTitle})</span>
          </h3>
        </div>
      </motion.div>

      {/* Sub-items */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {items.map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px", amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx}
            className={`group relative bg-[#141414] border border-white/5 overflow-hidden hover:border-[#E5B869]/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-2xl ${idx >= 2 ? 'hidden md:block' : ''}`}
          >
            <div className="w-full h-40 sm:h-64 overflow-hidden relative border-b border-white/5 rounded-t-2xl">
              <img src={item.src} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="p-4 md:p-6 text-left">
              <h4 className="font-serif text-sm md:text-xl font-semibold text-white mb-1 group-hover:text-[#E5B869] transition-colors line-clamp-1">
                {item.name}
                <span className="block text-[9px] md:text-xs text-zinc-500 font-sans font-normal mt-0.5 group-hover:text-zinc-400 transition-colors">({item.italianName})</span>
              </h4>
              <p className="font-sans text-[10px] md:text-sm font-light text-zinc-400 mb-4 md:mb-6 h-12 md:h-10 line-clamp-2 md:line-clamp-none leading-tight md:leading-normal">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {allImages && allImages.length > 0 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 border border-[#E5B869]/50 text-[#E5B869] px-8 py-3 uppercase tracking-widest text-xs font-bold font-sans rounded-xl hover:bg-[#E5B869] hover:text-black transition-all shadow-lg shadow-[#E5B869]/10"
          >
            View Full Gallery <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

function Collections() {
  const generateImages = (prefix: string, count: number, folder: string) => {
    return Array.from({ length: count }, (_, i) => `/collections/${folder}/${prefix} (${i + 1}).jpeg`);
  };

  const allSingleBed = [
    ...Array.from({ length: 4 }, (_, i) => `/collections/single_bed/img4 (${i + 1}).jpeg`),
    ...Array.from({ length: 10 }, (_, i) => `/collections/single_bed/img${i + 1}.jpg`)
  ];
  const allDoubleBed = generateImages("img5", 52, "double_bed");
  const allAlmirah = ["/collections/almirah/frontimage.jpeg", ...generateImages("img1", 43, "almirah")];
  const allStudyTable = generateImages("img_1", 10, "study_table");
  const allLedPanels = generateImages("img3", 20, "led_paneels");
  const allKitchen = generateImages("img2", 23, "kitchen");

  return (
    <section id="collection" className="min-h-screen py-24 flex items-center bg-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#E5B869] mb-4 block">Our Catalog</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-snug text-white mb-4">
            Explore Our Collections
          </h2>
          <div className="w-24 h-1 bg-[#E5B869] mx-auto mt-4"></div>
        </motion.div>

        <CollectionCategory
          title="Single Bed"
          italianTitle="Letto Singolo"
          bannerSrc="/collections/single_bed/img4 (3).jpeg"
          allImages={allSingleBed}
          items={[
            { name: "Classic Single", italianName: "Singolo Classico", desc: "Elegant design for cozy spaces.", src: "/collections/single_bed/img4 (2).jpeg" },
            { name: "Modern Single", italianName: "Singolo Moderno", desc: "Minimalist approach for modern rooms.", src: "/collections/single_bed/img4 (3).jpeg" },
            { name: "Premium Single", italianName: "Singolo Premium", desc: "Luxurious feel with high-end finish.", src: "/collections/single_bed/img4 (4).jpeg" },
            { name: "Comfort Single", italianName: "Singolo Comfort", desc: "Maximum comfort with a sleek look.", src: "/collections/single_bed/img4 (1).jpeg" }
          ]}
        />

        <CollectionCategory
          title="Double Bed"
          italianTitle="Letto Matrimoniale"
          bannerSrc="/collections/double_bed/img5 (2).jpeg"
          allImages={allDoubleBed}
          items={[
            { name: "Luxury Double", italianName: "Matrimoniale Lusso", desc: "Spacious luxury with premium headboards.", src: "/collections/double_bed/img5 (2).jpeg" },
            { name: "Classic Double", italianName: "Matrimoniale Classico", desc: "Timeless design for any bedroom.", src: "/collections/double_bed/img5 (3).jpeg" },
            { name: "Modern Double", italianName: "Matrimoniale Moderno", desc: "Sleek and contemporary bed frame.", src: "/collections/double_bed/img5 (4).jpeg" },
            { name: "Royal Double", italianName: "Matrimoniale Reale", desc: "Exquisite detailing and ultimate comfort.", src: "/collections/double_bed/img5 (5).jpeg" }
          ]}
        />

        <CollectionCategory
          title="Wardrobe (Almirah)"
          italianTitle="Armadio"
          bannerSrc="/collections/almirah/frontimage.jpeg"
          allImages={allAlmirah}
          items={[
            { name: "Sliding Wardrobe", italianName: "Armadio Scorrevole", desc: "Space-saving design with smooth glide.", src: "/collections/almirah/img1 (2).jpeg" },
            { name: "Classic Almirah", italianName: "Armadio Classico", desc: "Traditional elegance with ample storage.", src: "/collections/almirah/img1 (3).jpeg" },
            { name: "Modern Wardrobe", italianName: "Armadio Moderno", desc: "Contemporary look with custom compartments.", src: "/collections/almirah/img1 (4).jpeg" },
            { name: "Premium Almirah", italianName: "Armadio Premium", desc: "High-end finish with built-in mirrors.", src: "/collections/almirah/img1 (5).jpeg" }
          ]}
        />

        <CollectionCategory
          title="Dressing & Study Table"
          italianTitle="Tavolo da Trucco e Studio"
          bannerSrc="/collections/study_table/img_1 (1).jpeg"
          allImages={allStudyTable}
          items={[
            { name: "Modern Study Table", italianName: "Tavolo Studio Moderno", desc: "Sleek and functional workspace.", src: "/collections/study_table/img_1 (2).jpeg" },
            { name: "Classic Dressing Table", italianName: "Tavolo Trucco Classico", desc: "Elegant design with ample storage.", src: "/collections/study_table/img_1 (3).jpeg" },
            { name: "Premium Desk", italianName: "Scrivania Premium", desc: "Luxurious finish for your home office.", src: "/collections/study_table/img_1 (4).jpeg" },
            { name: "Compact Study Table", italianName: "Tavolo Studio Compatto", desc: "Space-saving setup for small rooms.", src: "/collections/study_table/img_1 (5).jpeg" }
          ]}
        />

        <CollectionCategory
          title="LCD / TV Panels"
          italianTitle="Pannelli TV"
          bannerSrc="/collections/led_paneels/img3 (4).jpeg"
          allImages={allLedPanels}
          items={[
            { name: "Modern TV Panel", italianName: "Pannello TV Moderno", desc: "Sleek and minimal for living rooms.", src: "/collections/led_paneels/img3 (2).jpeg" },
            { name: "Luxury Media Wall", italianName: "Parete Attrezzata Lusso", desc: "Integrated lighting and premium materials.", src: "/collections/led_paneels/img3 (3).jpeg" },
            { name: "Classic Entertainment Unit", italianName: "Unità Intrattenimento Classica", desc: "Timeless design with ample storage.", src: "/collections/led_paneels/img3 (4).jpeg" },
            { name: "Floating TV Unit", italianName: "Mobile TV Sospeso", desc: "Space-saving contemporary style.", src: "/collections/led_paneels/img3 (5).jpeg" }
          ]}
        />

        <CollectionCategory
          title="Kitchen"
          italianTitle="Cucina"
          bannerSrc="/collections/kitchen/img2 (18).jpeg"
          allImages={allKitchen}
          items={[
            { name: "Modular Kitchen", italianName: "Cucina Componibile", desc: "Efficient and smart modular layouts.", src: "/collections/kitchen/img2 (2).jpeg" },
            { name: "Luxury Kitchen", italianName: "Cucina di Lusso", desc: "Premium finishes and high-end materials.", src: "/collections/kitchen/img2 (3).jpeg" },
            { name: "Modern Kitchen", italianName: "Cucina Moderna", desc: "Sleek, handleless designs for contemporary homes.", src: "/collections/kitchen/img2 (4).jpeg" },
            { name: "Classic Kitchen", italianName: "Cucina Classica", desc: "Traditional charm with modern amenities.", src: "/collections/kitchen/img2 (5).jpeg" }
          ]}
        />
      </div>
    </section>
  );
}


function Services() {
  const services = [
    {
      title: "Custom Beds", italianTitle: "Letti Personalizzati", sub: "Furniture Craft", italianSub: "Artigianato Mobili",
      desc: "Handcrafted bed furniture tailored to your bedroom's aesthetic, combining durable materials with elegant designs.",
      src: "/collections/double_bed/img5 (8).jpeg"
    },
    {
      title: "Custom Wardrobes", italianTitle: "Armadi Su Misura", sub: "Storage Solutions", italianSub: "Soluzioni Salvaspazio",
      desc: "Bespoke wardrobe designs tailored to maximize your space while maintaining a sleek, modern aesthetic.",
      src: "/collections/almirah/img1 (8).jpeg"
    },
    {
      title: "PVC Solutions", italianTitle: "Soluzioni PVC", sub: "Floor & Ceiling", italianSub: "Pavimento & Soffitto",
      desc: "Premium PVC flooring and stylish ceiling designs, perfect for modernizing kitchens and living spaces.",
      src: "/images/service_pvc_solutions.png"
    },
    {
      title: "Wallpapers", italianTitle: "Carta da Parati", sub: "Wall Decor", italianSub: "Decorazione Pareti",
      desc: "A vast collection of luxurious and contemporary wallpapers to transform ordinary walls into stunning focal points.",
      src: "/collections/wallpaper_main.avif"
    },
    {
      title: "LED Panels", italianTitle: "Pannelli LED", sub: "Lighting & Display", italianSub: "Illuminazione & Design",
      desc: "Custom stylish LED panels for walls and ceilings that create an inviting ambiance and elevate your room's decor.",
      src: "/collections/led_paneels/img3 (11).jpeg"
    }
  ];

  return (
    <>
      <section id="services" className="bg-black py-32 text-white border-t border-white/5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#E5B869] mb-4 block">Our Expertise</span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight leading-snug text-white mb-4">
              Professional Services
            </h2>
            <div className="w-16 h-1 bg-[#E5B869] mx-auto opacity-70"></div>
          </motion.div>

          <div className="flex flex-col gap-32 md:gap-48">
            {services.map((srv, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px", amount: 0.2 }}
                transition={{ duration: 0.8 }}
                key={idx}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
              >
                {/* Content Area */}
                <div className="flex-1 text-left flex flex-col">
                  <div className="order-1">
                    <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#E5B869] mb-2 block">{srv.sub}</span>
                    <span className="font-sans text-[10px] text-zinc-600 tracking-wide mb-6 block">({srv.italianSub})</span>
                  </div>

                  {/* Mobile Image Area - Visible only on mobile */}
                  <div className="md:hidden order-2 mb-10 relative group">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                      <img
                        src={srv.src}
                        alt={srv.title}
                        className="w-full h-[300px] object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute -inset-2 border border-[#E5B869]/10 rounded-2xl -z-0"></div>
                  </div>

                  <div className="order-3">
                    <h3 className="font-serif text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
                      {srv.title}
                      <span className="block text-lg md:text-2xl text-zinc-500 font-sans font-light mt-2">({srv.italianTitle})</span>
                    </h3>

                    <p className="font-sans text-lg text-zinc-400 leading-relaxed font-light mb-10 max-w-xl">
                      {srv.desc}
                    </p>
                  </div>


                </div>

                {/* Desktop Image Area - Visible only on desktop */}
                <div className="hidden md:block flex-1 w-full relative group">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl z-10 group">
                    <img
                      src={srv.src}
                      alt={srv.title}
                      className="w-full h-[300px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Decorative border accent */}
                  <div className={`absolute -inset-4 border border-[#E5B869]/10 rounded-2xl -z-0 group-hover:-inset-6 group-hover:border-[#E5B869]/20 transition-all duration-700`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Craftsmanship() {
  return (
    <section className="min-h-screen py-32 bg-[#121212] flex items-center border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-16 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="relative">
            <img
              alt="Artisan hands carefully polishing a piece of dark solid wood with natural wax in a traditional workshop"
              src="/images/craftsmanship.jpg"
              className="w-full h-[400px] md:h-[600px] object-cover border border-white/10 shadow-2xl opacity-90 rounded-2xl"
              loading="lazy"
              decoding="async"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#E5B869] p-6 lg:p-8 text-[#0a0a0a] max-w-[200px] sm:max-w-[240px] shadow-2xl rounded-2xl"
            >
              <p className="font-serif text-5xl font-bold">10+</p>
              <p className="font-sans text-xs font-bold tracking-widest uppercase mt-2">Years of Excellence</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mt-16 md:mt-0 lg:pl-12"
        >
          <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#E5B869] mb-4 block">Our Process</span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight leading-snug text-white mb-6">
            From Vision to <span className="block text-2xl font-light italic mt-2 text-zinc-400">Finished Masterpiece</span>
          </h2>
          <p className="font-sans text-base text-zinc-400 mb-10 leading-relaxed font-light">
            Every project starts with an understanding of your unique space. We source the best materials—from premium fabrics for beds to high-grade PVC, elegant wallpapers, and efficient LED lighting—and apply our expert craftsmanship to transform your home.
          </p>
          <ul className="space-y-8">
            <li className="flex gap-6 items-start">
              <span className="bg-[#1a1a1a] text-[#E5B869] border border-white/10 w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0 rounded-sm">01</span>
              <div>
                <h5 className="font-sans text-sm font-bold tracking-widest uppercase text-white">Material Sourcing</h5>
                <p className="font-sans text-sm text-zinc-400 mt-2 leading-relaxed font-light">Selecting finest fabrics, durable PVC, premium wallpapers, and modern LED systems.</p>
              </div>
            </li>
            <li className="flex gap-6 items-start">
              <span className="bg-[#1a1a1a] text-[#E5B869] border border-white/10 w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0 rounded-sm">02</span>
              <div>
                <h5 className="font-sans text-sm font-bold tracking-widest uppercase text-white">Precision Crafting</h5>
                <p className="font-sans text-sm text-zinc-400 mt-2 leading-relaxed font-light">Meticulous furniture assembly and flawless installation of ceilings and wall units.</p>
              </div>
            </li>
            <li className="flex gap-6 items-start">
              <span className="bg-[#1a1a1a] text-[#E5B869] border border-white/10 w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0 rounded-sm">03</span>
              <div>
                <h5 className="font-sans text-sm font-bold tracking-widest uppercase text-white">The Final Touches</h5>
                <p className="font-sans text-sm text-zinc-400 mt-2 leading-relaxed font-light">Perfecting the ambiance with modern lighting and seamless finishes.</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the message for WhatsApp
    const message = `Hello Guru Teg Bahadar Furniture House, I'm interested in your services.
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Service:* ${formData.service}
*Project Details:* ${formData.message}`;

    // WhatsApp URL (Gurjeet Singh: +39 389 038 3360)
    const whatsappUrl = `https://wa.me/393890383360?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <section className="bg-[#0a0a0a] py-32 min-h-screen flex items-center border-t border-white/5 relative overflow-hidden" id="contact">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8 }}
        className="max-w-[800px] mx-auto px-4 md:px-16 w-full relative z-10 text-center">
        <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#E5B869] mb-4 block">Connect &amp; Booking</span>
        <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-snug text-white mb-6">
          Start Your Journey <br /> <span className="font-light italic text-zinc-400">With Us</span>
        </h2>
        <p className="font-sans text-lg text-zinc-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
          Book a consultation or inquire about our premium packages. Share your details, and our dedicated team will be in touch to discuss your vision.
        </p>
        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 bg-[#141414] border border-[#E5B869]/40 p-12 shadow-2xl rounded-2xl">
            <CheckCircle size={60} className="text-[#E5B869]" />
            <h3 className="font-serif text-3xl font-semibold text-white">Inquiry Received!</h3>
            <p className="font-sans text-zinc-400 font-light max-w-sm leading-relaxed">
              Thank you for reaching out. We have opened a WhatsApp chat with our team for you. We will contact you within 24 hours to discuss your project.
            </p>
            <p className="font-sans text-xs text-zinc-500 tracking-widest">(Grazie! Ti contatteremo entro 24 ore.)</p>
            <button onClick={() => setSubmitted(false)}
              className="mt-2 border border-[#E5B869] text-[#E5B869] px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#E5B869] hover:text-[#0a0a0a] transition-all rounded-xl">
              Send Another Inquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full text-left bg-[#141414] p-8 md:p-12 border border-white/10 shadow-2xl rounded-2xl">
            <input name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-[#1a1a1a] border border-white/10 px-6 py-4 text-white hover:border-[#E5B869]/50 transition-colors focus:border-[#E5B869] focus:outline-none placeholder-zinc-500 font-light rounded-xl" placeholder="Full Name" type="text" required />
            <input name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#1a1a1a] border border-white/10 px-6 py-4 text-white hover:border-[#E5B869]/50 transition-colors focus:border-[#E5B869] focus:outline-none placeholder-zinc-500 font-light rounded-xl" placeholder="Email Address" type="email" required />
            <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-[#1a1a1a] border border-white/10 px-6 py-4 text-zinc-300 hover:border-[#E5B869]/50 transition-colors focus:border-[#E5B869] focus:outline-none focus:text-white font-light rounded-xl appearance-none" required>
              <option value="" disabled>Select Service Interest</option>
              <option value="Beds & Sofas">Beds &amp; Sofas Packages</option>
              <option value="PVC Solutions">Premium PVC Solutions</option>
              <option value="Wallpapers">Luxury Wallpapers</option>
              <option value="LED Panels">Custom LED Panels</option>
              <option value="Full Renovation">Full Interior Renovation</option>
              <option value="Other">Other Inquiry</option>
            </select>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full bg-[#1a1a1a] border border-white/10 px-6 py-4 text-white hover:border-[#E5B869]/50 transition-colors focus:border-[#E5B869] focus:outline-none placeholder-zinc-500 font-light rounded-xl min-h-[140px] resize-none" placeholder="Tell us about your project..." required></textarea>
            <button type="submit" className="w-full bg-[#E5B869] text-[#0a0a0a] mt-2 px-8 py-5 font-sans text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors rounded-xl shadow-xl shadow-[#E5B869]/20 hover:shadow-[#E5B869]/40 flex items-center justify-center gap-3">
              Submit & Start Chat <ArrowRight size={18} />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black pt-20 pb-12 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-16 text-left">

          {/* Left Column - Brand & Mission */}
          <div className="flex-1 max-w-md">
            <div className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#E5B869] mb-4">
              Guru Teg Bahadar Furniture House
            </div>
            <div className="font-sans text-xs tracking-[0.2em] text-zinc-500 font-bold mb-8 uppercase">
              Interior Solutions
            </div>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light mb-8 max-w-sm">
              Dedicated to crafting spaces that inspire. Our mission is to bring Italian elegance and superior craftsmanship to every home, one bespoke piece at a time.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/casa_boutique_woodwork?igsh=Y2RodzM3eTU1emRp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:border-[#E5B869] hover:text-[#E5B869] transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@Casaboutique001" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:border-[#E5B869] hover:text-[#E5B869] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14.99.13 2.02.74 2.8.59.75 1.48 1.21 2.43 1.28.81.06 1.64-.15 2.34-.57.78-.44 1.34-1.2 1.54-2.07.05-1.04.03-2.09.03-3.13.01-4.77-.01-9.54.01-14.31z" />
                </svg>
              </a>
              <a href="https://wa.me/393890383360" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:border-[#E5B869] hover:text-[#E5B869] transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Right Column - Contact & Address */}
          <div className="md:text-right flex-shrink-0">
            <h5 className="font-sans tracking-[0.2em] uppercase text-[10px] font-bold text-white mb-8">Visit & Contact</h5>
            <div className="font-sans text-sm font-light text-zinc-400 space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-[#E5B869] text-[10px] font-bold uppercase tracking-widest mb-1">Address</span>
                <span className="text-zinc-300 font-normal">Camp di Carne, 04011 Aprilia (LT), Italy</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#E5B869] text-[10px] font-bold uppercase tracking-widest mb-1">Direct Lines</span>
                <a href="tel:+393890383360" className="hover:text-white transition-colors block">Gurjeet Singh: +39 389 038 3360</a>
                <a href="tel:+393292022929" className="hover:text-white transition-colors block">Pardeep Singh: +39 329 202 2929</a>
                <a href="tel:+393532113598" className="hover:text-white transition-colors block">Arshdeep Singh: +39 353 211 3598</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#E5B869] text-[10px] font-bold uppercase tracking-widest mb-1">Email Inquiry</span>
                <a href="mailto:singhgurjit2477@gmail.com" className="hover:text-white transition-colors">singhgurjit2477@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[9px] tracking-widest uppercase text-zinc-600 text-center md:text-left">
            © {new Date().getFullYear()} Guru Teg Bahadar Furniture House. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-zinc-600 font-sans text-[9px] tracking-widest uppercase">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const testimonials = [
  {
    text: "The custom bed they crafted for us exceeded all expectations. The level of detail and quality of the wood is unparalleled.",
    image: "/images/testimonial_1.jpg",
    name: "Elena Rossi",
    role: "Homeowner",
  },
  {
    text: "Our living room transformation was incredible. The PVC wall cladding and LED panels completely modernized the space.",
    image: "/images/testimonial_2.jpg",
    name: "Marcus Thorne",
    role: "Real Estate Developer",
  },
  {
    text: "Professional, punctual, and true artists. The luxury wallpapers they installed in our dining room are a constant conversation starter.",
    image: "/images/testimonial_3.jpg",
    name: "Sophia Chen",
    role: "Interior Designer",
  },
  {
    text: "From consultation to final installation, the team was flawless. The bespoke sofa is both incredibly comfortable and a visual masterpiece.",
    image: "/images/testimonial_4.jpg",
    name: "James Arthur",
    role: "Architect",
  },
  {
    text: "We hired them for a full interior renovation and they delivered absolute perfection. The attention to detail is truly Italian craftsmanship.",
    image: "/images/testimonial_5.jpg",
    name: "Isabella Martinez",
    role: "Boutique Owner",
  },
  {
    text: "The LED ceiling integration they did for our home office is spectacular. It changes the whole mood of the room.",
    image: "/images/testimonial_6.jpg",
    name: "David Kim",
    role: "Tech Executive",
  },
  {
    text: "Exceptional quality and service. They understand space and luxury better than anyone else we've worked with.",
    image: "/images/testimonial_7.jpg",
    name: "Oliver Smith",
    role: "Hotel Manager",
  },
  {
    text: "The textured linen wallpapers brought such warmth to our bedroom. Highly recommend their premium materials and installation.",
    image: "/images/testimonial_8.jpg",
    name: "Emma Wilson",
    role: "Client",
  },
  {
    text: "Beautifully handcrafted furniture. You can tell they put their heart and soul into every piece they create.",
    image: "/images/testimonial_9.jpg",
    name: "Liam O'Connor",
    role: "Cafe Owner",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 45,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 border border-white/5 bg-[#141414] hover:border-[#E5B869]/50 transition-all duration-300 max-w-xs w-full shadow-lg rounded-2xl" key={i}>
                  <div className="font-sans text-zinc-300 font-light text-sm leading-relaxed">{text}</div>
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex flex-col">
                      <div className="font-serif font-medium tracking-wide text-white">{name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#E5B869] mt-1">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-[#0a0a0a] py-32 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-[1280px] z-10 mx-auto px-4 md:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center mb-16"
        >
          <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#E5B869] mb-4 block">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight leading-snug text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-zinc-400 mt-5 font-light leading-relaxed mx-auto text-sm">
            Discover what our clients have to say about our craftsmanship and commitment to excellence.
          </p>
          <div className="w-16 h-1 bg-[#E5B869] mx-auto mt-8 opacity-70"></div>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={35} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={45} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={40} />
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'collection', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white font-sans overflow-x-hidden min-h-screen selection:bg-[#E5B869] selection:text-[#0a0a0a]">
      <Header activeSection={activeSection} />
      <main className="pt-20">
        <Hero />
        <Services />
        <Collections />
        <Testimonials />
        <Craftsmanship />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
