import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.job1.title'),
      company: t('experience.job1.company'),
      period: t('experience.job1.period'),
      description: t('experience.job1.desc'),
    },
    {
      title: t('experience.job2.title'),
      company: t('experience.job2.company'),
      period: t('experience.job2.period'),
      description: t('experience.job2.desc'),
    },
    {
      title: t('experience.job3.title'),
      company: t('experience.job3.company'),
      period: t('experience.job3.period'),
      description: t('experience.job3.desc'),
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {t('experience.title')}
          </span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 bg-cyan-400 rounded-full border-4 border-gray-900 hidden md:block group-hover:scale-125 transition-transform"></div>

                <div className="md:ml-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-gray-300 mb-2">
                        <Briefcase className="w-5 h-5 text-cyan-400" />
                        <span className="text-lg">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0 bg-cyan-500/10 px-4 py-2 rounded-lg border border-cyan-500/20">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}