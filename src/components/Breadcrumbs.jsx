import Link from 'next/link';

export default function Breadcrumbs({ items, variant = 'default' }) {
  const isWhite = variant === 'white';
  const baseClasses = isWhite ? "text-white/60" : "text-slate-400";
  const hoverClasses = isWhite ? "hover:text-white" : "hover:text-[var(--gw-primary)]";
  const activeClasses = isWhite ? "text-white" : "text-[var(--gw-primary)]";
  const separatorClasses = isWhite ? "text-white/30" : "text-slate-300";

  return (
    <nav className={`flex flex-wrap mb-8 text-[11px] font-bold uppercase tracking-[0.2em] ${baseClasses}`} aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-y-2 gap-x-1 md:gap-x-3">
        <li className="flex items-center">
          <Link href="/" className={`${hoverClasses} transition-colors whitespace-nowrap`}>
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <svg className={`w-2.5 h-2.5 mx-2 ${separatorClasses}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              {item.href ? (
                <Link href={item.href} className={`${hoverClasses} transition-colors`}>
                  {item.label}
                </Link>
              ) : (
                <span className={activeClasses}>{item.label}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
