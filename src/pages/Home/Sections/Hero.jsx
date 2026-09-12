
import Button from '../../../Componets/UI/Button.jsx';
 
function Hero() {
  return (
    <div c>
      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden pt-20 bg-white">
        {/* signature gradient blob — same role as Nexo's, re-colored to WebForges */}
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-90 blur-2xl sm:-right-20 sm:h-[640px] sm:w-[640px]"
          style={{
            background:
              'conic-gradient(from 210deg at 50% 50%, #f6bc17, #0a0a0a, #ffffff, #f6bc17)',
          }}
        />
        <div className="noise absolute z-0 inset-0 opacity-[0.08]" aria-hidden="true" />



        {/* tag row */}
        <div className="relative mt-5 flex flex-wrap gap-2 px-5  sm:px-10">
          {['Web Design', 'SEO', 'Web Development', 'Business Automation', , 'E-Commerce'].map(
            tag => (
              <span
                key={tag}
                className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur-sm"
              >
                {tag}
              </span>
            ),
          )}
        </div>

        {/* headline + CTA */}
        <div className="relative mt-6 flex flex-col justify-between gap-8 px-5 pb-16 sm:px-10 sm:pb-24 lg:flex-row lg:items-end">
          <div>
            <h1 className="leading-[0.95] text-gray-900">
              <span className="block font-serif text-3xl italic text-gray-700 sm:text-4xl lowercase md:text-5xl">
                Digital Experiences,
              </span>
              <span className="block text-6xl font-extrabold uppercase tracking-tight sm:text-7xl md:text-8xl">
                Built to Grow.
              </span>
            </h1>
            <p className="text-base leading-relaxed text-gray-500">
              We build high-performance websites, web applications, and business automation <br />{' '}
              systems that help businesses grow online and work smarter.
            </p>
          </div>
          <div className="shrink-0">
           <Button to="/contact" variant="dark" size="lg">Start a Project</Button>
          </div>
        </div>

        {/* trust strip */}
        {/* <div className="relative flex flex-col items-start justify-center gap-6 border-t border-gray-100 px-5 py-8 sm:flex-row sm:items-center sm:px-10">
          <motion.div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-gray-500">
            {pillars.map((item, i) => (
              <React.Fragment key={item.label}>
                <span className="flex items-center gap-2 hover:text-gray-900 transition-colors duration-300">
                  <span className="text-[#f6bc17]">{item.icon}</span>
                  {item.label}
                </span>
                {i < pillars.length - 1 && <span className="text-gray-300 select-none">/</span>}
              </React.Fragment>
            ))}
          </motion.div>
        </div> */}
      </header>
    </div>
  );
}

export default Hero;
