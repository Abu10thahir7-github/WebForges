// src/Componets/ui/Button.jsx
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ARROW_PATH =
  'M2.85711 10.8929L13.7232 10.8929L8.73211 15.8839L9.99997 17.1429L17.1428 10L9.99997 2.85714L8.74104 4.11607L13.7232 9.10714L2.85711 9.10714L2.85711 10.8929Z';

const VARIANTS = {
  primary:
    'bg-[#f6bc17] text-black shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-[#e5ad0f] focus-visible:outline-[#f6bc17]',
  dark: 'bg-gray-900 text-white shadow-[0_1px_2px_rgba(0,0,0,0.16)] hover:bg-black focus-visible:outline-gray-900',
  outline:
    'border border-gray-300 bg-white text-gray-800 hover:border-gray-900 hover:bg-gray-50 focus-visible:outline-gray-900',
  ghost:
    'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-gray-400',
  link: 'bg-transparent p-0 text-gray-700 underline decoration-gray-300 underline-offset-4 hover:text-gray-900 hover:decoration-gray-900 focus-visible:outline-gray-400',
};

const SIZES = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-6 py-3.5 text-base gap-2.5',
};

const ICON_SIZE = { sm: 14, md: 16, lg: 18 };

function Spinner({ size }) {
  return (
    <svg
      className="animate-spin"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V1.5A10.5 10.5 0 0 0 1.5 12H4Z"
      />
    </svg>
  );
}

function Arrow({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
    >
      <path d={ARROW_PATH} fill="currentColor" />
    </svg>
  );
}

/**
 * Shared button primitive. Renders <Link>, <a>, or <button> depending on
 * what's passed — one visual API, correct semantics underneath.
 *
 * <Button to="/contact">Get in touch</Button>
 * <Button href="https://..." variant="outline">Visit site</Button>
 * <Button onClick={...} variant="dark" loading={isSaving}>Save</Button>
 * <Button variant="link" icon={false}>No arrow</Button>
 */
const Button = forwardRef(function Button(
  {
    children,
    to,
    href,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'md',
    icon = true,
    loading = false,
    disabled = false,
    fullWidth = false,
    className = '',
    ...rest
  },
  ref,
) {
  const iconSize = ICON_SIZE[size] ?? ICON_SIZE.md;
  const isDisabled = disabled || loading;

  const classes = [
    'group relative inline-flex items-center justify-center rounded-full font-medium',
    'transition-colors duration-200 ease-out',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    VARIANTS[variant] || VARIANTS.primary,
    SIZES[size] || SIZES.md,
    fullWidth ? 'w-full' : 'w-fit',
    className,
  ].join(' ');

  const motionProps = isDisabled
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.97 },
        transition: { type: 'spring', stiffness: 400, damping: 20 },
      };

  const content = (
    <>
      {loading && <Spinner size={iconSize} />}
      <span className={loading ? 'opacity-70' : ''}>{children}</span>
      {icon && !loading && <Arrow size={iconSize} />}
    </>
  );

  // internal route
  if (to && !isDisabled) {
    return (
      <motion.span {...motionProps} className="inline-block">
        <Link ref={ref} to={to} onClick={onClick} className={classes} {...rest}>
          {content}
        </Link>
      </motion.span>
    );
  }

  // external link
  if (href && !isDisabled) {
    return (
      <motion.span {...motionProps} className="inline-block">
<a
          ref={ref}
          href={href}
          target={rest.target || '_blank'}
          rel="noopener noreferrer"
          onClick={onClick}
          className={classes}
          {...rest}
        >
          {content}
        </a>
      </motion.span>
    );
  }

  // action / disabled button
  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={classes}
      {...motionProps}
      {...rest}
    >
      {content}
    </motion.button>
  );
});

export default Button;