import { motion } from "framer-motion";

const pillars = [
  {
    n: "01",
    title: "Formulated, not flavoured.",
    body: "Every product begins with a pharmaceutical formulator's eye — efficacy first, sensorial second, theatrics never.",
  },
  {
    n: "02",
    title: "Small batches, by design.",
    body: "We pour in tens, not thousands. Each batch is signed off by hand so the last jar tells the same story as the first.",
  },
  {
    n: "03",
    title: "Honest about ingredients.",
    body: "Natural soy wax. Plant-based butters. No fragrance fillers, no greenwashed labels — what's on the jar is what's in it.",
  },
  {
    n: "04",
    title: "Made for ritual.",
    body: "Lighting a candle at dusk. Caring for hands after a long day. Small acts that quietly anchor a day.",
  },
];

export default function Philosophy() {
  return (
    <section id="ritual" className="relative bg-evergreen text-lace py-28 md:py-40 overflow-hidden">
      {/* ambient shapes */}
      <div className="absolute -left-32 top-16 w-[420px] h-[420px] rounded-full bg-olive/25 blur-3xl" />
      <div className="absolute -right-40 bottom-0 w-[480px] h-[480px] rounded-full bg-rust/25 blur-3xl" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 md:mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-olive" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-olive">Philosophy</span>
            </div>
            <h2 className="font-display font-semibold text-lace text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              Made <span className="italic font-medium text-olive">with care.</span> <br/>
              Made to <span className="italic font-medium text-olive">last.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-lace/70 text-[15px] md:text-[17px] leading-relaxed max-w-xl">
              We don't think of skincare and candles as products. They're
              quiet rituals — the cup of tea after dinner, the lamp turned low,
              the slow exhale at the end of a long day.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-14">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="border-t border-lace/20 pt-7"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-display text-olive text-lg">{p.n}</span>
                <span className="w-6 h-px bg-lace/30" />
              </div>
              <h3 className="font-display font-semibold text-lace text-2xl md:text-3xl tracking-tight leading-tight max-w-[20ch]">
                {p.title}
              </h3>
              <p className="mt-4 text-lace/70 text-[15px] leading-relaxed max-w-md">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
