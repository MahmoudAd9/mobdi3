'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { language } = useLanguage();

  const translations = {
    hero: {
      title: {
        ar: 'احصل على إعلانات مراجعة منتجات مذهلة في دقائق!',
        en: 'Get amazing product review ads in minutes!',
        fr: 'Obtenez des avis de produits incroyables en quelques minutes!'
      },
      subtitle: {
        ar: 'اتصل بمصممي محتوى محترفين وإنشاء إعلانات فيديو لمنتجاتك ومنصتك',
        en: 'Connect with professional content creators and create video ads for your products and platform',
        fr: 'Connectez-vous avec des créateurs de contenu professionnels et créez des publicités vidéo pour vos produits et votre plateforme'
      },
      cta: {
        ar: 'ابدأ الآن',
        en: 'Start Now',
        fr: 'Commencer Maintenant'
      }
    },
    howItWorks: {
      title: {
        ar: 'كيف يعمل موقعنا',
        en: 'How Our Platform Works',
        fr: 'Comment Fonctionne Notre Plateforme'
      },
      steps: [
        {
          title: {
            ar: 'أرسل المنتج والمواصفات',
            en: 'Send Product and Specifications',
            fr: 'Envoyez le Produit et les Spécifications'
          },
          description: {
            ar: 'أرسل تفاصيل منتجك وما تريد في الفيديو',
            en: 'Send details of your product and what you want in the video',
            fr: 'Envoyez les détails de votre produit et ce que vous souhaitez dans la vidéo'
          }
        },
        {
          title: {
            ar: 'اختر المؤثر المناسب',
            en: 'Choose the Right Influencer',
            fr: 'Choisissez le Bon Influenceur'
          },
          description: {
            ar: 'اختر من مجموعة محترفين يناسبون علامتك التجارية',
            en: 'Choose from a group of professionals who suit your brand',
            fr: 'Choisissez parmi un groupe de professionnels qui conviennent à votre marque'
          }
        },
        {
          title: {
            ar: 'احصل على إعلان جاهز',
            en: 'Get a Ready Advertisement',
            fr: 'Obtenez une Publicité Prête'
          },
          description: {
            ar: 'سيقوم المؤثر بإنشاء فيديو تسويقي مميز على منتجك',
            en: 'The influencer will create a distinctive marketing video for your product',
            fr: 'L\'influenceur créera une vidéo marketing distinctive pour votre produit'
          }
        }
      ]
    },
    testimonials: {
      title: {
        ar: 'آراء عملائنا',
        en: 'Our Clients\' Testimonials',
        fr: 'Témoignages de Nos Clients'
      },
      items: [
        {
          text: {
            ar: '"لقد حصلنا على إعلان مراجعة احترافي لمنتجنا الجديد في وقت قياسي! 👍 تسليم المشروع بجودة عالية مع اهتمام بالتفاصيل. جعلت من السهل العثور على منتجين محتوى موهوبين لبيع منتجاتنا."',
            en: '"We got a professional review ad for our new product in record time! 👍 Project delivery with high quality and attention to detail. Made it easy to find talented content producers to sell our products."',
            fr: '"Nous avons obtenu une publicité d\'examen professionnelle pour notre nouveau produit en un temps record! 👍 Livraison du projet avec une haute qualité et une attention aux détails. Facilité à trouver des producteurs de contenu talentueux pour vendre nos produits."'
          },
          author: {
            ar: 'أحمد صالح',
            en: 'Ahmed Saleh',
            fr: 'Ahmed Saleh'
          },
          role: {
            ar: 'مدير التسويق في شركة TechGear',
            en: 'Marketing Manager at TechGear',
            fr: 'Directeur Marketing chez TechGear'
          }
        },
        {
          text: {
            ar: '"أخيرًا وجدت منصة تساعدني في الوصول إلى المؤثرين المناسبين لمنتجاتي! 🌟 العلامات التجارية السابقة كانت بحاجة للبحث في أماكن نفسي، لكن هنا أصبحت مهمة البحث سهلة والتواصل مع المؤثرين أسهل. النتائج كانت مذهلة!"',
            en: '"Finally found a platform that helps me reach the right influencers for my products! 🌟 Previous brands needed to search in my own places, but here the search task became easy and communication with influencers easier. The results were amazing!"',
            fr: '"J\'ai enfin trouvé une plateforme qui m\'a aidé à atteindre les bons influenceurs pour mes produits! 🌟 Les marques précédentes devaient chercher dans mes propres endroits, mais ici la tâche de recherche est devenue facile et la communication avec les influenceurs plus facile. Les résultats étaient incroyables!"'
          },
          author: {
            ar: 'خالد الناصري',
            en: 'Khalid Al-Nasiri',
            fr: 'Khalid Al-Nasiri'
          },
          role: {
            ar: 'صانع محتوى إعلامي',
            en: 'Media Content Creator',
            fr: 'Créateur de Contenu Média'
          }
        },
        {
          text: {
            ar: '"لقد سهلت هذه المنصة علي التواصل مع العلامات التجارية بشكل احترافي. عملية الطلب سلسة والمدفوعات آمنة. أوصي بها لكل صانع محتوى يبحث عن فرص جديدة!"',
            en: '"This platform has made it easy for me to communicate with brands professionally. The ordering process is smooth and payments are secure. I recommend it to every content creator looking for new opportunities!"',
            fr: '"Cette plateforme m\'a facilité la communication professionnelle avec les marques. Le processus de commande est fluide et les paiements sont sécurisés. Je la recommande à tous les créateurs de contenu à la recherche de nouvelles opportunités!"'
          },
          author: {
            ar: 'أحمد',
            en: 'Ahmed',
            fr: 'Ahmed'
          },
          role: {
            ar: 'صانع محتوى فيديو إعلامي',
            en: 'Video Content Creator',
            fr: 'Créateur de Contenu Vidéo'
          }
        },
        {
          text: {
            ar: '"أحببنا هذا التعاون مع صانعي المحتوى على هذه المنصة! 🌟 الأمر كان طبيعيًا وفعالًا، وحصلنا على ما نريده في التعامل مع الجمهور. منصة رائعة لمن يريد إيجاد صوت لتسويق منتجاته القادمة."',
            en: '"We loved this collaboration with content creators on this platform! 🌟 It was natural and effective, and we got what we wanted in dealing with the audience. A great platform for those who want to find a voice to market their upcoming products."',
            fr: '"Nous avons adoré cette collaboration avec les créateurs de contenu sur cette plateforme! 🌟 C\'était naturel et efficace, et nous avons obtenu ce que nous voulions dans nos relations avec le public. Une excellente plateforme pour ceux qui veulent trouver une voix pour commercialiser leurs produits à venir."'
          },
          author: {
            ar: 'سارة الخطيب',
            en: 'Sarah Al-Khatib',
            fr: 'Sarah Al-Khatib'
          },
          role: {
            ar: 'مسؤولة العلامة التجارية في GlowBeauty',
            en: 'Brand Manager at GlowBeauty',
            fr: 'Responsable de Marque chez GlowBeauty'
          }
        }
      ]
    },
    cta: {
      title: {
        ar: 'ابدأ في الحصول على إعلانات مراجعة مذهلة اليوم',
        en: 'Start getting amazing review ads today',
        fr: 'Commencez à obtenir des annonces d\'avis incroyables aujourd\'hui'
      },
      subtitle: {
        ar: 'انضم إلى آلاف العلامات التجارية والمؤثرين على منصتنا',
        en: 'Join thousands of brands and influencers on our platform',
        fr: 'Rejoignez des milliers de marques et d\'influenceurs sur notre plateforme'
      },
      createAccount: {
        ar: 'إنشاء حساب جديد',
        en: 'Create New Account',
        fr: 'Créer un Nouveau Compte'
      },
      learnMore: {
        ar: 'اكتشف المزيد',
        en: 'Learn More',
        fr: 'En Savoir Plus'
      }
    },
    payment: {
      title: {
        ar: 'وسائل الدفع المدعومة',
        en: 'Supported Payment Methods',
        fr: 'Moyens de Paiement Pris en Charge'
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {translations.hero.title[language]}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {translations.hero.subtitle[language]}
            </p>
            <Link
              href="/signup"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {translations.hero.cta[language]}
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              alt="Content creator recording a video"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {translations.howItWorks.title[language]}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {translations.howItWorks.steps.map((step, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                    {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                    {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title[language]}</h3>
                <p className="text-gray-600">
                  {step.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {translations.testimonials.title[language]}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {translations.testimonials.items.map((testimonial, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className={`flex mb-4 ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  {testimonial.text[language]}
                </blockquote>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author[language]}</p>
                  <p className="text-gray-600">{testimonial.role[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{translations.cta.title[language]}</h2>
          <p className="text-xl mb-8">{translations.cta.subtitle[language]}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-purple-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {translations.cta.createAccount[language]}
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white/10 transition-colors"
            >
              {translations.cta.learnMore[language]}
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-gray-600 mb-6 text-sm font-medium">{translations.payment.title[language]}</h3>
          <div className="flex justify-center items-center space-x-8 rtl:space-x-reverse">
            <Image src="/stripe.svg" alt="Stripe" width={80} height={30} />
            <Image src="/paypal.svg" alt="PayPal" width={80} height={30} />
          </div>
        </div>
      </section>
    </div>
  );
}