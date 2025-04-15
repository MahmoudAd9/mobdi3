'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Upload, X, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CreateCampaign() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState(500);
  const [duration, setDuration] = useState(7);
  const [keywords, setKeywords] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const { language } = useLanguage();
  
  const translations = {
    backToDashboard: {
      ar: 'العودة إلى لوحة التحكم',
      en: 'Back to Dashboard',
      fr: 'Retour au Tableau de Bord'
    },
    createCampaign: {
      title: {
        ar: 'إنشاء حملة جديدة',
        en: 'Create New Campaign',
        fr: 'Créer une Nouvelle Campagne'
      }
    },
    campaignTitle: {
      label: {
        ar: 'عنوان الحملة:',
        en: 'Campaign Title:',
        fr: 'Titre de la Campagne:'
      },
      placeholder: {
        ar: 'أدخل عنوان الحملة (مثال: مراجعة سماعة لاسلكية جديدة)',
        en: 'Enter campaign title (e.g., Review of new wireless headphones)',
        fr: 'Entrez le titre de la campagne (ex: Critique de nouveaux écouteurs sans fil)'
      }
    },
    category: {
      label: {
        ar: 'الفئة:',
        en: 'Category:',
        fr: 'Catégorie:'
      },
      placeholder: {
        ar: 'اختر فئة المنتج',
        en: 'Choose product category',
        fr: 'Choisissez la catégorie du produit'
      },
      options: {
        tech: {
          ar: 'التكنولوجيا',
          en: 'Technology',
          fr: 'Technologie'
        },
        beauty: {
          ar: 'الجمال',
          en: 'Beauty',
          fr: 'Beauté'
        },
        fashion: {
          ar: 'الموضة',
          en: 'Fashion',
          fr: 'Mode'
        },
        food: {
          ar: 'الطعام',
          en: 'Food',
          fr: 'Alimentation'
        },
        fitness: {
          ar: 'اللياقة البدنية',
          en: 'Fitness',
          fr: 'Fitness'
        },
        gaming: {
          ar: 'الألعاب',
          en: 'Gaming',
          fr: 'Jeux Vidéo'
        }
      }
    },
    media: {
      label: {
        ar: 'صور ومعلومات المنتج:',
        en: 'Product Images and Information:',
        fr: 'Images et Informations sur le Produit:'
      },
      uploadText: {
        ar: 'قم بتحميل صور المنتج أو أي معلومات إضافية',
        en: 'Upload product images or any additional information',
        fr: 'Téléchargez des images de produits ou toute information supplémentaire'
      },
      fileTypes: {
        ar: 'يمكنك تحميل ملفات بصيغة JPG، PNG، PDF',
        en: 'You can upload JPG, PNG, PDF files',
        fr: 'Vous pouvez télécharger des fichiers JPG, PNG, PDF'
      }
    },
    description: {
      label: {
        ar: 'وصف الحملة:',
        en: 'Campaign Description:',
        fr: 'Description de la Campagne:'
      },
      placeholder: {
        ar: 'اكتب وصفًا تفصيليًا للمنتج وما تتوقعه من المراجعة (مثال: نبحث عن مراجعة تفصيلية لسماعة لاسلكية جديدة مع التركيز على جودة الصوت وعمر البطارية)',
        en: 'Write a detailed description of the product and what you expect from the review (e.g., We are looking for a detailed review of a new wireless headphone with a focus on sound quality and battery life)',
        fr: 'Rédigez une description détaillée du produit et de ce que vous attendez de l\'avis (ex: Nous recherchons une critique détaillée d\'un nouveau casque sans fil en mettant l\'accent sur la qualité du son et l\'autonomie de la batterie)'
      }
    },
    budget: {
      label: {
        ar: 'الميزانية (بالدولار):',
        en: 'Budget (in USD):',
        fr: 'Budget (en USD):'
      },
      min: {
        ar: '$100',
        en: '$100',
        fr: '$100'
      },
      max: {
        ar: '$1000',
        en: '$1000',
        fr: '$1000'
      },
      note: {
        ar: 'الميزانية المقترحة تؤثر على جودة المراجعات وعدد المؤثرين المهتمين بالحملة',
        en: 'The proposed budget affects the quality of reviews and the number of influencers interested in the campaign',
        fr: 'Le budget proposé affecte la qualité des avis et le nombre d\'influenceurs intéressés par la campagne'
      }
    },
    duration: {
      label: {
        ar: 'مدة الحملة (بالأيام):',
        en: 'Campaign Duration (in days):',
        fr: 'Durée de la Campagne (en jours):'
      },
      min: {
        ar: '3 أيام',
        en: '3 days',
        fr: '3 jours'
      },
      max: {
        ar: '30 يوم',
        en: '30 days',
        fr: '30 jours'
      },
      value: {
        ar: 'أيام',
        en: 'days',
        fr: 'jours'
      }
    },
    targetAudience: {
      title: {
        ar: 'الجمهور المستهدف:',
        en: 'Target Audience:',
        fr: 'Public Cible:'
      },
      ageRange: {
        label: {
          ar: 'الفئة العمرية:',
          en: 'Age Range:',
          fr: 'Tranche d\'âge:'
        },
        options: {
          all: {
            ar: 'جميع الأعمار',
            en: 'All Ages',
            fr: 'Tous les Âges'
          },
          '18-24': {
            ar: '18-24',
            en: '18-24',
            fr: '18-24'
          },
          '25-34': {
            ar: '25-34',
            en: '25-34',
            fr: '25-34'
          },
          '35-44': {
            ar: '35-44',
            en: '35-44',
            fr: '35-44'
          },
          '45+': {
            ar: '45+',
            en: '45+',
            fr: '45+'
          }
        }
      },
      gender: {
        label: {
          ar: 'الجنس:',
          en: 'Gender:',
          fr: 'Genre:'
        },
        options: {
          all: {
            ar: 'الجميع',
            en: 'All',
            fr: 'Tous'
          },
          male: {
            ar: 'ذكور',
            en: 'Male',
            fr: 'Masculin'
          },
          female: {
            ar: 'إناث',
            en: 'Female',
            fr: 'Féminin'
          }
        }
      },
      region: {
        label: {
          ar: 'المنطقة الجغرافية:',
          en: 'Geographic Region:',
          fr: 'Région Géographique:'
        },
        options: {
          all: {
            ar: 'جميع المناطق',
            en: 'All Regions',
            fr: 'Toutes les Régions'
          },
          middleEast: {
            ar: 'الشرق الأوسط',
            en: 'Middle East',
            fr: 'Moyen-Orient'
          },
          northAfrica: {
            ar: 'شمال أفريقيا',
            en: 'North Africa',
            fr: 'Afrique du Nord'
          },
          gulf: {
            ar: 'دول الخليج',
            en: 'Gulf Countries',
            fr: 'Pays du Golfe'
          }
        }
      },
      followers: {
        label: {
          ar: 'عدد المتابعين:',
          en: 'Number of Followers:',
          fr: 'Nombre d\'Abonnés:'
        },
        options: {
          all: {
            ar: 'أي عدد',
            en: 'Any Number',
            fr: 'N\'importe Quel Nombre'
          },
          micro: {
            ar: 'صغير (10K-50K)',
            en: 'Micro (10K-50K)',
            fr: 'Micro (10K-50K)'
          },
          mid: {
            ar: 'متوسط (50K-100K)',
            en: 'Mid (50K-100K)',
            fr: 'Moyen (50K-100K)'
          },
          macro: {
            ar: 'كبير (100K-500K)',
            en: 'Macro (100K-500K)',
            fr: 'Macro (100K-500K)'
          },
          mega: {
            ar: 'ضخم (500K+)',
            en: 'Mega (500K+)',
            fr: 'Méga (500K+)'
          }
        }
      }
    },
    keywords: {
      label: {
        ar: 'الكلمات المفتاحية:',
        en: 'Keywords:',
        fr: 'Mots-clés:'
      },
      placeholder: {
        ar: 'أدخل كلمات مفتاحية مفصولة بفواصل (مثال: سماعات لاسلكية، بلوتوث، جودة صوت)',
        en: 'Enter keywords separated by commas (e.g., wireless headphones, bluetooth, sound quality)',
        fr: 'Entrez des mots-clés séparés par des virgules (ex: écouteurs sans fil, bluetooth, qualité sonore)'
      },
      note: {
        ar: 'الكلمات المفتاحية تساعد في العثور على المؤثرين المناسبين لحملتك',
        en: 'Keywords help find the right influencers for your campaign',
        fr: 'Les mots-clés aident à trouver les bons influenceurs pour votre campagne'
      }
    },
    submit: {
      ar: 'إنشاء الحملة والبدء في البحث عن مؤثرين',
      en: 'Create Campaign and Start Finding Influencers',
      fr: 'Créer une Campagne et Commencer à Trouver des Influenceurs'
    }
  };
  
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
    alert(language === 'ar' ? 'تم إنشاء الحملة بنجاح!' : 
          language === 'fr' ? 'Campagne créée avec succès!' : 
          'Campaign created successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/brand/dashboard" className="flex items-center text-purple-600 hover:text-purple-700 mr-4">
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span>{translations.backToDashboard[language]}</span>
          </Link>
          <h1 className="text-3xl font-bold">{translations.createCampaign.title[language]}</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          {/* Title */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">{translations.campaignTitle.label[language]}</label>
            <input 
              type="text" 
              className={`w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
              placeholder={translations.campaignTitle.placeholder[language]}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          
          {/* Category */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">{translations.category.label[language]}</label>
            <div className="relative">
              <select 
                className={`w-full border border-gray-300 rounded-md py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>{translations.category.placeholder[language]}</option>
                <option value="tech">{translations.category.options.tech[language]}</option>
                <option value="beauty">{translations.category.options.beauty[language]}</option>
                <option value="fashion">{translations.category.options.fashion[language]}</option>
                <option value="food">{translations.category.options.food[language]}</option>
                <option value="fitness">{translations.category.options.fitness[language]}</option>
                <option value="gaming">{translations.category.options.gaming[language]}</option>
              </select>
              <div className={`absolute inset-y-0 ${language === 'ar' ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center pointer-events-none`}>
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Media Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">{translations.media.label[language]}</label>
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
                <span className="text-gray-500">{translations.media.uploadText[language]}</span>
                <span className="text-sm text-gray-400 mt-1">{translations.media.fileTypes[language]}</span>
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
          
          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">{translations.description.label[language]}</label>
            <textarea 
              className={`w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent h-32 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              placeholder={translations.description.placeholder[language]}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          
          {/* Budget */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">{translations.budget.label[language]}</label>
            <div className="relative">
              <input 
                type="range" 
                min="100" 
                max="1000" 
                step="50"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="absolute -top-6 left-0 right-0 flex justify-between">
                <span className="text-xs text-gray-500">{translations.budget.min[language]}</span>
                <span className="text-xs text-gray-500">{translations.budget.max[language]}</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <span className="text-lg font-bold">${budget}</span>
            </div>
            <p className="text-sm text-gray-500 text-center mt-2">
              {translations.budget.note[language]}
            </p>
          </div>
          
          {/* Duration */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">{translations.duration.label[language]}</label>
            <div className="relative">
              <input 
                type="range" 
                min="3" 
                max="30" 
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="absolute -top-6 left-0 right-0 flex justify-between">
                <span className="text-xs text-gray-500">{translations.duration.min[language]}</span>
                <span className="text-xs text-gray-500">{translations.duration.max[language]}</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <span className="text-lg font-bold">{duration} {translations.duration.value[language]}</span>
            </div>
          </div>
          
          {/* Target Audience */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">{translations.targetAudience.title[language]}</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">{translations.targetAudience.ageRange.label[language]}</label>
                <select className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <option value="">{translations.targetAudience.ageRange.options.all[language]}</option>
                  <option value="18-24">{translations.targetAudience.ageRange.options['18-24'][language]}</option>
                  <option value="25-34">{translations.targetAudience.ageRange.options['25-34'][language]}</option>
                  <option value="35-44">{translations.targetAudience.ageRange.options['35-44'][language]}</option>
                  <option value="45+">{translations.targetAudience.ageRange.options['45+'][language]}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">{translations.targetAudience.gender.label[language]}</label>
                <select className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <option value="">{translations.targetAudience.gender.options.all[language]}</option>
                  <option value="male">{translations.targetAudience.gender.options.male[language]}</option>
                  <option value="female">{translations.targetAudience.gender.options.female[language]}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">{translations.targetAudience.region.label[language]}</label>
                <select className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <option value="">{translations.targetAudience.region.options.all[language]}</option>
                  <option value="middle-east">{translations.targetAudience.region.options.middleEast[language]}</option>
                  <option value="north-africa">{translations.targetAudience.region.options.northAfrica[language]}</option>
                  <option value="gulf">{translations.targetAudience.region.options.gulf[language]}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">{translations.targetAudience.followers.label[language]}</label>
                <select className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <option value="">{translations.targetAudience.followers.options.all[language]}</option>
                  <option value="micro">{translations.targetAudience.followers.options.micro[language]}</option>
                  <option value="mid">{translations.targetAudience.followers.options.mid[language]}</option>
                  <option value="macro">{translations.targetAudience.followers.options.macro[language]}</option>
                  <option value="mega">{translations.targetAudience.followers.options.mega[language]}</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Keywords */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">{translations.keywords.label[language]}</label>
            <input 
              type="text" 
              className={`w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${language === 'ar' ? 'text-right' : 'text-left'}`}
              placeholder={translations.keywords.placeholder[language]}
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-2">
              {translations.keywords.note[language]}
            </p>
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors"
          >
            {translations.submit[language]}
          </button>
        </form>
      </div>
    </div>
  );
}