import type { FC } from 'react';

export const Asterisk14s: FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => (
  <span
    className={`inline-block animate-spin-asterisk select-none text-[#161616] ${className}`}
    style={{ width: size, height: size, lineHeight: `${size}px`, textAlign: 'center' }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
    </svg>
  </span>
);

export const WashiTape: FC<{
  color?: 'lilac' | 'mint' | 'yellow';
  rotate?: string;
  className?: string;
  width?: string;
}> = ({ color = 'lilac', rotate = '-1deg', className = '', width = 'w-24' }) => {
  const bgClass =
    color === 'lilac'
      ? 'bg-[rgba(217,220,247,0.85)]'
      : color === 'mint'
      ? 'bg-[rgba(205,235,221,0.9)]'
      : 'bg-[rgba(246,201,69,0.85)]';

  return (
    <div
      className={`h-5 ${width} ${bgClass} border-y border-dashed border-[#161616]/30 shadow-sm pointer-events-none select-none z-10 ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    />
  );
};

export const HandArrow: FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 20 C 18 10, 32 12, 38 28" />
    <path d="M28 28 L 38 28 L 36 18" />
  </svg>
);

export const CoffeeMug: FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" x2="6" y1="2" y2="4" />
    <line x1="10" x2="10" y1="2" y2="4" />
    <line x1="14" x2="14" y1="2" y2="4" />
  </svg>
);

export const SparkleDoodle: FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export const SlantedSticker: FC<{
  text: string;
  bg?: string;
  rot?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ text, bg = '#F6C945', rot = '-2deg', className = '', size = 'md' }) => {
  const sizeClasses =
    size === 'sm'
      ? 'px-2.5 py-1 text-[11px]'
      : size === 'lg'
      ? 'px-4 py-2 text-sm'
      : 'px-3 py-1.5 text-xs';

  return (
    <div
      className={`inline-flex items-center gap-1.5 font-label font-bold uppercase tracking-wider rounded-md border-ink shadow-solid-sm transition-transform hover:scale-105 select-none ${sizeClasses} ${className}`}
      style={{ backgroundColor: bg, transform: `rotate(${rot})` }}
    >
      <span>{text}</span>
    </div>
  );
};

