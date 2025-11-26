import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import PricingExample from '@/components/PricingExample';
import AdditionalService from '@/components/AdditionalService';
import Guarantee from '@/components/Guarantee';

export const metadata = {
  title: 'Tarieven - Techie aan Huis',
  description: 'Transparante en eerlijke tarieven voor technische hulp. €14,75 per kwartier zonder voorrijkosten.',
};

export default function Tarieven() {
  const pricingExamples = [
    {
      service: 'E-mail account instellen',
      time: '30 minuten',
      price: '€ 29,50',
    },
    {
      service: 'WiFi netwerk configureren',
      time: '45 minuten',
      price: '€ 44,25',
    },
    {
      service: 'Computer opschonen en optimaliseren',
      time: '1 uur',
      price: '€ 59,00',
    },
    {
      service: 'Windows update en security check',
      time: '1 uur 15 minuten',
      price: '€ 73,75',
    },
  ];

  const additionalServices = [
    {
      title: 'Remote Hulp',
      description: 'Voor eenvoudige problemen kunnen we ook op afstand helpen. Zelfde tarief van €14,75 per kwartier.',
    },
    {
      title: 'Hardware Aankoop',
      description: 'Wij kunnen hardware (kabels, geheugen, etc.) voor u regelen tegen kostprijs + 10% service fee.',
    },
    {
      title: 'Abonnementen',
      description: 'Voor regelmatige ondersteuning bieden we op maat gemaakte abonnementen. Neem contact op voor meer informatie.',
    },
  ];

  const guarantees = [
    {
      title: 'No Cure No Pay',
      description: 'Kunnen we uw probleem niet oplossen? Dan betaalt u niet.',
    },
    {
      title: 'Geen Voorrijkosten*',
      description: 'Binnen ons werkgebied rekenen we geen voorrijkosten.',
    },
    {
      title: 'Transparant',
      description: 'Duidelijke prijzen vooraf, geen verrassingen achteraf.',
    },
  ];

  const whatsIncluded = [
    {
      title: 'Alle Diensten',
      icon: '💻',
      description: 'Computer, e-mail, internet, printer en Windows hulp',
    },
    {
      title: 'Op Locatie',
      icon: '🏠',
      description: 'We komen bij u thuis of op kantoor',
    },
    {
      title: 'Deskundige Hulp',
      icon: '👨‍💻',
      description: 'Ervaren technici met jarenlange expertise',
    },
    {
      title: 'Duidelijke Uitleg',
      icon: '💡',
      description: 'Alles wordt begrijpelijk uitgelegd',
    },
    {
      title: 'Geen Verrassingen',
      icon: '✓',
      description: 'Transparante prijzen, geen verborgen kosten',
    },
    {
      title: 'Snelle Service',
      icon: '⚡',
      description: 'Vaak nog dezelfde of volgende dag mogelijk',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tarieven</h1>
            <p className="text-xl">
              Transparante prijzen, geen verrassingen
            </p>
          </div>
        </section>

        {/* Main Pricing */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white border-4 border-[#FDB913] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-[#0089D0]">Standaard Tarief</h2>
              <div className="mb-8">
                <p className="text-7xl font-bold text-[#0089D0] mb-2">€ 14,75</p>
                <p className="text-2xl text-gray-700">per kwartier (15 minuten)</p>
              </div>
              <div className="bg-[#FDB913] text-black py-3 px-6 rounded-full inline-block font-bold text-lg mb-8">
                Zonder voorrijkosten*
              </div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Bij Techie aan Huis geloven we dat iedereen toegang moet hebben tot betrouwbare en
                deskundige technische hulp, zonder daar de hoofdprijs voor te betalen. Daarom bieden wij
                professionele ondersteuning voor de prijs van een student.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0089D0]">
              Wat is inbegrepen?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatsIncluded.map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-xl text-center transition-transform transform hover:scale-105">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#0089D0]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Examples */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0089D0]">
              Voorbeelden
            </h2>
            <div className="space-y-6">
              {pricingExamples.map((example) => (
                <PricingExample key={example.service} {...example} />
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8 italic">
              * Bovenstaande voorbeelden zijn indicatief. De daadwerkelijke tijd kan variëren afhankelijk van de specifieke situatie.
            </p>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0089D0]">
              Aanvullende Diensten
            </h2>
            <div className="space-y-6">
              {additionalServices.map((service) => (
                <AdditionalService key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-20 bg-[#0089D0] text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Onze Garanties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {guarantees.map((guarantee) => (
                <Guarantee key={guarantee.title} {...guarantee} />
              ))}
            </div>
            <p className="text-center mt-12 text-sm opacity-80">
              * Voorrijkosten van €10 kunnen van toepassing zijn buiten ons standaard werkgebied. Dit wordt altijd vooraf gecommuniceerd.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0089D0]">
              Klaar om te starten?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Neem contact met ons op voor een afspraak
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/persoonlijke-hulp" size="lg">
                Plan een afspraak
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}