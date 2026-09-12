import SectionLabel from "../UI/SectionLabel";

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
       
      <SectionLabel text={eyebrow} />

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
