'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, ChevronDown, ArrowLeft, MessageSquare, AlertTriangle } from 'lucide-react';

export default function AdminSupport() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const tickets = [
    {
      id: 1,
      title: 'مشكلة في الدفع',
      user: {
        name: 'أحمد محمد',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        type: 'صانع محتوى',
      },
      status: 'مفتوح',
      priority: 'عالي',
      category: 'مالي',
      date: '15 أبريل 2025',
      lastUpdate: '15 أبريل 2025',
      description: 'لم أستلم المبلغ المستحق بعد إكمال المشروع',
      statusColor: 'bg-green-100 text-green-600',
      priorityColor: 'bg-red-100 text-red-600',
    },
    {
      id: 2,
      title: 'استفسار حول العمولة',
      user: {
        name: 'سارة أحمد',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        type: 'صانع محتوى',
      },
      status: 'قيد المعالجة',
      priority: 'متوسط',
      category: 'مالي',
      date: '12 أبريل 2025',
      lastUpdate: '13 أبريل 2025',
      description: 'أريد معرفة كيفية حساب العمولة على المشاريع',
      statusColor: 'bg-yellow-100 text-yellow-600',
      priorityColor: 'bg-yellow-100 text-yellow-600',
    },
    {
      id: 3,
      title: 'مشكلة في تحميل الصور',
      user: {
        name: 'محمد علي',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        type: 'صانع محتوى',
      },
      status: 'مغلق',
      priority: 'منخفض',
      category: 'تقني',
      date: '10 أبريل 2025',
      lastUpdate: '11 أبريل 2025',
      description: 'لا أستطيع تحميل الصور على ملفي الشخصي',
      statusColor: 'bg-gray-100 text-gray-600',
      priorityColor: 'bg-blue-100 text-blue-600',
    },
    {
      id: 4,
      title: 'شكوى ضد مؤثر',
      user: {
        name: 'TechWorld Electronics',
        image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        type: 'شركة',
      },
      status: 'مفتوح',
      priority: 'عالي',
      category: 'شكوى',
      date: '8 أبريل 2025',
      lastUpdate: '9 أبريل 2025',
      description: 'المؤثر لم يلتزم بالمواعيد المتفق عليها',
      statusColor: 'bg-green-100 text-green-600',
      priorityColor: 'bg-red-100 text-red-600',
    },
    {
      id: 5,
      title: 'طلب استرداد المبلغ',
      user: {
        name: 'GlowBeauty Cosmetics',
        image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        type: 'شركة',
      },
      status: 'قيد المعالجة',
      priority: 'عالي',
      category: 'مالي',
      date: '5 أبريل 2025',
      lastUpdate: '6 أبريل 2025',
      description: 'نريد استرداد المبلغ لأن المحتوى لم يكن بالجودة المطلوبة',
      statusColor: 'bg-yellow-100 text-yellow-600',
      priorityColor: 'bg-red-100 text-red-600',
    },
  ];
  
  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ticket.user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === '' || ticket.status === selectedStatus;
    const matchesPriority = selectedPriority === '' || ticket.priority === selectedPriority;
    const matchesCategory = selectedCategory === '' || ticket.category === selectedCategory;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-indigo-700 text-white md:min-h-screen p-4">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold">لوحة التحكم الرئيسية</h3>
            <p className="text-indigo-200 text-sm">مدير النظام</p>
          </div>
          
          <nav className="space-y-2">
            <Link 
              href="/admin/dashboard" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <AlertTriangle className="h-5 w-5" />
              <span>لوحة التحكم الرئيسية</span>
            </Link>
            
            <Link 
              href="/admin/users" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <AlertTriangle className="h-5 w-5" />
              <span>إدارة المستخدمين</span>
            </Link>
            
            <Link 
              href="/admin/ads" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <AlertTriangle className="h-5 w-5" />
              <span>إدارة الإعلانات</span>
            </Link>
            
            <Link 
              href="/admin/orders" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <AlertTriangle className="h-5 w-5" />
              <span>إدارة الطلبات</span>
            </Link>
            
            <Link 
              href="/admin/finance" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <AlertTriangle className="h-5 w-5" />
              <span>إدارة المعاملات المالية</span>
            </Link>
            
            <Link 
              href="/admin/support" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right bg-indigo-800 text-white"
            >
              <AlertTriangle className="h-5 w-5" />
              <span>إدارة الشكاوى والدعم</span>
            </Link>
            
            <Link 
              href="/admin/settings" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <AlertTriangle className="h-5 w-5" />
              <span>إعدادات الموقع</span>
            </Link>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Link href="/admin/dashboard" className="flex items-center text-purple-600 hover:text-purple-700 mr-4 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                <span>العودة إلى لوحة التحكم</span>
              </Link>
              <h1 className="text-2xl font-bold">إدارة الشكاوى والدعم</h1>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                إنشاء تذكرة جديدة
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                    placeholder="ابحث عن التذاكر..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>الحالة</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>الأولوية</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>الفئة</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">التذكرة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المستخدم</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الفئة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الأولوية</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاريخ الإنشاء</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">آخر تحديث</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTickets.map(ticket => (
                    <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <MessageSquare className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{ticket.title}</div>
                            <div className="text-xs text-gray-500 line-clamp-1">{ticket.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                            <Image 
                              src={ticket.user.image} 
                              alt={ticket.user.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{ticket.user.name}</div>
                            <div className="text-xs text-gray-500">{ticket.user.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${ticket.priorityColor}`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${ticket.statusColor}`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.lastUpdate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/admin/support/${ticket.id}`} className="text-purple-600 hover:text-purple-900 transition-colors">
                          عرض التفاصيل
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                عرض <span className="font-medium">5</span> من <span className="font-medium">12</span> تذكرة
              </div>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  السابق
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  التالي
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}