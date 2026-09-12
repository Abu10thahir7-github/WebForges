 
{
  /* <SectionTitle
  eyebrow="Our Work"
  lineOne="Digital products,"
  accentWord="built"
  lineTwoRest="to perform."
/>

<SectionTitle
  eyebrow="Case Studies"
  lineOne="A closer look at"
  accentWord="how we build"
  lineTwoRest=""
  align="center"
/> */
}

/**
 * Reusable section title: eyebrow (triangle icon + label) + two-line heading
 * where a specific word/phrase in the second line renders serif-italic.
 *
 * @param {string} eyebrow
 * @param {string} lineOne - First line of the heading
 * @param {string} accentWord - The word/phrase to italicize (e.g. "delivered")
 * @param {string} lineTwoRest - Remaining text after the accent word (e.g. "with purpose")
 * @param {string} [align] - 'left' | 'center', default 'left'
 */
export default function SectionTitle({
  eyebrow,
  lineOne,
  accentWord,
  lineTwoRest,
  breakLine = true,
  align = 'left',
}) {
  const wrapperAlign = align === 'center' ? 'mx-auto text-center' : '';
  const headingAlign = align === 'center' ? 'text-center' : 'text-start';

  return (
    <div className={wrapperAlign}>
      <p

        className="flex items-center gap-3 text-lg font-medium uppercase  "
      >
        <span className='text-[#f6bc17]'>
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z" fill="currentColor"></path>
          </svg>
        </span>
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gray-500'>
           {eyebrow}
        </p>

      </p>

         <h2

        className={`mt-4 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl ${headingAlign}`}
      >
        {lineOne}
        {breakLine && <br />}
        {!breakLine && ' '}
        <span className="font-serif italic font-normal">{accentWord}</span>
        {lineTwoRest && ` ${lineTwoRest}`}
      </h2>
    </div>
  );
}
