// src/Componets/HomePages/CustomQuote.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../../../Componets/UI/Button';

/* ---------------------------------------------------------
   Reusable "beyond these plans" CTA banner
   Sits right after the pricing panel / comparison table.
   Dashed border reads as "not a fixed package — sketch it
   out with us", distinct from the solid-bordered plan cards.
--------------------------------------------------------- */

function CustomQuote({
  heading = 'Need something beyond these plans?',
  description = "Every business is different. Tell us what you're building, and we'll create a custom package around your requirements.",
  ctaLabel = 'Get a custom quote',
  whatsappNumber = '918921966289',
  whatsappMessage = "Hi WebForges! I have a custom project in mind that doesn't quite fit your listed plans — can we talk through what I need?",
}) {
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className=" px-2 py-14">
      <div className="mx-auto max-w-4xl rounded-2xl border-2 border-dashed border-slate-300 bg-white px-2 py-3 text-center md:px-10 md:py-10">
        <h3 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {heading}
        </h3>

        <p className="mx-auto mb-5 max-w-xl text-sm text-gray-600">{description}</p>

        <Button href={href} target="_blank" rel="noopener noreferrer">
          {ctaLabel}

        </Button>
      </div>
    </section>
  );
}

export default CustomQuote;
