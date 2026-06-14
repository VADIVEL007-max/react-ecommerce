import { useEffect, useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

const Offer = () => {
  
  const offers = [
    {
      title: "Save $500 on your new iMac purchase.",
      desc: "Get exclusive discounts and premium Apple performance today.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      badge: "Limited Offer",
    },

    {
      title: "Upgrade your workspace with MacBook Pro.",
      desc: "Powerful performance for developers, designers, and creators.",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
      badge: "Hot Deal",
    },

    {
      title: "Experience ultra-fast gaming monitors.",
      desc: "Smooth visuals with stunning refresh rates and colors.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
      badge: "Gaming",
    },

    {
      title: "Build your dream coding setup today.",
      desc: "Modern desk accessories and powerful productivity tools.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      badge: "Developer",
    },

    {
      title: "Discover next-gen smart devices.",
      desc: "Smart gadgets built for speed, comfort, and innovation.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      badge: "Trending",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offers.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <section className="overflow-hidden bg-[#0f172a] px-4 py-2">
      
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#162033] shadow-2xl">
        
        <AnimatePresence mode="wait">
        <motion.div
  key={current}
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.8 }}
  className="flex flex-row items-center gap-4 p-4 md:gap-6 md:p-6"
>
  {/* Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
    className="w-[35%] overflow-hidden rounded-2xl"
  >
    <motion.img
      src={offers[current].image}
      alt="Offer"
      className="h-[180px] w-full object-cover shadow-2xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    />
  </motion.div>

  {/* Content */}
  <div className="w-[65%]">
    <motion.span
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400"
    >
      {offers[current].badge}
    </motion.span>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-3 text-lg font-bold text-white md:text-2xl"
    >
      {offers[current].title}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-2 text-sm text-gray-400 md:text-base"
    >
      {offers[current].desc}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-4 flex gap-2"
    >
      <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
        Buy Now
      </button>

      <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
        Learn More
      </button>
    </motion.div>
  </div>
        </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 pb-8">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-blue-500"
                  : "w-3 bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;