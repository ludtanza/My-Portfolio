import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('portfolio');
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

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur keranjang belanja, pembayaran, dan manajemen produk.',
      image: '/projects/ecommerce.svg',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      demoUrl: 'https://demo.com/ecommerce',
      githubUrl: 'https://github.com/username/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur drag-and-drop, kategori, dan kolaborasi tim.',
      image: '/projects/taskapp.svg',
      tags: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      demoUrl: 'https://demo.com/taskapp',
      githubUrl: 'https://github.com/username/taskapp'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard cuaca real-time dengan visualisasi data dan prediksi cuaca 7 hari ke depan.',
      image: '/projects/weather.svg',
      tags: ['React', 'D3.js', 'OpenWeather API', 'Styled Components'],
      demoUrl: 'https://demo.com/weather',
      githubUrl: 'https://github.com/username/weather'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className={`max-w-6xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-accent">Portfolio</span> Saya
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-primary/30 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-dark-text">{project.title}</h3>
                <p className="text-secondary dark:text-dark-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-300"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;