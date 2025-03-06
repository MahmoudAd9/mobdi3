'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BarChart3,
  Users,
  MessageSquare,
  Package,
  Star,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  X,
  Building2,
  Settings
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function BrandDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const { language } = useLanguage();

  const translations = {
    dashboard: {
      ar: 'لوحة التحكم',
      en: 'Dashboard',
      fr: 'Tableau de Bord'
    },
    overview: {
      ar: 'نظرة عامة',
      en: 'Overview',
      fr: 'Aperçu'
    },
    campaigns: {
      ar: 'الحملات',
      en: 'Campaigns',
      fr: 'Campagnes'
    },
    messages: {
      ar: 'الرسائل',
      en: 'Messages',
      fr: 'Messages'
    },
    profile: {
      ar: 'الملف الشخصي',
      en: 'Profile',
      fr: 'Profil'
    },
    settings: {
      ar: 'الإعدادات',
      en: 'Settings',
      fr: 'Paramètres'
    },
    createCampaign: {
      ar: 'إنشاء حملة جديدة',
      en: 'Create New Campaign',
      fr: 'Créer une Nouvelle Campagne'
    },
    stats: {
      budget: {
        title: {
          ar: 'الميزانية المتبقية',
          en: 'Remaining Budget',
          fr: 'Budget Restant'
        }
      },
      activeCampaigns: {
        title: {
          ar: 'الحملات النشطة',
          en: 'Active Campaigns',
          fr: 'Campagnes Actives'
        }
      },
      pendingRequests: {
        title: {
          ar: 'طلبات قيد التنفيذ',
          en: 'Pending Requests',
          fr: 'Demandes en Attente'
        }
      },
      completedOrders: {
        title: {
          ar: 'الطلبات المكتملة',
          en: 'Completed Orders',
          fr: 'Commandes Terminées'
        }
      },
      contractedInfluencers: {
        title: {
          ar: 'المؤثرين المتعاقد معهم',
          en: 'Contracted Influencers',
          fr: 'Influenceurs Sous Contrat'
        }
      },
      averageRating: {
        title: {
          ar: 'متوسط التقييم',
          en: 'Average Rating',
          fr: 'Évaluation Moyenne'
        }
      }
    },
    since: {
      ar: 'منذ الشهر الماضي',
      en: 'since last month',
      fr: 'depuis le mois dernier'
    },
    recentProjects: {
      title: {
        ar: 'أحدث المشاريع',
        en: 'Recent Projects',
        fr: 'Projets Récents'
      },
      viewAll: {
        ar: 'عرض الكل',
        en: 'View All',
        fr: 'Voir Tout'
      },
      project: {
        ar: 'المشروع',
        en: 'Project',
        fr: 'Projet'
      },
      client: {
        ar: 'العميل',
        en: 'Client',
        fr: 'Client'
      },
      type: {
        ar: 'النوع',
        en: 'Type',
        fr: 'Type'
      },
      price: {
        ar: 'السعر',
        en: 'Price',
        fr: 'Prix'
      },
      status: {
        ar: 'الحالة',
        en: 'Status',
        fr: 'Statut'
      },
      date: {
        ar: 'التاريخ',
        en: 'Date',
        fr: 'Date'
      },
      statuses: {
        new: {
          ar: 'جديد',
          en: 'New',
          fr: 'Nouveau'
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
        }
      }
    }
  };

  const stats = [
    { id: 'budget', title: translations.stats.budget.title[language], value: '$52.6k', icon: DollarSign, change: '+12.5%', changeType: 'positive' },
    { id: 'campaigns', title: translations.stats.activeCampaigns.title[language], value: '12', icon: Package, change: '+4', changeType: 'positive' },
    { id: 'pending', title: translations.stats.pendingRequests.title[language], value: '23', icon: Clock, change: '-2', changeType: 'negative' },
    { id: 'completed', title: translations.stats.completedOrders.title[language], value: '384', icon: CheckCircle, change: '+18', changeType: 'positive' },
    { id: 'clients', title: translations.stats.contractedInfluencers.title[language], value: '790', icon: Users, change: '+25', changeType: 'positive' },
    { id: 'rating', title: translations.stats.averageRating.title[language], value: '4.5/5', icon: Star, change: '+0.2', changeType: 'positive' },
  ];

  const recentProjects = [
    {
      id: 1,
      title: {
        ar: 'سماعة لاسلكية جديدة',
        en: 'New Wireless Headphones',
        fr: 'Nouveaux Écouteurs Sans Fil'
      },
      client: 'TechWorld Electronics',
      type: {
        ar: 'مراجعة تقنية',
        en: 'Technical Review',
        fr: 'Évaluation Technique'
      },
      status: 'new',
      price: '$200',
      date: '2025-04-15',
      description: {
        ar: 'التركيز على جودة الصوت وعمر البطارية',
        en: 'Focus on sound quality and battery life',
        fr: 'Accent sur la qualité sonore et l\'autonomie'
      },
      statusColor: 'bg-blue-100 text-blue-600',
    },
    {
      id: 2,
      title: {
        ar: 'أحمر شفاه جديد',
        en: 'New Lipstick',
        fr: 'Nouveau Rouge à Lèvres'
      },
      client: 'GlowBeauty Cosmetics',
      type: {
        ar: 'فيديو تجربة المنتج',
        en: 'Product Review Video',
        fr: 'Vidéo Test Produit'
      },
      status: 'pending',
      price: '$300',
      date: '2025-04-10',
      description: {
        ar: 'إظهار الألوان المختلفة وإبراز مقاومته للماء',
        en: 'Showcase different colors and waterproof features',
        fr: 'Présentation des différentes couleurs et de la résistance à l\'eau'
      },
      statusColor: 'bg-yellow-100 text-yellow-600',
    },
    {
      id: 3,
      title: {
        ar: 'حذاء رياضي جديد',
        en: 'New Running Shoes',
        fr: 'Nouvelles Chaussures de Course'
      },
      client: 'FastFit Sportswear',
      type: {
        ar: 'مراجعة تجربة أثناء التمرين',
        en: 'Workout Experience Review',
        fr: 'Test d\'Expérience d\'Entraînement'
      },
      status: 'completed',
      price: '$250',
      date: '2025-04-05',
      description: {
        ar: 'التركيز على الراحة والخفة أثناء الجري',
        en: 'Focus on comfort and lightness while running',
        fr: 'Accent sur le confort et la légèreté pendant la course'
      },
      statusColor: 'bg-green-100 text-green-600',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: {
        name: 'أحمد محمد',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: 'مرحباً، هل يمكنني الحصول على معلومات إضافية عن المنتج؟',
      time: '10:30 AM',
      unread: true,
    },
    {
      id: 2,
      sender: {
        name: 'سارة أحمد',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: 'تم الانتهاء من تصوير الفيديو، سأرسل لك النسخة الأولية قريباً',
      time: 'Yesterday',
      unread: false,
    },
    {
      id: 3,
      sender: {
        name: 'محمد علي',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: 'هل يمكننا تمديد موعد التسليم ليوم إضافي؟',
      time: 'Apr 12',
      unread: false,
    },
    {
      id: 4,
      sender: {
        name: 'نورا خالد',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: 'أحتاج إلى معلومات أكثر عن المنتج لإنشاء محتوى أفضل',
      time: 'Apr 10',
      unread: false,
    },
    {
      id: 5,
      sender: {
        name: 'خالد الناصري',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: 'تم استلام المنتج، سأبدأ العمل على المراجعة غداً',
      time: 'Apr 8',
      unread: false,
    },
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new':
        return translations.recentProjects.statuses.new[language];
      case 'pending':
        return translations.recentProjects.statuses.pending[language];
      case 'completed':
        return translations.recentProjects.statuses.completed[language];
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white shadow-md md:min-h-screen p-4">
          <div className="mb-8 text-center">
            <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                alt="شعار الشركة"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">Asma Ahmed</h3>
            <p className="text-gray-500 text-sm uppercase tracking-wide">cod network</p>
            <p className="text-gray-500 text-sm">asma@gmail.com</p>
          </div>

          <nav className="space-y-2">
            <button
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'overview'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('overview')}
            >
              <BarChart3 className="h-5 w-5" />
              <span>{translations.overview[language]}</span>
            </button>

            <Link
              href="/brand/campaigns"
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'campaigns'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <Package className="h-5 w-5" />
              <span>{translations.campaigns[language]}</span>
            </Link>

            <button
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'messages'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('messages')}
            >
              <MessageSquare className="h-5 w-5" />
              <span>{translations.messages[language]}</span>
            </button>

            <button
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'profile'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('profile')}
            >
              <Building2 className="h-5 w-5" />
              <span>{translations.profile[language]}</span>
            </button>

            <button
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'settings'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="h-5 w-5" />
              <span>{translations.settings[language]}</span>
            </button>
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link
              href="/brand/create-campaign"
              className="w-full bg-purple-600 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              <Package className="h-5 w-5" />
              <span>{translations.createCampaign[language]}</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">{translations.overview[language]}</h1>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {stats.map(stat => (
                  <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                        <h3 className="text-2xl font-bold">{stat.value}</h3>
                      </div>
                      <div className={`p-3 rounded-full ${stat.id === 'budget' ? 'bg-green-100 text-green-600' :
                        stat.id === 'campaigns' ? 'bg-blue-100 text-blue-600' :
                          stat.id === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                            stat.id === 'completed' ? 'bg-purple-100 text-purple-600' :
                              stat.id === 'clients' ? 'bg-indigo-100 text-indigo-600' :
                                'bg-orange-100 text-orange-600'
                        }`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className={`mt-4 text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                      <span className="flex items-center">
                        {stat.changeType === 'positive' ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingUp className="h-4 w-4 mr-1 transform rotate-180" />
                        )}
                        {stat.change} {translations.since[language]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Projects */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{translations.recentProjects.title[language]}</h2>
                <Link href="/brand/campaigns" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  {translations.recentProjects.viewAll[language]}
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className={`px-6 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.project[language]}
                        </th>
                        <th scope="col" className={`px-6 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.client[language]}
                        </th>
                        <th scope="col" className={`px-6 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.type[language]}
                        </th>
                        <th scope="col" className={`px-6 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.price[language]}
                        </th>
                        <th scope="col" className={`px-6 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.status[language]}
                        </th>
                        <th scope="col" className={`px-6 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.date[language]}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentProjects.map((project) => (
                        <tr key={project.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {project.title[language]}
                            </div>
                            <div className="text-sm text-gray-500">
                              {project.description[language]}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{project.client}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{project.type[language]}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{project.price}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.statusColor}`}>
                              {translations.recentProjects.statuses[project.status][language]}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {project.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">{translations.messages[language]}</h1>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex items-center p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer ${message.unread ? 'bg-purple-50' : ''
                      }`}
                  >
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={message.sender.avatar}
                        alt={message.sender.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-sm font-medium text-gray-900 truncate">{message.sender.name}</h3>
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{message.preview}</p>
                    </div>
                    {message.unread && (
                      <div className="h-3 w-3 bg-purple-600 rounded-full ml-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">{translations.profile[language]}</h1>

              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mb-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="relative h-48 w-48 rounded-lg overflow-hidden mx-auto">
                      <Image
                        src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                        alt="شعار الشركة"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h2 className="text-xl font-bold">COD Network</h2>
                      <p className="text-gray-500">asma@gmail.com</p>
                    </div>
                  </div>

                  <div className="md:w-2/3 md:pr-8">
                    <h3 className="text-lg font-bold mb-4">معلومات الشركة</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500">اسم الشركة:</p>
                        <p className="font-medium">COD Network</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">البريد الإلكتروني:</p>
                        <p className="font-medium">asma@gmail.com</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">رقم الهاتف:</p>
                        <p className="font-medium">+51 966 696 123</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">الدولة:</p>
                        <p className="font-medium">المغرب</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">المجال:</p>
                        <p className="font-medium">التكنولوجيا</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">تاريخ الانضمام:</p>
                        <p className="font-medium">15 يناير 2025</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-4">وصف الشركة</h3>
                    <p className="text-gray-600 mb-6">
                      شركة رائدة في مجال التكنولوجيا والإلكترونيات، نقدم منتجات مبتكرة وعالية الجودة للمستهلكين. نسعى دائمًا لتقديم أحدث التقنيات وأفضل تجربة للمستخدمين.
                    </p>

                    <button className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors">
                      تعديل الملف الشخصي
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">{translations.settings[language]}</h1>

              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                <h3 className="text-lg font-bold mb-4">إعدادات الحساب</h3>

                <div className="mb-6">
                  <h4 className="text-md font-medium mb-2">التفاصيل</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">اسم الشركة:</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        defaultValue="COD Network"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">البريد الإلكتروني:</label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        defaultValue="asma@gmail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">الدولة:</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        defaultValue="المغرب"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">رقم الهاتف:</label>
                      <div className="flex">
                        <select className="border border-gray-300 rounded-r-none rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                          <option>+51</option>
                        </select>
                        <input
                          type="text"
                          className="flex-1 border border-gray-300 rounded-l-none rounded-r-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          defaultValue="966 696 123"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors">
                    حفظ التغييرات
                  </button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-md font-medium mb-2">كلمة المرور</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">تغيير كلمة المرور</label>
                      <input
                        type="password"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="أدخل كلمة المرور الخاصة بك..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">تأكيد كلمة المرور</label>
                      <input
                        type="password"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="تأكيد كلمة المرور..."
                      />
                    </div>
                  </div>
                  <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors">
                    تحديث كلمة المرور
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}