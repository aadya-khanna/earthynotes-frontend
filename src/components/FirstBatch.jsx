import { motion } from "framer-motion";
import { ETSY_URL } from "../lib/links";

const teasers = [
  {
    n: "01",
    type: "Car Perfume",
    name: "VARUNA",
    notes: "Sweet Orange · Cinnamon",
    bg: "#7D8566",
    accent: "#FEF1E1",
    label: "#203127",
  },
  {
    n: "02",
    type: "Nourishing Hand Balm",
    name: "ROSA BAGH",
    notes: "Indian rose · Lime",
    bg: "#FEF1E1",
    accent: "#994633",
    label: "#203127",
  },
  {
    n: "03",
    type: "Wardrobe Freshener",
    name: "AMAAL",
    notes: "Pure Indian Sandalwood",
    bg: "#203127",
    accent: "#7D8566",
    label: "#FEF1E1",
  },
  {
    n: "04",
    type: "Solid Perfume",
    name: "MALAYAJ",
    notes: "Pure Indian Sandalwood",
    bg: "#994633",
    accent: "#FEF1E1",
    label: "#203127",
  },
];

function TeaserCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className="relative aspect-[4/5] rounded-[20px] overflow-hidden"
        style={{ background: item.bg }}
      >
        <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id={`fb${index}`} cx="0.5" cy="0.3" r="0.7">
              <stop offset="0%" stopColor={item.accent} stopOpacity="0.35" />
              <stop offset="100%" stopColor={item.accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="500" fill={`url(#fb${index})`} />

          {/* silhouetted vessel — softer/unfinished look for teaser */}
          <motion.g
            initial={false}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "200px 320px" }}
          >
            <ellipse cx="200" cy="430" rx="105" ry="14" fill="#000" fillOpacity="0.18" />
            <rect x="115" y="200" width="170" height="220" rx="12" fill={item.accent} fillOpacity="0.18" stroke={item.accent} strokeOpacity="0.55" strokeWidth="1.2" strokeDasharray="4 6" />
            <text x="200" y="316" textAnchor="middle" fontFamily="Pilcrow Rounded, serif" fontWeight="600" fontSize="13" fill={item.accent} letterSpacing="3" opacity="0.7">COMING SOON</text>
          </motion.g>

          <g stroke={item.accent} strokeOpacity="0.4" fill="none" strokeWidth="1">
            <path d="M70 100c20 20 40 30 60 32M330 100c-20 20-40 30-60 32" />
            <path d="M85 90c8 4 16 6 22 6M315 90c-8 4-16 6-22 6" />
          </g>
        </svg>

        <div className="grain absolute inset-0 pointer-events-none" />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display font-semibold text-evergreen text-xl md:text-2xl tracking-tight">
            {item.name}
          </h3>
          <p className="mt-1 text-[12px] uppercase tracking-[0.22em] text-evergreen/60">
            {item.type}
          </p>
          <p className="mt-3 text-sm text-evergreen/70 max-w-[26ch]">{item.notes}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function FirstBatch() {
  return (
    <section id="first-batch" className="relative bg-lace py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-rust" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-rust">A First Look</span>
            </div>
            <h2 className="font-display font-semibold text-evergreen text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance max-w-3xl">
              The first batch, <br className="hidden md:block" />
              <span className="italic font-medium text-rust">in the making.</span>
            </h2>
          </div>
          <p className="text-evergreen/70 max-w-sm text-[15px] md:text-base">
            A small preview of what we're formulating right now. Final scents,
            sizes and packaging are still being perfected!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teasers.map((t, i) => (
            <TeaserCard key={t.n} item={t} index={i} />
          ))}
        </div>

        <div className="mt-20 md:mt-24 border-t border-evergreen/15 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-evergreen/70 max-w-lg text-[15px] leading-relaxed">
            Check out our ETSY for the official launch of our first batch, coming soon.
          </p>
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group self-start md:self-auto"
          >
            <span className="text-[12px] uppercase tracking-[0.28em] text-evergreen">See us on Etsy</span>
            <span className="w-12 h-px bg-evergreen group-hover:w-20 transition-all duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
