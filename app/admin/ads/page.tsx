'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, ChevronDown, ArrowLeft, FileText } from 'lucide-react';

export default function AdminAds() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  
  const ads = [
    {
      id: 1,
      title: 'مبدع إعلاني محترف لإنشاء فيديوهات مذهلة',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      creator: 'علي',
      type: 'مراجعة تقنية',
      status: 'نشط',
      price: '10 MAD',
      date: '2025-04-15',
      description: 'مراجعة تقنية مدتها 60 ثانية، التركيز على جودة الصوت وعمر البطارية',
      statusColor: 'bg-green-100 text-green-600',
      rating: 4.5,
      deliveryTime: '1 يوم',
    },
    {
      id: 2,
      title: 'صانع محتوى مميز - احصل على إعلان احترافي لمنتجك',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      creator: 'أحمد',
      type: 'فيديو تجربة المنتج',
      status: 'قيد التنفيذ',
      price: '30 MAD',
      date: '2025-04-10',
      description: 'فيديو تجربة المنتج، إظهار الألوان المختلفة وإبراز مقاومته للماء',
      statusColor: 'bg-yellow-100 text-yellow-600',
      rating: 4.5,
      deliveryTime: '1 يوم',
    },
    {
      id: 3,
      title: 'مؤثر رقمي جاهز لمراجعة منتجك بأسلوب احترافي',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      creator: 'ليلى علي',
      type: 'مراجعة تجربة أثناء التمرين',
      status: 'مكتمل',
      price: '10 MAD',
      date: '2025-04-05',
      description: 'مراجعة تجربة أثناء التمرين، التركيز على الراحة والخفة أثناء الجري',
      statusColor: 'bg-green-100 text-green-600',
      rating: 4.5,
      deliveryTime: '1 يوم',
    },
    {
      id: 4,
      title: 'مبدع إعلاني محترف لإنشاء فيديوهات مذهلة',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      creator: 'محمد',
      type: 'مراجعة تقنية',
      status: 'نشط',
      price: '10 MAD',
      date: '2025-04-15',
      description: 'مراجعة تقنية مدتها 60 ثانية، التركيز على جودة الصوت وعمر البطارية',
      statusColor: 'bg-green-100 text-green-600',
      rating: 4.5,
      deliveryTime: '1 يوم',
    },
  ];
  
  const filteredAds = ads.filter(ad => {
    const matchesSearch = ad.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          ad.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || ad.type === selectedCategory;
    const matchesStatus = selectedStatus === '' || ad.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
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
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800"
            >
              <FileText className="h-5 w-5" />
              <span>لوحة التحكم الرئيسية</span>
            </Link>
            
            <Link 
              href="/admin/users" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800"
            >
              <FileText className="h-5 w-5" />
              <span>إدارة المستخدمين</span>
            </Link>
            
            <Link 
              href="/admin/ads" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right bg-indigo-800 text-white"
            >
              <FileText className="h-5 w-5" />
              <span>إدارة الإعلانات</span>
            </Link>
            
            <Link 
              href="/admin/orders" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800"
            >
              <FileText className="h-5 w-5" />
              <span>إدارة الطلبات</span>
            </Link>
            
            <Link 
              href="/admin/finance" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800"
            >
              <FileText className="h-5 w-5" />
              <span>إدارة المعاملات المالية</span>
            </Link>
            
            <Link 
              href="/admin/support" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800"
            >
              <FileText className="h-5 w-5" />
              <span>إدارة الشكاوى والدعم</span>
            </Link>
            
            <Link 
              href="/admin/settings" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800"
            >
              <FileText className="h-5 w-5" />
              <span>إعدادات الموقع</span>
            </Link>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Link href="/admin/dashboard" className="flex items-center text-purple-600 hover:text-purple-700 mr-4">
                <ArrowLeft className="h-5 w-5 mr-1" />
                <span>العودة إلى لوحة التحكم</span>
              </Link>
              <h1 className="text-2xl font-bold">إدارة الإعلانات</h1>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="ابحث عن صانع محتوى... (تجميل، طعام...)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                      <span>البلد</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                      <span>مدة التسليم</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                      <span>الميزانية</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                      <span>تقييمات البائع</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                      <span>الفئات</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown menu would go here */}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
              {filteredAds.map(ad => (
                <div key={ad.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image 
                      src={ad.image} 
                      alt={ad.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-1">{ad.title}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <svg key={star} className={`h-4 w-4 ${star <= Math.floor(ad.rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-1">{ad.rating}</span>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${ad.statusColor}`}>{ad.status}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">مدة التسليم: {ad.deliveryTime}</span>
                      <span className="font-bold text-purple-600">{ad.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <button className="px-3 py-1 bg-red-500 text-white rounded-md text-sm">
                        الرفض
                      </button>
                      <button className="px-3 py-1 bg-green-500 text-white rounded-md text-sm">
                        الموافقة
                      </button>
                      <Link href={`/admin/ads/${ad.id}`} className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm">
                        اقرأ المزيد
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}