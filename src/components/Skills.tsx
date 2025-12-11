import { useLanguage } from '../context/LanguageContext';

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: t('skills.category.frontend'),
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Three.js', level: 85 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'WebGL', level: 80 },
      ],
    },
    {
      category: t('skills.category.backend'),
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      category: t('skills.category.tools'),
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 82 },
        { name: 'Figma', level: 88 },
        { name: 'Jest', level: 85 },
      ],
    },
    {
      category: t('skills.category.3d'),
      skills: [
        { name: 'Three.js', level: 90 },
        { name: 'WebGL', level: 85 },
        { name: 'Blender', level: 75 },
        { name: 'GLSL', level: 70 },
        { name: 'R3F', level: 88 },
        { name: 'Cannon.js', level: 72 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {t('skills.title')}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <h3 className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">{category.category}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}