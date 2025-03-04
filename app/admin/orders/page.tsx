'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, ChevronDown, ArrowLeft, Package } from 'lucide-react';

export default function AdminOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('');
  
  const orders = [
    {
      id: 1,
      title: 'سماعة لاسلكية جديدة',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      creator: 'علي',
      type: 'مراجعة تقنية',
      status: 'تم التأكيد',
      price: '10 MAD',
      date: '2025-04-15',
      description: 'مراجعة تقنية مدتها 60 ثانية، التركيز على جودة الصوت وعمر البطارية',
      statusColor: 'bg-green-100 text-green-600',
      brand: 'TechWorld Electronics',
    },
    {
      id: 2,
      title: 'أحمر شفاه جديد',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      creator: 'أحمد',
      type: 'فيديو تجربة المنتج',
      status: 'قيد التنفيذ',
      price: '30 MAD',
      date: '2025-04-10',
      description: 'فيديو تجربة المنتج، إظهار الألوان المختلفة وإبراز مقاومته للماء',
      statusColor: 'bg-yellow-100 text-yellow-600',
      brand: 'GlowBeauty Cosmetics',
    },
    {
      id: 3,
      title: 'حذاء رياضي جديد',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      creator: 'ليلى علي',
      type: 'مراجعة تجربة أثناء التمرين',
      status: 'مكتمل',
      price: '10 MAD',
      date: '2025-04-05',
      description: 'مراجعة تجربة أثناء التمرين، التركيز على الراحة والخفة أثناء الجري',
      statusColor: 'bg-green-100 text-green-600',
      brand: 'FastFit Sportswear',
    },
  ];
  
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          order.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || order.type === selectedCategory;
    const matchesStatus = selectedStatus === '' || order.status === selectedStatus;
    
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
              <Package className="h-5 w-5" />
              <span>لوحة التحكم الرئيسية</span>
            </Link>
            
            <Link 
              href="/admin/users" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800"
            >
              <Package className="h-5 w-5" />
              <span>إدارة المستخدمين</span>
            </Link>
            
            <Link 
              href="/admin/ads" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800"
            >
              <Package className="h-5 w-5" />
              <span>إدارة الإعلانات</span>
            </Link>
            
            <Link 
              href="/admin/orders" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right bg-indigo-800 text-white"
            >
              <Package className="h-5 w-5" />
              <span>إدارة الطلبات</span>
            </Link>
            
            <Link 
              href="/admin/finance" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800"
            >
              <Package className="h-5 w-5" />
              <span>إدارة المعاملات المالية</span>
            </Link>
            
            <Link 
              href="/admin/support" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800"
            >
              <Package className="h-5 w-5" />
              <span>إدارة الشكاوى والدعم</span>
            </Link>
            
            <Link 
              href="/admin/settings" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800"
            >
              <Package className="h-5 w-5" />
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
              <h1 className="text-2xl font-bold">إدارة الطلبات</h1>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="ابحث..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                      <span>نوع الإعلان</span>
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
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المنتج</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المؤثر</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">العلامة التجارية</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">نوع الإعلان</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">السعر</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">التاريخ</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map(order => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="relative h-10 w-10 rounded-md overflow-hidden mr-3">
                            <Image 
                              src={order.image} 
                              alt={order.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{order.title}</div>
                            <div className="text-xs text-gray-500 line-clamp-1">{order.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.creator}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.brand}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">{order.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex space-x-2 rtl:space-x-reverse">
                          <button className="px-3 py-1 bg-red-500 text-white rounded-md text-xs">
                            إلغاء
                          </button>
                          <button className="px-3 py-1 bg-green-500 text-white rounded-md text-xs">
                            الموافقة
                          </button>
                          <Link href={`/admin/orders/${order.id}`} className="px-3 py-1 bg-purple-600 text-white rounded-md text-xs">
                            عرض التفاصيل
                          </Link>
                        </div>
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
  );
}