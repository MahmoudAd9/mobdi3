export type Language = 'ar' | 'en' | 'fr';

export type TranslationKey = 
  | 'home'
  | 'about'
  | 'creators'
  | 'brands'
  | 'login'
  | 'signup'
  | 'dashboard'
  | 'settings'
  | 'messages'
  | 'profile'
  | 'logout'
  | 'createAccount'
  | 'createCampaign'
  | 'findCreators'
  | 'viewDetails'
  | 'contactUs'
  | 'privacyPolicy'
  | 'termsOfService'
  | 'faq'
  | 'search'
  | 'filter'
  | 'price'
  | 'category'
  | 'status'
  | 'date'
  | 'actions'
  | 'save'
  | 'cancel'
  | 'delete'
  | 'edit'
  | 'add'
  | 'remove'
  | 'back'
  | 'next'
  | 'previous'
  | 'submit'
  | 'language';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  ar: {
    home: 'الصفحة الرئيسية',
    about: 'من نحن',
    creators: 'المؤثرين',
    brands: 'العلامات التجارية',
    login: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    dashboard: 'لوحة التحكم',
    settings: 'الإعدادات',
    messages: 'الرسائل',
    profile: 'الملف الشخصي',
    logout: 'تسجيل الخروج',
    createAccount: 'إنشاء حساب جديد',
    createCampaign: 'إنشاء حملة جديدة',
    findCreators: 'البحث عن مؤثرين',
    viewDetails: 'عرض التفاصيل',
    contactUs: 'اتصل بنا',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الاستخدام',
    faq: 'الأسئلة الشائعة',
    search: 'بحث',
    filter: 'تصفية',
    price: 'السعر',
    category: 'الفئة',
    status: 'الحالة',
    date: 'التاريخ',
    actions: 'الإجراءات',
    save: 'حفظ',
    cancel: 'إلغاء',
    delete: 'حذف',
    edit: 'تعديل',
    add: 'إضافة',
    remove: 'إزالة',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    submit: 'إرسال',
    language: 'اللغة'
  },
  en: {
    home: 'Home',
    about: 'About',
    creators: 'Creators',
    brands: 'Brands',
    login: 'Login',
    signup: 'Sign Up',
    dashboard: 'Dashboard',
    settings: 'Settings',
    messages: 'Messages',
    profile: 'Profile',
    logout: 'Logout',
    createAccount: 'Create Account',
    createCampaign: 'Create Campaign',
    findCreators: 'Find Creators',
    viewDetails: 'View Details',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    faq: 'FAQ',
    search: 'Search',
    filter: 'Filter',
    price: 'Price',
    category: 'Category',
    status: 'Status',
    date: 'Date',
    actions: 'Actions',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    remove: 'Remove',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    language: 'Language'
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    creators: 'Créateurs',
    brands: 'Marques',
    login: 'Connexion',
    signup: 'Inscription',
    dashboard: 'Tableau de Bord',
    settings: 'Paramètres',
    messages: 'Messages',
    profile: 'Profil',
    logout: 'Déconnexion',
    createAccount: 'Créer un Compte',
    createCampaign: 'Créer une Campagne',
    findCreators: 'Trouver des Créateurs',
    viewDetails: 'Voir les Détails',
    contactUs: 'Contactez-nous',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions d\'Utilisation',
    faq: 'FAQ',
    search: 'Rechercher',
    filter: 'Filtrer',
    price: 'Prix',
    category: 'Catégorie',
    status: 'Statut',
    date: 'Date',
    actions: 'Actions',
    save: 'Enregistrer',
    cancel: 'Annuler',
    delete: 'Supprimer',
    edit: 'Modifier',
    add: 'Ajouter',
    remove: 'Supprimer',
    back: 'Retour',
    next: 'Suivant',
    previous: 'Précédent',
    submit: 'Soumettre',
    language: 'Langue'
  }
};

export const getTranslation = (lang: Language, key: TranslationKey): string => {
  return translations[lang][key] || key;
};

export const languageDirection = (lang: Language): 'rtl' | 'ltr' => {
  return lang === 'ar' ? 'rtl' : 'ltr';
};

export const languageNames: Record<Language, string> = {
  ar: 'العربية',
  en: 'English',
  fr: 'Français'
};