'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import CountrySelect from '@/components/CountrySelect';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState('');
  const [country, setCountry] = useState('');
  const [companyName, setCompanyName] = useState('');
  const { language } = useLanguage();

  const translations = {
    title: {
      ar: 'انضم إلى مجتمع موبدع',
      en: 'Join the mobdi3 Community',
      fr: 'Rejoignez la Communauté mobdi3'
    },
    subtitle: {
      ar: 'أنشئ حسابك وابدأ رحلتك معنا',
      en: 'Create your account and start your journey with us',
      fr: 'Créez votre compte et commencez votre voyage avec nous'
    },
    googleSignup: {
      ar: 'إنشاء حساب باستخدام Google',
      en: 'Sign up with Google',
      fr: 'S\'inscrire avec Google'
    },
    or: {
      ar: 'أو',
      en: 'or',
      fr: 'ou'
    },
    accountType: {
      label: {
        ar: 'نوع الحساب',
        en: 'Account Type',
        fr: 'Type de Compte'
      },
      placeholder: {
        ar: 'اختر نوع حسابك',
        en: 'Choose your account type',
        fr: 'Choisissez votre type de compte'
      },
      creator: {
        ar: 'صانع محتوى',
        en: 'Content Creator',
        fr: 'Créateur de Contenu'
      },
      brand: {
        ar: 'علامة تجارية',
        en: 'Brand',
        fr: 'Marque'
      }
    },
    country: {
      ar: 'دولتك',
      en: 'Your Country',
      fr: 'Votre Pays'
    },
    countrySelect: {
      placeholder: {
        ar: 'اختر دولتك',
        en: 'Select your country',
        fr: 'Sélectionnez votre pays'
      }
    },
    companyName: {
      label: {
        ar: 'اسم الشركة',
        en: 'Company Name',
        fr: 'Nom de l\'Entreprise'
      },
      placeholder: {
        ar: 'أدخل اسم شركتك',
        en: 'Enter your company name',
        fr: 'Entrez le nom de votre entreprise'
      }
    },
    email: {
      label: {
        ar: 'عنوان البريد الإلكتروني',
        en: 'Email Address',
        fr: 'Adresse Email'
      },
      placeholder: {
        ar: 'أدخل عنوان بريدك الإلكتروني',
        en: 'Enter your email address',
        fr: 'Entrez votre adresse email'
      }
    },
    fullName: {
      label: {
        ar: 'الاسم الكامل',
        en: 'Full Name',
        fr: 'Nom Complet'
      },
      placeholder: {
        ar: 'أدخل اسمك الكامل',
        en: 'Enter your full name',
        fr: 'Entrez votre nom complet'
      }
    },
    password: {
      label: {
        ar: 'كلمة المرور',
        en: 'Password',
        fr: 'Mot de passe'
      },
      placeholder: {
        ar: 'أنشئ كلمة المرور الخاصة بك',
        en: 'Create your password',
        fr: 'Créez votre mot de passe'
      }
    },
    createAccount: {
      ar: 'إنشاء حساب',
      en: 'Create Account',
      fr: 'Créer un Compte'
    },
    haveAccount: {
      ar: 'هل لديك حساب بالفعل؟',
      en: 'Already have an account?',
      fr: 'Vous avez déjà un compte?'
    },
    login: {
      ar: 'تسجيل الدخول',
      en: 'Sign In',
      fr: 'Se Connecter'
    },
    welcomeText: {
      ar: 'منصة لربط المؤثرين بالعلامات التجارية لإنشاء إعلانات مراجعة منتجات مذهلة',
      en: 'A platform connecting influencers with brands to create amazing product review ads',
      fr: 'Une plateforme reliant les influenceurs aux marques pour créer des publicités d\'avis de produits incroyables'
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[600px] rounded-lg overflow-hidden hidden md:block shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
            alt={language === 'ar' ? 'صانعة محتوى تقوم بتسجيل فيديو' : language === 'fr' ? 'Créatrice de contenu enregistrant une vidéo' : 'Content creator recording a video'}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-8">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <Sparkles className="h-8 w-8 text-purple-300 mr-2" />
                <span className="text-2xl font-bold">mobdi3</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">{translations.title[language]}</h2>
              <p className="text-purple-100">{translations.welcomeText[language]}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">{translations.title[language]}</h1>
          <p className="text-gray-600 text-center mb-8">{translations.subtitle[language]}</p>
          
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-3 px-4 mb-4 hover:bg-gray-50 transition-colors">
            <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width={20} height={20} />
            <span>{translations.googleSignup[language]}</span>
          </button>
          
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">{translations.or[language]}</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">{translations.accountType.label[language]}</label>
            <div className="relative">
              <select 
                className={`w-full border border-gray-300 rounded-md py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="" disabled>{translations.accountType.placeholder[language]}</option>
                <option value="creator">{translations.accountType.creator[language]}</option>
                <option value="brand">{translations.accountType.brand[language]}</option>
              </select>
              <div className={`absolute inset-y-0 ${language === 'ar' ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center pointer-events-none`}>
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {accountType === 'creator' && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">{translations.country[language]}</label>
              <CountrySelect 
                value={country}
                onChange={setCountry}
                placeholder={translations.countrySelect.placeholder[language]}
                language={language}
              />
            </div>
          )}
          
          {accountType === 'brand' && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">{translations.companyName.label[language]}</label>
              <input 
                type="text" 
                className={`w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
                placeholder={translations.companyName.placeholder[language]}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          )}
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">{translations.email.label[language]}</label>
            <input 
              type="email" 
              className={`w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
              placeholder={translations.email.placeholder[language]}
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">{translations.fullName.label[language]}</label>
            <input 
              type="text" 
              className={`w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
              placeholder={translations.fullName.placeholder[language]}
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">{translations.password.label[language]}</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                className={`w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
                placeholder={translations.password.placeholder[language]}
              />
              <button 
                type="button"
                className={`absolute inset-y-0 ${language === 'ar' ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center`}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          
          <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg">
            {translations.createAccount[language]}
          </button>
          
          <p className="mt-6 text-center text-gray-600">
            {translations.haveAccount[language]}{' '}
            <Link href="/login" className="text-purple-600 hover:underline font-medium">
              {translations.login[language]}
            </Link>
          </p>
          
          <div className="flex justify-center space-x-4 rtl:space-x-reverse mt-8">
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}