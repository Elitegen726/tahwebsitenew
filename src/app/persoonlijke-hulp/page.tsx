import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Persoonlijke Hulp - Techie aan Huis',
  description: 'Boek persoonlijke technische hulp bij u thuis. Geduldig, vriendelijk en deskundig.',
};

export default function PersoonlijkeHulp() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Persoonlijke Hulp</h1>
            <p className="text-xl">
              Op maat gemaakte technische ondersteuning, speciaal voor uw situatie
            </p>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-[#0089D0] text-center">
              Wat kunt u verwachten tijdens een huisbezoek?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0089D0]">Kennismaking</h3>
                  <p className="text-gray-700">
                    We stellen ons voor en nemen rustig de tijd om uw probleem te begrijpen. U hoeft
                    zich niet gehaast te voelen.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0089D0]">Analyse</h3>
                  <p className="text-gray-700">
                    We bekijken uw computer, netwerk of ander apparaat en diagnosticeren het probleem.
                    We leggen uit wat er aan de hand is in begrijpelijke taal.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0089D0]">Oplossing</h3>
                  <p className="text-gray-700">
                    We lossen uw probleem op en laten u zien wat we doen. Als er iets niet kan worden
                    opgelost, betaalt u niets (No Cure No Pay).
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0089D0]">Uitleg & Advies</h3>
                  <p className="text-gray-700">
                    We nemen de tijd om alles uit te leggen en geven tips om soortgelijke problemen in
                    de toekomst te voorkomen.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0089D0]">Afsluiting</h3>
                  <p className="text-gray-700">
                    We controleren of alles naar wens werkt en bespreken de betaling. U ontvangt een
                    duidelijk overzicht van de uitgevoerde werkzaamheden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Seniors */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-[#0089D0] text-center">
              Speciaal voor Senioren
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                We begrijpen dat technologie soms ingewikkeld kan zijn. Daarom nemen we extra tijd
                voor senioren en mensen die minder technisch onderlegd zijn.
              </p>
              <ul className="space-y-4">
                {[
                  'Geduldig en vriendelijk uitleg zonder jargon',
                  'Rustig tempo, we hebben alle tijd voor u',
                  'Duidelijke instructies die u kunt onthouden',
                  'Mogelijkheid om dingen meerdere keren te herhalen',
                  'Geschreven instructies als u dat wilt',
                  'Nazorg: u kunt altijd bellen met vragen',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-[#0089D0] text-center">
              Voorbeelden van persoonlijke hulp
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Nieuwe Computer Instellen',
                  description: 'We installeren en configureren uw nieuwe computer volledig naar uw wensen.',
                },
                {
                  title: 'Overstap naar Nieuwe Apparaat',
                  description: 'We helpen bij het overzetten van al uw bestanden en instellingen.',
                },
                {
                  title: 'Sociaal Media & Apps',
                  description: 'Leren werken met Facebook, WhatsApp, Zoom of andere apps.',
                },
                {
                  title: 'Online Bankieren',
                  description: 'Veilig instellen en leren werken met online bankieren.',
                },
                {
                  title: 'Fotobewerking & Backup',
                  description: 'Fotos organiseren, bewerken en veilig opslaan.',
                },
                {
                  title: 'Privacy & Beveiliging',
                  description: 'Uw apparaten beveiligen en privacyinstellingen optimaliseren.',
                },
              ].map((useCase) => (
                <div key={useCase.title} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2 text-[#0089D0]">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
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
            <p className="text-lg max-w-2xl mx-auto mb-8">
              We werken transparant: u betaalt alleen voor de tijd die we daadwerkelijk bezig zijn.
              Geen verrassingen achteraf.
            </p>
            <CTAButton href="/tarieven" variant="primary" size="lg">
              Meer over tarieven
            </CTAButton>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0089D0]">
              Klaar voor persoonlijke hulp?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Neem vandaag nog contact met ons op om een afspraak te maken
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:0852502264"
                className="bg-[#FDB913] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e5a711] transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Bel 085 250 22 64
              </a>
              <a
                href="mailto:info@techieaanhuis.nl"
                className="bg-white text-[#0089D0] border-2 border-[#0089D0] hover:bg-[#0089D0] hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                E-mail ons
              </a>
            </div>
            <p className="text-gray-600">
              Of bezoek onze{' '}
              <a href="/klantenservice" className="text-[#0089D0] hover:text-[#FDB913] font-semibold">
                klantenservice pagina
              </a>{' '}
              voor meer contactopties
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
