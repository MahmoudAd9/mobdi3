'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, ChevronDown, ArrowLeft, Users } from 'lucide-react';

export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const users = [
    {
      id: 1,
      name: 'إيمان محمد',
      username: '@iman',
      email: 'olivia@untitledui.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: 'صانع محتوى',
      country: 'المغرب',
      status: 'نشط',
      date: '01/01/2025',
      statusColor: 'bg-green-100 text-green-600',
    },
    {
      id: 2,
      name: 'علي أحمد',
      username: '@ali',
      email: 'phoenix@untitledui.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: 'صانع محتوى',
      country: 'الأردن',
      status: 'موقوف',
      date: '01/01/2025',
      statusColor: 'bg-yellow-100 text-yellow-600',
    },
    {
      id: 3,
      name: 'ليلى',
      username: '@laila',
      email: 'lana@untitledui.com',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: 'شركة',
      country: 'الأردن',
      status: 'نشط',
      date: '01/01/2025',
      statusColor: 'bg-green-100 text-green-600',
    },
    {
      id: 4,
      name: 'دمي',
      username: '@demi',
      email: 'demi@untitledui.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: 'شركة',
      country: 'المغرب',
      status: 'محظور',
      date: '01/01/2025',
      statusColor: 'bg-red-100 text-red-600',
    },
    {
      id: 5,
      name: 'Candice Wu',
      username: '@candice',
      email: 'candice@untitledui.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: 'صانع محتوى',
      country: 'المغرب',
      status: 'موقوف',
      date: '01/01/2025',
      statusColor: 'bg-yellow-100 text-yellow-600',
    },
    {
      id: 6,
      name: 'Natali Craig',
      username: '@natali',
      email: 'natali@untitledui.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: 'صانع محتوى',
      country: 'تونس',
      status: 'نشط',
      date: '01/01/2025',
      statusColor: 'bg-green-100 text-green-600',
    },
    {
      id: 7,
      name: 'Drew Cano',
      username: '@drew',
      email: 'drew@untitledui.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      type: 'شركة',
      country: 'تونس',
      status: 'محظور',
      date: '01/01/2025',
      statusColor: 'bg-red-100 text-red-600',
    },
  ];
  
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.username.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || user.type === selectedType;
    const matchesStatus = selectedStatus === '' || user.status === selectedStatus;
    const matchesCountry = selectedCountry === '' || user.country === selectedCountry;
    
    return matchesSearch && matchesType && matchesStatus && matchesCountry;
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
              <Users className="h-5 w-5" />
              <span>لوحة التحكم الرئيسية</span>
            </Link>
            
            <Link 
              href="/admin/users" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right bg-indigo-800 text-white"
            >
              <Users className="h-5 w-5" />
              <span>إدارة المستخدمين</span>
            </Link>
            
            <Link 
              href="/admin/ads" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>إدارة الإعلانات</span>
            </Link>
            
            <Link 
              href="/admin/orders" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>إدارة الطلبات</span>
            </Link>
            
            <Link 
              href="/admin/finance" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>إدارة المعاملات المالية</span>
            </Link>
            
            <Link 
              href="/admin/support" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>إدارة الشكاوى والدعم</span>
            </Link>
            
            <Link 
              href="/admin/settings" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <Users className="h-5 w-5" />
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
              <h1 className="text-2xl font-bold">إدارة المستخدمين</h1>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                إضافة مستخدم جديد
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
                    placeholder="ابحث عن المستخدمين..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>البلد</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>حالة الحساب</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>تاريخ الانضمام</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>نوع المستخدم</span>
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
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الاسم الكامل</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">نوع الحساب</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاريخ الانضمام</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">البريد الإلكتروني</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تغيير الحالة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
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
                            <div className="text-sm text-gray-500">{user.username}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2 rtl:space-x-reverse">
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-600 transition-colors hover:bg-red-200 cursor-pointer">
                            حظر
                          </span>
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-600 transition-colors hover:bg-green-200 cursor-pointer">
                            تفعيل
                          </span>
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600 transition-colors hover:bg-yellow-200 cursor-pointer">
                            توقيف
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/admin/users/${user.id}`} className="text-purple-600 hover:text-purple-900 transition-colors">
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
                عرض <span className="font-medium">100</span> مستخدم
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