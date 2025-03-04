'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Star, Filter, CheckCircle, X, Clock, ArrowLeft } from 'lucide-react';

export default function FindCreators() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'tech', name: 'التكنولوجيا' },
    { id: 'beauty', name: 'الجمال' },
    { id: 'fashion', name: 'الموضة' },
    { id: 'food', name: 'الطعام' },
    { id: 'fitness', name: 'اللياقة البدنية' },
    { id: 'gaming', name: 'الألعاب' },
  ];
  
  const creators = [
    {
      id: 1,
      name: 'أحمد محمد',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'tech',
      rating: 4.8,
      followers: '120K',
      price: '200$',
      description: 'متخصص في مراجعة المنتجات التقنية والإلكترونيات الحديثة',
      verified: true,
    },
    {
      id: 2,
      name: 'سارة أحمد',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'beauty',
      rating: 4.9,
      followers: '250K',
      price: '300$',
      description: 'خبيرة في منتجات العناية بالبشرة والمكياج',
      verified: true,
    },
    {
      id: 3,
      name: 'محمد علي',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'fitness',
      rating: 4.7,
      followers: '180K',
      price: '250$',
      description: 'مدرب لياقة بدنية ومتخصص في مراجعة منتجات الرياضة',
      verified: true,
    },
    {
      id: 4,
      name: 'نورا خالد',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'fashion',
      rating: 4.6,
      followers: '200K',
      price: '280$',
      description: 'مؤثرة في مجال الموضة والأزياء',
      verified: false,
    },
    {
      id: 5,
      name: 'خالد الناصري',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'food',
      rating: 4.5,
      followers: '150K',
      price: '220$',
      description: 'طاهي محترف ومراجع للمنتجات الغذائية',
      verified: true,
    },
    {
      id: 6,
      name: 'ليلى عمر',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      category: 'gaming',
      rating: 4.7,
      followers: '300K',
      price: '320$',
      description: 'لاعبة محترفة ومراجعة لأحدث الألعاب والأجهزة',
      verified: false,
    },
  ];
  
  const filteredCreators = creators.filter(creator => {
    const matchesSearch = creator.name.includes(searchTerm) || 
                          creator.description.includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || creator.category === selectedCategory;
    const price = parseInt(creator.price.replace('$', ''));
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-purple-100 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/brand/dashboard" className="flex items-center text-purple-600 hover:text-purple-700 mr-4">
              <ArrowLeft className="h-5 w-5 mr-1" />
              <span>العودة إلى لوحة التحكم</span>
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              ابحث عن المبدع المناسب لإعلانك وابدأ التعاون الآن!
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              تواصل مع مؤثرين محترفين لإنشاء مراجعات منتجات عالية الجودة لعلامتك التجارية
            </p>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              className="w-full py-4 px-6 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="ابحث عن صناع المحتوى حسب الاسم أو التخصص..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              <span>فلترة</span>
            </button>
          </div>
          
          {showFilters && (
            <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
              <h3 className="font-medium mb-4">خيارات متقدمة للبحث</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm text-gray-500 mb-2">نطاق السعر:</label>
                  <div className="px-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="500" 
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">${priceRange[0]}</span>
                      <span className="text-sm text-gray-500">${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-500 mb-2">عدد المتابعين:</label>
                  <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <option value="">أي عدد</option>
                    <option value="micro">صغير (10K-50K)</option>
                    <option value="mid">متوسط (50K-100K)</option>
                    <option value="macro">كبير (100K-500K)</option>
                    <option value="mega">ضخم (500K+)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-500 mb-2">التقييم:</label>
                  <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <option value="">أي تقييم</option>
                    <option value="4.5">4.5+ نجوم</option>
                    <option value="4">4+ نجوم</option>
                    <option value="3.5">3.5+ نجوم</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                  تطبيق الفلترة
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Creators List */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCreators.map(creator => (
              <div key={creator.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-[250px]">
                  <Image 
                    src={creator.image} 
                    alt={creator.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-purple-600 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    {creator.rating}
                  </div>
                  {creator.verified && (
                    <div className="absolute top-4 left-4 bg-green-100 px-3 py-1 rounded-full text-sm font-medium text-green-600 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      موثق
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{creator.name}</h3>
                    <span className="text-gray-500 text-sm">{creator.followers} متابع</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{creator.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 font-bold">{creator.price} / مراجعة</span>
                    <Link 
                      href={`/brand/creator/${creator.id}`}
                      className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                    >
                      عرض الملف الشخصي
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}