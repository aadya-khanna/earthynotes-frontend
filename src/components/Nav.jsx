import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Leaf from "./Leaf";
import { ETSY_URL } from "../lib/links";

const links = [
  { label: "Story", href: "#story" },
  { label: "First Batch", href: "#first-batch" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const showSolid = scrolled || open;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        showSolid ? "bg-lace/95 backdrop-blur-md border-b border-evergreen/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 py-4 md:py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-evergreen group-hover:text-rust transition-colors duration-500" strokeWidth={4} />
          <span className="font-display font-semibold tracking-tight text-evergreen text-base sm:text-lg">
            Earthy Notes
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[13px] uppercase tracking-[0.2em] text-evergreen/80 hover:text-evergreen transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-evergreen transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-evergreen text-lace pl-5 pr-2 py-2 rounded-full text-[12px] uppercase tracking-[0.24em] hover:bg-rust transition-colors duration-500 group"
          >
            <span>Shop on Etsy</span>
            <span className="w-7 h-7 rounded-full bg-lace text-evergreen flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </a>
          <button
            className="md:hidden text-evergreen w-10 h-10 -mr-2 flex items-center justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t border-evergreen/10 bg-lace"
          >
            <nav className="px-5 sm:px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[14px] uppercase tracking-[0.22em] text-evergreen/85 border-b border-evergreen/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={ETSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-between bg-evergreen text-lace pl-5 pr-2 py-3 rounded-full text-[12px] uppercase tracking-[0.24em]"
              >
                <span>Shop on Etsy</span>
                <span className="w-8 h-8 rounded-full bg-lace text-evergreen flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
