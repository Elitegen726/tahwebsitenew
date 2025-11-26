import Link from 'next/link';

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export default function CTAButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: Props) {
  const base =
    'inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants: Record<string, string> = {
    primary: 'bg-[#FDB913] text-black hover:bg-[#e5a711] shadow',
    secondary: 'bg-white text-[#0089D0] border-2 border-[#0089D0] hover:bg-[#0089D0] hover:text-white',
    ghost: 'bg-white/10 text-white hover:bg-white/20',
  };
  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
