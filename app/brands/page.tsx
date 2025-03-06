'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Star, Filter, CheckCircle, X, Clock, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Brands() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { language } = useLanguage();

  const translations = {
    hero: {
      title: {
        ar: 'اكتشف العلامات التجارية',
        en: 'Discover Brands',
        fr: 'Découvrez les Marques'
      },
      subtitle: {
        ar: 'تعرف على العلامات التجارية التي تبحث عن صناع محتوى لمراجعة منتجاتها',
        en: 'Learn about brands looking for content creators to review their products',
        fr: 'Découvrez les marques qui recherchent des créateurs de contenu pour évaluer leurs produits'
      },
      searchPlaceholder: {
        ar: 'ابحث عن العلامات التجارية حسب الاسم أو المجال...',
        en: 'Search for brands by name or field...',
        fr: 'Rechercher des marques par nom ou domaine...'
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
    brand: {
      projects: {
        ar: 'مشروع',
        en: 'projects',
        fr: 'projets'
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
      }
    },
    cta: {
      title: {
        ar: 'هل أنت علامة تجارية؟',
        en: 'Are You a Brand?',
        fr: 'Êtes-vous une Marque?'
      },
      subtitle: {
        ar: 'انضم إلى منصتنا اليوم وابدأ في التواصل مع صناع المحتوى لمراجعة منتجاتك',
        en: 'Join our platform today and start connecting with content creators to review your products',
        fr: 'Rejoignez notre plateforme aujourd\'hui et commencez à vous connecter avec des créateurs de contenu pour évaluer vos produits'
      },
      button: {
        ar: 'سجل كعلامة تجارية',
        en: 'Register as a Brand',
        fr: 'Inscrivez-vous en tant que Marque'
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

  const brands = [
    {
      id: 1,
      name: 'TechWorld Electronics',
      logo: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'tech',
      rating: 4.8,
      projects: 45,
      description: {
        ar: 'شركة رائدة في مجال الإلكترونيات والأجهزة الذكية',
        en: 'A leading company in electronics and smart devices',
        fr: 'Une entreprise leader dans l\'électronique et les appareils intelligents'
      },
      verified: true,
    },
    {
      id: 2,
      name: 'GlowBeauty Cosmetics',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'beauty',
      rating: 4.9,
      projects: 78,
      description: {
        ar: 'علامة تجارية متخصصة في منتجات العناية بالبشرة والمكياج',
        en: 'A brand specializing in skincare and makeup products',
        fr: 'Une marque spécialisée dans les produits de soins de la peau et de maquillage'
      },
      verified: true,
    },
    {
      id: 3,
      name: 'FastFit Sportswear',
      logo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'fitness',
      rating: 4.7,
      projects: 36,
      description: {
        ar: 'ملابس وأدوات رياضية عالية الجودة للرياضيين المحترفين والهواة',
        en: 'High-quality sportswear and equipment for professional and amateur athletes',
        fr: 'Vêtements et équipements de sport de haute qualité pour les athlètes professionnels et amateurs'
      },
      verified: true,
    },
    {
      id: 4,
      name: 'StyleHub Fashion',
      logo: 'https://images.unsplash.com/photo-1589363460779-cbd70f2d0311?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'fashion',
      rating: 4.6,
      projects: 52,
      description: {
        ar: 'أحدث صيحات الموضة والأزياء العصرية',
        en: 'The latest fashion trends and modern clothing',
        fr: 'Les dernières tendances de la mode et des vêtements modernes'
      },
      verified: false,
    },
    {
      id: 5,
      name: 'Delicious Bites',
      logo: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'food',
      rating: 4.5,
      projects: 29,
      description: {
        ar: 'منتجات غذائية صحية ولذيذة من مكونات طبيعية',
        en: 'Healthy and delicious food products from natural ingredients',
        fr: 'Produits alimentaires sains et délicieux à base d\'ingrédients naturels'
      },
      verified: true,
    },
    {
      id: 6,
      name: 'GamersWorld',
      logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'gaming',
      rating: 4.7,
      projects: 41,
      description: {
        ar: 'أحدث الألعاب وأجهزة الألعاب للاعبين المحترفين',
        en: 'The latest games and gaming devices for professional players',
        fr: 'Les derniers jeux et appareils de jeu pour les joueurs professionnels'
      },
      verified: false,
    },
  ];

  const filteredBrands = brands.filter(brand => {
    const matchesSearch =
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || brand.category === selectedCategory;

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
              className="w-full py-4 px-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.id
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

      {/* Brands List */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map(brand => (
              <div key={brand.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-[200px]">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-purple-600 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    {brand.rating}
                  </div>
                  {brand.verified && (
                    <div className="absolute top-4 left-4 bg-green-100 px-3 py-1 rounded-full text-sm font-medium text-green-600 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {translations.brand.verified[language]}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{brand.name}</h3>
                    <span className="text-gray-500 text-sm">{brand.projects} {translations.brand.projects[language]}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{brand.description[language]}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 font-bold flex items-center">
                      <Building2 className="h-4 w-4 mr-1" />
                      {categories.find(c => c.id === brand.category)?.name}
                    </span>
                    <Link
                      href={`/brands/${brand.id}`}
                      className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                    >
                      {translations.brand.viewProfile[language]}
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