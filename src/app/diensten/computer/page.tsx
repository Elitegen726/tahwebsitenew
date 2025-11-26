import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Computer Hulp - Techie aan Huis',
  description: 'Professionele computer hulp bij u thuis. Van installatie tot reparatie en onderhoud.',
};

export default function ComputerPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl">💻</span>
                  <h1 className="text-4xl md:text-5xl font-bold">Computer Hulp</h1>
                </div>
                <p className="text-xl">
                  Deskundige hulp bij alle computer problemen, van installatie tot reparatie
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/computer-security.jpg"
                    alt="Computer security and support"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-[#0089D0]">
              Veelvoorkomende Computer Problemen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Computer start niet op',
                'Systeem loopt traag',
                'Virussen of malware',
                'Software werkt niet',
                'Bestanden kwijt of beschadigd',
                'Hardware defecten',
                'Geluiden of vreemde meldingen',
                'Verbinding met apparaten lukt niet',
              ].map((issue) => (
                <div key={issue} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#FDB913] text-xl">✓</span>
                  <span className="text-gray-700">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-[#0089D0]">
              Wat doet Techie aan Huis voor u?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Computer Installatie & Configuratie',
                  description:
                    'We installeren en configureren uw nieuwe computer, inclusief alle benodigde software en instellingen.',
                },
                {
                  title: 'Probleemoplossing & Reparatie',
                  description:
                    'We diagnosticeren en repareren hardware- en softwareproblemen snel en efficiënt.',
                },
                {
                  title: 'Software Installatie & Updates',
                  description:
                    'We installeren programmas en zorgen ervoor dat uw systeem up-to-date en veilig blijft.',
                },
                {
                  title: 'Performance Optimalisatie',
                  description:
                    'We verbeteren de snelheid en prestaties van uw computer door onnodige programmas te verwijderen en het systeem te optimaliseren.',
                },
                {
                  title: 'Data Backup & Herstel',
                  description:
                    'We helpen bij het maken van backups en kunnen verloren gegevens proberen te herstellen.',
                },
                {
                  title: 'Hardware Upgrades',
                  description:
                    'We adviseren over en installeren hardware upgrades zoals meer geheugen, grotere harde schijf of SSD.',
                },
              ].map((service) => (
                <div key={service.title} className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 text-[#0089D0]">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-[#0089D0] text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Tarief</h2>
            <p className="text-5xl font-bold mb-2">€ 14,75</p>
            <p className="text-xl mb-8">per kwartier – Zonder voorrijkosten*</p>
            <CTAButton href="/tarieven" variant="primary" size="lg">
              Bekijk alle tarieven
            </CTAButton>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-[#0089D0] text-center">
              Onze Garanties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'No Cure No Pay',
                  description: 'Kunnen we uw probleem niet oplossen? Dan betaalt u niet.',
                },
                {
                  title: 'Snelle Service',
                  description: 'Vaak nog dezelfde dag of volgende dag bij u thuis.',
                },
                {
                  title: 'Transparant',
                  description: 'Duidelijke prijzen en geen verrassingen achteraf.',
                },
              ].map((guarantee) => (
                <div key={guarantee.title} className="text-center">
                  <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold mb-2">{guarantee.title}</h3>
                  <p className="text-gray-600">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0089D0]">
              Computer problemen? We helpen u graag!
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/persoonlijke-hulp" size="lg">
                Boek Persoonlijke Hulp
              </CTAButton>
              <a
                href="tel:0852502264"
                className="bg-white text-[#0089D0] border-2 border-[#0089D0] hover:bg-[#0089D0] hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Bel 085 250 22 64
              </a>
            </div>
            <div className="mt-8">
              <Link href="/diensten" className="text-[#0089D0] hover:text-[#FDB913] font-semibold">
                ← Terug naar alle diensten
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
