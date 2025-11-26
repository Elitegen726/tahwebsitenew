import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Onze Partners - Techie aan Huis',
  description: 'Bekijk onze samenwerkingspartners en bedrijven waar wij mee werken.',
};

export default function Partners() {
  const partners = [
    {
      name: 'Microsoft Certified Partner',
      description: 'Gecertificeerd voor Windows en Microsoft producten',
      category: 'Technologie',
    },
    {
      name: 'KPN Business Partner',
      description: 'Samenwerking voor zakelijke internet oplossingen',
      category: 'Telecom',
    },
    {
      name: 'HP Authorized Service Provider',
      description: 'Geautoriseerd voor HP computer en printer service',
      category: 'Hardware',
    },
    {
      name: 'Ziggo Partner',
      description: 'Partner voor internet en digitale TV installaties',
      category: 'Telecom',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Onze Partners</h1>
            <p className="text-xl">
              We werken samen met toonaangevende bedrijven om u de beste service te bieden
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-[#0089D0] hover:shadow-xl transition-all"
                >
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-[#FDB913] text-black text-sm font-semibold rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#0089D0]">{partner.name}</h3>
                  <p className="text-gray-700">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0089D0]">
              Voordelen van onze partnerschappen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expertise',
                  icon: '🎓',
                  description: 'Toegang tot de nieuwste kennis en trainingen',
                },
                {
                  title: 'Kwaliteit',
                  icon: '⭐',
                  description: 'Gegarandeerde kwaliteit door gecertificeerde technici',
                },
                {
                  title: 'Support',
                  icon: '🤝',
                  description: 'Directe ondersteuning van fabrikanten bij complexe problemen',
                },
              ].map((benefit) => (
                <div key={benefit.title} className="bg-white p-8 rounded-xl text-center">
                  <div className="text-6xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#0089D0]">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-20 bg-[#0089D0] text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Wilt u partner worden?</h2>
            <p className="text-xl mb-8">
              Bent u geïnteresseerd in een samenwerking met Techie aan Huis? Neem contact met ons op
            </p>
            <a
              href="mailto:partners@techieaanhuis.nl"
              className="bg-[#FDB913] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e5a711] transition-all shadow-md hover:shadow-lg inline-block"
            >
              Contact voor partnerships
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0089D0]">Heeft u technische hulp nodig?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Profiteer van onze expertise en partnerships
            </p>
            <CTAButton href="/persoonlijke-hulp" size="lg">
              Neem contact op
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
