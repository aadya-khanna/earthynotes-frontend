import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* A half-screen "treetop" panel: a forest of stacked, organic canopy blobs
   in the brand greens. Mirrored when side === "right" so the two halves
   meet seamlessly in the middle. */
function TreetopPanel({ side = "left" }) {
  const flip = side === "right" ? "scale-x-[-1]" : "";
  return (
    <div className={`absolute inset-0 ${flip}`}>
      <svg
        viewBox="0 0 600 1000"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        {/* Deep evergreen base */}
        <rect width="600" height="1000" fill="#203127" />

        {/* Back-most layer — large soft canopies */}
        <g fill="#2c4234">
          <path d="M -40 720
                   C -10 600, 70 540, 150 590
                   C 180 480, 290 470, 340 560
                   C 410 500, 520 540, 540 640
                   C 600 660, 620 760, 560 820
                   L 560 1020 L -40 1020 Z" />
          <ellipse cx="120" cy="640" rx="120" ry="90" />
          <ellipse cx="300" cy="610" rx="140" ry="100" />
          <ellipse cx="470" cy="660" rx="130" ry="95" />
        </g>

        {/* Mid layer — olive cluster */}
        <g fill="#7D8566">
          <path d="M -60 820
                   C -10 720, 80 700, 140 740
                   C 180 660, 280 660, 320 730
                   C 380 680, 480 700, 520 770
                   C 600 780, 620 880, 560 920
                   L 560 1020 L -60 1020 Z" />
          <ellipse cx="80"  cy="780" rx="110" ry="80" />
          <ellipse cx="240" cy="750" rx="120" ry="85" />
          <ellipse cx="410" cy="780" rx="120" ry="85" />
          <ellipse cx="540" cy="820" rx="90"  ry="70" />
        </g>

        {/* Foreground layer — darker olive, taller bumps */}
        <g fill="#6a7256">
          <path d="M -40 900
                   C 20 820, 110 800, 170 850
                   C 220 780, 320 790, 360 850
                   C 420 800, 510 820, 540 880
                   C 600 870, 620 960, 560 1000
                   L 560 1020 L -40 1020 Z" />
          <ellipse cx="60"  cy="880" rx="110" ry="70" />
          <ellipse cx="220" cy="860" rx="120" ry="75" />
          <ellipse cx="390" cy="870" rx="110" ry="70" />
          <ellipse cx="520" cy="900" rx="90"  ry="60" />
        </g>

        {/* Tiny tree trunks peeking up from below */}
        <g fill="#203127">
          <rect x="55"  y="900" width="10" height="120" />
          <rect x="215" y="880" width="11" height="140" />
          <rect x="385" y="890" width="10" height="130" />
          <rect x="515" y="920" width="9"  height="100" />
        </g>

        {/* Texture flecks — small leaf dots scattered across canopies */}
        <g fill="#FEF1E1" fillOpacity="0.18">
          <circle cx="90"  cy="600" r="3" />
          <circle cx="170" cy="640" r="2.5" />
          <circle cx="240" cy="580" r="3" />
          <circle cx="320" cy="620" r="2.5" />
          <circle cx="400" cy="600" r="3" />
          <circle cx="470" cy="660" r="2.5" />
          <circle cx="130" cy="730" r="2.5" />
          <circle cx="280" cy="700" r="3" />
          <circle cx="430" cy="730" r="2.5" />
          <circle cx="200" cy="810" r="3" />
          <circle cx="370" cy="820" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

export default function IntroCurtain() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    // brief hold; the panels then take 2s to slide off
    const t1 = setTimeout(() => setOpen(false), 450);
    // release scroll only after the slide-out finishes
    const t2 = setTimeout(() => {
      document.documentElement.style.overflow = "";
    }, 450 + 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {/* Wordmark briefly held in the middle while curtains are closed */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 z-10 flex items-center justify-center text-lace"
          >
            <div className="text-center">
              <div className="text-[11px] uppercase tracking-[0.42em] text-lace/85 mb-3">
                Earthy Notes
              </div>
              <div className="w-12 h-px bg-lace/60 mx-auto" />
            </div>
          </motion.div>

          {/* Left half */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 2.0, ease: [0.83, 0, 0.17, 1] }}
          >
            <TreetopPanel side="left" />
            <div className="absolute top-0 bottom-0 right-0 w-px bg-evergreen/30" />
          </motion.div>

          {/* Right half */}
          <motion.div
            className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 2.0, ease: [0.83, 0, 0.17, 1] }}
          >
            <TreetopPanel side="right" />
            <div className="absolute top-0 bottom-0 left-0 w-px bg-evergreen/30" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
