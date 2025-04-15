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
    X,
    Settings,
    AlertTriangle,
    FileText,
    Globe
} from 'lucide-react';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = [
        { id: 'revenue', title: 'Total des Transactions Financières', value: '$52.6k', icon: DollarSign, change: '+12.5%', changeType: 'positive' },
        { id: 'campaigns', title: 'Commandes Ouvertes et Complétées', value: '11k', icon: Package, change: '+4%', changeType: 'positive' },
        { id: 'ads', title: 'Publicités Publiées', value: '50k', icon: FileText, change: '+18%', changeType: 'positive' },
        { id: 'users', title: 'Créateurs et Entreprises Inscrits', value: '100k', icon: Users, change: '+25%', changeType: 'positive' },
        { id: 'complaints', title: 'Plaintes en Attente', value: '52', icon: AlertTriangle, change: '-5%', changeType: 'negative' },
    ];

    const recentUsers = [
        {
            id: 1,
            name: 'Iman Mohammed',
            email: 'olivia@untitledui.com',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
            type: 'Créateur de Contenu',
            country: 'Maroc',
            status: 'Actif',
            date: '01/01/2025',
            statusColor: 'bg-green-100 text-green-600',
        },
        {
            id: 2,
            name: 'Ali Ahmed',
            email: 'phoenix@untitledui.com',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
            type: 'Créateur de Contenu',
            country: 'Jordanie',
            status: 'Suspendu',
            date: '01/01/2025',
            statusColor: 'bg-yellow-100 text-yellow-600',
        },
        {
            id: 3,
            name: 'Layla',
            email: 'lana@untitledui.com',
            image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
            type: 'Entreprise',
            country: 'Jordanie',
            status: 'Actif',
            date: '01/01/2025',
            statusColor: 'bg-green-100 text-green-600',
        },
        {
            id: 4,
            name: 'Demi',
            email: 'demi@untitledui.com',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
            type: 'Entreprise',
            country: 'Maroc',
            status: 'Bloqué',
            date: '01/01/2025',
            statusColor: 'bg-red-100 text-red-600',
        },
        {
            id: 5,
            name: 'Candice Wu',
            email: 'candice@untitledui.com',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
            type: 'Créateur de Contenu',
            country: 'Maroc',
            status: 'Suspendu',
            date: '01/01/2025',
            statusColor: 'bg-yellow-100 text-yellow-600',
        },
    ];

    const recentAds = [
        {
            id: 1,
            title: 'Nouveaux Écouteurs Sans Fil',
            creator: 'Ali',
            type: 'Évaluation Technique',
            status: 'Confirmé',
            price: '10 MAD',
            date: '2025-04-15',
            description: 'Évaluation technique de 60 secondes, focus sur la qualité sonore et la durée de la batterie',
            statusColor: 'bg-green-100 text-green-600',
        },
        {
            id: 2,
            title: 'Nouveau Rouge à Lèvres',
            creator: 'Ahmed',
            type: 'Vidéo d\'Essai de Produit',
            status: 'En Cours',
            price: '30 MAD',
            date: '2025-04-10',
            description: 'Vidéo d\'essai de produit, présentation des différentes couleurs et mise en avant de la résistance à l\'eau',
            statusColor: 'bg-yellow-100 text-yellow-600',
        },
        {
            id: 3,
            title: 'Nouvelles Chaussures de Sport',
            creator: 'Layla Ali & FastFit Sportswear',
            type: 'Évaluation Expérience d\'Entraînement',
            status: 'Terminé',
            price: '10 MAD',
            date: '2025-04-05',
            description: 'Évaluation d\'expérience d\'entraînement, axée sur le confort et la légèreté pendant la course',
            statusColor: 'bg-green-100 text-green-600',
        },
    ];

    return (
        // Outer container prevents horizontal overflow and sets background & min height
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            {/* Language Switcher */}
            <div className="bg-white p-2 shadow-sm">
                <div className="max-w-screen-xl mx-auto flex justify-end items-center px-4">
                    <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-gray-600" />
                        <Link href="/admin/dashboard" className="text-sm font-medium text-gray-600 hover:text-indigo-600">العربية</Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/admin/dashboard/page.en" className="text-sm font-medium text-gray-600 hover:text-indigo-600">English</Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/admin/dashboard/page.fr" className="text-sm font-medium text-indigo-600">Français</Link>
                    </div>
                </div>
            </div>

            {/* Center layout container: limits width and centers content */}
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    {/* Sidebar */}
                    <div className="w-full md:w-64 bg-indigo-700 text-white md:min-h-screen p-4">
                        <div className="mb-8 text-center">
                            <h3 className="text-xl font-bold">Tableau de Bord Principal</h3>
                            <p className="text-indigo-200 text-sm">Administrateur Système</p>
                        </div>

                        <nav className="space-y-2">
                            <Link
                                href="/admin/dashboard"
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${activeTab === 'overview'
                                    ? 'bg-indigo-800 text-white'
                                    : 'text-indigo-100 hover:bg-indigo-800'
                                    }`}
                                onClick={() => setActiveTab('overview')}
                            >
                                <BarChart3 className="h-5 w-5" />
                                <span>Tableau de Bord Principal</span>
                            </Link>

                            <Link
                                href="/admin/users"
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${activeTab === 'users'
                                    ? 'bg-indigo-800 text-white'
                                    : 'text-indigo-100 hover:bg-indigo-800'
                                    }`}
                                onClick={() => setActiveTab('users')}
                            >
                                <Users className="h-5 w-5" />
                                <span>Gestion des Utilisateurs</span>
                            </Link>

                            <Link
                                href="/admin/ads"
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${activeTab === 'ads'
                                    ? 'bg-indigo-800 text-white'
                                    : 'text-indigo-100 hover:bg-indigo-800'
                                    }`}
                                onClick={() => setActiveTab('ads')}
                            >
                                <FileText className="h-5 w-5" />
                                <span>Gestion des Annonces</span>
                            </Link>

                            <Link
                                href="/admin/orders"
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${activeTab === 'orders'
                                    ? 'bg-indigo-800 text-white'
                                    : 'text-indigo-100 hover:bg-indigo-800'
                                    }`}
                                onClick={() => setActiveTab('orders')}
                            >
                                <Package className="h-5 w-5" />
                                <span>Gestion des Commandes</span>
                            </Link>

                            <Link
                                href="/admin/finance"
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${activeTab === 'finance'
                                    ? 'bg-indigo-800 text-white'
                                    : 'text-indigo-100 hover:bg-indigo-800'
                                    }`}
                                onClick={() => setActiveTab('finance')}
                            >
                                <DollarSign className="h-5 w-5" />
                                <span>Gestion des Transactions Financières</span>
                            </Link>

                            <Link
                                href="/admin/support"
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${activeTab === 'support'
                                    ? 'bg-indigo-800 text-white'
                                    : 'text-indigo-100 hover:bg-indigo-800'
                                    }`}
                                onClick={() => setActiveTab('support')}
                            >
                                <MessageSquare className="h-5 w-5" />
                                <span>Gestion des Plaintes et Support</span>
                            </Link>

                            <Link
                                href="/admin/settings"
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left ${activeTab === 'settings'
                                    ? 'bg-indigo-800 text-white'
                                    : 'text-indigo-100 hover:bg-indigo-800'
                                    }`}
                                onClick={() => setActiveTab('settings')}
                            >
                                <Settings className="h-5 w-5" />
                                <span>Paramètres du Site</span>
                            </Link>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6">
                        <h1 className="text-2xl font-bold mb-6">Tableau de Bord Principal</h1>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {stats.map(stat => (
                                <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                                            <h3 className="text-2xl font-bold">{stat.value}</h3>
                                        </div>
                                        <div className={`p-3 rounded-full ${stat.id === 'revenue'
                                            ? 'bg-green-100 text-green-600'
                                            : stat.id === 'campaigns'
                                                ? 'bg-blue-100 text-blue-600'
                                                : stat.id === 'ads'
                                                    ? 'bg-purple-100 text-purple-600'
                                                    : stat.id === 'users'
                                                        ? 'bg-indigo-100 text-indigo-600'
                                                        : 'bg-red-100 text-red-600'
                                            }`}>
                                            <stat.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className={`mt-4 text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                                        <span className="flex items-center">
                                            {stat.changeType === 'positive'
                                                ? (<TrendingUp className="h-4 w-4 mr-1" />)
                                                : (<TrendingUp className="h-4 w-4 mr-1 transform rotate-180" />)
                                            }
                                            {stat.change} depuis le mois dernier
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Charts Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-bold mb-4">Statistiques Utilisateurs</h2>

                                <div className="h-64 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="flex items-center justify-center">
                                            <div className="relative h-32 w-32">
                                                <div className="absolute inset-0 rounded-full border-8 border-purple-100"></div>
                                                <div className="absolute inset-0 rounded-full border-8 border-purple-600 border-r-transparent border-b-transparent" style={{ transform: 'rotate(45deg)' }}></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-2xl font-bold">81%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-600">Total des Commandes</p>
                                    </div>
                                    <div className="text-center mx-8">
                                        <div className="flex items-center justify-center">
                                            <div className="relative h-32 w-32">
                                                <div className="absolute inset-0 rounded-full border-8 border-green-100"></div>
                                                <div className="absolute inset-0 rounded-full border-8 border-green-600 border-r-transparent border-b-transparent border-l-transparent" style={{ transform: 'rotate(135deg)' }}></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-2xl font-bold">22%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-600">Croissance des Clients</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center justify-center">
                                            <div className="relative h-32 w-32">
                                                <div className="absolute inset-0 rounded-full border-8 border-blue-100"></div>
                                                <div className="absolute inset-0 rounded-full border-8 border-blue-600 border-t-transparent border-l-transparent" style={{ transform: 'rotate(45deg)' }}></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-2xl font-bold">62%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-600">Revenus Totaux</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-bold mb-4">Statistiques des Commandes</h2>
                                <div className="h-64 flex items-center justify-center">
                                    <div className="w-full h-full relative">
                                        {/* Simplified chart representation */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200"></div>
                                        <div className="absolute bottom-0 left-0 h-40 w-full">
                                            <div className="relative h-full w-full">
                                                {/* Line chart representation */}
                                                <svg viewBox="0 0 450 150" className="w-full h-full">
                                                    <path d="M0,150 C50,120 100,100 150,80 C200,60 250,90 300,70 C350,50 400,30 450,50" fill="none" stroke="#8884d8" strokeWidth="3" />
                                                    <circle cx="150" cy="80" r="5" fill="#8884d8" />
                                                    <circle cx="300" cy="70" r="5" fill="#8884d8" />
                                                </svg>

                                                {/* X-axis labels */}
                                                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                                                    <span>Dimanche</span>
                                                    <span>Lundi</span>
                                                    <span>Mardi</span>
                                                    <span>Mercredi</span>
                                                    <span>Jeudi</span>
                                                    <span>Vendredi</span>
                                                    <span>Samedi</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Users */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold">Utilisateurs Inscrits</h2>
                                    <Link href="/admin/users" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                                        Voir Tout
                                    </Link>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom Complet</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type de Compte</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date d'Inscription</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Changer Statut</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {recentUsers.map(user => (
                                            <tr key={user.id} className="hover:bg-gray-50">
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
                                                            <div className="text-sm text-gray-500">@{user.name.split(' ')[0].toLowerCase()}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.type}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex space-x-2">
                                                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-600">
                                                            Bloquer
                                                        </span>
                                                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-600">
                                                            Activer
                                                        </span>
                                                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
                                                            Suspendre
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link href={`/admin/users/${user.id}`} className="text-purple-600 hover:text-purple-900">
                                                        Voir Détails
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Recent Ads */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold">Dernières Annonces</h2>
                                    <Link href="/admin/ads" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                                        Voir Tout
                                    </Link>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produit</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Influenceur</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type d'Annonce</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Évaluations</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {recentAds.map(ad => (
                                            <tr key={ad.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{ad.title}</div>
                                                    <div className="text-xs text-gray-500">{ad.description}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ad.creator}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ad.type}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">{ad.price}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${ad.statusColor}`}>
                                                        {ad.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex">
                                                        {[1, 2, 3, 4, 5].map(star => (
                                                            <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link href={`/admin/ads/${ad.id}`} className="text-purple-600 hover:text-purple-900">
                                                        Voir Détails
                                                    </Link>
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
        </div>
    );
} 