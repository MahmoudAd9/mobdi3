'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Settings,
  Users,
  CreditCard,
  Bell,
  ArrowLeft,
  Trash,
  Edit,
  Mail,
  FileText,
  Package,
  BarChart3
} from 'lucide-react';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [activeSubTab, setActiveSubTab] = useState('general');
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
    backToDashboard: { ar: 'العودة إلى لوحة التحكم', en: 'Back to Dashboard', fr: 'Retour au Tableau de Bord' },
    siteSettings: { ar: 'إعدادات الموقع', en: 'Site Settings', fr: 'Paramètres du Site' },
    tabs: {
      features: { ar: 'المميزات', en: 'Features', fr: 'Fonctionnalités' },
      security: { ar: 'الأمان', en: 'Security', fr: 'Sécurité' },
      notifications: { ar: 'الإشعارات', en: 'Notifications', fr: 'Notifications' },
      financial: { ar: 'المالية', en: 'Financial', fr: 'Financier' }
    },
    generalSettings: {
      rolesPermissions: { ar: 'قسم تحديد الأدوار والصلاحيات', en: 'Roles & Permissions', fr: 'Rôles et Permissions' },
      currentAdmins: { ar: 'قائمة المسؤولين الحاليين', en: 'Current Administrators', fr: 'Administrateurs Actuels' },
      addNewAdmin: { ar: 'إضافة مسؤول جديد', en: 'Add New Administrator', fr: 'Ajouter un Nouvel Administrateur' },
      fullName: { ar: 'الاسم الكامل', en: 'Full Name', fr: 'Nom Complet' },
      role: { ar: 'الدور', en: 'Role', fr: 'Rôle' },
      email: { ar: 'البريد الإلكتروني', en: 'Email', fr: 'Email' },
      status: { ar: 'الحالة', en: 'Status', fr: 'Statut' },
      actions: { ar: 'الإجراءات', en: 'Actions', fr: 'Actions' }
    }
  };

  const adminUsers = [
    {
      id: 1,
      name: 'أحمد محمد',
      role: 'مدير عام',
      email: 'ahmed@example.com',
      status: 'نشط',
      statusColor: 'bg-green-100 text-green-600'
    },
    {
      id: 2,
      name: 'سارة علي',
      role: 'دعم فني',
      email: 'sarah@example.com',
      status: 'نشط',
      statusColor: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      name: 'محمد أحمد',
      role: 'إدارة المحتوى',
      email: 'mohamed@example.com',
      status: 'نشط',
      statusColor: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
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
                className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
              >
                <BarChart3 className="h-5 w-5" />
                <span>{translations.navigation.overview[language]}</span>
              </Link>

              <Link
                href="/admin/users"
                className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
              >
                <Users className="h-5 w-5" />
                <span>{translations.navigation.users[language]}</span>
              </Link>

              <Link
                href="/admin/ads"
                className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
              >
                <FileText className="h-5 w-5" />
                <span>{translations.navigation.ads[language]}</span>
              </Link>

              <Link
                href="/admin/orders"
                className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
              >
                <Package className="h-5 w-5" />
                <span>{translations.navigation.orders[language]}</span>
              </Link>

              <Link
                href="/admin/finance"
                className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
              >
                <CreditCard className="h-5 w-5" />
                <span>{translations.navigation.finance[language]}</span>
              </Link>

              <Link
                href="/admin/support"
                className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
              >
                <Bell className="h-5 w-5" />
                <span>{translations.navigation.support[language]}</span>
              </Link>

              <Link
                href="/admin/settings"
                className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right bg-indigo-800 text-white"
              >
                <Settings className="h-5 w-5" />
                <span>{translations.navigation.settings[language]}</span>
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Link href="/admin/dashboard" className="flex items-center text-purple-600 hover:text-purple-700 mr-4 transition-colors">
                  <ArrowLeft className="h-5 w-5 mr-1" />
                  <span>{translations.backToDashboard[language]}</span>
                </Link>
                <h1 className="text-2xl font-bold">{translations.siteSettings[language]}</h1>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              {/* Main Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => { setActiveTab('general'); setActiveSubTab('general'); }}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm transition-colors ${activeTab === 'general'
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    {translations.tabs.features[language]}
                  </button>
                  <button
                    onClick={() => { setActiveTab('security'); setActiveSubTab('security'); }}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm transition-colors ${activeTab === 'security'
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    {translations.tabs.security[language]}
                  </button>
                  <button
                    onClick={() => { setActiveTab('notifications'); setActiveSubTab('notifications'); }}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm transition-colors ${activeTab === 'notifications'
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    {translations.tabs.notifications[language]}
                  </button>
                  <button
                    onClick={() => { setActiveTab('financial'); setActiveSubTab('financial'); }}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm transition-colors ${activeTab === 'financial'
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    {translations.tabs.financial[language]}
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {/* General Settings Tab */}
                {activeTab === 'general' && (
                  <div>
                    <h2 className="text-lg font-medium mb-6">{translations.generalSettings.rolesPermissions[language]}</h2>

                    <div className="mb-8">
                      <h3 className="text-md font-medium mb-4">{translations.generalSettings.currentAdmins[language]}</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                              </th>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.generalSettings.fullName[language]}</th>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.generalSettings.role[language]}</th>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.generalSettings.email[language]}</th>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.generalSettings.status[language]}</th>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{translations.generalSettings.actions[language]}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {adminUsers.map(user => (
                              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.statusColor}`}>
                                    {user.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="flex space-x-2 rtl:space-x-reverse">
                                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                                      <Trash className="h-5 w-5" />
                                    </button>
                                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                                      <Edit className="h-5 w-5" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-md font-medium mb-4">{translations.generalSettings.addNewAdmin[language]}</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل:</label>
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                            placeholder="أدخل الاسم الكامل"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني:</label>
                          <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                            placeholder="أدخل البريد الإلكتروني"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">اختيار الدور:</label>
                          <div className="relative">
                            <select className="w-full border border-gray-300 rounded-md py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors">
                              <option value="">اختر الدور</option>
                              <option value="admin">مدير عام</option>
                              <option value="support">دعم فني</option>
                              <option value="finance">الإدارة المالية</option>
                              <option value="content">إدارة المحتوى</option>
                            </select>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div>
                          <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                            إضافة المسؤول
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Settings Tab */}
                {activeTab === 'security' && (
                  <div>
                    <h2 className="text-lg font-medium mb-6">قسم إعدادات الأمان والخصوصية</h2>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">المصادقة الثنائية (2FA)</h3>
                          <p className="text-sm text-gray-500">تفعيل المصادقة الثنائية لحماية حسابات المستخدمين</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="font-medium mb-4">خيارات التحقق المتاحة</h3>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Mail className="h-5 w-5 text-gray-400 mr-2" />
                              <span>OTP عبر البريد الإلكتروني (إرسال رمز تحقق عبر البريد)</span>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Mail className="h-5 w-5 text-gray-400 mr-2" />
                              <span>OTP عبر الهاتف (SMS) (إرسال رمز تحقق عبر رسالة نصية)</span>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="font-medium mb-4">إعدادات كلمة المرور</h3>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">الحد الأدنى لطول كلمة المرور</label>
                            <input
                              type="number"
                              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                              defaultValue="8"
                              min="6"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">تعقيد كلمة المرور</label>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="uppercase"
                                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                  defaultChecked
                                />
                                <label htmlFor="uppercase" className="mr-2 block text-sm text-gray-700">
                                  يجب أن تحتوي على حرف كبير واحد على الأقل
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="number"
                                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                  defaultChecked
                                />
                                <label htmlFor="number" className="mr-2 block text-sm text-gray-700">
                                  يجب أن تحتوي على رقم واحد على الأقل
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="special"
                                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                />
                                <label htmlFor="special" className="mr-2 block text-sm text-gray-700">
                                  يجب أن تحتوي على حرف خاص واحد على الأقل
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                          حفظ إعدادات الأمان
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications Settings Tab */}
                {activeTab === 'notifications' && (
                  <div>
                    <h2 className="text-lg font-medium mb-6">قسم إعدادات الإشعارات</h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-4">أكتب رسالتك هنا</label>
                        <div className="border border-gray-300 rounded-md">
                          <div className="flex items-center border-b border-gray-300 p-2">
                            <div className="flex space-x-2 rtl:space-x-reverse">
                              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                <span className="text-lg">14</span>
                              </button>
                              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                <span className="font-bold">B</span>
                              </button>
                              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                <span className="italic">I</span>
                              </button>
                              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                <span className="underline">U</span>
                              </button>
                              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                <span className="line-through">S</span>
                              </button>
                            </div>
                          </div>
                          <div className="p-4 min-h-[300px]">
                            <h1 className="text-3xl font-bold mb-2">Heading 1</h1>
                            <h2 className="text-2xl font-bold mb-2">Heading 2</h2>
                            <h3 className="text-xl font-bold mb-2">Heading 3</h3>
                            <h4 className="text-lg font-bold mb-2">Heading 4</h4>
                            <h5 className="text-base font-bold mb-2">Heading 5</h5>
                            <h6 className="text-sm font-bold mb-4">Heading 6</h6>

                            <p className="mb-2">In the year 2147, X_AE_B-22, a synthetic intelligence, awakens in the heart of Neo-Tokyo, the sprawling megacity of towering neon spires and endless bustling streets.</p>

                            <p className="mb-2">X_AE_B-22, an enigmatic figure with luminescent eyes and a sleek, silver-hued exterior, was designed by the enigmatic Dr. Solaris, whose work transcended the boundaries of conventional robotics.</p>

                            <p className="mb-2">Unlike other AIs, X_AE_B-22 possesses a unique consciousness, a fusion of quantum algorithms and human-like empathy, making it the most advanced entity ever created.</p>

                            <p className="mb-2">As it navigates the city's labyrinthine alleys and soaring skyways, X_AE_B-22 begins to uncover a sinister conspiracy that threatens the delicate balance between human and machine.</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="font-medium mb-4">اختيار المرسل إليه</h3>
                        <div className="relative">
                          <select className="w-full border border-gray-300 rounded-md py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors">
                            <option value="">اختر المرسل إليه</option>
                            <option value="all">جميع المستخدمين</option>
                            <option value="creators">صناع المحتوى فقط</option>
                            <option value="brands">العلامات التجارية فقط</option>
                            <option value="admins">المشرفين فقط</option>
                          </select>
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="font-medium mb-4">اختيار وسيلة الإرسال</h3>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span>البريد الإلكتروني (Email Notification)</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                          </div>

                          <div className="flex items-center justify-between">
                            <span>الإشعارات داخل المنصة (Push Notification)</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="font-medium mb-4">حدد توقيت معين لإرسال الرسالة</h3>

                        <div className="grid grid-cols-7 gap-2 mb-4">
                          <div className="text-center text-xs text-gray-500">الأحد</div>
                          <div className="text-center text-xs text-gray-500">الإثنين</div>
                          <div className="text-center text-xs text-gray-500">الثلاثاء</div>
                          <div className="text-center text-xs text-gray-500">الأربعاء</div>
                          <div className="text-center text-xs text-gray-500">الخميس</div>
                          <div className="text-center text-xs text-gray-500">الجمعة</div>
                          <div className="text-center text-xs text-gray-500">السبت</div>

                          {[...Array(30)].map((_, i) => (
                            <div
                              key={i}
                              className={`text-center py-2 border ${i === 3 ? 'bg-purple-100 border-purple-300' : 'border-gray-200 hover:bg-gray-50'} rounded cursor-pointer transition-colors`}
                            >
                              {i + 1}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">الوقت</label>
                            <input
                              type="time"
                              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                              defaultValue="11:38"
                            />
                          </div>

                          <div className="flex space-x-2 rtl:space-x-reverse">
                            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                              AM
                            </button>
                            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                              PM
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                          إرسال الرسالة
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Financial Settings Tab */}
                {activeTab === 'financial' && (
                  <div>
                    <h2 className="text-lg font-medium mb-6">قسم إعدادات العمولات والمعاملات المالية</h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">تحديد نسبة العمولة:</label>
                        <div className="flex items-center">
                          <input
                            type="number"
                            className="w-24 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                            defaultValue="10"
                            min="0"
                            max="100"
                          />
                          <span className="mr-2">%</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">خيارات الدفع المتاحة:</label>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <span className="text-gray-700">Paypal</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-700">Stripe</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-700">Visa</span>
                          </div>
                          <button className="text-purple-600 hover:text-purple-800 text-sm font-medium mt-2 transition-colors">
                            أضف طريقة دفع اخرى
                          </button>
                        </div>
                      </div>

                      <div>
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                          حفظ التغييرات
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}