import { useState } from 'react';
import { motion } from 'framer-motion';
import swal from 'sweetalert';
import { fadeIn } from '../../../data/variants'; 
import SectionTitle from '../../../Componets/shared/SectionTitle';

function FormField({ field, value, onChange }) {
  const baseClass =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#f6bc17] focus:ring-2 focus:ring-[#f6bc17]/20';

  return (
    <div className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
      <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-gray-700">
        {field.label}
        {field.required && <span className="text-[#f6bc17]"> *</span>}
      </label>

      {field.type === 'select' ? (
        <select
          id={field.name}
          required={field.required}
          value={value}
          onChange={e => onChange(field.name, e.target.value)}
          className={baseClass}
        >
          <option value="">Select an option</option>
          {field.options.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea
          id={field.name}
          required={field.required}
          rows={5}
          placeholder={field.placeholder}
          value={value}
          onChange={e => onChange(field.name, e.target.value)}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          id={field.name}
          type={field.type}
          required={field.required}
          placeholder={field.placeholder}
          value={value}
          onChange={e => onChange(field.name, e.target.value)}
          className={baseClass}
        />
      )}
    </div>
  );
}

export default function ProjectForm({ data, formRef }) {
  const initialState = Object.fromEntries(data.fields.map(f => [f.name, '']));
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => setValues(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async e => {
    e.preventDefault();

    const missing = data.fields.filter(f => f.required && !values[f.name]);
    if (missing.length > 0) {
      swal(
        'Missing information',
        `Please fill in: ${missing.map(f => f.label).join(', ')}`,
        'warning',
      );
      return;
    }

    setLoading(true);

    const formData = new FormData();
    Object.entries(values).forEach(([key, val]) => formData.append(key, val));
    formData.append('time', new Date().toLocaleString());

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwqejPG8CpOKdT1LLt8pPD6qDnvF6hqYzmTZDiL-UtaAdEXdCu6Ow0YgmXu1kCeM43DAg/exec',
        { method: 'POST', body: formData },
      );
      const result = await response.json();

      if (result.status === 'success') {
        swal('Sent!', 'Your project enquiry has been sent.', 'success');
        setValues(initialState);
      } else {
        swal('Something went wrong', result.message || 'Please try again.', 'error');
      }
    } catch (err) {
      swal('Network error', 'Please check your connection and try again.', 'error');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={formRef} className="md:w-4/5 px-3 m-auto border-t border-gray-200 py-7 md:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionTitle eyebrow={data.eyebrow} lineOne={data.title} accentWord={data.tagline} />

            <p className="mt-4 text-sm leading-relaxed text-gray-500">{data.description}</p>
            <img
              src="https://res.cloudinary.com/dcrf52w3g/image/upload/v1789367231/ChatGPT_Image_Sep_14_2026_11_56_59_AM_cht8p9.png"
              alt="The WebForges team at work"
              loading="lazy"
              className=" mt-2  object-contain rounded-2xl"
            />
          </div>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {data.fields.map(field => (
              <FormField
                key={field.name}
                field={field}
                value={values[field.name]}
                onChange={handleChange}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-400">{data.supportingText}</p>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-[#f6bc17] px-7 py-3 text-sm font-semibold text-black shadow-md transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Sending...' : data.submitCta}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
