'use client';

import { useState, useEffect } from 'react';
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
  Settings,
  User
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Loading from '@/components/Loading';

export default function BrandDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
    accountSettings: {
      ar: 'إعدادات الحساب',
      en: 'Account Settings',
      fr: 'Paramètres du Compte'
    },
    details: {
      ar: 'التفاصيل',
      en: 'Details',
      fr: 'Détails'
    },
    password: {
      ar: 'كلمة المرور',
      en: 'Password',
      fr: 'Mot de passe'
    },
    changePassword: {
      ar: 'تغيير كلمة المرور',
      en: 'Change Password',
      fr: 'Changer le Mot de Passe'
    },
    confirmPassword: {
      ar: 'تأكيد كلمة المرور',
      en: 'Confirm Password',
      fr: 'Confirmer le Mot de Passe'
    },
    passwordPlaceholder: {
      ar: 'أدخل كلمة المرور الخاصة بك...',
      en: 'Enter your password...',
      fr: 'Entrez votre mot de passe...'
    },
    confirmPasswordPlaceholder: {
      ar: 'تأكيد كلمة المرور...',
      en: 'Confirm password...',
      fr: 'Confirmer le mot de passe...'
    },
    updatePassword: {
      ar: 'تحديث كلمة المرور',
      en: 'Update Password',
      fr: 'Mettre à Jour le Mot de Passe'
    },
    createCampaign: {
      ar: 'إنشاء حملة جديدة',
      en: 'Create New Campaign',
      fr: 'Nouvelle Campagne'
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
    },
    companyInfo: {
      title: {
        ar: 'معلومات الشركة',
        en: 'Company Information',
        fr: 'Informations de l\'Entreprise'
      },
      companyName: {
        label: {
          ar: 'اسم الشركة:',
          en: 'Company Name:',
          fr: 'Nom de l\'Entreprise:'
        }
      },
      email: {
        label: {
          ar: 'البريد الإلكتروني:',
          en: 'Email:',
          fr: 'Email:'
        }
      },
      phone: {
        label: {
          ar: 'رقم الهاتف:',
          en: 'Phone Number:',
          fr: 'Numéro de Téléphone:'
        }
      },
      country: {
        label: {
          ar: 'الدولة:',
          en: 'Country:',
          fr: 'Pays:'
        },
        value: {
          ar: 'المغرب',
          en: 'Morocco',
          fr: 'Maroc'
        }
      },
      industry: {
        label: {
          ar: 'المجال:',
          en: 'Industry:',
          fr: 'Secteur:'
        },
        value: {
          ar: 'التكنولوجيا',
          en: 'Technology',
          fr: 'Technologie'
        }
      },
      joinDate: {
        label: {
          ar: 'تاريخ الانضمام:',
          en: 'Join Date:',
          fr: 'Date d\'Inscription:'
        },
        value: {
          ar: '15 يناير 2025',
          en: 'January 15, 2025',
          fr: '15 Janvier 2025'
        }
      },
      ratings: {
        title: {
          ar: 'تقييم الشركة',
          en: 'Company Ratings',
          fr: 'Évaluation de l\'Entreprise'
        },
        count: {
          ar: 'عدد التقييمات',
          en: 'Number of Ratings',
          fr: 'Nombre de Évaluations'
        }
      }
    },
    companyDescription: {
      title: {
        ar: 'وصف الشركة',
        en: 'Company Description',
        fr: 'Description de l\'Entreprise'
      },
      content: {
        ar: 'شركة رائدة في مجال التكنولوجيا والإلكترونيات، نقدم منتجات مبتكرة وعالية الجودة للمستهلكين. نسعى دائمًا لتقديم أحدث التقنيات وأفضل تجربة للمستخدمين.',
        en: 'A leading technology and electronics company, we provide innovative and high-quality products to consumers. We always strive to deliver the latest technologies and the best user experience.',
        fr: 'Une entreprise leader dans la technologie et l\'électronique, nous fournissons des produits innovants et de haute qualité aux consommateurs. Nous nous efforçons toujours d\'offrir les dernières technologies et la meilleure expérience utilisateur.'
      }
    },
    editProfile: {
      ar: 'تعديل الملف الشخصي',
      en: 'Edit Profile',
      fr: 'Modifier le Profil'
    },
    saveChanges: {
      ar: 'حفظ التغييرات',
      en: 'Save Changes',
      fr: 'Enregistrer les Modifications'
    },
    cancel: {
      ar: 'إلغاء',
      en: 'Cancel',
      fr: 'Annuler'
    }
  };

  type ProjectStatus = 'new' | 'pending' | 'completed';

  interface Project {
    id: number;
    title: {
      ar: string;
      en: string;
      fr: string;
    };
    client: string;
    type: {
      ar: string;
      en: string;
      fr: string;
    };
    status: ProjectStatus;
    price: string;
    date: string;
    description: {
      ar: string;
      en: string;
      fr: string;
    };
    statusColor: string;
  }

  const [profileData, setProfileData] = useState({
    companyName: '',
    email: '',
    phone: '',
    country: '',
    description: ''
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProfileData({
          companyName: 'COD Network',
          email: 'asma@gmail.com',
          phone: '+51 966 696 123',
          country: translations.companyInfo.country.value[language],
          description: translations.companyDescription.content[language]
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, [language]);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the data to your backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset the form data to original values
    setProfileData({
      companyName: '',
      email: '',
      phone: '',
      country: '',
      description: ''
    });
  };

  const stats = [
    { id: 'budget', title: translations.stats.budget.title[language], value: '$52.6k', icon: DollarSign, change: '+12.5%', changeType: 'positive' },
    { id: 'campaigns', title: translations.stats.activeCampaigns.title[language], value: '12', icon: Package, change: '+4', changeType: 'positive' },
    { id: 'pending', title: translations.stats.pendingRequests.title[language], value: '23', icon: Clock, change: '-2', changeType: 'negative' },
    { id: 'completed', title: translations.stats.completedOrders.title[language], value: '384', icon: CheckCircle, change: '+18', changeType: 'positive' },
    { id: 'clients', title: translations.stats.contractedInfluencers.title[language], value: '790', icon: Users, change: '+25', changeType: 'positive' },
    { id: 'rating', title: translations.stats.averageRating.title[language], value: '4.5/5', icon: Star, change: '+0.2', changeType: 'positive' },
  ];

  const recentProjects: Project[] = [
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
        name: language === 'ar' ? 'أحمد محمد' : language === 'fr' ? 'Ahmed Mohammed' : 'Ahmed Mohammed',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: language === 'ar' ? 'مرحباً، هل يمكنني الحصول على معلومات إضافية عن المنتج؟' :
        language === 'fr' ? 'Bonjour, puis-je avoir plus d\'informations sur le produit ?' :
          'Hello, can I get additional information about the product?',
      time: '10:30 AM',
      unread: true,
    },
    {
      id: 2,
      sender: {
        name: language === 'ar' ? 'سارة أحمد' : language === 'fr' ? 'Sara Ahmed' : 'Sara Ahmed',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: language === 'ar' ? 'تم الانتهاء من تصوير الفيديو، سأرسل لك النسخة الأولية قريباً' :
        language === 'fr' ? 'J\'ai terminé le tournage de la vidéo, je vous enverrai bientôt la première version' :
          'Video shooting is complete, I\'ll send you the initial version soon',
      time: 'Yesterday',
      unread: false,
    },
    {
      id: 3,
      sender: {
        name: language === 'ar' ? 'محمد علي' : language === 'fr' ? 'Mohammed Ali' : 'Mohammed Ali',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: language === 'ar' ? 'هل يمكننا تمديد موعد التسليم ليوم إضافي؟' :
        language === 'fr' ? 'Pouvons-nous prolonger le délai de livraison d\'un jour ?' :
          'Can we extend the delivery deadline by one day?',
      time: 'Apr 12',
      unread: false,
    },
    {
      id: 4,
      sender: {
        name: language === 'ar' ? 'نورا خالد' : language === 'fr' ? 'Nora Khalid' : 'Nora Khalid',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: language === 'ar' ? 'أحتاج إلى معلومات أكثر عن المنتج لإنشاء محتوى أفضل' :
        language === 'fr' ? 'J\'ai besoin de plus d\'informations sur le produit pour créer un meilleur contenu' :
          'I need more information about the product to create better content',
      time: 'Apr 10',
      unread: false,
    },
    {
      id: 5,
      sender: {
        name: language === 'ar' ? 'خالد الناصري' : language === 'fr' ? 'Khalid Al-Naseri' : 'Khalid Al-Naseri',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: language === 'ar' ? 'تم استلام المنتج، سأبدأ العمل على المراجعة غداً' :
        language === 'fr' ? 'Produit reçu, je commencerai l\'évaluation demain' :
          'Product received, I\'ll start working on the review tomorrow',
      time: 'Apr 8',
      unread: false,
    },
  ];

  const getStatusText = (status: ProjectStatus) => {
    return translations.recentProjects.statuses[status][language];
  };

  if (isLoading) {
    return <Loading size="lg" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-72 bg-white shadow-md md:min-h-screen p-4 flex flex-col">
          <div className="mb-8 text-center">
            <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">Asma Ahmed</h3>
            <p className="text-gray-500 text-sm uppercase tracking-wide">cod network</p>
            <p className="text-gray-500 text-sm">asma@gmail.com</p>
          </div>

          <nav className="space-y-2 flex-grow">
            <button
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-left ${activeTab === 'overview'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('overview')}
            >
              <BarChart3 className="h-5 w-5 flex-shrink-0" />
              <span className="truncate min-w-[120px]">{translations.overview[language]}</span>
            </button>

            <Link
              href="/brand/campaigns"
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-left ${activeTab === 'campaigns'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <Package className="h-5 w-5 flex-shrink-0" />
              <span className="truncate min-w-[120px]">{translations.campaigns[language]}</span>
            </Link>

            <button
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-left ${activeTab === 'messages'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('messages')}
            >
              <MessageSquare className="h-5 w-5 flex-shrink-0" />
              <span className="truncate min-w-[120px]">{translations.messages[language]}</span>
            </button>

            <button
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-left ${activeTab === 'profile'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('profile')}
            >
              <Building2 className="h-5 w-5 flex-shrink-0" />
              <span className="truncate min-w-[120px]">{translations.profile[language]}</span>
            </button>

            <button
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-left ${activeTab === 'settings'
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="h-5 w-5 flex-shrink-0" />
              <span className="truncate min-w-[120px]">{translations.settings[language]}</span>
            </button>
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link
              href="/brand/create-campaign"
              className="w-full bg-purple-600 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              <Package className="h-5 w-5 flex-shrink-0" />
              <span className="truncate min-w-[120px]">{translations.createCampaign[language]}</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-x-hidden">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="max-w-full">
              <h1 className="text-2xl font-bold mb-4">{translations.overview[language]}</h1>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
                {stats.map(stat => (
                  <div key={stat.id} className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                        <h3 className="text-xl font-bold">{stat.value}</h3>
                      </div>
                      <div className={`p-2 rounded-full ${stat.id === 'budget' ? 'bg-green-100 text-green-600' :
                        stat.id === 'campaigns' ? 'bg-blue-100 text-blue-600' :
                          stat.id === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                            stat.id === 'completed' ? 'bg-purple-100 text-purple-600' :
                              stat.id === 'clients' ? 'bg-indigo-100 text-indigo-600' :
                                'bg-orange-100 text-orange-600'
                        }`}>
                        <stat.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className={`mt-2 text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className={`px-4 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.project[language]}
                        </th>
                        <th scope="col" className={`px-4 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.client[language]}
                        </th>
                        <th scope="col" className={`px-4 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.type[language]}
                        </th>
                        <th scope="col" className={`px-4 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.price[language]}
                        </th>
                        <th scope="col" className={`px-4 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.status[language]}
                        </th>
                        <th scope="col" className={`px-4 py-3 text-xs font-medium tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {translations.recentProjects.date[language]}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentProjects.map((project) => (
                        <tr key={project.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {project.title[language]}
                            </div>
                            <div className="text-xs text-gray-500">
                              {project.description[language]}
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{project.client}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{project.type[language]}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{project.price}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.statusColor}`}>
                              {getStatusText(project.status as ProjectStatus)}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
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
                        alt={translations.companyInfo.companyName.label[language]}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h2 className="text-xl font-bold">{profileData.companyName}</h2>
                      <p className="text-gray-500">{profileData.email}</p>
                    </div>
                  </div>

                  <div className="md:w-2/3 md:pr-8">
                    <h3 className="text-lg font-bold mb-4">{translations.companyInfo.title[language]}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500">{translations.companyInfo.companyName.label[language]}</p>
                        {isEditing ? (
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            value={profileData.companyName}
                            onChange={(e) => setProfileData({ ...profileData, companyName: e.target.value })}
                          />
                        ) : (
                          <p className="font-medium">{profileData.companyName}</p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{translations.companyInfo.email.label[language]}</p>
                        {isEditing ? (
                          <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          />
                        ) : (
                          <p className="font-medium">{profileData.email}</p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{translations.companyInfo.phone.label[language]}</p>
                        {isEditing ? (
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          />
                        ) : (
                          <p className="font-medium">{profileData.phone}</p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{translations.companyInfo.country.label[language]}</p>
                        {isEditing ? (
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            value={profileData.country}
                            onChange={(e) => setProfileData({ ...profileData, country: e.target.value })}
                          />
                        ) : (
                          <p className="font-medium">{profileData.country}</p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{translations.companyInfo.joinDate.label[language]}</p>
                        <p className="font-medium">{translations.companyInfo.joinDate.value[language]}</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-4">{translations.companyInfo.ratings.title[language]}</h3>
                    <div className="flex items-center mb-6">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4].map(star => (
                          <Star key={star} className="h-5 w-5 fill-current" />
                        ))}
                        <Star className="h-5 w-5" />
                      </div>
                      <span className="text-gray-500 ml-2">4.0/5</span>
                      <span className="text-sm text-gray-500 ml-2">({translations.companyInfo.ratings.count[language]})</span>
                    </div>

                    <h3 className="text-lg font-bold mb-4">{translations.companyDescription.title[language]}</h3>
                    {isEditing ? (
                      <textarea
                        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        rows={4}
                        value={profileData.description}
                        onChange={(e) => setProfileData({ ...profileData, description: e.target.value })}
                      />
                    ) : (
                      <p className="text-gray-600 mb-6">
                        {profileData.description}
                      </p>
                    )}

                    <div className="flex gap-4">
                      {isEditing ? (
                        <>
                          <button
                            onClick={handleSave}
                            className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors"
                          >
                            {translations.saveChanges[language]}
                          </button>
                          <button
                            onClick={handleCancel}
                            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
                          >
                            {translations.cancel[language]}
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setIsEditing(true)}
                          className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors"
                        >
                          {translations.editProfile[language]}
                        </button>
                      )}
                    </div>
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
                <h3 className="text-lg font-bold mb-4">{translations.password[language]}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">{translations.changePassword[language]}</label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder={translations.passwordPlaceholder[language]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">{translations.confirmPassword[language]}</label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder={translations.confirmPasswordPlaceholder[language]}
                    />
                  </div>
                </div>
                <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors">
                  {translations.updatePassword[language]}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}