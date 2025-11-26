import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import ServiceCard from '@/components/ServiceCard';
import Check from '@/components/icons/Check';
import Euro from '@/components/icons/Euro';
import Users from '@/components/icons/Users';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section — modernized */}
        <section className="relative bg-gradient-to-br from-[#0077bf] via-[#0089D0] to-[#5BB4E5] text-white py-24 lg:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-sm">
                  Hulp nodig met technologie?
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                  Deskundige, compacte en betaalbare technische hulp — bij u thuis of op afstand.
                  Rustig uitgelegd en met persoonlijke aandacht.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <CTAButton href="/persoonlijke-hulp" size="lg">
                    Neem contact op
                  </CTAButton>

                  <a
                    href="https://wa.me/31852502264?text=Hallo%20Techie%20aan%20Huis%2C%20ik%20heb%20een%20vraag"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat met ons via WhatsApp"
                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-full transition"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12c0 2.116.556 4.09 1.613 5.844L0 24l6.39-1.668A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.247-6.184-3.48-8.52z" fill="#25D366"/>
                      <path d="M15.07 14.93c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13-.18.26-.7.85-.86 1.02-.16.17-.32.19-.58.06-.26-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.39-1.76-.14-.26-.02-.4.11-.53.11-.11.26-.29.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.44-.06-.12-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46-.16-.01-.35-.01-.53-.01-.18 0-.46.07-.7.32-.24.25-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.17 1.86 2.86 4.52 3.9 2.66 1.04 2.66.69 3.14.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.12.154-1.22-.06-.1-.24-.17-.5-.3z" fill="#fff"/>
                    </svg>
                    Chat via WhatsApp
                  </a>
                </div>

                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-white/95 max-w-md">
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">✔</span>
                    Problemen met computer of smartphone
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">✔</span>
                    Installatie van apparaten & software
                  </li>
                </ul>
              </div>

              <div className="hidden lg:flex justify-center">
                <div className="relative w-full max-w-md h-96 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center p-8 shadow-2xl">
                  <div className="text-center">
                    <Image
                      src="/logo.png"
                      alt="Techie aan Huis"
                      width={300}
                      height={300}
                      className="w-56 h-auto mb-4 mx-auto"
                    />
                    <p className="text-lg font-semibold text-white/95">Deskundige hulp bij u thuis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* decorative circle */}
          <div className="pointer-events-none absolute -right-40 -top-36 w-[380px] h-[380px] bg-white/6 rounded-full blur-3xl" />
        </section>

        {/* Services Overview — modern cards */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0089D0]">
              Onze Diensten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Computer',
                  icon: '💻',
                  description: 'Hulp bij computer problemen, installaties en onderhoud',
                  href: '/diensten/computer',
                },
                {
                  title: 'E-mail',
                  icon: '📧',
                  description: 'Ondersteuning bij e-mail configuratie en problemen',
                  href: '/diensten/email',
                },
                {
                  title: 'Internet / WiFi',
                  icon: '📡',
                  description: 'Hulp bij internet verbinding en WiFi netwerk',
                  href: '/diensten/internet-wifi',
                },
                {
                  title: 'Printer',
                  icon: '🖨️',
                  description: 'Printer installatie en probleemoplossing',
                  href: '/diensten/printer',
                },
                {
                  title: 'Windows',
                  icon: '🪟',
                  description: 'Windows ondersteuning en updates',
                  href: '/diensten/windows',
                },
                {
                  title: 'Persoonlijke Hulp',
                  icon: '🤝',
                  description: 'Op maat gemaakte hulp voor uw specifieke situatie',
                  href: '/persoonlijke-hulp',
                },
              ].map((service) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Floating WhatsApp FAB */}
        <a
          href="https://wa.me/31852502264?text=Hallo%20Techie%20aan%20Huis%2C%20ik%20heb%20een%20vraag"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp chat"
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12c0 2.116.556 4.09 1.613 5.844L0 24l6.39-1.668A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.247-6.184-3.48-8.52z" fill="#fff"/>
            <path d="M15.07 14.93c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13-.18.26-.7.85-.86 1.02-.16.17-.32.19-.58.06-.26-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.39-1.76-.14-.26-.02-.4.11-.53.11-.11.26-.29.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.44-.06-.12-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46-.16-.01-.35-.01-.53-.01-.18 0-.46.07-.7.32-.24.25-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.17 1.86 2.86 4.52 3.9 2.66 1.04 2.66.69 3.14.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.12.154-1.22-.06-.1-.24-.17-.5-.3z" fill="#fff"/>
          </svg>
        </a>

        {/* Pricing Teaser */}
        <section className="py-20 bg-[#0089D0] text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tarief</h2>
            <p className="text-xl md:text-2xl mb-4">
              <span className="text-5xl font-bold block mb-2">€ 14,75</span>
              per kwartier
            </p>
            <p className="text-lg mb-8">– Zonder voorrijkosten* –</p>
            <p className="text-base max-w-2xl mx-auto mb-8">
              Bij Techie aan Huis geloven we dat iedereen toegang moet hebben tot betrouwbare en
              deskundige technische hulp, zonder daar de hoofdprijs voor te betalen. Daarom bieden wij
              professionele ondersteuning voor de prijs van een student.
            </p>
            <CTAButton href="/tarieven" variant="primary" size="lg">
              Bekijk alle tarieven
            </CTAButton>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0089D0]">
              Waarom Techie aan Huis?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Betrouwbaar',
                  icon: <Check />,
                  description: 'Deskundige technici met jarenlange ervaring',
                },
                {
                  title: 'Betaalbaar',
                  icon: <Euro />,
                  description: 'Professionele hulp voor studentenprijzen',
                },
                {
                  title: 'Persoonlijk',
                  icon: <Users />,
                  description: 'Geduldig en vriendelijk, vooral voor senioren',
                },
              ].map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0089D0]">
              Klaar om te starten?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Neem vandaag nog contact op voor deskundige technische hulp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/persoonlijke-hulp" size="lg">
                Plan een afspraak
              </CTAButton>
              <CTAButton href="/klantenservice" variant="secondary" size="lg">
                Stel een vraag
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
