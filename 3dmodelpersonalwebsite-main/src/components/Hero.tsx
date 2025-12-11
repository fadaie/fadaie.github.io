import { Scene3D } from './Scene3D';
import { Download, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const handleDownload = () => {
    // Create a mock resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Alex_Johnson_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <Scene3D />
      
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
      
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center space-y-6 px-4">
          <p className="text-cyan-400 tracking-widest animate-fade-in uppercase">
            {t('hero.greeting')}
          </p>
          <h1 className="text-6xl md:text-8xl tracking-wider animate-fade-in-delay bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            {t('hero.name')}
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-400 tracking-wide animate-fade-in-delay">
            {t('hero.title')}
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-delay-2 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="pt-8 flex gap-4 justify-center pointer-events-auto animate-fade-in-delay-2">
            <button 
              onClick={handleDownload}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              {t('hero.download')}
            </button>
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {t('hero.contact')}
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s backwards;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s backwards;
        }
      `}</style>
    </section>
  );
}