'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, CheckCircle, ArrowLeft, MessageSquare, Instagram, Youtube, BookText as TikTok, Facebook, Twitter } from 'lucide-react';

export default function CreatorProfile({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('portfolio');
  
  // Mock data for a creator
  const creator = {
    id: params.id,
    name: 'أحمد محمد',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    category: 'tech',
    rating: 4.8,
    followers: '120K',
    price: '200$',
    description: 'متخصص في مراجعة المنتجات التقنية والإلكترونيات الحديثة. أقوم بإنشاء محتوى عالي الجودة يركز على تجربة المستخدم وتقييم المنتجات بشكل موضوعي وشامل.',
    verified: true,
    completedProjects: 45,
    languages: ['العربية', 'الإنجليزية'],
    location: 'المغرب',
    socialMedia: {
      instagram: 'ahmed_tech',
      youtube: 'AhmedTechReviews',
      tiktok: '@ahmed_tech',
    },
    portfolio: [
      {
        id: 1,
        title: 'مراجعة سماعة سوني WH-1000XM4',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        views: '250K',
        engagement: '15K',
        platform: 'youtube',
      },
      {
        id: 2,
        title: 'تجربة هاتف سامسونج جالاكسي S21',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        views: '180K',
        engagement: '12K',
        platform: 'youtube',
      },
      {
        id: 3,
        title: 'مقارنة بين أفضل اللابتوبات لعام 2025',
        image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        views: '320K',
        engagement: '22K',
        platform: 'youtube',
      },
      {
        id: 4,
        title: 'نصائح لاختيار أفضل كاميرا للمبتدئين',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        views: '150K',
        engagement: '8K',
        platform: 'instagram',
      },
    ],
    reviews: [
      {
        id: 1,
        brand: 'TechWorld Electronics',
        brandLogo: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        rating: 5,
        comment: 'تعاملنا مع أحمد كان ممتازًا. قدم مراجعة شاملة ومفصلة لمنتجنا مع التركيز على جميع المميزات التي طلبناها. المحتوى كان عالي الجودة والتفاعل كان رائعًا.',
        date: '15 مارس 2025',
      },
      {
        id: 2,
        brand: 'SmartGadgets',
        brandLogo: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        rating: 4.5,
        comment: 'أحمد محترف في عمله ويقدم محتوى عالي الجودة. استجاب بسرعة لجميع ملاحظاتنا وكان متعاونًا طوال فترة المشروع.',
        date: '2 فبراير 2025',
      },
      {
        id: 3,
        brand: 'FutureTech',
        brandLogo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        rating: 5,
        comment: 'تجربة ممتازة مع أحمد. المحتوى كان مميزًا والتفاعل من الجمهور كان أعلى من توقعاتنا. سنعمل معه مرة أخرى بالتأكيد.',
        date: '10 يناير 2025',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-[300px]">
        <Image 
          src={creator.coverImage} 
          alt="صورة الغلاف"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-6 left-6">
          <Link href="/brand/find-creators" className="flex items-center text-white bg-black/30 px-4 py-2 rounded-full hover:bg-black/50 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span>العودة</span>
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex flex-col items-center text-center mb-6 md:mb-0">
                <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image 
                    src={creator.image} 
                    alt={creator.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold mt-4">{creator.name}</h1>
                <div className="flex items-center mt-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{creator.rating}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">{creator.followers} متابع</span>
                </div>
                {creator.verified && (
                  <div className="mt-2 bg-green-100 px-3 py-1 rounded-full text-sm font-medium text-green-600 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    موثق
                  </div>
                )}
                
                <div className="mt-6 w-full">
                  <button className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition-colors mb-3">
                    تواصل مع المؤثر
                  </button>
                  <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-md font-medium hover:bg-purple-50 transition-colors">
                    إضافة إلى المفضلة
                  </button>
                </div>
                
                <div className="mt-6 w-full">
                  <h3 className="font-medium text-gray-900 mb-2">معلومات التواصل</h3>
                  <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                    {creator.socialMedia.instagram && (
                      <a href="#" className="text-gray-500 hover:text-purple-600">
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                    {creator.socialMedia.youtube && (
                      <a href="#" className="text-gray-500 hover:text-purple-600">
                        <Youtube className="h-5 w-5" />
                      </a>
                    )}
                    {creator.socialMedia.tiktok && (
                      <a href="#" className="text-gray-500 hover:text-purple-600">
                        <TikTok className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/4 md:pl-8">
                <div className="flex border-b border-gray-200">
                  <button 
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'about' 
                        ? 'text-purple-600 border-b-2 border-purple-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('about')}
                  >
                    نبذة عن المؤثر
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'portfolio' 
                        ? 'text-purple-600 border-b-2 border-purple-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('portfolio')}
                  >
                    أعمال سابقة
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'reviews' 
                        ? 'text-purple-600 border-b-2 border-purple-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('reviews')}
                  >
                    التقييمات
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'packages' 
                        ? 'text-purple-600 border-b-2 border-purple-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('packages')}
                  >
                    الباقات
                  </button>
                </div>
                
                <div className="py-6">
                  {/* About Tab */}
                  {activeTab === 'about' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">نبذة عن المؤثر</h2>
                      <p className="text-gray-600 mb-6">{creator.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium text-gray-900 mb-2">المشاريع المكتملة</h3>
                          <p className="text-2xl font-bold text-purple-600">{creator.completedProjects}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium text-gray-900 mb-2">متوسط التقييم</h3>
                          <div className="flex items-center">
                            <p className="text-2xl font-bold text-purple-600 mr-2">{creator.rating}/5</p>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map(star => (
                                <Star key={star} className={`h-5 w-5 ${star <= Math.floor(creator.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">التخصص</h3>
                          <p className="text-gray-600">{categories[creator.category]}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">اللغات</h3>
                          <p className="text-gray-600">{creator.languages.join(', ')}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">الموقع</h3>
                          <p className="text-gray-600">{creator.location}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Portfolio Tab */}
                  {activeTab === 'portfolio' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">أعمال سابقة</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {creator.portfolio.map(item => (
                          <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-48">
                              <Image 
                                src={item.image} 
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                                {item.platform === 'youtube' ? 'يوتيوب' : 'انستغرام'}
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium mb-2">{item.title}</h3>
                              <div className="flex justify-between text-sm text-gray-500">
                                <span>{item.views} مشاهدة</span>
                                <span>{item.engagement} تفاعل</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Reviews Tab */}
                  {activeTab === 'reviews' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">التقييمات</h2>
                      <div className="space-y-6">
                        {creator.reviews.map(review => (
                          <div key={review.id} className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                                <Image 
                                  src={review.brandLogo} 
                                  alt={review.brand}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium">{review.brand}</h3>
                                <div className="flex items-center">
                                  <div className="flex">
                                    {[1, 2, 3, 4, 5].map(star => (
                                      <Star key={star} className={`h-4 w-4 ${star <= Math.floor(review.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Packages Tab */}
                  {activeTab === 'packages' && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">الباقات المتاحة</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-purple-50 p-4 text-center">
                            <h3 className="font-bold text-lg">الباقة الأساسية</h3>
                            <p className="text-purple-600 text-2xl font-bold mt-2">$200</p>
                          </div>
                          <div className="p-6">
                            <ul className="space-y-3">
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>فيديو مراجعة أساسي (5-7 دقائق)</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>منشور على منصة واحدة</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>تعديل واحد مجاني</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>التسليم خلال 7 أيام</span>
                              </li>
                            </ul>
                            <button className="w-full bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-700 transition-colors mt-6">
                              اختيار الباقة
                            </button>
                          </div>
                        </div>
                        
                        <div className="border-2 border-purple-600 rounded-lg overflow-hidden relative">
                          <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-sm font-medium">الأكثر طلبًا</div>
                          <div className="bg-purple-100 p-4 text-center">
                            <h3 className="font-bold text-lg">الباقة المتقدمة</h3>
                            <p className="text-purple-600 text-2xl font-bold mt-2">$350</p>
                          </div>
                          <div className="p-6">
                            <ul className="space-y-3">
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>فيديو مراجعة متقدم (10-15 دقيقة)</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>منشور على منصتين</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>تعديلان مجانيان</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>التسليم خلال 5 أيام</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>تقرير أداء المحتوى</span>
                              </li>
                            </ul>
                            <button className="w-full bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-700 transition-colors mt-6">
                              اختيار الباقة
                            </button>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-purple-50 p-4 text-center">
                            <h3 className="font-bold text-lg">الباقة الاحترافية</h3>
                            <p className="text-purple-600 text-2xl font-bold mt-2">$500</p>
                          </div>
                          <div className="p-6">
                            <ul className="space-y-3">
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>فيديو مراجعة احترافي (15-20 دقيقة)</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>منشور على جميع المنصات</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>تعديلات غير محدودة</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>التسليم خلال 3 أيام</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>تقرير أداء المحتوى</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span>حقوق استخدام حصرية</span>
                              </li>
                            </ul>
                            <button className="w-full bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-700 transition-colors mt-6">
                              اختيار الباقة
                            </button>
                          </div>
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
    </div>
  );
}

// Helper for category names
const categories: Record<string, string> = {
  'tech': 'التكنولوجيا',
  'beauty': 'الجمال',
  'fashion': 'الموضة',
  'food': 'الطعام',
  'fitness': 'اللياقة البدنية',
  'gaming': 'الألعاب',
};