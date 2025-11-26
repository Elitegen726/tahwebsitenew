
import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-sm hover:text-[#FDB913]">
    {children}
  </Link>
);

export default FooterLink;
