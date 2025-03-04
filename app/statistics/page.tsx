'use client';

import { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { TrendingUp, Users, DollarSign, Star, Package, Clock } from 'lucide-react';

export default function Statistics() {
  const [timeRange, setTimeRange] = useState('month');
  
  const stats = [
    { id: 'revenue', title: 'إجمالي الأرباح', value: '$52.6k', icon: DollarSign, change: '+12.5%', changeType: 'positive' },
    { id: 'projects', title: 'الطلبات الجديدة', value: '12', icon: Package, change: '+4', changeType: 'positive' },
    { id: 'pending', title: 'إعلانات قيد التنفيذ', value: '23', icon: Clock, change: '-2', changeType: 'negative' },
    { id: 'completed', title: 'الإعلانات المكتملة', value: '384', icon: Package, change: '+18', changeType: 'positive' },
    { id: 'clients', title: 'عدد العملاء المتعامل معهم', value: '790', icon: Users, change: '+25', changeType: 'positive' },
  ];
  
  const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
    { name: 'Aug', value: 4000 },
    { name: 'Sep', value: 3000 },
    { name: 'Oct', value: 5000 },
    { name: 'Nov', value: 2780 },
    { name: 'Dec', value: 1890 },
  ];
  
  const projectsData = [
    { name: 'Jan', completed: 20, pending: 10, new: 5 },
    { name: 'Feb', completed: 15, pending: 12, new: 8 },
    { name: 'Mar', completed: 25, pending: 15, new: 10 },
    { name: 'Apr', completed: 30, pending: 8, new: 12 },
    { name: 'May', completed: 22, pending: 10, new: 7 },
    { name: 'Jun', completed: 28, pending: 12, new: 9 },
    { name: 'Jul', completed: 32, pending: 14, new: 11 },
    { name: 'Aug', completed: 24, pending: 9, new: 6 },
    { name: 'Sep', completed: 29, pending: 11, new: 8 },
    { name: 'Oct', completed: 35, pending: 13, new: 10 },
    { name: 'Nov', completed: 27, pending: 10, new: 9 },
    { name: 'Dec', completed: 31, pending: 12, new: 11 },
  ];
  
  const categoryData = [
    { name: 'التكنولوجيا', value: 35 },
    { name: 'الجمال', value: 25 },
    { name: 'الموضة', value: 15 },
    { name: 'الطعام', value: 10 },
    { name: 'اللياقة البدنية', value: 10 },
    { name: 'الألعاب', value: 5 },
  ];
  
  const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57'];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">قسم الإحصائيات</h1>
          <div className="flex space-x-2 rtl:space-x-reverse">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === 'week' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setTimeRange('week')}
            >
              أسبوع
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === 'month' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setTimeRange('month')}
            >
              شهر
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeRange === 'year' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setTimeRange('year')}
            >
              سنة
            </button>
          </div>
        </div>
        
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
                  'bg-indigo-100 text-indigo-600'
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
        
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-6">إجمالي الأرباح</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={revenueData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} name="الأرباح" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Projects Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6">المشاريع</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={projectsData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" name="مكتمل" fill="#82ca9d" />
                  <Bar dataKey="pending" name="قيد التنفيذ" fill="#ffc658" />
                  <Bar dataKey="new" name="جديد" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Category Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6">توزيع الفئات</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}