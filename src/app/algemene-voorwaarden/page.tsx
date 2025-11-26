import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Algemene Voorwaarden - Techie aan Huis',
  description: 'Lees onze algemene voorwaarden voor het gebruik van onze diensten.',
};

export default function AlgemeneVoorwaarden() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Algemene Voorwaarden</h1>
            <p className="text-xl">De voorwaarden voor het gebruik van onze diensten</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>

            <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">1. Algemeen</h2>
            <p className="mb-6 text-gray-700">
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen en overeenkomsten
              van Techie aan Huis. Door gebruik te maken van onze diensten gaat u akkoord met deze
              voorwaarden.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">2. Dienstverlening</h2>
            <p className="mb-4 text-gray-700">
              Techie aan Huis biedt technische ondersteuning op locatie en op afstand. Onze diensten
              omvatten:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Computer hulp en reparatie</li>
              <li>E-mail configuratie en ondersteuning</li>
              <li>Internet en WiFi installatie</li>
              <li>Printer installatie en troubleshooting</li>
              <li>Windows ondersteuning en updates</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">3. Tarieven en Betaling</h2>
            <p className="mb-4 text-gray-700">
              Ons standaard tarief bedraagt €14,75 per kwartier (15 minuten). Binnen ons werkgebied
              rekenen we geen voorrijkosten. Voor locaties buiten het werkgebied kunnen
              voorrijkosten van €10 van toepassing zijn.
            </p>
            <p className="mb-6 text-gray-700">
              Betaling kan contant, via pin of achteraf via factuur. Facturen dienen binnen 14 dagen
              te worden voldaan.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">4. No Cure No Pay</h2>
            <p className="mb-6 text-gray-700">
              Als we uw probleem niet kunnen oplossen, betaalt u niets voor onze diensten. Dit
              geldt niet voor hardwarekosten die al gemaakt zijn.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">5. Afspraken</h2>
            <p className="mb-6 text-gray-700">
              Afspraken kunnen tot 24 uur van tevoren kosteloos worden geannuleerd. Bij annulering
              binnen 24 uur of bij het niet aanwezig zijn, behouden wij ons het recht voor om €25
              annuleringskosten in rekening te brengen.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">6. Aansprakelijkheid</h2>
            <p className="mb-6 text-gray-700">
              Techie aan Huis werkt met de grootst mogelijke zorgvuldigheid. Wij zijn niet
              aansprakelijk voor schade aan hardware of verlies van data, tenzij deze schade het
              directe gevolg is van grove nalatigheid of opzet van onze technici. We adviseren
              altijd om een backup te maken voordat wij aan de slag gaan.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">7. Garantie</h2>
            <p className="mb-6 text-gray-700">
              Op uitgevoerde werkzaamheden geven we 30 dagen garantie. Dit betekent dat als
              hetzelfde probleem binnen 30 dagen opnieuw optreedt, we dit kosteloos oplossen.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">8. Privacy</h2>
            <p className="mb-6 text-gray-700">
              Techie aan Huis respecteert uw privacy. Persoonsgegevens worden alleen gebruikt voor
              het leveren van onze diensten. Zie ons privacybeleid voor meer informatie.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">9. Klachten</h2>
            <p className="mb-6 text-gray-700">
              Bent u niet tevreden over onze dienstverlening? Neem dan contact met ons op via
              klachten@techieaanhuis.nl of bel naar 085 250 22 64. We proberen klachten binnen 7
              werkdagen op te lossen.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">10. Toepasselijk recht</h2>
            <p className="mb-6 text-gray-700">
              Op deze algemene voorwaarden is Nederlands recht van toepassing. Geschillen worden
              voorgelegd aan de bevoegde rechter in Nederland.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#0089D0]">11. Contact</h2>
            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <p className="text-gray-700">
                <strong>Techie aan Huis</strong><br />
                E-mail: info@techieaanhuis.nl<br />
                Telefoon: 085 250 22 64<br />
                Website: techieaanhuis.nl
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
