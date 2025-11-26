import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacySection from '@/components/PrivacySection';

export const metadata = {
  title: 'Privacy Policy - Techie aan Huis',
  description: 'Lees ons privacybeleid en hoe we omgaan met uw persoonlijke gegevens.',
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl">Hoe wij omgaan met uw persoonlijke gegevens</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            <p className="text-gray-600">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>

            <PrivacySection title="1. Introductie">
              <p>
                Techie aan Huis respecteert uw privacy en zorgt ervoor dat uw persoonlijke informatie
                vertrouwelijk wordt behandeld. In dit privacy statement leggen we uit welke
                persoonsgegevens we verzamelen en hoe we deze gebruiken.
              </p>
            </PrivacySection>

            <PrivacySection title="2. Welke gegevens verzamelen we?">
              <p>We verzamelen de volgende persoonsgegevens:</p>
              <ul>
                <li>Naam en contactgegevens (e-mailadres, telefoonnummer, adres)</li>
                <li>Technische informatie over uw apparaten (alleen met uw toestemming)</li>
                <li>Communicatie tussen u en Techie aan Huis</li>
              </ul>
            </PrivacySection>

            <PrivacySection title="3. Waarvoor gebruiken we uw gegevens?">
              <p>Uw gegevens worden gebruikt voor:</p>
              <ul>
                <li>Het leveren van onze diensten</li>
                <li>Communicatie over afspraken en dienstverlening</li>
                <li>Facturering en administratie</li>
                <li>Verbetering van onze diensten</li>
              </ul>
            </PrivacySection>

            <PrivacySection title="4. Delen met derden">
              <p>
                We verkopen uw gegevens nooit aan derden. We delen alleen gegevens met partners die
                ons helpen bij het leveren van onze diensten, zoals boekhoudsoftware en
                e-mailproviders.
              </p>
            </PrivacySection>

            <PrivacySection title="5. Beveiliging">
              <p>
                We nemen passende technische en organisatorische maatregelen om uw gegevens te
                beschermen tegen verlies of onrechtmatige verwerking.
              </p>
            </PrivacySection>

            <PrivacySection title="6. Uw rechten">
              <p>U heeft het recht om:</p>
              <ul>
                <li>Inzage te vragen in uw persoonsgegevens</li>
                <li>Correctie van onjuiste gegevens te vragen</li>
                <li>Verwijdering van uw gegevens te vragen</li>
                <li>Bezwaar te maken tegen verwerking</li>
                <li>Uw gegevens over te dragen</li>
              </ul>
            </PrivacySection>

            <PrivacySection title="7. Cookies">
              <p>
                Onze website gebruikt alleen functionele cookies die noodzakelijk zijn voor het
                functioneren van de website. We gebruiken geen tracking cookies.
              </p>
            </PrivacySection>

            <PrivacySection title="8. Contact">
              <p>
                Voor vragen over ons privacybeleid kunt u contact met ons opnemen:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p>
                  <strong>Techie aan Huis</strong><br />
                  E-mail: privacy@techieaanhuis.nl<br />
                  Telefoon: 085 250 22 64
                </p>
              </div>
            </PrivacySection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}