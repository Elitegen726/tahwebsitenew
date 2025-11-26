import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';

export const metadata = {
  title: 'Windows Hulp - Techie aan Huis',
  description: 'Professionele Windows ondersteuning. Van installatie en updates tot optimalisatie en probleemoplossing.',
};

export default function WindowsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🪟</span>
              <h1 className="text-4xl md:text-5xl font-bold">Windows Hulp</h1>
            </div>
            <p className="text-xl">Windows ondersteuning, updates en optimalisatie</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-[#0089D0]">Veelvoorkomende Windows Problemen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Windows installeren of upgraden',
                'Foutmeldingen en crashes',
                'Windows updates problemen',
                'Systeem loopt traag',
                'Blauw scherm (BSOD)',
                'Wachtwoord vergeten',
                'Virussen en malware',
                'Drivers ontbreken of werken niet',
              ].map((issue) => (
                <div key={issue} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#FDB913] text-xl">✓</span>
                  <span className="text-gray-700">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-[#0089D0]">Wat doet Techie aan Huis voor u?</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Windows Installatie & Updates',
                  description: 'We installeren Windows of voeren een upgrade uit naar de nieuwste versie. Ook verzorgen we belangrijke updates.',
                },
                {
                  title: 'Problemen en Foutmeldingen',
                  description: 'We diagnosticeren en repareren Windows fouten, crashes en prestatie problemen.',
                },
                {
                  title: 'Performance Optimalisatie',
                  description: 'We optimaliseren uw Windows systeem voor betere snelheid en stabiliteit.',
                },
                {
                  title: 'Beveiliging & Backup',
                  description: 'We zorgen voor goede beveiliging en richten automatische backups in voor uw bestanden.',
                },
                {
                  title: 'Drivers & Software',
                  description: 'We installeren en updaten benodigde drivers en zorgen dat alle apparaten goed werken.',
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

        <section className="py-20 bg-[#0089D0] text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Tarief</h2>
            <p className="text-5xl font-bold mb-2">€ 14,75</p>
            <p className="text-xl mb-8">per kwartier – Zonder voorrijkosten*</p>
            <CTAButton href="/tarieven" variant="primary" size="lg">Bekijk alle tarieven</CTAButton>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0089D0]">Windows problemen? We helpen u graag!</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/persoonlijke-hulp" size="lg">Boek Persoonlijke Hulp</CTAButton>
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
