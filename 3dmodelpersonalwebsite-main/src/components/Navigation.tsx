import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl tracking-wider bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            PORTFOLIO
          </button>
          <div className="flex gap-8 items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.experience')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.skills')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.education')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={toggleLanguage}
              className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2 hover:scale-105"
            >
              <Languages className="w-4 h-4" />
              {language === 'en' ? 'فا' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}