import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Next.js', level: 75 },
    { name: 'PostgreSQL', level: 70 }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-primary/50">
      <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Tentang <span className="text-accent">Saya</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">Pengalaman</h3>
            <p className="text-secondary">
              Saya adalah seorang web developer dengan pengalaman lebih dari 3 tahun dalam mengembangkan aplikasi web modern.
              Fokus utama saya adalah menciptakan pengalaman pengguna yang luar biasa dengan performa dan aksesibilitas yang optimal.
            </p>
            <p className="text-secondary">
              Saya telah bekerja dengan berbagai teknologi dan framework modern, dan selalu bersemangat untuk mempelajari hal-hal baru
              dalam dunia pengembangan web.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">Keahlian</h3>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-sm text-secondary">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500"
                      style={{ width: `${isVisible ? skill.level : 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;