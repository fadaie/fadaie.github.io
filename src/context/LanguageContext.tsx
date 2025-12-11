import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Alex Johnson',
    'hero.title': 'Full Stack Developer & 3D Enthusiast',
    'hero.description': 'Crafting innovative digital experiences with modern web technologies and creative 3D visualizations',
    'hero.download': 'Download Resume',
    'hero.contact': 'Get in Touch',
    
    // About
    'about.title': 'About Me',
    'about.text1': 'I\'m a passionate Full Stack Developer with 5+ years of experience in building modern web applications. I specialize in React, Node.js, and Three.js, creating seamless user experiences with cutting-edge technologies.',
    'about.text2': 'My journey in tech started with a fascination for both design and code. Today, I combine these interests to build beautiful, functional, and performant applications that users love.',
    'about.text3': 'When I\'m not coding, you\'ll find me exploring new 3D rendering techniques, contributing to open-source projects, or sharing knowledge with the developer community.',
    
    // Experience
    'experience.title': 'Work Experience',
    'experience.job1.title': 'Senior Full Stack Developer',
    'experience.job1.company': 'Tech Innovations Inc.',
    'experience.job1.period': '2021 - Present',
    'experience.job1.desc': 'Leading development of enterprise web applications using React, TypeScript, and Node.js. Implemented 3D visualization features that increased user engagement by 40%.',
    'experience.job2.title': 'Full Stack Developer',
    'experience.job2.company': 'Digital Solutions Ltd.',
    'experience.job2.period': '2019 - 2021',
    'experience.job2.desc': 'Developed and maintained multiple client projects. Specialized in React frontends and RESTful API development. Mentored junior developers.',
    'experience.job3.title': 'Frontend Developer',
    'experience.job3.company': 'Creative Studios',
    'experience.job3.period': '2018 - 2019',
    'experience.job3.desc': 'Built responsive web applications with modern JavaScript frameworks. Collaborated with designers to create pixel-perfect implementations.',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.category.frontend': 'Frontend',
    'skills.category.backend': 'Backend',
    'skills.category.tools': 'Tools & Others',
    'skills.category.3d': '3D & Graphics',
    
    // Education
    'education.title': 'Education',
    'education.degree1': 'Master of Science in Computer Science',
    'education.school1': 'Stanford University',
    'education.period1': '2016 - 2018',
    'education.desc1': 'Specialized in Computer Graphics and Human-Computer Interaction. Thesis on real-time 3D rendering optimization.',
    'education.degree2': 'Bachelor of Science in Software Engineering',
    'education.school2': 'MIT',
    'education.period2': '2012 - 2016',
    'education.desc2': 'Graduated with honors. Focus on web technologies and interactive systems.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.text': 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.emailValue': 'alex.johnson@email.com',
    'contact.phoneValue': '+1 (555) 123-4567',
    'contact.locationValue': 'San Francisco, CA',
  },
  fa: {
    // Navigation
    'nav.about': 'درباره من',
    'nav.experience': 'تجربه کاری',
    'nav.skills': 'مهارت‌ها',
    'nav.education': 'تحصیلات',
    'nav.contact': 'تماس',
    
    // Hero
    'hero.greeting': 'سلام، من',
    'hero.name': 'الکس جانسون',
    'hero.title': 'توسعه‌دهنده فول‌استک و علاقه‌مند به سه‌بعدی',
    'hero.description': 'خلق تجربیات دیجیتال نوآورانه با تکنولوژی‌های مدرن وب و تصویرسازی خلاقانه سه‌بعدی',
    'hero.download': 'دانلود رزومه',
    'hero.contact': 'تماس با من',
    
    // About
    'about.title': 'درباره من',
    'about.text1': 'من یک توسعه‌دهنده فول‌استک با بیش از ۵ سال تجربه در ساخت برنامه‌های وب مدرن هستم. تخصص من در React، Node.js و Three.js است و تجربیات کاربری روان با فناوری‌های پیشرفته ایجاد می‌کنم.',
    'about.text2': 'سفر من در دنیای تکنولوژی با علاقه به طراحی و کدنویسی آغاز شد. امروز این علایق را ترکیب می‌کنم تا برنامه‌های زیبا، کاربردی و با عملکرد بالا بسازم که کاربران عاشقش هستند.',
    'about.text3': 'وقتی کد نمی‌نویسم، در حال کشف تکنیک‌های جدید رندرینگ سه‌بعدی، مشارکت در پروژه‌های متن‌باز، یا اشتراک دانش با جامعه توسعه‌دهندگان هستم.',
    
    // Experience
    'experience.title': 'تجربه کاری',
    'experience.job1.title': 'توسعه‌دهنده ارشد فول‌استک',
    'experience.job1.company': 'شرکت نوآوری‌های تکنولوژی',
    'experience.job1.period': '۲۰۲۱ - اکنون',
    'experience.job1.desc': 'رهبری توسعه برنامه‌های وب سازمانی با React، TypeScript و Node.js. پیاده‌سازی ویژگی‌های تصویرسازی سه‌بعدی که تعامل کاربران را ۴۰٪ افزایش داد.',
    'experience.job2.title': 'توسعه‌دهنده فول‌استک',
    'experience.job2.company': 'شرکت راه‌حل‌های دیجیتال',
    'experience.job2.period': '۲۰۱۹ - ۲۰۲۱',
    'experience.job2.desc': 'توسعه و نگهداری پروژه‌های متعدد مشتریان. تخصص در فرانت‌اند React و توسعه RESTful API. راهنمایی توسعه‌دهندگان جونیور.',
    'experience.job3.title': 'توسعه‌دهنده فرانت‌اند',
    'experience.job3.company': 'استودیو خلاق',
    'experience.job3.period': '۲۰۱۸ - ۲۰۱۹',
    'experience.job3.desc': 'ساخت برنامه‌های وب ریسپانسیو با فریم‌ورک‌های مدرن جاوااسکریپت. همکاری با طراحان برای پیاده‌سازی‌های دقیق.',
    
    // Skills
    'skills.title': 'مهارت‌های فنی',
    'skills.category.frontend': 'فرانت‌اند',
    'skills.category.backend': 'بک‌اند',
    'skills.category.tools': 'ابزارها و سایر',
    'skills.category.3d': 'سه‌بعدی و گرافیک',
    
    // Education
    'education.title': 'تحصیلات',
    'education.degree1': 'کارشناسی ارشد علوم کامپیوتر',
    'education.school1': 'دانشگاه استنفورد',
    'education.period1': '۲۰۱۶ - ۲۰۱۸',
    'education.desc1': 'تخصص در گرافیک کامپیوتری و تعامل انسان-رایانه. پایان‌نامه در مورد بهینه‌سازی رندرینگ سه‌بعدی بلادرنگ.',
    'education.degree2': 'کارشناسی مهندسی نرم‌افزار',
    'education.school2': 'دانشگاه MIT',
    'education.period2': '۲۰۱۲ - ۲۰۱۶',
    'education.desc2': 'فارغ‌التحصیل با افتخار. تمرکز بر فناوری‌های وب و سیستم‌های تعاملی.',
    
    // Contact
    'contact.title': 'ارتباط با من',
    'contact.text': 'همیشه آماده بحث درباره پروژه‌های جدید، ایده‌های خلاقانه یا فرصت‌هایی برای بخشی از دیدگاه‌های شما بودن هستم. راحت پیام بدهید!',
    'contact.email': 'ایمیل',
    'contact.phone': 'تلفن',
    'contact.location': 'موقعیت',
    'contact.emailValue': 'alex.johnson@email.com',
    'contact.phoneValue': '+1 (555) 123-4567',
    'contact.locationValue': 'سانفرانسیسکو، کالیفرنیا',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div 
        dir={language === 'fa' ? 'rtl' : 'ltr'} 
        className={language === 'fa' ? 'font-vazir' : 'font-inter'}
        style={{ fontFamily: language === 'fa' ? 'Vazirmatn, sans-serif' : 'Inter, sans-serif' }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}