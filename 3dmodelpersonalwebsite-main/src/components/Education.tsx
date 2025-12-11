import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Education() {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('education.degree1'),
      school: t('education.school1'),
      period: t('education.period1'),
      details: t('education.desc1'),
    },
    {
      degree: t('education.degree2'),
      school: t('education.school2'),
      period: t('education.period2'),
      details: t('education.desc2'),
    },
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {t('education.title')}
          </span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-gray-300 mb-2">
                          <BookOpen className="w-5 h-5 text-cyan-400" />
                          <span className="text-lg">{edu.school}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0 bg-cyan-500/10 px-4 py-2 rounded-lg border border-cyan-500/20">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{edu.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}