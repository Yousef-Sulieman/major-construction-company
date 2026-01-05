
import React from 'react';
import { HardHat, Ruler, Building2, Truck, Droplets, Zap } from 'lucide-react';
import { Project, Service, TimelineEvent } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'mega-tower',
    title: 'برج الجوهرة السكني',
    category: 'ناطحات سحاب',
    location: 'الرياض، المملكة العربية السعودية',
    description: 'أيقونة معمارية في قلب العاصمة بارتفاع يتجاوز 300 متر، يجسد قمة الهندسة الإنشائية المعاصرة.',
    imageUrl: 'https://www.skybridge.sa/assets/img/slider/3/slider-2.jpg',
    beforeUrl: 'https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070',
    afterUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    completionDate: '2023',
    area: '120,000 م2',
    details: [
      'هيكل إنشائي مقاوم للزلازل والرياح الشديدة',
      'نظم إدارة مباني ذكية متكاملة',
      'واجهات زجاجية مزدوجة موفرة للطاقة'
    ],
    stats: [
      { label: 'ساعات عمل', value: '4.5M' },
      { label: 'خرسانة مسلحة', value: '85K طن' },
      { label: 'حديد تسليح', value: '12K طن' }
    ]
  },
  {
    id: 'infra-bridge',
    title: 'جسر الربط السريع',
    category: 'بنية تحتية',
    location: 'جدة، المملكة العربية السعودية',
    description: 'مشروع بنية تحتية عملاق يربط المناطق الاقتصادية الرئيسية بأحدث تقنيات الجسور المعلقة.',
    imageUrl: 'https://images.unsplash.com/photo-1654896553678-86a735c18c22?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    completionDate: '2022',
    area: '15 كم طولي',
    details: [
      'تصميم انسيابي يقلل من الازدحام المروري بنسبة 40%',
      'أساسات عميقة تصل إلى 60 متراً تحت الأرض',
      'نظام إضاءة ذكي وتوفير للطاقة'
    ],
    stats: [
      { label: 'طول الجسر', value: '15 كم' },
      { label: 'عدد الأعمدة', value: '450' },
      { label: 'حمولة قصوى', value: '120 طن' }
    ]
  },
  {
    id: 'industrial-plant',
    title: 'مجمع الصناعات البتروكيماوية',
    category: 'مشاريع صناعية',
    location: 'الجبيل، المملكة العربية السعودية',
    description: 'تنفيذ كامل لأحد أكبر المجمعات الصناعية في المنطقة بمعايير أمان هندسية عالمية.',
    imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070',
    completionDate: '2021',
    area: '450,000 م2',
    details: [
      'أنظمة تبريد وتكييف صناعية ضخمة',
      'خطوط إنتاج مؤتمتة بالكامل',
      'معايير صارمة للصحة والسلامة المهنية'
    ],
    stats: [
      { label: 'قوة عاملة', value: '8,500' },
      { label: 'طاقة إنتاجية', value: '2M طن/سنة' },
      { label: 'صفر حوادث', value: '100%' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'structural',
    title: 'الهندسة الإنشائية والتعمير',
    description: 'بناء الهياكل العملاقة وناطحات السحاب باستخدام أحدث تقنيات الخرسانة المسلحة والأنظمة المعدنية.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
    capabilities: ['ناطحات سحاب', 'مجمعات سكنية', 'مراكز تجارية', 'منشآت رياضية']
  },
  {
    id: 'infrastructure',
    title: 'البنية التحتية والشبكات',
    description: 'تطوير شبكات الطرق، الجسور، وأنظمة المياه والطاقة للمدن الحديثة والذكية.',
    imageUrl: 'https://images.unsplash.com/photo-1591054457135-3e2c2e51c5bc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    capabilities: ['طول سريعة وجسور', 'شبكات صرف ومياه', 'محطات طاقة', 'اتصالات']
  },
  {
    id: 'industrial',
    title: 'المقاولات الصناعية',
    description: 'تصميم وتنفيذ المصانع ومحطات التكرير والمستودعات العملاقة مع مراعاة أدق التفاصيل التقنية.',
    imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070',
    capabilities: ['مصانع بتروكيماوية', 'محطات تحلية', 'لوجستيات ومخازن', 'ورش كبرى']
  }
];

export const TIMELINE: TimelineEvent[] = [
  { year: '1985', title: 'التأسيس', description: 'انطلاق المجموعة كشركة هندسية متخصصة في المشاريع السكنية.' },
  { year: '1998', title: 'التوسع الإقليمي', description: 'البدء في تنفيذ مشاريع البنية التحتية والجسور الكبرى.' },
  { year: '2010', title: 'ريادة الأبراج', description: 'دخول سوق ناطحات السحاب وبناء أول برج ذكي.' },
  { year: '2020', title: 'التحول الرقمي', description: 'اعتماد نمذجة معلومات البناء (BIM) والذكاء الاصطناعي في التنفيذ.' },
  { year: '2024', title: 'الاستدامة', description: 'التركيز على المشاريع الصديقة للبيئة والمدن الخضراء.' }
];

export const NAV_LINKS = [
  { label: 'الرئيسية', path: '/' },
  { label: 'المشاريع', path: '/projects' },
  { label: 'الخدمات', path: '/services' },
  { label: 'عن المجموعة', path: '/about' },
  { label: 'اتصل بنا', path: '/contact' }
];
