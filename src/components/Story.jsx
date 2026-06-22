import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ETSY_URL } from "../lib/links";

export default function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="story" ref={ref} className="relative bg-lace py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image stack */}
        <motion.div style={{ y: imgY }} className="lg:col-span-5 relative">
          <div className="relative aspect-square rounded-[28px] overflow-hidden bg-lace-warm">
            {/* Soft radial glow behind the lotus */}
            <svg viewBox="0 0 512 512" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="storyBg" cx="0.5" cy="0.5" r="0.75">
                  <stop offset="0%" stopColor="#FEF1E1" />
                  <stop offset="100%" stopColor="#f0dcc0" />
                </radialGradient>
              </defs>
              <rect width="512" height="512" fill="url(#storyBg)" />
            </svg>

            {/* Lotus — outline only, rust stroke */}
            <svg
              viewBox="0 0 511.999 511.999"
              className="absolute inset-0 w-full h-full p-[8%]"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              stroke="#994633"
              strokeWidth="3"
              strokeLinejoin="round"
            >
              <path d="M264.042,439.601c-3.608,0-6.194-0.076-7.574-0.125c-7.987-0.31-14.648-6.243-15.854-14.148 c-1.217-7.905,3.347-15.56,10.878-18.25c4.097-1.461,100.59-36.669,132.537-112.913c11.356-27.117,14.495-59.314,9.334-95.684 c-1.195-8.448,4.172-16.441,12.442-18.533c47.758-12.051,88.506-10.025,90.213-9.943c8.509,0.457,15.3,7.242,15.777,15.74 c0.272,4.874,5.824,120.139-64.688,189.837l-0.011,0.006C387.125,434.803,292.946,439.601,264.042,439.601z" />
              <path d="M244.71,434.216c-6.695-6.742-6.41-17.714,0.619-24.107c3.206-2.913,78.434-72.24,78.434-154.112 c0-29.242-9.464-59.944-28.133-91.267c-4.38-7.34-2.499-16.804,4.346-21.918c39.891-29.801,78.978-43.552,80.618-44.123 c7.944-2.76,16.789,0.864,20.483,8.471c0.75,1.537,18.375,38.179,25.33,86.6c6.03,42.439,2.13,80.553-11.584,113.298 c0,0.006,0,0.006,0,0.006c-36.946,88.159-140.427,127.278-152.098,131.452C256.353,440.78,249.342,438.985,244.71,434.216z" />
              <path d="M64.904,375.587l-0.011-0.006C-5.62,305.885-0.068,190.618,0.204,185.745 c0.478-8.497,7.27-15.284,15.779-15.74c1.706-0.081,42.455-2.108,90.213,9.943c8.269,2.092,13.638,10.084,12.442,18.533 c-5.162,36.37-2.022,68.567,9.334,95.684c31.947,76.244,128.441,111.451,132.537,112.913c7.531,2.69,12.094,10.345,10.878,18.25 c-1.206,7.905-7.867,13.838-15.854,14.148c-1.38,0.049-3.966,0.125-7.574,0.125C219.054,439.601,124.875,434.803,64.904,375.587z" />
              <path d="M249.273,438.515c-11.671-4.172-115.152-43.291-152.098-131.452c0,0,0,0,0-0.006 c-13.714-32.746-17.614-70.86-11.584-113.298c6.955-48.421,24.58-85.062,25.33-86.6c3.695-7.606,12.54-11.231,20.483-8.471 c1.641,0.57,40.727,14.322,80.618,44.123c6.846,5.113,8.726,14.577,4.346,21.918c-18.669,31.322-28.133,62.025-28.133,91.267 c0,81.874,75.228,151.201,78.434,154.112c7.029,6.392,7.315,17.366,0.619,24.107C262.657,438.985,255.647,440.78,249.273,438.515z" />
              <path d="M255.892,439.487c-4.52,0-8.617-1.793-11.616-4.705c-7.487-6.759-89.42-83.003-89.42-178.785 c0-98.52,86.399-176.15,90.083-179.404c6.302-5.596,15.8-5.59,22.124-0.006c1.293,1.146,32.067,28.595,57.256,71.083 c21.777,36.527,32.827,72.99,32.827,108.327c0,94.842-80.216,170.499-89.365,178.813 C264.877,437.458,260.512,439.487,255.892,439.487z" />
              <path d="M267.063,76.586c-3.16-2.79-7.112-4.187-11.063-4.189v367.078c4.579-0.032,8.901-2.038,11.78-4.667 c9.148-8.313,89.365-83.97,89.365-178.812c0-35.338-11.051-71.8-32.828-108.327C299.129,105.182,268.356,77.732,267.063,76.586z" />
            </svg>

            <div className="grain absolute inset-0 pointer-events-none" />
          </div>
          <div className="absolute bottom-4 right-4 lg:-bottom-8 lg:-right-10 w-28 sm:w-36 md:w-44 lg:w-52 aspect-square rounded-full bg-lace-warm border border-evergreen/10 shadow-xl flex items-center justify-center rotate-[-8deg]">
            <div className="text-center">
              <div className="font-display text-evergreen text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none">Coming</div>
              <div className="font-display text-evergreen text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none">Soon</div>
              <div className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-evergreen/70 mt-1 sm:mt-2">Ontario · CA</div>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div style={{ y }} className="lg:col-span-7 lg:pl-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-rust" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-rust">Our Story</span>
          </div>
          <h2 className="font-display font-semibold text-evergreen text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
            A studio just <span className="italic font-medium text-rust">getting started.</span>
          </h2>
          <div className="mt-8 md:mt-10 space-y-5 text-evergreen/80 text-[15px] md:text-[17px] leading-relaxed max-w-xl">
            <p>
              Earthy Notes was born at the intersection of nature, intention,
              and science. After nearly a decade as a stay-at-home mom across
              three continents, our founder grew deeply mindful of what touched
              her family's skin and scented their spaces.
            </p>
            <p>
              With a background in pharmaceutics and formulation, she's now
              building the first line of small batch, science-driven balms and 
              fragrances inspired from the goodness of nature, made for the harsh
              Canadian winter.
            </p>
          </div>
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 text-evergreen group"
          >
            <span className="text-[12px] uppercase tracking-[0.28em]">Visit our Etsy</span>
            <span className="w-12 h-px bg-evergreen group-hover:w-20 transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
