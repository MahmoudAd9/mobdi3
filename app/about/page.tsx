'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, Building2, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { language } = useLanguage();

  const translations = {
    hero: {
      title: {
        ar: 'من نحن',
        en: 'About Us',
        fr: 'À Propos de Nous'
      },
      subtitle: {
        ar: 'منصة mobdi3 هي الرابط بين المؤثرين والعلامات التجارية لإنشاء محتوى إعلاني مميز ومراجعات منتجات عالية الجودة',
        en: 'The mobdi3 platform is the link between influencers and brands to create distinctive advertising content and high-quality product reviews',
        fr: 'La plateforme mobdi3 est le lien entre les influenceurs et les marques pour créer un contenu publicitaire distinctif et des critiques de produits de haute qualité'
      },
      teamTitle: {
        ar: 'فريق متخصص',
        en: 'Specialized Team',
        fr: 'Équipe Spécialisée'
      },
      teamSubtitle: {
        ar: 'نعمل معًا لتقديم أفضل تجربة للمؤثرين والعلامات التجارية',
        en: 'We work together to provide the best experience for influencers and brands',
        fr: 'Nous travaillons ensemble pour offrir la meilleure expérience aux influenceurs et aux marques'
      }
    },
    story: {
      title: {
        ar: 'قصتنا',
        en: 'Our Story',
        fr: 'Notre Histoire'
      },
      paragraph1: {
        ar: 'بدأت رحلة منصة mobdi3 في عام 2023 عندما لاحظنا الفجوة بين العلامات التجارية والمؤثرين في عالم التسويق الرقمي. كان هناك تحدي كبير في إيجاد المؤثرين المناسبين للمنتجات المناسبة، وكذلك صعوبة في إدارة العلاقات والمشاريع بين الطرفين.',
        en: 'The journey of the mobdi3 platform began in 2023 when we noticed the gap between brands and influencers in the world of digital marketing. There was a big challenge in finding the right influencers for the right products, as well as difficulty in managing relationships and projects between the two parties.',
        fr: 'Le voyage de la plateforme mobdi3 a commencé en 2023 lorsque nous avons remarqué l\'écart entre les marques et les influenceurs dans le monde du marketing numérique. Il y avait un grand défi à trouver les bons influenceurs pour les bons produits, ainsi que des difficultés à gérer les relations et les projets entre les deux parties.'
      },
      paragraph2: {
        ar: 'قررنا إنشاء منصة تجمع بين المؤثرين والعلامات التجارية بطريقة سلسة وفعالة، مع التركيز على جودة المحتوى والشفافية في التعاملات. هدفنا هو تمكين المؤثرين من تقديم مراجعات صادقة ومفيدة، ومساعدة العلامات التجارية على الوصول إلى جمهورها المستهدف بشكل أكثر فعالية.',
        en: 'We decided to create a platform that brings together influencers and brands in a smooth and effective way, with a focus on content quality and transparency in transactions. Our goal is to enable influencers to provide honest and useful reviews, and to help brands reach their target audience more effectively.',
        fr: 'Nous avons décidé de créer une plateforme qui rassemble les influenceurs et les marques de manière fluide et efficace, en mettant l\'accent sur la qualité du contenu et la transparence dans les transactions. Notre objectif est de permettre aux influenceurs de fournir des critiques honnêtes et utiles, et d\'aider les marques à atteindre leur public cible plus efficacement.'
      },
      paragraph3: {
        ar: 'اليوم، أصبحت منصة mobdi3 رائدة في مجال ربط المؤثرين بالعلامات التجارية في العالم العربي، مع آلاف المشاريع الناجحة والعديد من قصص النجاح.',
        en: 'Today, the mobdi3 platform has become a leader in connecting influencers with brands in the Arab world, with thousands of successful projects and many success stories.',
        fr: 'Aujourd\'hui, la plateforme mobdi3 est devenue un leader dans la connexion des influenceurs avec des marques dans le monde arabe, avec des milliers de projets réussis et de nombreuses histoires de réussite.'
      }
    },
    values: {
      title: {
        ar: 'قيمنا',
        en: 'Our Values',
        fr: 'Nos Valeurs'
      },
      subtitle: {
        ar: 'نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتشكل ثقافتنا',
        en: 'We believe in a set of core values that guide our work and shape our culture',
        fr: 'Nous croyons en un ensemble de valeurs fondamentales qui guident notre travail et façonnent notre culture'
      },
      quality: {
        title: {
          ar: 'الجودة',
          en: 'Quality',
          fr: 'Qualité'
        },
        description: {
          ar: 'نسعى دائمًا لتقديم أعلى مستويات الجودة في كل جانب من جوانب خدماتنا، من تجربة المستخدم إلى دعم العملاء.',
          en: 'We always strive to provide the highest levels of quality in every aspect of our services, from user experience to customer support.',
          fr: 'Nous nous efforçons toujours de fournir les plus hauts niveaux de qualité dans tous les aspects de nos services, de l\'expérience utilisateur au support client.'
        }
      },
      transparency: {
        title: {
          ar: 'الشفافية',
          en: 'Transparency',
          fr: 'Transparence'
        },
        description: {
          ar: 'نؤمن بالصدق والوضوح في جميع تعاملاتنا، سواء مع المؤثرين أو العلامات التجارية أو المستخدمين.',
          en: 'We believe in honesty and clarity in all our dealings, whether with influencers, brands, or users.',
          fr: 'Nous croyons en l\'honnêteté et la clarté dans toutes nos relations, que ce soit avec les influenceurs, les marques ou les utilisateurs.'
        }
      },
      innovation: {
        title: {
          ar: 'الابتكار',
          en: 'Innovation',
          fr: 'Innovation'
        },
        description: {
          ar: 'نسعى دائمًا للتطوير والتحسين المستمر، وإيجاد حلول مبتكرة للتحديات التي تواجه صناعة التسويق بالمؤثرين.',
          en: 'We always strive for continuous development and improvement, and finding innovative solutions to the challenges facing the influencer marketing industry.',
          fr: 'Nous nous efforçons toujours de développer et d\'améliorer continuellement, et de trouver des solutions innovantes aux défis auxquels est confrontée l\'industrie du marketing d\'influence.'
        }
      }
    },
    team: {
      title: {
        ar: 'فريقنا',
        en: 'Our Team',
        fr: 'Notre Équipe'
      },
      subtitle: {
        ar: 'نحن فريق من المتخصصين الشغوفين بالتسويق الرقمي وتكنولوجيا المعلومات',
        en: 'We are a team of specialists passionate about digital marketing and information technology',
        fr: 'Nous sommes une équipe de spécialistes passionnés par le marketing numérique et les technologies de l\'information'
      },
      members: [
        {
          name: {
            ar: 'أحمد محمد',
            en: 'Ahmed Mohamed',
            fr: 'Ahmed Mohamed'
          },
          role: {
            ar: 'المؤسس والرئيس التنفيذي',
            en: 'Founder and CEO',
            fr: 'Fondateur et PDG'
          }
        },
        {
          name: {
            ar: 'سارة أحمد',
            en: 'Sarah Ahmed',
            fr: 'Sarah Ahmed'
          },
          role: {
            ar: 'مديرة التسويق',
            en: 'Marketing Director',
            fr: 'Directrice Marketing'
          }
        },
        {
          name: {
            ar: 'محمد علي',
            en: 'Mohamed Ali',
            fr: 'Mohamed Ali'
          },
          role: {
            ar: 'مدير التكنولوجيا',
            en: 'Technology Director',
            fr: 'Directeur Technologique'
          }
        },
        {
          name: {
            ar: 'نورا خالد',
            en: 'Noura Khaled',
            fr: 'Noura Khaled'
          },
          role: {
            ar: 'مديرة علاقات المؤثرين',
            en: 'Influencer Relations Manager',
            fr: 'Responsable des Relations avec les Influenceurs'
          }
        }
      ]
    },
    cta: {
      title: {
        ar: 'انضم إلى منصتنا اليوم',
        en: 'Join Our Platform Today',
        fr: 'Rejoignez Notre Plateforme Aujourd\'hui'
      },
      subtitle: {
        ar: 'سواء كنت مؤثرًا أو علامة تجارية، نحن هنا لمساعدتك على النجاح',
        en: 'Whether you\'re an influencer or a brand, we\'re here to help you succeed',
        fr: 'Que vous soyez un influenceur ou une marque, nous sommes là pour vous aider à réussir'
      },
      createAccount: {
        ar: 'إنشاء حساب جديد',
        en: 'Create New Account',
        fr: 'Créer un Nouveau Compte'
      },
      contactUs: {
        ar: 'تواصل معنا',
        en: 'Contact Us',
        fr: 'Contactez-nous'
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {translations.hero.title[language]}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {translations.hero.subtitle[language]}
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl mx-auto max-w-4xl">
            <Image 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
              alt="فريق العمل"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-8">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-2">{translations.hero.teamTitle[language]}</h2>
                <p className="text-purple-100">{translations.hero.teamSubtitle[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{translations.story.title[language]}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {translations.story.paragraph1[language]}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {translations.story.paragraph2[language]}
              </p>
              <p className="text-lg text-gray-600">
                {translations.story.paragraph3[language]}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
                  alt="اجتماع فريق العمل"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
                  alt="مكتب الشركة"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
                  alt="عمل جماعي"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
                  alt="اجتماع استراتيجي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{translations.values.title[language]}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {translations.values.subtitle[language]}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{translations.values.quality.title[language]}</h3>
              <p className="text-gray-600">
                {translations.values.quality.description[language]}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{translations.values.transparency.title[language]}</h3>
              <p className="text-gray-600">
                {translations.values.transparency.description[language]}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{translations.values.innovation.title[language]}</h3>
              <p className="text-gray-600">
                {translations.values.innovation.description[language]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{translations.team.title[language]}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {translations.team.subtitle[language]}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {translations.team.members.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-[250px]">
                  <Image 
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1560250097-0b93528c311a' : 
                           index === 1 ? '1573496359142-b8d87734a5a2' : 
                           index === 2 ? '1519085360753-af0119f7cbe7' : 
                           '1580489944761-15a19d654956'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80`} 
                    alt={member.name[language]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name[language]}</h3>
                  <p className="text-purple-600 mb-4">{member.role[language]}</p>
                  <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
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
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white/10 transition-colors"
            >
              {translations.cta.contactUs[language]}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}