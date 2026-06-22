import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroTree from "./HeroTree";
import { ETSY_URL } from "../lib/links";

const word = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 1.9 + i * 0.07 },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const treeY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-lace">
      {/* Background layered shapes */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-lace via-lace to-lace-warm" />
        <div className="absolute -left-32 top-24 w-[520px] h-[520px] rounded-full bg-olive/25 blur-3xl" />
        <div className="absolute -right-40 bottom-10 w-[600px] h-[600px] rounded-full bg-rust/15 blur-3xl" />
      </motion.div>

      {/* Tree graphic — parallaxed; tucked back on small viewports so it doesn't crowd the headline */}
      <motion.div
        style={{ y: treeY }}
        className="absolute right-[-60px] sm:right-[-30px] md:right-0 bottom-0 w-[260px] sm:w-[380px] md:w-[540px] lg:w-[640px] xl:w-[700px] h-[58%] sm:h-[68%] md:h-[78%] lg:h-[82%] opacity-40 sm:opacity-60 md:opacity-90 pointer-events-none"
      >
        <HeroTree className="w-full h-full" />
      </motion.div>

      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Eyebrow */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-36 md:pt-40 flex items-center gap-3"
      >
        <span className="w-8 h-px bg-evergreen/60" />
        <span className="text-[11px] md:text-[12px] uppercase tracking-[0.32em] text-evergreen/80">
          Small batch · Oakville, Ontario
        </span>
      </motion.div>

      {/* Headline */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 mt-8 md:mt-10"
      >
        <h1 className="font-display font-semibold text-evergreen leading-[0.95] tracking-tight text-[15vw] md:text-[10.5vw] lg:text-[9.5vw]">
          {["Rooted", "in", "Nature."].map((w, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                custom={i}
                variants={word}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.8 }}
            className="max-w-md text-evergreen/75 leading-relaxed text-base md:text-lg"
          >
            New studio in Ontario formulating hand-poured soy
            candles and nourishing balms in small batches.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.85, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <a
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-evergreen text-lace px-7 py-4 rounded-full hover:bg-rust transition-colors duration-500"
            >
              <span className="text-[12px] uppercase tracking-[0.28em]">Visit our Etsy</span>
              <span className="w-7 h-7 rounded-full bg-lace text-evergreen flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.25, duration: 1 }}
        className="absolute left-6 md:left-10 bottom-6 md:bottom-8 z-10 flex items-center gap-3 text-evergreen/70"
      >
        <span className="text-[11px] uppercase tracking-[0.28em]">Take a peek</span>
        <span className="block w-10 h-px bg-evergreen/50" />
      </motion.div>
    </section>
  );
}
