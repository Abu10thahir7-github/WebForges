'use client';

export default function InfiniteScrollText() {
  return (
    <div className="relative overflow-hidden whitespace-nowrap w-full bg-black py-4">
      {/* Gradient side fades */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div
        className="inline-flex border-y p-5"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'linear',
        }}
      >
        <span className="text-white text-base sm:text-lg md:text-xl lg:text-6xl xl:text-5xl   ">
          Introducing Webforges Dev – Crafting Powerful, Secure & Custom Websites for Everyone –
        </span>
        <span className="text-white text-base sm:text-lg md:text-xl lg:text-6xl xl:text-5xl    ml-0">
          {' '}
          Introducing Webforges Dev – Crafting Powerful, Secure & Custom Websites for Everyone –
        </span>
        <span className="text-white text-base sm:text-lg md:text-xl lg:text-6xl xl:text-5xl    ml-0">
          Introducing Webforges Dev – Crafting Powerful, Secure & Custom Websites for Everyone –
        </span>
      </div>
    </div>
  );
}
