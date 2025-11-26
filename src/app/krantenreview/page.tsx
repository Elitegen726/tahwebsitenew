import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Krantenreviews & Media - Techie aan Huis',
  description: 'Lees wat de media en klanten over Techie aan Huis zeggen.',
};

export default function Krantenreview() {
  const reviews = [
    {
      source: 'Algemeen Dagblad',
      date: '15 maart 2024',
      quote:
        'Techie aan Huis biedt betaalbare en professionele technische hulp voor iedereen. Vooral senioren waarderen de geduldige aanpak.',
      rating: 5,
    },
    {
      source: 'De Telegraaf',
      date: '8 januari 2024',
      quote:
        'Een verademing in de vaak dure wereld van IT-support. Techie aan Huis maakt technologie toegankelijk.',
      rating: 5,
    },
    {
      source: 'Het Parool',
      date: '22 november 2023',
      quote:
        'Transparante prijzen en deskundige hulp. Precies wat consumenten nodig hebben bij technische problemen.',
      rating: 4,
    },
  ];

  const testimonials = [
    {
      name: 'Maria de Vries',
      age: 72,
      text: 'Eindelijk iemand die rustig uitleg geeft zonder moeilijke woorden! Ze hebben me geholpen met mijn nieuwe tablet en namen alle tijd om het uit te leggen.',
      rating: 5,
    },
    {
      name: 'Jan Bakker',
      age: 54,
      text: 'Snel, deskundig en betaalbaar. Mijn WiFi probleem was binnen een uur opgelost en de prijs was eerlijk.',
      rating: 5,
    },
    {
      name: 'Sophie Janssen',
      age: 38,
      text: 'Erg tevreden over de service. Ze hebben onze thuiscomputer weer als nieuw gemaakt. Aanrader!',
      rating: 5,
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Krantenreviews & Media</h1>
            <p className="text-xl">Wat de pers en onze klanten over ons zeggen</p>
          </div>
        </section>

        {/* Press Reviews */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-[#0089D0] text-center">In de Pers</h2>
            <div className="space-y-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white border-l-4 border-[#FDB913] p-8 rounded-r-xl shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#FDB913]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "{review.quote}"
                  </blockquote>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-[#0089D0]">{review.source}</span>
                    <span className="text-gray-500">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-[#0089D0] text-center">
              Wat onze klanten zeggen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#FDB913]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.age} jaar</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ratings Summary */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0089D0] text-white p-12 rounded-3xl text-center">
              <h2 className="text-3xl font-bold mb-8">Onze Waardering</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl font-bold mb-2">4.8/5</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-[#FDB913]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p>Gemiddelde beoordeling</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <p>Tevreden klanten</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">98%</div>
                  <p>Aanbeveelt ons door</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0089D0]">
              Ervaar zelf onze service
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sluit u aan bij honderden tevreden klanten
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
