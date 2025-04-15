'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
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
  AlertTriangle,
  FileText
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const { language: rawLanguage } = useLanguage();
  const language = ['ar', 'en', 'fr'].includes(rawLanguage) ? rawLanguage : 'en';

  const translations = {
    dashboard: { ar: 'لوحة التحكم الرئيسية', en: 'Main Dashboard', fr: 'Tableau de Bord Principal' },
    adminPanel: { ar: 'مدير النظام', en: 'System Admin', fr: 'Administrateur Système' },
    navigation: {
      overview: { ar: 'لوحة التحكم الرئيسية', en: 'Main Dashboard', fr: 'Tableau de Bord Principal' },
      users: { ar: 'إدارة المستخدمين', en: 'User Management', fr: 'Gestion des Utilisateurs' },
      ads: { ar: 'إدارة الإعلانات', en: 'Ad Management', fr: 'Gestion des Annonces' },
      orders: { ar: 'إدارة الطلبات', en: 'Order Management', fr: 'Gestion des Commandes' },
      finance: { ar: 'إدارة المعاملات المالية', en: 'Financial Transactions', fr: 'Transactions Financières' },
      support: { ar: 'إدارة الشكاوى والدعم', en: 'Complaints & Support', fr: 'Réclamations et Support' },
      settings: { ar: 'إعدادات الموقع', en: 'Site Settings', fr: 'Paramètres du Site' }
    },
    stats: {
      totalTransactions: { ar: 'إجمالي المعاملات المالية', en: 'Total Financial Transactions', fr: 'Total des Transactions Financières' },
      openCompletedOrders: { ar: 'عدد الطلبات المفتوحة والمكتملة', en: 'Open & Completed Orders', fr: 'Commandes Ouvertes et Terminées' },
      publishedAds: { ar: 'عدد الإعلانات المنشورة', en: 'Published Ads', fr: 'Annonces Publiées' },
      registeredCreatorsCompanies: { ar: 'عدد المبدعين والشركات المسجلين', en: 'Registered Creators & Companies', fr: 'Créateurs et Entreprises Enregistrés' },
      pendingComplaints: { ar: 'عدد الشكاوى المعلقة', en: 'Pending Complaints', fr: 'Réclamations en Attente' }
    },
    userTable: {
      fullName: { ar: 'الاسم الكامل', en: 'Full Name', fr: 'Nom Complet' },
      accountType: { ar: 'نوع الحساب', en: 'Account Type', fr: 'Type de Compte' },
      joinDate: { ar: 'تاريخ الانضمام', en: 'Join Date', fr: "Date d'Inscription" },
      email: { ar: 'البريد الإلكتروني', en: 'Email', fr: 'Email' },
      changeStatus: { ar: 'تغيير الحالة', en: 'Change Status', fr: 'Changer le Statut' },
      viewDetails: { ar: 'عرض التفاصيل', en: 'View Details', fr: 'Voir les Détails' },
      status: {
        active: { ar: 'نشط', en: 'Active', fr: 'Actif' },
        suspended: { ar: 'موقوف', en: 'Suspended', fr: 'Suspendu' },
        banned: { ar: 'محظور', en: 'Banned', fr: 'Banni' }
      },
      statusActions: {
        ban: { ar: 'حظر', en: 'Ban', fr: 'Bannir' },
        activate: { ar: 'تفعيل', en: 'Activate', fr: 'Activer' },
        suspend: { ar: 'توقيف', en: 'Suspend', fr: 'Suspendre' }
      },
      accountTypes: {
        creator: { ar: 'صانع محتوى', en: 'Content Creator', fr: 'Créateur de Contenu' },
        company: { ar: 'شركة', en: 'Company', fr: 'Entreprise' }
      }
    },
    adTable: {
      product: { ar: 'المنتج', en: 'Product', fr: 'Produit' },
      creator: { ar: 'المؤثر', en: 'Influencer', fr: 'Influenceur' },
      adType: { ar: 'نوع الإعلان', en: 'Ad Type', fr: "Type d'Annonce" },
      price: { ar: 'السعر', en: 'Price', fr: 'Prix' },
      status: { ar: 'الحالة', en: 'Status', fr: 'Statut' },
      ratings: { ar: 'التقييمات', en: 'Ratings', fr: 'Évaluations' },
      viewDetails: { ar: 'عرض التفاصيل', en: 'View Details', fr: 'Voir les Détails' },
      adStatuses: {
        confirmed: { ar: 'تم التأكيد', en: 'Confirmed', fr: 'Confirmé' },
        inProgress: { ar: 'قيد التنفيذ', en: 'In Progress', fr: 'En Cours' },
        completed: { ar: 'مكتمل', en: 'Completed', fr: 'Terminé' }
      },
      adTypes: {
        techReview: { ar: 'مراجعة تقنية', en: 'Tech Review', fr: 'Revue Technique' },
        productVideo: { ar: 'فيديو تجربة المنتج', en: 'Product Review Video', fr: 'Vidéo Test Produit' },
        workoutReview: { ar: 'مراجعة تجربة أثناء التمرين', en: 'Workout Experience Review', fr: 'Revue Expérience Sportive' }
      }
    },
    timePeriod: { sinceLastMonth: { ar: 'منذ الشهر الماضي', en: 'since last month', fr: 'depuis le mois dernier' } },
    viewAll: { ar: 'عرض الكل', en: 'View All', fr: 'Voir Tout' },
    registeredUsers: { ar: 'المستخدمين المسجلين', en: 'Registered Users', fr: 'Utilisateurs Enregistrés' },
    latestAds: { ar: 'أحدث الإعلانات', en: 'Latest Ads', fr: 'Dernières Annonces' },
    userStats: { ar: 'إحصائيات المستخدمين', en: 'User Statistics', fr: 'Statistiques Utilisateurs' },
    orderStats: { ar: 'إحصائيات الطلبات', en: 'Order Statistics', fr: 'Statistiques des Commandes' },
    totalOrders: { ar: 'إجمالي الطلبات', en: 'Total Orders', fr: 'Total des Commandes' },
    customerGrowth: { ar: 'نمو العملاء', en: 'Customer Growth', fr: 'Croissance Client' },
    totalRevenue: { ar: 'إجمالي الإيرادات', en: 'Total Revenue', fr: 'Revenu Total' }
  };

  const stats = [
    { id: 'revenue', title: translations.stats.totalTransactions[language], value: '$52.6k', icon: DollarSign, change: '+12.5%', changeType: 'positive' },
    { id: 'campaigns', title: translations.stats.openCompletedOrders[language], value: '11k', icon: Package, change: '+4%', changeType: 'positive' },
    { id: 'ads', title: translations.stats.publishedAds[language], value: '50k', icon: FileText, change: '+18%', changeType: 'positive' },
    { id: 'users', title: translations.stats.registeredCreatorsCompanies[language], value: '100k', icon: Users, change: '+25%', changeType: 'positive' },
    { id: 'complaints', title: translations.stats.pendingComplaints[language], value: '52', icon: AlertTriangle, change: '-5%', changeType: 'negative' },
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'إيمان محمد',
      email: 'olivia@untitledui.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: translations.userTable.accountTypes.creator[language],
      country: 'المغرب',
      status: translations.userTable.status.active[language],
      date: '01/01/2025',
      statusColor: 'bg-green-100 text-green-600',
    },
    {
      id: 2,
      name: 'علي أحمد',
      email: 'phoenix@untitledui.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: translations.userTable.accountTypes.creator[language],
      country: 'الأردن',
      status: translations.userTable.status.suspended[language],
      date: '01/01/2025',
      statusColor: 'bg-yellow-100 text-yellow-600',
    },
    {
      id: 3,
      name: 'ليلى',
      email: 'lana@untitledui.com',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: translations.userTable.accountTypes.company[language],
      country: 'الأردن',
      status: translations.userTable.status.active[language],
      date: '01/01/2025',
      statusColor: 'bg-green-100 text-green-600',
    },
    {
      id: 4,
      name: 'دمي',
      email: 'demi@untitledui.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: translations.userTable.accountTypes.company[language],
      country: 'المغرب',
      status: translations.userTable.status.banned[language],
      date: '01/01/2025',
      statusColor: 'bg-red-100 text-red-600',
    },
    {
      id: 5,
      name: 'Candice Wu',
      email: 'candice@untitledui.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: translations.userTable.accountTypes.creator[language],
      country: 'المغرب',
      status: translations.userTable.status.suspended[language],
      date: '01/01/2025',
      statusColor: 'bg-yellow-100 text-yellow-600',
    },
  ];

  const recentAds = [
    {
      id: 1,
      title: 'سماعة لاسلكية جديدة',
      creator: 'علي',
      type: translations.adTable.adTypes.techReview[language],
      status: translations.adTable.adStatuses.confirmed[language],
      price: '10 MAD',
      date: '2025-04-15',
      description: 'مراجعة تقنية مدتها 60 ثانية، التركيز على جودة الصوت وعمر البطارية',
      statusColor: 'bg-green-100 text-green-600',
    },
    {
      id: 2,
      title: 'أحمر شفاه جديد',
      creator: 'أحمد',
      type: translations.adTable.adTypes.productVideo[language],
      status: translations.adTable.adStatuses.inProgress[language],
      price: '30 MAD',
      date: '2025-04-10',
      description: 'فيديو تجربة المنتج، إظهار الألوان المختلفة وإبراز مقاومته للماء',
      statusColor: 'bg-yellow-100 text-yellow-600',
    },
    {
      id: 3,
      title: 'حذاء رياضي جديد',
      creator: 'ليلى علي و FastFit Sportswear',
      type: translations.adTable.adTypes.workoutReview[language],
      status: translations.adTable.adStatuses.completed[language],
      price: '10 MAD',
      date: '2025-04-05',
      description: 'مراجعة تجربة أثناء التمرين، التركيز على الراحة والخفة أثناء الجري',
      statusColor: 'bg-green-100 text-green-600',
    },
  ];

  return (
    // Outer container prevents horizontal overflow and sets background & min height
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Center layout container: limits width and centers content */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-indigo-700 text-white md:min-h-screen p-4">
            <div className="mb-8 text-center">
              <h3 className="text-xl font-bold">{translations.dashboard[language]}</h3>
              <p className="text-indigo-200 text-sm">{translations.adminPanel[language]}</p>
            </div>

            <nav className="space-y-2">
              <Link
                href="/admin/dashboard"
                className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'overview'
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-800'
                  }`}
                onClick={() => setActiveTab('overview')}
              >
                <BarChart3 className="h-5 w-5" />
                <span>{translations.navigation.overview[language]}</span>
              </Link>

              <Link
                href="/admin/users"
                className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'users'
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-800'
                  }`}
                onClick={() => setActiveTab('users')}
              >
                <Users className="h-5 w-5" />
                <span>{translations.navigation.users[language]}</span>
              </Link>

              <Link
                href="/admin/ads"
                className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'ads'
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-800'
                  }`}
                onClick={() => setActiveTab('ads')}
              >
                <FileText className="h-5 w-5" />
                <span>{translations.navigation.ads[language]}</span>
              </Link>

              <Link
                href="/admin/orders"
                className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'orders'
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-800'
                  }`}
                onClick={() => setActiveTab('orders')}
              >
                <Package className="h-5 w-5" />
                <span>{translations.navigation.orders[language]}</span>
              </Link>

              <Link
                href="/admin/finance"
                className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'finance'
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-800'
                  }`}
                onClick={() => setActiveTab('finance')}
              >
                <DollarSign className="h-5 w-5" />
                <span>{translations.navigation.finance[language]}</span>
              </Link>

              <Link
                href="/admin/support"
                className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'support'
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-800'
                  }`}
                onClick={() => setActiveTab('support')}
              >
                <MessageSquare className="h-5 w-5" />
                <span>{translations.navigation.support[language]}</span>
              </Link>

              <Link
                href="/admin/settings"
                className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${activeTab === 'settings'
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-800'
                  }`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings className="h-5 w-5" />
                <span>{translations.navigation.settings[language]}</span>
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-6">{translations.dashboard[language]}</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {stats.map(stat => (
                <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                    </div>
                    <div className={`p-3 rounded-full ${stat.id === 'revenue'
                      ? 'bg-green-100 text-green-600'
                      : stat.id === 'campaigns'
                        ? 'bg-blue-100 text-blue-600'
                        : stat.id === 'ads'
                          ? 'bg-purple-100 text-purple-600'
                          : stat.id === 'users'
                            ? 'bg-indigo-100 text-indigo-600'
                            : 'bg-red-100 text-red-600'
                      }`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className={`mt-4 text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    <span className="flex items-center">
                      {stat.changeType === 'positive'
                        ? (<TrendingUp className="h-4 w-4 mr-1" />)
                        : (<TrendingUp className="h-4 w-4 mr-1 transform rotate-180" />)
                      }
                      {stat.change} {translations.timePeriod.sinceLastMonth[language]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">{translations.userStats[language]}</h2>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <div className="relative h-32 w-32">
                        <div className="absolute inset-0 rounded-full border-8 border-purple-100"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-purple-600 border-r-transparent border-b-transparent" style={{ transform: 'rotate(45deg)' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold">81%</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{translations.totalOrders[language]}</p>
                  </div>
                  <div className="text-center mx-8">
                    <div className="flex items-center justify-center">
                      <div className="relative h-32 w-32">
                        <div className="absolute inset-0 rounded-full border-8 border-green-100"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-green-600 border-r-transparent border-b-transparent border-l-transparent" style={{ transform: 'rotate(135deg)' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold">22%</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{translations.customerGrowth[language]}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <div className="relative h-32 w-32">
                        <div className="absolute inset-0 rounded-full border-8 border-blue-100"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-blue-600 border-t-transparent border-l-transparent" style={{ transform: 'rotate(45deg)' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold">62%</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{translations.totalRevenue[language]}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">{translations.orderStats[language]}</h2>
                <div className="h-64 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    {/* Simplified chart representation */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200"></div>
                    <div className="absolute bottom-0 left-0 h-40 w-full">
                      <div className="relative h-full w-full">
                        {/* Line chart representation */}
                        <svg viewBox="0 0 450 150" className="w-full h-full">
                          <path d="M0,150 C50,120 100,100 150,80 C200,60 250,90 300,70 C350,50 400,30 450,50" fill="none" stroke="#8884d8" strokeWidth="3" />
                          <circle cx="150" cy="80" r="5" fill="#8884d8" />
                          <circle cx="300" cy="70" r="5" fill="#8884d8" />
                        </svg>

                        {/* X-axis labels */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                          <span>الأحد</span>
                          <span>الإثنين</span>
                          <span>الثلاثاء</span>
                          <span>الأربعاء</span>
                          <span>الخميس</span>
                          <span>الجمعة</span>
                          <span>السبت</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Users */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">{translations.registeredUsers[language]}</h2>
                  <Link href="/admin/users" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                    {translations.viewAll[language]}
                  </Link>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.userTable.fullName[language]}</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.userTable.accountType[language]}</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.userTable.joinDate[language]}</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.userTable.email[language]}</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.userTable.changeStatus[language]}</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentUsers.map(user => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                              <Image
                                src={user.image}
                                alt={user.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">@{user.name.split(' ')[0].toLowerCase()}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2 rtl:space-x-reverse">
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-600">
                              {translations.userTable.statusActions.ban[language]}
                            </span>
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-600">
                              {translations.userTable.statusActions.activate[language]}
                            </span>
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
                              {translations.userTable.statusActions.suspend[language]}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link href={`/admin/users/${user.id}`} className="text-purple-600 hover:text-purple-900">
                            {translations.userTable.viewDetails[language]}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Ads */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">{translations.latestAds[language]}</h2>
                  <Link href="/admin/ads" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                    {translations.viewAll[language]}
                  </Link>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.adTable.product[language]}</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.adTable.creator[language]}</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.adTable.adType[language]}</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.adTable.price[language]}</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.adTable.status[language]}</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.adTable.ratings[language]}</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentAds.map(ad => (
                      <tr key={ad.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{ad.title}</div>
                          <div className="text-xs text-gray-500">{ad.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ad.creator}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ad.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">{ad.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${ad.statusColor}`}>
                            {ad.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link href={`/admin/ads/${ad.id}`} className="text-purple-600 hover:text-purple-900">
                            {translations.adTable.viewDetails[language]}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
