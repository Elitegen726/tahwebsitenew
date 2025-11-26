import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Werken bij Techie aan Huis',
  description: 'Bekijk onze vacatures en kom werken bij een snelgroeiend tech support bedrijf.',
};

export default function WerkenBijOns() {
  const openings = [
    {
      title: 'Field Technician',
      type: 'Fulltime',
      location: 'Randstad',
      description:
        'We zoeken een ervaren technicus voor on-site support bij klanten thuis. Je hebt ervaring met Windows, netwerken en hardware.',
      requirements: [
        'Minimaal 2 jaar ervaring met IT support',
        'Rijbewijs B',
        'Goede communicatieve vaardigheden',
        'Klantvriendelijk en geduldig',
      ],
    },
    {
      title: 'Remote Support Specialist',
      type: 'Parttime/Fulltime',
      location: 'Remote',
      description:
        'Help klanten op afstand met hun technische vragen via telefoon en remote desktop. Flexibele werktijden mogelijk.',
      requirements: [
        'Ervaring met remote support tools',
        'Uitstekende communicatieve vaardigheden',
        'Probleemoplossend vermogen',
        'Beschikbaarheid op doordeweekse avonden',
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Werken bij Techie aan Huis</h1>
            <p className="text-xl">Word onderdeel van ons team en help mensen met technologie</p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0089D0]">
              Waarom werken bij ons?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Groei & Ontwikkeling',
                  icon: '📈',
                  description: 'Trainingen en certificeringen om je vaardigheden te ontwikkelen',
                },
                {
                  title: 'Flexibiliteit',
                  icon: '⏰',
                  description: 'Flexibele werktijden en mogelijkheid tot thuiswerken',
                },
                {
                  title: 'Goed Salaris',
                  icon: '💰',
                  description: 'Marktconform salaris en bonusregeling',
                },
                {
                  title: 'Leuk Team',
                  icon: '👥',
                  description: 'Werk samen met gedreven en enthousiaste collega s',
                },
              ].map((benefit) => (
                <div key={benefit.title} className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#0089D0]">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-[#0089D0] text-center">
              Onze Bedrijfscultuur
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                Bij Techie aan Huis draait alles om het helpen van mensen. We geloven in:
              </p>
              <ul className="space-y-4">
                {[
                  'Klantvriendelijkheid en geduld',
                  'Transparantie en eerlijkheid',
                  'Continue verbetering en leren',
                  'Samenwerking en teamwork',
                  'Work-life balance',
                  'Diversiteit en inclusiviteit',
                ].map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <span className="text-[#FDB913] text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-[#0089D0] text-center">
              Actuele Vacatures
            </h2>
            <div className="space-y-8">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-[#0089D0] hover:shadow-xl transition-all"
                >
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="px-4 py-1 bg-[#FDB913] text-black text-sm font-semibold rounded-full">
                      {job.type}
                    </span>
                    <span className="px-4 py-1 bg-gray-200 text-gray-700 text-sm font-semibold rounded-full">
                      📍 {job.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#0089D0]">{job.title}</h3>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Wat vragen wij:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#FDB913] mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`mailto:jobs@techieaanhuis.nl?subject=Sollicitatie ${job.title}`}
                    className="inline-block bg-[#0089D0] text-white px-6 py-3 rounded-full font-bold hover:bg-[#0070b0] transition-all"
                  >
                    Solliciteer nu
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-[#0089D0] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Wat bieden wij?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Marktconform salaris',
                'Reiskostenvergoeding',
                'Pensioenregeling',
                'Opleidingsmogelijkheden',
                '25 vakantiedagen',
                'Laptop en telefoon van de zaak',
                'Flexibele werktijden',
                'Doorgroeimogelijkheden',
                'Leuke bedrijfsuitjes',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                  <span className="text-[#FDB913] text-xl">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-[#0089D0] text-center">
              Sollicitatieprocedure
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Stuur je CV',
                  description: 'Mail je CV en motivatie naar jobs@techieaanhuis.nl',
                },
                {
                  step: '2',
                  title: 'Telefonisch gesprek',
                  description: 'We bellen je voor een eerste kennismaking',
                },
                {
                  step: '3',
                  title: 'Gesprek op kantoor',
                  description: 'Persoonlijk gesprek met het team',
                },
                {
                  step: '4',
                  title: 'Proefdag',
                  description: 'Een dag meedraaien om te kijken of het past',
                },
                {
                  step: '5',
                  title: 'Aanbieding',
                  description: 'We maken een aanbod en verwelkomen je in het team!',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-[#0089D0]">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0089D0]">
              Geen passende vacature gevonden?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stuur ons gerust een open sollicitatie. We zijn altijd op zoek naar talent!
            </p>
            <a
              href="mailto:jobs@techieaanhuis.nl"
              className="inline-block bg-[#FDB913] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e5a711] transition-all shadow-md hover:shadow-lg"
            >
              Stuur open sollicitatie
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
