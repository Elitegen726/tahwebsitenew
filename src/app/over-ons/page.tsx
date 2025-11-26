import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import ValueCard from '@/components/ValueCard';
import Certification from '@/components/Certification';
import TeamMember from '@/components/TeamMember';

export const metadata = {
  title: 'Over Ons - Techie aan Huis',
  description: 'Leer meer over Techie aan Huis en ons team van deskundige technici die u helpen met al uw technische vragen.',
};

export default function OverOns() {
  const values = [
    {
      title: 'Betrouwbaarheid',
      description:
        'We staan voor kwaliteit en betrouwbaarheid. Onze klanten kunnen op ons vertrouwen voor eerlijke en deskundige hulp.',
    },
    {
      title: 'Toegankelijkheid',
      description:
        'Technologie moet voor iedereen toegankelijk zijn. We maken technische hulp betaalbaar en begrijpelijk.',
    },
    {
      title: 'Klantvriendelijkheid',
      description:
        'De klant staat bij ons centraal. We luisteren naar uw vragen en bieden oplossingen die bij u passen.',
    },
  ];

  const certifications = ['Windows', 'MacOS', 'Netwerken', 'Hardware', 'Software', 'Beveiliging', 'Cloud', 'Support'];

  const teamMembers = [
    {
      name: 'Jan de Vries',
      title: 'Oprichter & Hoofdtechnicus',
      imageUrl: '/computer-security.jpg',
    },
    {
      name: 'Fatima el-Hasnaoui',
      title: 'Technisch Specialist',
      imageUrl: '/laptops.jpg',
    },
    {
      name: 'Pieter Janssen',
      title: 'Support Medewerker',
      imageUrl: '/wifi .jpg',
    },
  ];

  const whyChooseUsItems = [
    {
      title: 'Ervaren Specialisten',
      icon: '👨‍💻',
      description: 'Jarenlange ervaring met computers, smartphones en netwerken',
    },
    {
      title: 'Betaalbare Tarieven',
      icon: '💰',
      description: 'Professionele hulp voor de prijs van een student',
    },
    {
      title: 'Persoonlijke Aanpak',
      icon: '🤝',
      description: 'Geduldig en vriendelijk, we nemen de tijd voor u',
    },
    {
      title: 'Begrijpelijke Uitleg',
      icon: '💡',
      description: 'Alles wordt rustig uitgelegd in begrijpelijke taal',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Over ons</h1>
            <p className="text-xl">
              Bij Techie aan Huis geloven we dat iedereen toegang moet hebben tot betrouwbare en
              deskundige technische hulp
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-[#0089D0]">Onze Missie</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bij Techie aan Huis geloven we dat iedereen toegang moet hebben tot betrouwbare en
                deskundige technische hulp, zonder daar de hoofdprijs voor te betalen. Daarom bieden wij
                professionele ondersteuning voor de prijs van een student.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Onze specialisten hebben jarenlange ervaring met computers, smartphones, netwerken en
                digitale apparaten. Of het nu gaat om installatie onderhoud, reparatie of persoonlijk advies –
                wij leggen alles rustig uit in begrijpelijke taal.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0089D0]">
              Waarom kiezen voor Techie aan Huis?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUsItems.map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-xl text-center transition-transform transform hover:scale-105">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#0089D0]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0089D0]">
              Onze Waarden
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <ValueCard key={value.title} {...value} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0089D0]">
              Ons Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-[#0089D0] text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expertise & Certificaten</h2>
            <p className="text-lg mb-8">
              Onze technici beschikken over uitgebreide kennis en certificeringen op gebied van:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <Certification key={cert} name={cert} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0089D0]">
              Heeft u technische hulp nodig?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Neem vandaag nog contact met ons op en ontdek hoe wij u kunnen helpen
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