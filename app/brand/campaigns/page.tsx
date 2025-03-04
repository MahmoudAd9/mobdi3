'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, CheckCircle, Clock, X, ArrowLeft, Package, Plus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Campaigns() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const { language } = useLanguage();
  
  const translations = {
    title: {
      ar: 'حملاتي',
      en: 'My Campaigns',
      fr: 'Mes Campagnes'
    },
    backToDashboard: {
      ar: 'العودة إلى لوحة التحكم',
      en: 'Back to Dashboard',
      fr: 'Retour au Tableau de Bord'
    },
    createCampaign: {
      ar: 'إنشاء حملة جديدة',
      en: 'Create New Campaign',
      fr: 'Créer une Nouvelle Campagne'
    },
    search: {
      placeholder: {
        ar: 'ابحث عن الحملات...',
        en: 'Search campaigns...',
        fr: 'Rechercher des campagnes...'
      }
    },
    filter: {
      ar: 'فلترة',
      en: 'Filter',
      fr: 'Filtrer'
    },
    status: {
      all: {
        ar: 'الكل',
        en: 'All',
        fr: 'Tous'
      },
      active: {
        ar: 'نشط',
        en: 'Active',
        fr: 'Actif'
      },
      pending: {
        ar: 'قيد التنفيذ',
        en: 'Pending',
        fr: 'En attente'
      },
      completed: {
        ar: 'مكتمل',
        en: 'Completed',
        fr: 'Terminé'
      },
      draft: {
        ar: 'مسودة',
        en: 'Draft',
        fr: 'Brouillon'
      }
    },
    advancedFilters: {
      title: {
        ar: 'خيارات متقدمة للبحث',
        en: 'Advanced Search Options',
        fr: 'Options de Recherche Avancées'
      },
      category: {
        label: {
          ar: 'الفئة:',
          en: 'Category:',
          fr: 'Catégorie:'
        },
        all: {
          ar: 'جميع الفئات',
          en: 'All Categories',
          fr: 'Toutes les Catégories'
        },
        tech: {
          ar: 'التكنولوجيا',
          en: 'Technology',
          fr: 'Technologie'
        },
        beauty: {
          ar: 'الجمال',
          en: 'Beauty',
          fr: 'Beauté'
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
      startDate: {
        ar: 'تاريخ البدء:',
        en: 'Start Date:',
        fr: 'Date de Début:'
      },
      budget: {
        label: {
          ar: 'الميزانية:',
          en: 'Budget:',
          fr: 'Budget:'
        },
        all: {
          ar: 'جميع الميزانيات',
          en: 'All Budgets',
          fr: 'Tous les Budgets'
        },
        low: {
          ar: 'أقل من $200',
          en: 'Less than $200',
          fr: 'Moins de $200'
        },
        medium: {
          ar: '$200 - $300',
          en: '$200 - $300',
          fr: '$200 - $300'
        },
        high: {
          ar: 'أكثر من $300',
          en: 'More than $300',
          fr: 'Plus de $300'
        }
      },
      apply: {
        ar: 'تطبيق الفلترة',
        en: 'Apply Filters',
        fr: 'Appliquer les Filtres'
      }
    },
    campaignCard: {
      influencers: {
        ar: 'مؤثر',
        en: 'influencer',
        fr: 'influenceur'
      },
      requests: {
        ar: 'طلب',
        en: 'request',
        fr: 'demande'
      },
      viewDetails: {
        ar: 'عرض التفاصيل',
        en: 'View Details',
        fr: 'Voir les Détails'
      },
      notPublished: {
        ar: 'غير منشور بعد',
        en: 'Not published yet',
        fr: 'Pas encore publié'
      }
    },
    noCampaigns: {
      title: {
        ar: 'لا توجد حملات بعد',
        en: 'No Campaigns Yet',
        fr: 'Pas Encore de Campagnes'
      },
      description: {
        ar: 'قم بإنشاء حملتك الأولى للبدء في التواصل مع المؤثرين',
        en: 'Create your first campaign to start connecting with influencers',
        fr: 'Créez votre première campagne pour commencer à vous connecter avec des influenceurs'
      },
      button: {
        ar: 'إنشاء حملة جديدة',
        en: 'Create New Campaign',
        fr: 'Créer une Nouvelle Campagne'
      }
    }
  };
  
  const statuses = [
    { id: 'all', name: translations.status.all[language] },
    { id: 'active', name: translations.status.active[language] },
    { id: 'pending', name: translations.status.pending[language] },
    { id: 'completed', name: translations.status.completed[language] },
    { id: 'draft', name: translations.status.draft[language] },
  ];
  
  const campaigns = [
    {
      id: 1,
      title: 'سماعة لاسلكية جديدة',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'tech',
      status: 'active',
      budget: '$200',
      startDate: '2025-04-15',
      endDate: '2025-04-30',
      description: 'مراجعة تقنية مع التركيز على جودة الصوت وعمر البطارية',
      creators: 3,
      applications: 12,
    },
    {
      id: 2,
      title: 'أحمر شفاه جديد',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'beauty',
      status: 'pending',
      budget: '$300',
      startDate: '2025-04-10',
      endDate: '2025-04-25',
      description: 'فيديو تجربة المنتج مع إظهار الألوان المختلفة وإبراز مقاومته للماء',
      creators: 2,
      applications: 8,
    },
    {
      id: 3,
      title: 'حذاء رياضي جديد',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'fitness',
      status: 'completed',
      budget: '$250',
      startDate: '2025-03-15',
      endDate: '2025-03-30',
      description: 'مراجعة تجربة أثناء التمرين مع التركيز على الراحة والخفة أثناء الجري',
      creators: 5,
      applications: 15,
    },
    {
      id: 4,
      title: 'عطر فاخر جديد',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'beauty',
      status: 'draft',
      budget: '$350',
      startDate: '',
      endDate: '',
      description: 'مراجعة للعطر الجديد مع وصف الرائحة ومدة بقائها',
      creators: 0,
      applications: 0,
    },
    {
      id: 5,
      title: 'ساعة ذكية متطورة',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'tech',
      status: 'active',
      budget: '$280',
      startDate: '2025-04-20',
      endDate: '2025-05-05',
      description: 'مراجعة شاملة للساعة الذكية مع التركيز على ميزات تتبع اللياقة البدنية وعمر البطارية',
      creators: 1,
      applications: 6,
    },
    {
      id: 6,
      title: 'كاميرا احترافية',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'tech',
      status: 'pending',
      budget: '$400',
      startDate: '2025-04-25',
      endDate: '2025-05-10',
      description: 'مراجعة تفصيلية للكاميرا مع اختبار جودة الصورة في ظروف إضاءة مختلفة',
      creators: 2,
      applications: 9,
    },
  ];
  
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.includes(searchTerm) || 
                          campaign.description.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-600';
      case 'pending':
        return 'bg-yellow-100 text-yellow-600';
      case 'completed':
        return 'bg-blue-100 text-blue-600';
      case 'draft':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return translations.status.active[language];
      case 'pending':
        return translations.status.pending[language];
      case 'completed':
        return translations.status.completed[language];
      case 'draft':
        return translations.status.draft[language];
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Link href="/brand/dashboard" className="flex items-center text-purple-600 hover:text-purple-700 mr-4">
                <ArrowLeft className="h-5 w-5 mr-1" />
                <span>{translations.backToDashboard[language]}</span>
              </Link>
              <h1 className="text-2xl font-bold">{translations.title[language]}</h1>
            </div>
            <Link 
              href="/brand/create-campaign" 
              className="bg-purple-600 text-white flex items-center px-4 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors"
            >
              <Plus className="h-5 w-5 mr-1" />
              <span>{translations.createCampaign[language]}</span>
            </Link>
          </div>
          
          {filteredCampaigns.length > 0 ? (
            <>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder={translations.search.placeholder[language]}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <div className="flex flex-wrap gap-2 overflow-x-auto">
                    {statuses.map(status => (
                      <button
                        key={status.id}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                          statusFilter === status.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                        onClick={() => setStatusFilter(status.id)}
                      >
                        {status.name}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4" />
                    <span>{translations.filter[language]}</span>
                  </button>
                </div>
              </div>
              
              {showFilters && (
                <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
                  <h3 className="font-medium mb-4">{translations.advancedFilters.title[language]}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">{translations.advancedFilters.category.label[language]}</label>
                      <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                        <option value="">{translations.advancedFilters.category.all[language]}</option>
                        <option value="tech">{translations.advancedFilters.category.tech[language]}</option>
                        <option value="beauty">{translations.advancedFilters.category.beauty[language]}</option>
                        <option value="fashion">{translations.advancedFilters.category.fashion[language]}</option>
                        <option value="food">{translations.advancedFilters.category.food[language]}</option>
                        <option value="fitness">{translations.advancedFilters.category.fitness[language]}</option>
                        <option value="gaming">{translations.advancedFilters.category.gaming[language]}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">{translations.advancedFilters.startDate[language]}</label>
                      <input 
                        type="date" 
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">{translations.advancedFilters.budget.label[language]}</label>
                      <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                        <option value="">{translations.advancedFilters.budget.all[language]}</option>
                        <option value="low">{translations.advancedFilters.budget.low[language]}</option>
                        <option value="medium">{translations.advancedFilters.budget.medium[language]}</option>
                        <option value="high">{translations.advancedFilters.budget.high[language]}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                      {translations.advancedFilters.apply[language]}
                    </button>
                  </div>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCampaigns.map(campaign => (
                  <div key={campaign.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-[200px]">
                      <Image 
                        src={campaign.image} 
                        alt={campaign.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(campaign.status)}`}>
                        {getStatusText(campaign.status)}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{campaign.description}</p>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-purple-600 font-bold">{campaign.budget}</span>
                        <span className="text-gray-500 text-sm">
                          {campaign.status !== 'draft' ? `${campaign.startDate} - ${campaign.endDate}` : translations.campaignCard.notPublished[language]}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <span className="text-gray-500 text-sm flex items-center">
                            <Package className="h-4 w-4 mr-1" />
                            {campaign.creators} {translations.campaignCard.influencers[language]}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {campaign.applications} {translations.campaignCard.requests[language]}
                          </span>
                        </div>
                        <Link 
                          href={`/brand/campaign/${campaign.id}`}
                          className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                        >
                          {translations.campaignCard.viewDetails[language]}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="bg-purple-100 p-6 rounded-full mb-6">
                <Package className="h-12 w-12 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{translations.noCampaigns.title[language]}</h2>
              <p className="text-gray-600 mb-8 text-center max-w-md">{translations.noCampaigns.description[language]}</p>
              <Link 
                href="/brand/create-campaign" 
                className="bg-purple-600 text-white flex items-center px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
              >
                <Plus className="h-5 w-5 mr-2" />
                <span>{translations.noCampaigns.button[language]}</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}