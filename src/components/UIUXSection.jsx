import ProjectCard from './ProjectCard';
import project1 from '@/assets/SkillBridge-uiux.png';
import project2 from '@/assets/LocalMart-uiux.png';
import project3 from '@/assets/Portfolio-uiux.png';

const uiuxProjects = [
 {
    image: project1,
    title: 'AI Career Roadmap Platform',
    description: 'Guided learning experience helping users identify skill gaps and become job-ready through structured roadmaps.',
    primaryBtn: { label: 'Case Study', href: '#' },
    secondaryBtn: { label: 'UI Flow', href: '#' },
  },
  {
    image: project2,
    title: 'Local Grocery Marketplace',
    description: 'Mobile-first commerce experience connecting buyers, sellers, and delivery partners with a frictionless ordering flow.',
    primaryBtn: { label: 'Case Study', href: '#' },
    secondaryBtn: { label: 'UI Flow', href: '#' },
  },
  {
    image: project3,
    title: 'Developer Portfolio Website',
    description: 'Performance-focused personal website showcasing projects and technical skills with recruiter-friendly usability.',
    primaryBtn: { label: 'Case Study', href: '#' },
    secondaryBtn: { label: 'UI Flow', href: '#' },
  },
];

const UIUXSection = () => {
  return (
    <section id="uiux" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-4 scroll-reveal">UI/UX Case Studies</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
          Explore my design process and see how user-centered thinking transforms complex problems into elegant solutions.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiuxProjects.map((project, index) => (
            <div key={project.title} className="scroll-reveal" style={{ transitionDelay: `${0.2 + index * 0.15}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUXSection;
