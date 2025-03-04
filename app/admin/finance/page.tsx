'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, ChevronDown, ArrowLeft, DollarSign, Download, Calendar, CreditCard } from 'lucide-react';

export default function AdminFinance() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  
  const transactions = [
    {
      id: 'TXN-00123',
      date: '12/03/2024',
      description: 'مراجعة منتج',
      user: {
        name: 'إيمان محمد',
        username: '@iman',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      type: 'دخل',
      amount: '$150',
      paymentMethod: 'PayPal',
      status: 'مدفوع',
      statusColor: 'bg-green-100 text-green-600',
      actions: 'عرض التفاصيل',
    },
    {
      id: 'TXN-00122',
      date: '11/03/2024',
      description: 'تأكيد الدفع',
      user: {
        name: 'علي أحمد',
        username: '@ali',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      type: 'دخل',
      amount: '$300',
      paymentMethod: 'Visa',
      status: 'قيد المعالجة',
      statusColor: 'bg-yellow-100 text-yellow-600',
      actions: 'تأكيد الدفع',
    },
    {
      id: 'TXN-00121',
      date: '10/03/2024',
      description: 'مراجعة',
      user: {
        name: 'ليلى',
        username: '@laila',
        image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      type: 'دخل',
      amount: '$200',
      paymentMethod: 'Stripe',
      status: 'مستلم',
      statusColor: 'bg-green-100 text-green-600',
      actions: 'مراجعة',
    },
    {
      id: 'TXN-00120',
      date: '09/03/2024',
      description: 'سحب أرباح',
      user: {
        name: 'دمي',
        username: '@demi',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      type: 'سحب',
      amount: '$450',
      paymentMethod: 'Bank Transfer',
      status: 'مكتمل',
      statusColor: 'bg-green-100 text-green-600',
      actions: 'عرض التفاصيل',
    },
    {
      id: 'TXN-00119',
      date: '08/03/2024',
      description: 'دفع مقابل مراجعة منتج',
      user: {
        name: 'Candice Wu',
        username: '@candice',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      type: 'دخل',
      amount: '$175',
      paymentMethod: 'PayPal',
      status: 'مدفوع',
      statusColor: 'bg-green-100 text-green-600',
      actions: 'عرض التفاصيل',
    },
    {
      id: 'TXN-00118',
      date: '07/03/2024',
      description: 'استرداد مبلغ',
      user: {
        name: 'Natali Craig',
        username: '@natali',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      type: 'استرداد',
      amount: '$120',
      paymentMethod: 'Visa',
      status: 'مكتمل',
      statusColor: 'bg-green-100 text-green-600',
      actions: 'عرض التفاصيل',
    },
    {
      id: 'TXN-00117',
      date: '06/03/2024',
      description: 'دفع مقابل مراجعة منتج',
      user: {
        name: 'Drew Cano',
        username: '@drew',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      },
      type: 'دخل',
      amount: '$250',
      paymentMethod: 'Stripe',
      status: 'مدفوع',
      statusColor: 'bg-green-100 text-green-600',
      actions: 'عرض التفاصيل',
    },
  ];
  
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          transaction.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transaction.user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || transaction.type === selectedType;
    const matchesStatus = selectedStatus === '' || transaction.status === selectedStatus;
    const matchesPaymentMethod = selectedPaymentMethod === '' || transaction.paymentMethod === selectedPaymentMethod;
    
    return matchesSearch && matchesType && matchesStatus && matchesPaymentMethod;
  });

  // Calculate statistics
  const totalIncome = transactions
    .filter(t => t.type === 'دخل')
    .reduce((sum, t) => sum + parseFloat(t.amount.replace('$', '')), 0);
  
  const totalWithdrawals = transactions
    .filter(t => t.type === 'سحب')
    .reduce((sum, t) => sum + parseFloat(t.amount.replace('$', '')), 0);
  
  const totalRefunds = transactions
    .filter(t => t.type === 'استرداد')
    .reduce((sum, t) => sum + parseFloat(t.amount.replace('$', '')), 0);

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
              <DollarSign className="h-5 w-5" />
              <span>لوحة التحكم الرئيسية</span>
            </Link>
            
            <Link 
              href="/admin/users" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <DollarSign className="h-5 w-5" />
              <span>إدارة المستخدمين</span>
            </Link>
            
            <Link 
              href="/admin/ads" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <DollarSign className="h-5 w-5" />
              <span>إدارة الإعلانات</span>
            </Link>
            
            <Link 
              href="/admin/orders" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <DollarSign className="h-5 w-5" />
              <span>إدارة الطلبات</span>
            </Link>
            
            <Link 
              href="/admin/finance" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right bg-indigo-800 text-white"
            >
              <DollarSign className="h-5 w-5" />
              <span>إدارة المعاملات المالية</span>
            </Link>
            
            <Link 
              href="/admin/support" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <DollarSign className="h-5 w-5" />
              <span>إدارة الشكاوى والدعم</span>
            </Link>
            
            <Link 
              href="/admin/settings" 
              className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg text-right text-indigo-100 hover:bg-indigo-800 transition-colors"
            >
              <DollarSign className="h-5 w-5" />
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
              <h1 className="text-2xl font-bold">إدارة المعاملات المالية</h1>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <button className="bg-purple-600 text-white flex items-center px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                <span>تصدير التقرير</span>
              </button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">إجمالي الدخل</p>
                  <h3 className="text-2xl font-bold">${totalIncome.toFixed(2)}</h3>
                </div>
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <DollarSign className="h-6 w-6" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">إجمالي السحوبات</p>
                  <h3 className="text-2xl font-bold">${totalWithdrawals.toFixed(2)}</h3>
                </div>
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <DollarSign className="h-6 w-6" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">إجمالي المبالغ المستردة</p>
                  <h3 className="text-2xl font-bold">${totalRefunds.toFixed(2)}</h3>
                </div>
                <div className="p-3 rounded-full bg-red-100 text-red-600">
                  <DollarSign className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Transactions Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                    placeholder="ابحث عن صانع محتوى أو الشركات..."
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
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>المستخدم</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>المبلغ</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>حالة الدفع</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      <span>التاريخ</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
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
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المبلغ</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">طريقة الدفع</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">حالة الدفع</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الإجراءات</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">رقم المعاملة</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">التاريخ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTransactions.map(transaction => (
                    <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                            <Image 
                              src={transaction.user.image} 
                              alt={transaction.user.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{transaction.user.name}</div>
                            <div className="text-sm text-gray-500">{transaction.user.username}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2 text-gray-400" />
                          {transaction.paymentMethod}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.statusColor}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-600 hover:text-purple-900 transition-colors">
                        <a href="#" className="cursor-pointer">{transaction.actions}</a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          {transaction.date}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                عرض <span className="font-medium">{filteredTransactions.length}</span> من <span className="font-medium">{transactions.length}</span> معاملة
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