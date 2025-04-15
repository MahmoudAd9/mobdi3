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
  Settings,
  User
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [userRole, setUserRole] = useState<'brand' | 'creator'>('brand');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: 'asma@gmail.com',
    phone: '+51 966 696 123',
    country: ''
  });

  const { language: rawLanguage } = useLanguage();
  const language = ['ar', 'en', 'fr'].includes(rawLanguage) ? rawLanguage : 'en';



  const translations = {
    navigation: {
      overview: { ar: 'نظرة عامة', en: 'Overview', fr: 'Aperçu' },
      projects: { ar: 'المشاريع', en: 'Projects', fr: 'Projets' },
      messages: { ar: 'الرسائل', en: 'Messages', fr: 'Messages' },
      profile: { ar: 'الملف الشخصي', en: 'Profile', fr: 'Profil' },
      createAd: { ar: 'إنشاء إعلان جديد', en: 'Create New Ad', fr: 'Créer une Annonce' },
      settings: { ar: 'الإعدادات', en: 'Settings', fr: 'Paramètres' }
    },
    profile: {
      profileImage: { ar: 'صورة الملف الشخصي', en: 'Profile Image', fr: 'Image de Profil' },
      email: { ar: 'البريد الإلكتروني', en: 'Email', fr: 'Email' },
      name: { ar: 'أسماء علي', en: 'Asma Ali', fr: 'Asma Ali' },
      joinDate: {
        label: { ar: 'تاريخ الانضمام', en: 'Join Date', fr: "Date d'Inscription" },
        value: { ar: '15 يناير 2025', en: 'January 15, 2025', fr: '15 Janvier 2025' }
      },
      personalInfo: {
        title: { ar: 'المعلومات الشخصية', en: 'Personal Information', fr: 'Informations Personnelles' },
        fullName: { label: { ar: 'الاسم الكامل', en: 'Full Name', fr: 'Nom Complet' } },
        phone: { label: { ar: 'رقم الهاتف', en: 'Phone Number', fr: 'Numéro de Téléphone' }, value: '+51 966 696 123' },
        country: { label: { ar: 'الدولة', en: 'Country', fr: 'Pays' }, value: { ar: 'المغرب', en: 'Morocco', fr: 'Maroc' } }
      },
      ratings: { title: { ar: 'مجموعات التقييمات', en: 'Rating Groups', fr: "Groupes d'Évaluation" }, value: '4/5' },
      editButton: { ar: 'تعديل الملف الشخصي', en: 'Edit Profile', fr: 'Modifier le Profil' },
      userSettings: {
        title: { ar: 'إعدادات المستخدم', en: 'User Settings', fr: 'Paramètres Utilisateur' },
        details: { title: { ar: 'التفاصيل', en: 'Details', fr: 'Détails' } },
        saveChanges: { ar: 'حفظ التغييرات', en: 'Save Changes', fr: 'Enregistrer les Modifications' }
      }
    },
    stats: {
      revenue: { title: { ar: 'إجمالي الأرباح', en: 'Total Revenue', fr: 'Revenu Total' } },
      newRequests: { title: { ar: 'الطلبات الجديدة', en: 'New Requests', fr: 'Nouvelles Demandes' } },
      pendingAds: { title: { ar: 'إعلانات قيد التنفيذ', en: 'Pending Ads', fr: 'Annonces en Attente' } },
      completedAds: { title: { ar: 'الإعلانات المكتملة', en: 'Completed Ads', fr: 'Annonces Terminées' } },
      totalClients: { title: { ar: 'عدد العملاء المتعامل معهم', en: 'Total Clients', fr: 'Clients Totaux' } },
      rating: { title: { ar: 'متوسط التقييم', en: 'Average Rating', fr: 'Note Moyenne' } }
    },
    timePeriod: { sinceLastMonth: { ar: 'منذ الشهر الماضي', en: 'since last month', fr: 'depuis le mois dernier' } },
    recentProjects: {
      title: { ar: 'أحدث المشاريع', en: 'Recent Projects', fr: 'Projets Récents' },
      table: {
        project: { ar: 'المشروع', en: 'Project', fr: 'Projet' },
        client: { ar: 'العميل', en: 'Client', fr: 'Client' },
        type: { ar: 'النوع', en: 'Type', fr: 'Type' },
        price: { ar: 'السعر', en: 'Price', fr: 'Prix' },
        status: { ar: 'الحالة', en: 'Status', fr: 'Statut' },
        date: { ar: 'التاريخ', en: 'Date', fr: 'Date' }
      },
      status: {
        new: { ar: 'جديد', en: 'New', fr: 'Nouveau' },
        inProgress: { ar: 'قيد التنفيذ', en: 'In Progress', fr: 'En Cours' },
        completed: { ar: 'مكتمل', en: 'Completed', fr: 'Terminé' }
      },
      types: {
        techReview: { ar: 'مراجعة تقنية', en: 'Tech Review', fr: 'Revue Technique' },
        productVideo: { ar: 'فيديو تجربة المنتج', en: 'Product Review Video', fr: 'Vidéo Test Produit' },
        workoutReview: { ar: 'مراجعة تجربة أثناء التمرين', en: 'Workout Experience Review', fr: 'Revue Expérience Sportive' }
      }
    },
    settings: {
      password: {
        title: { ar: 'تغيير كلمة المرور', en: 'Change Password', fr: 'Changer le Mot de Passe' },
        change: { ar: 'كلمة المرور الجديدة', en: 'New Password', fr: 'Nouveau Mot de Passe' },
        confirm: { ar: 'تأكيد كلمة المرور', en: 'Confirm Password', fr: 'Confirmer le Mot de Passe' },
        update: { ar: 'تحديث كلمة المرور', en: 'Update Password', fr: 'Mettre à Jour le Mot de Passe' },
        changePlaceholder: { ar: 'أدخل كلمة المرور الجديدة...', en: 'Enter the new password...', fr: 'Entrez le nouveau mot de passe...' },
        confirmPlaceholder: { ar: 'أدخل تأكيد كلمة المرور...', en: 'Enter the password confirmation...', fr: 'Entrez la confirmation du mot de passe...' }
      },
      notifications: {
        title: { ar: 'إعدادات الإشعارات', en: 'Notifications Settings', fr: 'Paramètres des Notifications' },
        email: {
          title: { ar: 'البريد الإلكتروني', en: 'Email', fr: 'Email' },
          description: { ar: 'تلقي الإشعارات عبر البريد الإلكتروني', en: 'Receive notifications via email', fr: 'Recevoir les notifications par email' }
        },
        push: {
          title: { ar: 'الإشعارات الصوتية', en: 'Push Notifications', fr: 'Notifications Push' },
          description: { ar: 'تلقي الإشعارات الصوتية', en: 'Receive push notifications', fr: 'Recevoir les notifications push' }
        }
      }
    },
    messages: {
      title: { ar: 'الرسائل', en: 'Messages', fr: 'Messages' },
      preview: {
        message1: { ar: 'مرحباً، كيف حالك؟', en: 'Hey, How are you?', fr: 'Salut, comment allez-vous ?' },
        message2: { ar: 'ما هي خططك لهذا الأسبوع؟', en: 'What do you have planned this week?', fr: "Qu'avez-vous prévu cette semaine ?" },
        message3: { ar: 'كيف تصف نفسك في ثلاث كلمات؟', en: 'How would you describe yourself in three words?', fr: 'Comment vous décririez-vous en trois mots ?' },
        message4: { ar: 'كيف تتخلص من التوتر؟', en: 'How do you relieve stress?', fr: 'Comment gérez-vous le stress ?' }
      },
      time: {
        now: { ar: 'الآن', en: 'Now', fr: 'Maintenant' },
        yesterday: { ar: 'أمس', en: 'Yesterday', fr: 'Hier' }
      }
    }
  };

  const navigationItems = {
    brand: [
      { id: 'overview', label: translations.navigation.overview[language], icon: BarChart3 },
      { id: 'projects', label: translations.navigation.projects[language], icon: Package },
      { id: 'messages', label: translations.navigation.messages[language], icon: MessageSquare },
      { id: 'profile', label: translations.navigation.profile[language], icon: Users },
      { id: 'settings', label: translations.navigation.settings[language], icon: Settings }
    ],
    creator: [
      { id: 'overview', label: translations.navigation.overview[language], icon: BarChart3 },
      { id: 'projects', label: translations.navigation.projects[language], icon: Package },
      { id: 'messages', label: translations.navigation.messages[language], icon: MessageSquare },
      { id: 'profile', label: translations.navigation.profile[language], icon: User },
      { id: 'settings', label: translations.navigation.settings[language], icon: Settings }
    ]
  };

  const stats = [
    { id: 'revenue', title: translations.stats.revenue.title[language], value: '$52.6k', icon: DollarSign, change: '+12.5%', changeType: 'positive' },
    { id: 'projects', title: translations.stats.newRequests.title[language], value: '12', icon: Package, change: '+4', changeType: 'positive' },
    { id: 'pending', title: translations.stats.pendingAds.title[language], value: '23', icon: Clock, change: '-2', changeType: 'negative' },
    { id: 'completed', title: translations.stats.completedAds.title[language], value: '384', icon: CheckCircle, change: '+18', changeType: 'positive' },
    { id: 'clients', title: translations.stats.totalClients.title[language], value: '790', icon: Users, change: '+25', changeType: 'positive' },
    { id: 'rating', title: translations.stats.rating.title[language], value: '4.5/5', icon: Star, change: '+0.2', changeType: 'positive' },
  ];

  const recentProjects = [
    {
      id: 1,
      title: { ar: 'سماعة لاسلكية جديدة', en: 'New Wireless Headphones', fr: 'Nouveaux Écouteurs Sans Fil' },
      client: 'TechWorld Electronics',
      type: translations.recentProjects.types.techReview[language],
      status: translations.recentProjects.status.new[language],
      price: '$200',
      date: '2025-04-15',
      description: { ar: 'التركيز على جودة الصوت وعمر البطارية', en: 'Focus on sound quality and battery life', fr: 'Accent sur la qualité sonore et l\'autonomie' },
      statusColor: 'bg-blue-100 text-blue-600',
    },
    {
      id: 2,
      title: { ar: 'أحمر شفاه جديد', en: 'New Lipstick', fr: 'Nouveau Rouge à Lèvres' },
      client: 'GlowBeauty Cosmetics',
      type: translations.recentProjects.types.productVideo[language],
      status: translations.recentProjects.status.inProgress[language],
      price: '$300',
      date: '2025-04-10',
      description: { ar: 'إظهار الألوان المختلفة وإبراز مقاومته للماء', en: 'Showcase different colors and water resistance', fr: 'Présentation des différentes couleurs et de la résistance à l\'eau' },
      statusColor: 'bg-yellow-100 text-yellow-600',
    },
    {
      id: 3,
      title: { ar: 'حذاء رياضي جديد', en: 'New Sports Shoe', fr: 'Nouvelle Chaussure de Sport' },
      client: 'FastFit Sportswear',
      type: translations.recentProjects.types.workoutReview[language],
      status: translations.recentProjects.status.completed[language],
      price: '$250',
      date: '2025-04-05',
      description: { ar: 'التركيز على الراحة والخفة أثناء الجري', en: 'Focus on comfort and lightness during running', fr: 'Accent sur le confort et la légèreté pendant la course' },
      statusColor: 'bg-green-100 text-green-600',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Project Alpha',
      status: 'new',
      price: '$200',
      date: '2025-04-15',
      description: 'Description for Project Alpha',
      statusColor: 'bg-blue-100 text-blue-600',
    },
    {
      id: 2,
      title: 'Project Beta',
      status: 'inProgress',
      price: '$300',
      date: '2025-04-10',
      description: 'Description for Project Beta',
      statusColor: 'bg-yellow-100 text-yellow-600',
    },
    {
      id: 3,
      title: 'Project Gamma',
      status: 'completed',
      price: '$250',
      date: '2025-04-05',
      description: 'Description for Project Gamma',
      statusColor: 'bg-green-100 text-green-600',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: {
        name: language === 'ar' ? 'كريستوفر كامبل' : language === 'fr' ? 'Christopher Campbell' : 'Christopher Campbell',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: translations.messages.preview.message1[language],
      time: translations.messages.time.now[language],
      unread: true,
    },
    {
      id: 2,
      sender: {
        name: language === 'ar' ? 'حسين نصيب' : language === 'fr' ? 'Houcine Ncib' : 'Houcine Ncib',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: translations.messages.preview.message2[language],
      time: translations.messages.time.yesterday[language],
      unread: false,
    },
    {
      id: 3,
      sender: {
        name: language === 'ar' ? 'كيلي سيكيما' : language === 'fr' ? 'Kelly Sikkema' : 'Kelly Sikkema',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: translations.messages.preview.message3[language],
      time: 'Apr 12',
      unread: false,
    },
    {
      id: 4,
      sender: {
        name: language === 'ar' ? 'إيثان هوفر' : language === 'fr' ? 'Ethan Hoover' : 'Ethan Hoover',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: translations.messages.preview.message4[language],
      time: 'Apr 10',
      unread: false,
    }
  ];

  // Initialize profile data when the language changes.
  useEffect(() => {
    setProfileData({
      fullName: translations.profile.name[language],
      email: 'asma@gmail.com',
      phone: translations.profile.personalInfo.phone.value,
      country: translations.profile.personalInfo.country.value[language]
    });
  }, [language]);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the changes
  };

  const handleCancel = () => {
    setIsEditing(false);
    setProfileData({
      fullName: translations.profile.name[language],
      email: 'asma@gmail.com',
      phone: translations.profile.personalInfo.phone.value,
      country: translations.profile.personalInfo.country.value[language]
    });
  };

  return (
    // Outer wrapper prevents horizontal overflow and sets minimum height and background
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Centered container with padding */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white shadow-md md:min-h-screen p-4 overflow-y-auto">
            <div className="mb-8 text-center">
              <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  alt={translations.profile.profileImage[language]}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{translations.profile.name[language]}</h3>
              <p className="text-gray-500 text-sm">asma@gmail.com</p>
            </div>

            <nav className="space-y-2">
              {navigationItems[userRole].map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${activeTab === item.id
                    ? 'bg-purple-100 text-purple-600'
                    : 'text-gray-600 hover:bg-gray-100'
                    } ${language === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="flex-1 truncate">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="/dashboard/create-ad"
                className={`w-full bg-purple-600 text-white flex items-center gap-2 px-4 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'
                  }`}
              >
                <Package className="h-5 w-5 flex-shrink-0" />
                <span className="flex-1 truncate">{translations.navigation.createAd[language]}</span>
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">{translations.navigation.overview[language]}</h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {stats.map(stat => (
                    <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex justify-between items-start gap-4">
                        <div className="min-w-0">
                          <p className="text-gray-500 text-sm mb-1 truncate">{stat.title}</p>
                          <h3 className="text-2xl font-bold">{stat.value}</h3>
                        </div>
                        <div
                          className={`p-3 rounded-full flex-shrink-0 ${stat.id === 'revenue'
                            ? 'bg-green-100 text-green-600'
                            : stat.id === 'projects'
                              ? 'bg-blue-100 text-blue-600'
                              : stat.id === 'pending'
                                ? 'bg-yellow-100 text-yellow-600'
                                : stat.id === 'completed'
                                  ? 'bg-purple-100 text-purple-600'
                                  : stat.id === 'clients'
                                    ? 'bg-indigo-100 text-indigo-600'
                                    : 'bg-orange-100 text-orange-600'
                            }`}
                        >
                          <stat.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className={`mt-4 text-sm flex items-center gap-1 ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                        <TrendingUp className={`h-4 w-4 flex-shrink-0 ${stat.changeType === 'negative' ? 'transform rotate-180' : ''}`} />
                        <span className="truncate">{stat.change} {translations.timePeriod.sinceLastMonth[language]}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Projects */}
                <h2 className="text-2xl font-bold mb-6">{translations.recentProjects.title[language]}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {recentProjects.map(project => (
                    <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{project.title[language]}</h3>
                        <p className="text-sm text-gray-500 truncate">{project.description[language]}</p>
                        <div className="mt-2 flex justify-between items-center">
                          <span className="text-sm font-medium text-purple-600">{project.price}</span>
                          <div className={`px-2 py-1 text-xs font-semibold rounded-full ${project.statusColor}`}>
                            {translations.recentProjects.status[project.status as 'new' | 'inProgress' | 'completed']?.[language] ?? project.status}
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{project.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">{translations.navigation.projects[language]}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {projects.map(project => (
                    <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative">
                      {/* Status Indicator */}
                      <div
                        className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full"
                        style={{
                          backgroundColor: project.status === 'new' ? '#DCFCE7' : project.status === 'inProgress' ? '#FEF9C3' : '#DBEAFE',
                          color: project.status === 'new' ? 'green' : project.status === 'inProgress' ? 'orange' : 'blue'
                        }}
                      >
                        {translations.recentProjects.status[project.status as 'new' | 'inProgress' | 'completed']?.[language] ?? project.status}
                      </div>
                      {/* Image */}
                      <Image
                        src="/path/to/image.jpg" // Replace with the actual image path
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                        <p className="text-xs text-gray-400 mt-2">{project.date}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-xl font-bold text-purple-600">{project.price}</span>
                          <Link href={`/projects/${project.id}`} className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                            عرض التفاصيل
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">{translations.navigation.messages[language]}</h1>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {messages.map(message => (
                    <div key={message.id} className={`flex items-center p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer ${message.unread ? 'bg-purple-50' : ''}`}>
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image src={message.sender.avatar} alt={message.sender.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                          <h3 className="text-sm font-medium text-gray-900 truncate">{message.sender.name}</h3>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{message.preview}</p>
                      </div>
                      {message.unread && <div className="h-3 w-3 bg-purple-600 rounded-full ml-2"></div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">{translations.navigation.profile[language]}</h1>
                <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mb-8">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <div className="relative h-48 w-48 rounded-full overflow-hidden mx-auto">
                        <Image
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                          alt={translations.profile.profileImage[language]}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <h2 className="text-xl font-bold">{translations.profile.name[language]}</h2>
                        <p className="text-gray-500">{translations.profile.email[language]}</p>
                        <p className="text-sm text-gray-500 mt-1">{translations.profile.joinDate.value[language]}</p>
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pr-8">
                      <h3 className="text-lg font-bold mb-4">{translations.profile.personalInfo.title[language]}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-sm text-gray-500">
                            {translations.profile.personalInfo.fullName.label[language]}:
                          </p>
                          {isEditing ? (
                            <input
                              type="text"
                              className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                              value={profileData.fullName}
                              onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                            />
                          ) : (
                            <p className="font-medium">{profileData.fullName}</p>
                          )}
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{translations.profile.email[language]}:</p>
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
                          <p className="text-sm text-gray-500">{translations.profile.personalInfo.phone.label[language]}:</p>
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
                          <p className="text-sm text-gray-500">{translations.profile.personalInfo.country.label[language]}:</p>
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
                          <p className="text-sm text-gray-500">{translations.profile.joinDate.label[language]}:</p>
                          <p className="font-medium">{translations.profile.joinDate.value[language]}</p>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-4">{translations.profile.ratings.title[language]}</h3>
                      <div className="flex items-center mb-6">
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4].map(star => (
                            <Star key={star} className="h-5 w-5 fill-current" />
                          ))}
                          <Star className="h-5 w-5" />
                        </div>
                        <span className="text-gray-500 ml-2">{translations.profile.ratings.value}</span>
                      </div>

                      <div className="flex gap-3">
                        {isEditing ? (
                          <>
                            <button
                              onClick={handleSave}
                              className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors"
                            >
                              {translations.profile.userSettings.saveChanges[language]}
                            </button>
                            <button
                              onClick={handleCancel}
                              className="bg-gray-100 text-gray-600 px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
                            >
                              {language === 'ar' ? 'إلغاء' : language === 'fr' ? 'Annuler' : 'Cancel'}
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => setIsEditing(true)}
                            className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors"
                          >
                            {translations.profile.editButton[language]}
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
                <h1 className="text-2xl font-bold mb-6">{translations.navigation.settings[language]}</h1>
                <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                  <div>
                    <h3 className="text-lg font-bold mb-4">{translations.settings.password.title[language]}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">
                          {translations.settings.password.change[language]}
                        </label>
                        <input
                          type="password"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder={translations.settings.password.changePlaceholder[language]}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500 mb-1">
                          {translations.settings.password.confirm[language]}
                        </label>
                        <input
                          type="password"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder={translations.settings.password.confirmPlaceholder[language]}
                        />
                      </div>
                    </div>
                    <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors">
                      {translations.settings.password.update[language]}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
