'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CTAButton from './CTAButton';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`backdrop-blur-sm sticky top-0 z-50 transition-colors ${
        isScrolled ? 'bg-black/50' : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Techie aan Huis" width={44} height={44} className="rounded-md" />
            <div>
              <span className="block font-bold text-white">Techie aan Huis</span>
              <span className="block text-sm text-white/80">Deskundige hulp bij u thuis</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/diensten" className="text-white/90 hover:text-white">
              Diensten
            </Link>
            <Link href="/persoonlijke-hulp" className="text-white/90 hover:text-white">
              Persoonlijke hulp
            </Link>
            <Link href="/tarieven" className="text-white/90 hover:text-white">
              Tarieven
            </Link>
            <a
              href="https://wa.me/31852502264?text=Hallo%20Techie%20aan%20Huis%2C%20ik%20heb%20een%20vraag"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex"
              aria-label="Chat via WhatsApp"
            >
              <div className="inline-flex items-center gap-2 bg-white/6 px-3 py-2 rounded-full hover:bg-white/10 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12c0 2.116.556 4.09 1.613 5.844L0 24l6.39-1.668A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.247-6.184-3.48-8.52z" fill="#25D366"/>
                  <path d="M15.07 14.93c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13-.18.26-.7.85-.86 1.02-.16.17-.32.19-.58.06-.26-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.39-1.76-.14-.26-.02-.4.11-.53.11-.11.26-.29.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.44-.06-.12-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46-.16-.01-.35-.01-.53-.01-.18 0-.46.07-.7.32-.24.25-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.17 1.86 2.86 4.52 3.9 2.66 1.04 2.66.69 3.14.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.12.154-1.22-.06-.1-.24-.17-.5-.3z" fill="#fff"/>
                </svg>
                <span className="text-sm text-white">WhatsApp</span>
              </div>
            </a>
            <CTAButton href="/persoonlijke-hulp" variant="primary" size="md">
              Afspraak maken
            </CTAButton>
          </nav>

          {/* mobile / small screens: hamburger menu */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  );
}
