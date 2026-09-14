const SectionLabel = ({ text, className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="11"
        height="13"
        viewBox="0 0 11 13"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M11 6.5L0.499999 12.5622L0.5 0.437822L11 6.5Z"
          fill="#f6bc17"
        />
      </svg>

      <span className={`text-xs ${className} font-semibold uppercase tracking-[0.2em] text-gray-500`}>
        {text}
      </span>
    </div>
  );
};

export default SectionLabel;