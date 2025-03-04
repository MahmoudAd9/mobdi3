'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Star, Filter, CheckCircle, X, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Creators() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { language } = useLanguage();
  
  const translations = {
    hero: {
      title: {
        ar: 'اكتشف أفضل صناع المحتوى',
        en: 'Discover the Best Content Creators',
        fr: 'Découvrez les Meilleurs Créateurs de Contenu'
      },
      subtitle: {
        ar: 'تواصل مع مؤثرين محترفين لإنشاء مراجعات منتجات عالية الجودة لعلامتك التجارية',
        en: 'Connect with professional influencers to create high-quality product reviews for your brand',
        fr: 'Connectez-vous avec des influenceurs professionnels pour créer des critiques de produits de haute qualité pour votre marque'
      },
      searchPlaceholder: {
        ar: 'ابحث عن صناع المحتوى حسب الاسم أو التخصص...',
        en: 'Search for content creators by name or specialty...',
        fr: 'Rechercher des créateurs de contenu par nom ou spécialité...'
      }
    },
    categories: {
      all: {
        ar: 'الكل',
        en: 'All',
        fr: 'Tous'
      },
      beauty: {
        ar: 'الجمال',
        en: 'Beauty',
        fr: 'Beauté'
      },
      tech: {
        ar: 'التكنولوجيا',
        en: 'Technology',
        fr: 'Technologie'
      },
      fashion: {
        ar: 'الموضة',
        en: 'Fashion',
        fr: 'Mode'
      },
      food: {
        ar: 'الطعام',
        en: 'Food',
        fr: 'Alimentation'
      },
      fitness: {
        ar: 'اللياقة البدنية',
        en: 'Fitness',
        fr: 'Fitness'
      },
      gaming: {
        ar: 'الألعاب',
        en: 'Gaming',
        fr: 'Jeux Vidéo'
      }
    },
    creator: {
      followers: {
        ar: 'متابع',
        en: 'followers',
        fr: 'abonnés'
      },
      verified: {
        ar: 'موثق',
        en: 'verified',
        fr: 'vérifié'
      },
      viewProfile: {
        ar: 'عرض الملف الشخصي',
        en: 'View Profile',
        fr: 'Voir le Profil'
      },
      perReview: {
        ar: '/ مراجعة',
        en: '/ review',
        fr: '/ critique'
      }
    },
    cta: {
      title: {
        ar: 'هل أنت صانع محتوى؟',
        en: 'Are You a Content Creator?',
        fr: 'Êtes-vous un Créateur de Contenu?'
      },
      subtitle: {
        ar: 'انضم إلى منصتنا اليوم وابدأ في كسب المال من خلال مراجعة المنتجات',
        en: 'Join our platform today and start earning money by reviewing products',
        fr: 'Rejoignez notre plateforme aujourd\'hui et commencez à gagner de l\'argent en évaluant des produits'
      },
      button: {
        ar: 'سجل كصانع محتوى',
        en: 'Register as a Creator',
        fr: 'Inscrivez-vous en tant que Créateur'
      }
    }
  };
  
  const categories = [
    { id: 'all', name: translations.categories.all[language] },
    { id: 'beauty', name: translations.categories.beauty[language] },
    { id: 'tech', name: translations.categories.tech[language] },
    { id: 'fashion', name: translations.categories.fashion[language] },
    { id: 'food', name: translations.categories.food[language] },
    { id: 'fitness', name: translations.categories.fitness[language] },
    { id: 'gaming', name: translations.categories.gaming[language] },
  ];
  
  const creators = [
    {
      id: 1,
      name: 'أحمد محمد',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'tech',
      rating: 4.8,
      followers: '120K',
      price: '200$',
      description: {
        ar: 'متخصص في مراجعة المنتجات التقنية والإلكترونيات الحديثة',
        en: 'Specializes in reviewing tech products and modern electronics',
        fr: 'Spécialisé dans l\'évaluation des produits technologiques et de l\'électronique moderne'
      },
      verified: true,
    },
    {
      id: 2,
      name: 'سارة أحمد',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'beauty',
      rating: 4.9,
      followers: '250K',
      price: '300$',
      description: {
        ar: 'خبيرة في منتجات العناية بالبشرة والمكياج',
        en: 'Expert in skincare and makeup products',
        fr: 'Experte en produits de soins de la peau et de maquillage'
      },
      verified: true,
    },
    {
      id: 3,
      name: 'محمد علي',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'fitness',
      rating: 4.7,
      followers: '180K',
      price: '250$',
      description: {
        ar: 'مدرب لياقة بدنية ومتخصص في مراجعة منتجات الرياضة',
        en: 'Fitness trainer and specialist in reviewing sports products',
        fr: 'Entraîneur de fitness et spécialiste de l\'évaluation des produits de sport'
      },
      verified: true,
    },
    {
      id: 4,
      name: 'نورا خالد',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'fashion',
      rating: 4.6,
      followers: '200K',
      price: '280$',
      description: {
        ar: 'مؤثرة في مجال الموضة والأزياء',
        en: 'Influencer in fashion and clothing',
        fr: 'Influenceuse dans la mode et les vêtements'
      },
      verified: false,
    },
    {
      id: 5,
      name: 'خالد الناصري',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'food',
      rating: 4.5,
      followers: '150K',
      price: '220$',
      description: {
        ar: 'طاهي محترف ومراجع للمنتجات الغذائية',
        en: 'Professional chef and food product reviewer',
        fr: 'Chef professionnel et évaluateur de produits alimentaires'
      },
      verified: true,
    },
    {
      id: 6,
      name: 'ليلى عمر',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'gaming',
      rating: 4.7,
      followers: '300K',
      price: '320$',
      description: {
        ar: 'لاعبة محترفة ومراجعة لأحدث الألعاب والأجهزة',
        en: 'Professional gamer and reviewer of the latest games and devices',
        fr: 'Joueuse professionnelle et évaluatrice des derniers jeux et appareils'
      },
      verified: false,
    },
  ];
  
  const filteredCreators = creators.filter(creator => {
    const matchesSearch = creator.name.includes(searchTerm) || 
                          creator.description[language].includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || creator.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-purple-100 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {translations.hero.title[language]}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {translations.hero.subtitle[language]}
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              className="w-full py-4 px-6 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder={translations.hero.searchPlaceholder[language]}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Creators List */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCreators.map(creator => (
              <div key={creator.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-[250px]">
                  <Image 
                    src={creator.image} 
                    alt={creator.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-purple-600 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    {creator.rating}
                  </div>
                  {creator.verified && (
                    <div className="absolute top-4 left-4 bg-green-100 px-3 py-1 rounded-full text-sm font-medium text-green-600 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {translations.creator.verified[language]}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{creator.name}</h3>
                    <span className="text-gray-500 text-sm">{creator.followers} {translations.creator.followers[language]}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{creator.description[language]}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 font-bold">{creator.price} {translations.creator.perReview[language]}</span>
                    <Link 
                      href={`/creators/${creator.id}`}
                      className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                    >
                      {translations.creator.viewProfile[language]}
                    </Link>
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
          <Link 
            href="/signup" 
            className="bg-white text-purple-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {translations.cta.button[language]}
          </Link>
        </div>
      </section>
    </div>
  );
}