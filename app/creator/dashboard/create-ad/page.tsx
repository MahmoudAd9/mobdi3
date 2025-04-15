  'use client';

  import { useState } from 'react';
  import Image from 'next/image';
  import Link from 'next/link';
  import { Upload, X, Plus, DollarSign } from 'lucide-react';

  export default function CreateAd() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price1, setPrice1] = useState(111);
    const [price2, setPrice2] = useState(1);
    const [keywords, setKeywords] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const newFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...newFiles]);
      }
    };
    
    const removeFile = (index: number) => {
      setFiles(prev => prev.filter((_, i) => i !== index));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Submit form logic here
      alert('تم نشر الإعلان بنجاح!');
    };
    
    const categories = [
      { id: 'tech', name: 'التكنولوجيا' },
      { id: 'beauty', name: 'الجمال' },
      { id: 'fashion', name: 'الموضة' },
      { id: 'food', name: 'الطعام' },
      { id: 'fitness', name: 'اللياقة البدنية' },
      { id: 'gaming', name: 'الألعاب' },
    ];

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">أضف إعلانك وابدأ بجذب الشركات!</h1>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            {/* Title */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">العنوان: (يجب أن يكون جذابًا ومختصرًا.)</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="أدخل العنوان"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            {/* Media Upload */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">الإعلانات:</label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center">
                <input 
                  type="file" 
                  id="file-upload" 
                  className="hidden" 
                  multiple 
                  onChange={handleFileChange}
                />
                <label 
                  htmlFor="file-upload" 
                  className="cursor-pointer flex flex-col items-center justify-center"
                >
                  <Upload className="h-12 w-12 text-gray-400 mb-2" />
                  <span className="text-gray-500">حمل صورك و فيديوهاتك</span>
                </label>
              </div>
              
              {files.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {files.map((file, index) => (
                    <div key={index} className="relative">
                      <div className="h-24 bg-gray-100 rounded-md flex items-center justify-center">
                        <span className="text-sm text-gray-500">{file.name}</span>
                      </div>
                      <button 
                        type="button"
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        onClick={() => removeFile(index)}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Category */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">الفئة:</label>
              <div className="relative">
                <select 
                  className="w-full border border-gray-300 rounded-md py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>اختر نوع منتجك</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">أدخل معلومات عرضك :</label>
              <textarea 
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent h-32"
                placeholder="اكتب وصفًا تفصيليًا لمنتجك وما تبحث عنه في المراجعة..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">ثمن العرض:</label>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input 
                      type="range" 
                      min="1" 
                      max="500" 
                      value={price1}
                      onChange={(e) => setPrice1(parseInt(e.target.value))}
                      className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="absolute -top-6 left-0 right-0 flex justify-between">
                      <span className="text-xs text-gray-500">$1</span>
                      <span className="text-xs text-gray-500">$500</span>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <span className="text-lg font-bold">${price1}</span>
                  </div>
                  <button 
                    type="button"
                    className="mt-2 w-full border border-purple-600 text-purple-600 py-2 px-4 rounded-md hover:bg-purple-50 transition-colors"
                  >
                    أدخل عرضك الأول
                  </button>
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <input 
                      type="range" 
                      min="1" 
                      max="500" 
                      value={price2}
                      onChange={(e) => setPrice2(parseInt(e.target.value))}
                      className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="absolute -top-6 left-0 right-0 flex justify-between">
                      <span className="text-xs text-gray-500">$1</span>
                      <span className="text-xs text-gray-500">$500</span>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <span className="text-lg font-bold">${price2}</span>
                  </div>
                  <button 
                    type="button"
                    className="mt-2 w-full border border-purple-600 text-purple-600 py-2 px-4 rounded-md hover:bg-purple-50 transition-colors"
                  >
                    أدخل عرضك الثاني
                  </button>
                </div>
              </div>
            </div>
            
            {/* Keywords */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">الكلمات المفتاحية:</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="أدخل كلمات مفتاحية"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors"
            >
              انشر إعلاني وابدأ استقبال الطلبات
            </button>
          </form>
        </div>
      </div>
    );
  }