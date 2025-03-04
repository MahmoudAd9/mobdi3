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
  X 
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const stats = [
    { id: 'revenue', title: 'إجمالي الأرباح', value: '$52.6k', icon: DollarSign, change: '+12.5%', changeType: 'positive' },
    { id: 'projects', title: 'الطلبات الجديدة', value: '12', icon: Package, change: '+4', changeType: 'positive' },
    { id: 'pending', title: 'إعلانات قيد التنفيذ', value: '23', icon: Clock, change: '-2', changeType: 'negative' },
    { id: 'completed', title: 'الإعلانات المكتملة', value: '384', icon: CheckCircle, change: '+18', changeType: 'positive' },
    { id: 'clients', title: 'عدد العملاء المتعامل معهم', value: '790', icon: Users, change: '+25', changeType: 'positive' },
    { id: 'rating', title: 'متوسط التقييم', value: '4.5/5', icon: Star, change: '+0.2', changeType: 'positive' },
  ];
  
  const recentProjects = [
    {
      id: 1,
      title: 'سماعة لاسلكية جديدة',
      client: 'TechWorld Electronics',
      type: 'مراجعة تقنية',
      status: 'جديد',
      price: '$200',
      date: '2025-04-15',
      description: 'التركيز على جودة الصوت وعمر البطارية',
      statusColor: 'bg-blue-100 text-blue-600',
    },
    {
      id: 2,
      title: 'أحمر شفاه جديد',
      client: 'GlowBeauty Cosmetics',
      type: 'فيديو تجربة المنتج',
      status: 'قيد التنفيذ',
      price: '$300',
      date: '2025-04-10',
      description: 'إظهار الألوان المختلفة وإبراز مقاومته للماء',
      statusColor: 'bg-yellow-100 text-yellow-600',
    },
    {
      id: 3,
      title: 'حذاء رياضي جديد',
      client: 'FastFit Sportswear',
      type: 'مراجعة تجربة أثناء التمرين',
      status: 'مكتمل',
      price: '$250',
      date: '2025-04-05',
      description: 'التركيز على الراحة والخفة أثناء الجري',
      statusColor: 'bg-green-100 text-green-600',
    },
  ];
  
  const messages = [
    {
      id: 1,
      sender: {
        name: 'Christopher Campbell',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: 'Hey, How are you?',
      time: '10:30 AM',
      unread: true,
    },
    {
      id: 2,
      sender: {
        name: 'Houcine Ncib',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: 'What do you have planned this weekend?',
      time: 'Yesterday',
      unread: false,
    },
    {
      id: 3,
      sender: {
        name: 'Kelly Sikkema',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: 'How would you describe yourself in three words?',
      time: 'Apr 12',
      unread: false,
    },
    {
      id: 4,
      sender: {
        name: 'Ethan Hoover',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: 'How do you relieve stress?',
      time: 'Apr 10',
      unread: false,
    },
    {
      id: 5,
      sender: {
        name: 'Joseph Pearson',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      preview: "What's your sign?",
      time: 'Apr 8',
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white shadow-md md:min-h-screen p-4">
          <div className="mb-8 text-center">
            <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
                alt="صورة الملف الشخصي"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">أسماء علي</h3>
            <p className="text-gray-500 text-sm">asma@gmail.com</p>
          </div>
          
          <nav className="space-y-2">
            <button 
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${
                activeTab === 'overview' 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              <BarChart3 className="h-5 w-5" />
              <span>نظرة عامة</span>
            </button>
            
            <button 
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${
                activeTab === 'projects' 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('projects')}
            >
              <Package className="h-5 w-5" />
              <span>المشاريع</span>
            </button>
            
            <button 
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${
                activeTab === 'messages' 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('messages')}
            >
              <MessageSquare className="h-5 w-5" />
              <span>الرسائل</span>
            </button>
            
            <button 
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right ${
                activeTab === 'profile' 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              <Users className="h-5 w-5" />
              <span>الملف الشخصي</span>
            </button>
          </nav>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link 
              href="/dashboard/create-ad" 
              className="w-full bg-purple-600 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              <Package className="h-5 w-5" />
              <span>إنشاء إعلان جديد</span>
            </Link>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">نظرة عامة</h1>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {stats.map(stat => (
                  <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                        <h3 className="text-2xl font-bold">{stat.value}</h3>
                      </div>
                      <div className={`p-3 rounded-full ${
                        stat.id === 'revenue' ? 'bg-green-100 text-green-600' :
                        stat.id === 'projects' ? 'bg-blue-100 text-blue-600' :
                        stat.id === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                        stat.id === 'completed' ? 'bg-purple-100 text-purple-600' :
                        stat.id === 'clients' ? 'bg-indigo-100 text-indigo-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className={`mt-4 text-sm ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <span className="flex items-center">
                        {stat.changeType === 'positive' ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingUp className="h-4 w-4 mr-1 transform rotate-180" />
                        )}
                        {stat.change} منذ الشهر الماضي
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Recent Projects */}
              <h2 className="text-xl font-bold mb-4">أحدث المشاريع</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المشروع</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">العميل</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">النوع</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">السعر</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">التاريخ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentProjects.map(project => (
                        <tr key={project.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{project.title}</div>
                            <div className="text-xs text-gray-500">{project.description}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.client}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">{project.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${project.statusColor}`}>
                              {project.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.date}</td>
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
              <h1 className="text-2xl font-bold mb-6">الرسائل</h1>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`flex items-center p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer ${
                      message.unread ? 'bg-purple-50' : ''
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
              <h1 className="text-2xl font-bold mb-6">الملف الشخصي</h1>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mb-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="relative h-48 w-48 rounded-full overflow-hidden mx-auto">
                      <Image 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
                        alt="صورة الملف الشخصي"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h2 className="text-xl font-bold">أسماء علي</h2>
                      <p className="text-gray-500">asma@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 md:pr-8">
                    <h3 className="text-lg font-bold mb-4">المعلومات الشخصية</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500">الاسم الكامل:</p>
                        <p className="font-medium">أسماء علي</p>
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
                    </div>
                    
                    <h3 className="text-lg font-bold mb-4">مجموعات التقييمات</h3>
                    <div className="flex items-center mb-6">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4].map(star => (
                          <Star key={star} className="h-5 w-5 fill-current" />
                        ))}
                        <Star className="h-5 w-5" />
                      </div>
                      <span className="text-gray-500 ml-2">4/5</span>
                    </div>
                    
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors">
                      تعديل الملف الشخصي
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                <h3 className="text-lg font-bold mb-4">إعدادات المستخدم</h3>
                
                <div className="mb-6">
                  <h4 className="text-md font-medium mb-2">التفاصيل</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">الاسم الكامل:</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        defaultValue="أسماء علي"
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
                          defaultValue="969 123 456"
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