function Card({ title, subtitle, children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-[#121826] p-4 text-slate-200 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-3 flex items-center justify-between">
          {title && (
            <div className="text-sm font-semibold text-slate-300">{title}</div>
          )}
          {subtitle && <div className="text-xs text-slate-400">{subtitle}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

export default Card;
