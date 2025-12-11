import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: t('contact.emailValue'),
      href: `mailto:${t('contact.emailValue')}`,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: t('contact.phoneValue'),
      href: `tel:${t('contact.phoneValue')}`,
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: t('contact.locationValue'),
      href: '#',
      color: 'from-green-400 to-cyan-500',
    },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com', color: 'hover:text-purple-400' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com', color: 'hover:text-cyan-400' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black flex items-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-5xl md:text-6xl mb-6 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {t('contact.title')}
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto text-center leading-relaxed">
          {t('contact.text')}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-cyan-400 mb-2">{info.label}</h3>
              <p className="text-gray-300">{info.value}</p>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 flex items-center justify-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 group ${link.color}`}
            >
              <link.icon className="w-7 h-7 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={`mailto:${t('contact.emailValue')}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
          >
            <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {t('contact.email')}
          </a>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
            {t('hero.download')}
          </button>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800/50">
          <p className="text-gray-500 text-center">
            © 2025 {t('hero.name')}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}