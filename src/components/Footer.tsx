import Link from 'next/link';
import Image from 'next/image';
import FooterLink from './FooterLink';
import Facebook from './icons/social/Facebook';
import Twitter from './icons/social/Twitter';
import Instagram from './icons/social/Instagram';

export default function Footer() {
  return (
    <footer className="bg-[#06263b] text-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="logo" width={40} height={40} className="rounded-md" />
              <div>
                <div className="font-bold">Techie aan Huis</div>
                <div className="text-sm text-white/70">Deskundige hulp bij u thuis</div>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-sm">
              Persoonlijke en betaalbare technische hulp — bij u thuis of op afstand.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Snelle links</h4>
            <FooterLink href="/diensten">Diensten</FooterLink>
            <FooterLink href="/persoonlijke-hulp">Persoonlijke hulp</FooterLink>
            <FooterLink href="/tarieven">Tarieven</FooterLink>
            <FooterLink href="/klantenservice">Klantenservice</FooterLink>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white">Contact</h4>
            <a href="tel:0852502264" className="text-sm hover:text-[#FDB913]">085 250 22 64</a>
            <a href="mailto:info@techieaanhuis.nl" className="text-sm hover:text-[#FDB913]">info@techieaanhuis.nl</a>
            <a
              href="https://wa.me/31852502264?text=Hallo%20Techie%20aan%20Huis%2C%20ik%20heb%20een%20vraag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-sm hover:opacity-90"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12c0 2.116.556 4.09 1.613 5.844L0 24l6.39-1.668A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.247-6.184-3.48-8.52z" fill="#fff"/>
                  <path d="M15.07 14.93c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13-.18.26-.7.85-.86 1.02-.16.17-.32.19-.58.06-.26-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.39-1.76-.14-.26-.02-.4.11-.53.11-.11.26-.29.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.44-.06-.12-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46-.16-.01-.35-.01-.53-.01-.18 0-.46.07-.7.32-.24.25-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.17 1.86 2.86 4.52 3.9 2.66 1.04 2.66.69 3.14.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.12.154-1.22-.06-.1-.24-.17-.5-.3z" fill="#25D366"/>
                </svg>
              </div>
              Chat via WhatsApp
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white">Volg ons</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#FDB913]"><Facebook /></a>
              <a href="#" className="hover:text-[#FDB913]"><Twitter /></a>
              <a href="#" className="hover:text-[#FDB913]"><Instagram /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Techie aan Huis — Alle rechten voorbehouden</p>
          <div className="text-sm text-white/60">Made with care • <a href="https://techieaanhuis.nl" className="hover:text-[#FDB913]">techieaanhuis.nl</a></div>
        </div>
      </div>
    </footer>
  );
}
