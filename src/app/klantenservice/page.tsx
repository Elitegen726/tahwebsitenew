'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import ContactMethod from '@/components/ContactMethod';
import OpeningHours from '@/components/OpeningHours';
import FaqItem from '@/components/FaqItem';
import { useState } from 'react';

export default function Klantenservice() {
  const faqs = [
    {
      question: 'Hoe snel kunnen jullie bij mij langskomen?',
      answer:
        'In de meeste gevallen kunnen we nog dezelfde dag of uiterlijk de volgende dag bij u langs. Bij urgente zaken proberen we binnen enkele uren beschikbaar te zijn.',
    },
    {
      question: 'Wat zijn de voorrijkosten?',
      answer:
        'Binnen ons standaard werkgebied rekenen we geen voorrijkosten. Voor locaties buiten ons werkgebied kunnen er voorrijkosten van €10 van toepassing zijn. Dit communiceren we altijd vooraf.',
    },
    {
      question: 'Kan ik ook remote hulp krijgen?',
      answer:
        'Ja, voor veel problemen kunnen we ook op afstand helpen via remote support. Het tarief is hetzelfde: €14,75 per kwartier.',
    },
    {
      question: 'Wat als jullie mijn probleem niet kunnen oplossen?',
      answer:
        'We hanteren het principe "No Cure No Pay". Als we uw probleem niet kunnen oplossen, betaalt u niets voor onze tijd.',
    },
    {
      question: 'Hoe betaal ik?',
      answer:
        'U kunt contant betalen, via pin of achteraf via factuur. We bespreken de voorkeursmethode altijd vooraf.',
    },
    {
      question: 'Zijn jullie ook beschikbaar in het weekend?',
      answer:
        'Ja, we zijn ook in het weekend beschikbaar voor spoedgevallen. Neem telefonisch contact met ons op om een afspraak te maken.',
    },
    {
      question: 'Hebben jullie ervaring met Macs/Apple producten?',
      answer:
        'Hoewel we gespecialiseerd zijn in Windows systemen, hebben we ook ervaring met Apple producten. Neem contact op om te bespreken of we u kunnen helpen met uw specifieke vraag.',
    },
    {
      question: 'Kunnen jullie ook hardware voor mij kopen?',
      answer:
        'Ja, we kunnen hardware zoals kabels, geheugen of andere componenten voor u regelen tegen kostprijs + 10% service fee.',
    },
  ];

  const contactMethods = [
    {
      href: 'tel:0852502264',
      icon: (
        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: 'Telefoon',
      description: 'Bel ons direct',
      contact: '085 250 22 64',
    },
    {
      href: 'mailto:info@techieaanhuis.nl',
      icon: (
        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: 'E-mail',
      description: 'Stuur ons een e-mail',
      contact: 'info@techieaanhuis.nl',
    },
    {
      href: 'https://wa.me/31852502264',
      icon: (
        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      title: 'WhatsApp',
      description: 'Chat met ons',
      contact: '085 250 22 64',
    },
  ];

  const openingHours = [
    { day: 'Maandag - Vrijdag', hours: '09:00 - 18:00' },
    { day: 'Zaterdag', hours: '10:00 - 16:00' },
    { day: 'Zondag', hours: 'Op afspraak' },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0089D0] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Klantenservice</h1>
            <p className="text-xl">We staan voor u klaar met antwoorden op al uw vragen</p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0089D0]">
              Neem contact met ons op
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method) => (
                <ContactMethod key={method.title} {...method} />
              ))}
            </div>
          </div>
        </section>

        {/* Opening Hours */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0089D0]">
              Openingstijden
            </h2>
            <OpeningHours openingHours={openingHours} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0089D0]">
              Veelgestelde Vragen
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem key={index} {...faq} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0089D0] text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Heeft u nog vragen?</h2>
            <p className="text-xl mb-8">
              Neem gerust contact met ons op, we helpen u graag verder
            </p>
            <CTAButton href="/persoonlijke-hulp" variant="primary" size="lg">
              Neem contact op
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
