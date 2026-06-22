import { motion } from "framer-motion";
import { ETSY_URL } from "../lib/links";

export default function Newsletter() {
  return (
    <section id="newsletter" className="relative bg-rust text-lace py-28 md:py-36 overflow-hidden">
      <div className="grain absolute inset-0" />
      <div className="absolute -left-32 -top-24 w-[420px] h-[420px] rounded-full bg-rust-dark/40 blur-3xl" />
      <div className="absolute -right-40 -bottom-20 w-[520px] h-[520px] rounded-full bg-evergreen/30 blur-3xl" />

      <div className="relative mx-auto max-w-[900px] px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-px bg-lace/60" />
          <span className="text-[11px] uppercase tracking-[0.32em] text-lace/80">Now on Etsy</span>
          <span className="w-8 h-px bg-lace/60" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance"
        >
          Find us <span className="italic font-medium">on Etsy.</span>
        </motion.h2>

        <p className="mt-6 md:mt-8 text-lace/80 max-w-md mx-auto text-[15px] md:text-base leading-relaxed">
          Our small Etsy storefront is where the first batches go live. Follow
          along, favourite the shop, and you'll be among the first to know when
          something new arrives.
        </p>

        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-lace text-rust pl-7 pr-2 py-2 rounded-full hover:bg-evergreen hover:text-lace transition-colors duration-500"
          >
            <span className="text-[12px] uppercase tracking-[0.28em] py-2">
              Visit earthynotesco
            </span>
            <span className="w-10 h-10 rounded-full bg-rust text-lace flex items-center justify-center group-hover:rotate-45 group-hover:bg-lace group-hover:text-evergreen transition-all duration-500">
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </a>
        </div>

        <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-lace/50">
          etsy.com/shop/earthynotesco
        </p>
      </div>
    </section>
  );
}
