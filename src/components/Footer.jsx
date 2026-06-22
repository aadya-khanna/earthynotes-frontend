import Leaf from "./Leaf";
import { ETSY_URL } from "../lib/links";

/* Stylized Etsy "E" mark — based on the Etsy brand letter form. */
const EtsyIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9.6 5.4v4.6h4.8c.4 0 .6.1.6.4 0 .3-.2.4-.6.4H9.6v5.1c0 .9.2 1.4.8 1.7.5.3 1.3.4 2.7.4 1.7 0 2.9-.1 3.8-.6.9-.5 1.4-1.4 1.9-3.1.1-.3.3-.5.6-.4.2.1.4.3.3.6-.3 1.5-.7 3.5-.9 4.3-.1.3-.3.4-.6.4H5.4c-.3 0-.5-.2-.5-.4 0-.2.2-.4.5-.4h.5c1.2 0 1.8-.3 1.8-1.5V6.9c0-1.2-.6-1.5-1.8-1.5h-.5c-.3 0-.5-.2-.5-.4 0-.2.2-.4.5-.4h12.5c.4 0 .5.2.5.5l.3 3c0 .3-.1.5-.4.5-.2 0-.4-.1-.5-.4-.4-1.3-.8-2-1.5-2.4-.7-.4-1.6-.4-3-.4H9.6z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-evergreen text-lace pt-20 md:pt-24 pb-10 overflow-hidden">
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Lockup + socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12">
          <div className="flex items-center gap-2.5">
            <Leaf className="w-8 h-8 text-olive" strokeWidth={4} />
            <span className="font-display font-semibold tracking-tight text-lace text-xl">
              Earthy Notes
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Etsy shop"
              className="w-10 h-10 rounded-full border border-lace/30 flex items-center justify-center hover:bg-lace hover:text-evergreen transition-colors"
            >
              <EtsyIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="border-t border-lace/15 pt-12">
          <div className="font-display font-semibold text-lace/15 text-[18vw] leading-[0.85] tracking-tighter select-none pointer-events-none">
            earthynotes
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-10 text-[12px] text-lace/55 uppercase tracking-[0.22em]">
          <p>© {new Date().getFullYear()} Earthy Notes · Ontario, Canada</p>
          <p>Made with care</p>
        </div>
      </div>
    </footer>
  );
}
