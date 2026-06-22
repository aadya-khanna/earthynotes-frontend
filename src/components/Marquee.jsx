import Leaf from "./Leaf";

const items = [
  "First batch coming soon",
  "Hand-poured in Ontario",
  "Small batch",
  "Science-led formulation",
  "Made with care",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="bg-evergreen text-lace py-6 md:py-8 overflow-hidden border-y border-evergreen-soft">
      <div className="flex marquee-track whitespace-nowrap">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-10 shrink-0">
            <span className="font-display text-2xl md:text-4xl tracking-tight">{t}</span>
            <Leaf className="w-6 h-6 md:w-8 md:h-8 text-olive shrink-0" strokeWidth={4} />
          </div>
        ))}
      </div>
    </div>
  );
}
