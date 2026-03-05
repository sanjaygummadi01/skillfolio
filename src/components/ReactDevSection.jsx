import ProjectCard from './ProjectCard';
import reactProject1 from '@/assets/SkillBridge-uiux.png';
import reactProject2 from '@/assets/SmartAI.png';
import reactProject3 from '@/assets/DataViz.png';

const reactProjects = [
  {
    image: reactProject1,
    title: 'SkillBridge Learning Dashboard UI',
    description: 'Designed and developed a responsive multi-panel learning dashboard interface featuring modular cards, data widgets, and clean visual hierarchy. Focused on scalable component architecture, consistent spacing system, and modern SaaS-style layout for improved usability and clarity.',
    primaryBtn: { label: 'Go Live', href: 'https://sanjaygummadi01.github.io/skillbridgeai-project/' },
    secondaryBtn: { label: 'GitHub', href: 'https://github.com/sanjaygummadi01/skillbridgeai-project.git' },
  },

  {
    image: reactProject2,
    title: 'SmartAI Chat Interface',
    description: 'AI-powered chat application built as a responsive web app and packaged into a standalone Android APK. Features real-time conversational interface, optimized mobile navigation, and smooth performance for seamless standalone usage outside the browser.',
    primaryBtn: { label: 'Download APP', href: 'https://github.com/sanjaygummadi01/skillfolio/releases/download/v1.0.0/SmartAI-Chat.apk' },
    secondaryBtn: { label: 'GitHub', href: 'https://github.com/sanjaygummadi01/smartai-chat.git' },
  },
  {
    image: reactProject3,
    title: 'DataViz Dashboard',
    description: 'Interactive data visualization dashboard with charts, filters, and export functionality.',
    primaryBtn: { label: 'Go Live', href: 'https://sanjaygummadi01.github.io/analytics-dashboard/' },
    secondaryBtn: { label: 'GitHub', href: 'https://github.com/sanjaygummadi01/analytics-dashboard.git' },
  },
];

const ReactDevSection = () => {
  return (
    <section id="react-dev" className="py-24 relative bg-glow-radial">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4 scroll-reveal">React Front-End Development</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          Building performant, scalable web applications with React and modern JavaScript technologies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reactProjects.map((project, index) => (
            <div key={project.title} className="scroll-reveal" style={{ transitionDelay: `${0.2 + index * 0.15}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactDevSection;
