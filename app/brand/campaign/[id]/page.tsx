'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, DollarSign, Users, Package, Clock, CheckCircle, X, MessageSquare, Edit, Trash2, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Loading from '@/components/Loading';

export default function CampaignDetails({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [campaign, setCampaign] = useState<any>(null);

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCampaign({
          id: params.id,
          title: 'حملة تسويقية للمنتجات الجديدة',
          status: 'active',
          startDate: '2024-04-01',
          endDate: '2024-04-30',
          budget: '5000$',
          description: 'حملة تسويقية للمنتجات الجديدة في السوق المحلي',
          creators: [
            {
              id: 1,
              name: 'أحمد محمد',
              image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
              status: 'active',
              progress: 70,
              rating: 4.8,
              deadline: '2025-04-25',
            },
            {
              id: 2,
              name: 'سارة أحمد',
              image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
              status: 'pending',
              progress: 30,
              rating: 4.9,
              deadline: '2025-04-28',
            },
            {
              id: 3,
              name: 'محمد علي',
              image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
              status: 'completed',
              progress: 100,
              rating: 4.7,
              deadline: '2025-04-22',
            },
          ]
        });
      } catch (error) {
        console.error('Error fetching campaign data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCampaignData();
  }, [params.id]);

  if (isLoading) {
    return <Loading size="lg" />;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-600';
      case 'pending':
        return 'bg-yellow-100 text-yellow-600';
      case 'completed':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'نشط';
      case 'pending':
        return 'قيد التنفيذ';
      case 'completed':
        return 'مكتمل';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/brand/campaigns" className="flex items-center text-purple-600 hover:text-purple-700 mr-4">
              <ArrowLeft className="h-5 w-5 mr-1" />
              <span>العودة إلى الحملات</span>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="relative h-[300px]">
              <Image 
                src={campaign.image} 
                alt={campaign.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-bold">{campaign.title}</h1>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(campaign.status)}`}>
                    {getStatusText(campaign.status)}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">تاريخ البدء</p>
                    <p className="font-medium">{campaign.startDate}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">تاريخ الانتهاء</p>
                    <p className="font-medium">{campaign.endDate}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-purple-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">الميزانية</p>
                    <p className="font-medium">{campaign.budget}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">المؤثرين</p>
                    <p className="font-medium">{campaign.creators.length}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-purple-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">الطلبات</p>
                    <p className="font-medium">{campaign.applications.length}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex border-b border-gray-200 mb-6">
                <button 
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'overview' 
                      ? 'text-purple-600 border-b-2 border-purple-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  نظرة عامة
                </button>
                <button 
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'creators' 
                      ? 'text-purple-600 border-b-2 border-purple-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('creators')}
                >
                  المؤثرين
                </button>
                <button 
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'applications' 
                      ? 'text-purple-600 border-b-2 border-purple-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('applications')}
                >
                  الطلبات
                </button>
              </div>
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">وصف الحملة</h2>
                    <p className="text-gray-600">{campaign.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">المتطلبات</h2>
                    <ul className="space-y-2">
                      {campaign.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-end gap-4">
                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                      <Edit className="h-5 w-5 mr-1" />
                      <span>تعديل الحملة</span>
                    </button>
                    <button className="flex items-center text-red-600 hover:text-red-800">
                      <Trash2 className="h-5 w-5 mr-1" />
                      <span>حذف الحملة</span>
                    </button>
                  </div>
                </div>
              )}
              
              {/* Creators Tab */}
              {activeTab === 'creators' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">المؤثرين المشاركين في الحملة</h2>
                  <div className="space-y-6">
                    {campaign.creators.map(creator => (
                      <div key={creator.id} className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex items-center mb-4 md:mb-0">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                              <Image 
                                src={creator.image} 
                                alt={creator.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{creator.name}</h3>
                              <div className="flex items-center">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map(star => (
                                    <Star key={star} className={`h-4 w-4 ${star <= Math.floor(creator.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500 ml-2">{creator.rating}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex items-center">
                              <Clock className="h-5 w-5 text-gray-500 mr-2" />
                              <span className="text-sm text-gray-500">الموعد النهائي: {creator.deadline}</span>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(creator.status)}`}>
                              {getStatusText(creator.status)}
                            </div>
                            <button className="flex items-center text-purple-600 hover:text-purple-800">
                              <MessageSquare className="h-5 w-5 mr-1" />
                              <span>مراسلة</span>
                            </button>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">التقدم: {creator.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-purple-600 h-2.5 rounded-full" 
                              style={{ width: `${creator.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Applications Tab */}
              {activeTab === 'applications' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">طلبات المشاركة في الحملة</h2>
                  <div className="space-y-6">
                    {campaign.applications.map(application => (
                      <div key={application.id} className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex items-center mb-4 md:mb-0">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                              <Image 
                                src={application.creator.image} 
                                alt={application.creator.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{application.creator.name}</h3>
                              <div className="flex items-center">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map(star => (
                                    <Star key={star} className={`h-4 w-4 ${star <= Math.floor(application.creator.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500 ml-2">{application.creator.rating}</span>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-sm text-gray-500">{application.creator.followers} متابع</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="text-purple-600 font-bold">{application.price}</div>
                            <span className="text-sm text-gray-500">{application.date}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <p className="text-gray-600 mb-4">{application.proposal}</p>
                          <div className="flex justify-end gap-2">
                            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors">
                              رفض
                            </button>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                              قبول
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}