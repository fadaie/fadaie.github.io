import { Code2, Sparkles, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {t('about.title')}
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="group p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105">
            <Code2 className="w-12 h-12 text-cyan-400 mb-4 group-hover:rotate-12 transition-transform" />
            <h3 className="text-xl mb-2 text-cyan-400">Clean Code</h3>
            <p className="text-gray-400 text-sm">Writing maintainable, scalable solutions</p>
          </div>

          <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105">
            <Sparkles className="w-12 h-12 text-purple-400 mb-4 group-hover:rotate-12 transition-transform" />
            <h3 className="text-xl mb-2 text-purple-400">Creative Design</h3>
            <p className="text-gray-400 text-sm">Blending aesthetics with functionality</p>
          </div>

          <div className="group p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105">
            <Rocket className="w-12 h-12 text-pink-400 mb-4 group-hover:rotate-12 transition-transform" />
            <h3 className="text-xl mb-2 text-pink-400">Performance</h3>
            <p className="text-gray-400 text-sm">Optimizing for speed and efficiency</p>
          </div>
        </div>

        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed">
            {t('about.text1')}
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t('about.text2')}
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t('about.text3')}
          </p>
        </div>
      </div>
    </section>
  );
}