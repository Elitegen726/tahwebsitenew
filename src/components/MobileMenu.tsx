
import Link from 'next/link';
import CTAButton from './CTAButton';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-sm md:hidden">
      <nav className="flex flex-col items-center gap-6 py-8">
        <Link href="/diensten" className="text-white/90 hover:text-white" onClick={() => setIsOpen(false)}>
          Diensten
        </Link>
        <Link href="/persoonlijke-hulp" className="text-white/90 hover:text-white" onClick={() => setIsOpen(false)}>
          Persoonlijke hulp
        </Link>
        <Link href="/tarieven" className="text-white/90 hover:text-white" onClick={() => setIsOpen(false)}>
          Tarieven
        </Link>
        <CTAButton href="/persoonlijke-hulp" variant="primary" size="md" onClick={() => setIsOpen(false)}>
          Afspraak maken
        </CTAButton>
      </nav>
    </div>
  );
};

export default MobileMenu;
