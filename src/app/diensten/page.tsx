import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceFeatureCard from '@/components/ServiceFeatureCard';
import Step from '@/components/Step';

export const metadata = {
  title: 'Onze Diensten - Techie aan Huis',
  description: 'Ontdek alle diensten die Techie aan Huis biedt: computer hulp, email ondersteuning, internet/wifi, printer hulp en Windows support.',
};

export default function Diensten() {
  const services = [
    {
      title: 'Computer',
      icon: '💻',
      description: 'Hulp bij alle computer problemen, van installatie tot reparatie en onderhoud',
      href: '/diensten/computer',
      features: [
        'Computer installatie en configuratie',
        'Problemen oplossen en reparaties',
        'Software installatie en updates',
        'Performance optimalisatie',
      ],
    },
    {
      title: 'E-mail',
      icon: '📧',
      description: 'Ondersteuning bij al uw e-mail gerelateerde vragen en problemen',
      href: '/diensten/email',
      features: [
        'E-mail account instellen',
        'Problemen met verzenden/ontvangen',
        'Synchronisatie over apparaten',
        'Spam en beveiliging',
      ],
    },
    {
      title: 'Internet / WiFi',
      icon: '📡',
      description: 'Hulp bij internet verbinding, WiFi netwerk en netwerkproblemen',
      href: '/diensten/internet-wifi',
      features: [
        'WiFi netwerk installatie',
        'Verbindingsproblemen oplossen',
        'Router configuratie',
        'Netwerk beveiliging',
      ],
    },
    {
      title: 'Printer',
      icon: '🖨️',
      description: 'Printer installatie, configuratie en probleemoplossing',
      href: '/diensten/printer',
      features: [
        'Printer installatie en instellen',
        'Problemen met printen oplossen',
        'Netwerk printer configuratie',
        'Scanner en fax instellen',
      ],
    },
    {
      title: 'Windows',
      icon: '🪟',
      description: 'Windows ondersteuning, updates en optimalisatie',
      href: '/diensten/windows',
      features: [
        'Windows installatie en updates',
        'Problemen en foutmeldingen',
        'Performance optimalisatie',
        'Beveiliging en backup',
      ],
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Neem contact op',
      description: 'Bel of mail ons met uw vraag',
    },
    {
      step: '2',
      title: 'Maak afspraak',
      description: 'We plannen een geschikt moment',
    },
    {
      step: '3',
      title: 'Wij komen langs',
      description: 'Onze technici komen bij u thuis',
    },
    {
      step: '4',
      title: 'Probleem opgelost',
      description: 'We lossen uw probleem professioneel op',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Onze Diensten</h1>
            <p className="text-xl">
              Deskundige technische hulp voor al uw computer, internet en technologie vragen
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <ServiceFeatureCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0089D0]">
              Hoe werken wij?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((item) => (
                <Step key={item.step} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0089D0] text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Heeft u hulp nodig?</h2>
            <p className="text-xl mb-8">
              Neem vandaag nog contact met ons op voor professionele technische ondersteuning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0852502264"
                className="bg-[#FDB913] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e5a711] transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                085 250 22 64
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
