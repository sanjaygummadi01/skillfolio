import CertificateCard from './CertificateCard';
import certMicrosoft from '@/assets/UiuxCert-image.png';
import certIxdf from '@/assets/NotAvail-Messg.png';
import figmaBootcamp from '@/assets/NotAvail-Messg.png';
import certMeta from '@/assets/ReactCert-image.png';
import certIBM from '@/assets/WebDevCert-image.png';
import certBe10x from '@/assets/AIWShopCert-image.png';

const designCertifications = [
    {
    name: 'Fundamentals of UI/UX Design',
    issuer: 'Microsoft',
    // year: 'Open',
    image: certMicrosoft,
    verifyUrl: 'https://coursera.org/verify/77HSVINR00OG',
    description:
      'Certification from Microsoft covering UI/UX design principles, user-centered design methodology, wireframing, and usability best practices for digital product design.',
  },

  {
    name: 'Not Available',
    issuer: 'Google',
    // year: 'Open',
    image: certIxdf,
    verifyUrl: '#',
    description:
      'Comprehensive training in interaction design principles from the Interaction Design Foundation, covering user-centered design, usability, and creating engaging digital experiences that delight users.',
  },
    {
    name: 'Not Available',
    issuer: 'LetsUpgrade',
    // year: 'Open',
    image: figmaBootcamp,
    verifyUrl: '#', 
    description:
      '3-day intensive Figma bootcamp by LetsUpgrade focused on UI layout systems, auto-layout, components, prototyping, and real-world product design workflow. Certificate will be issued upon completion.',
  },

];

const devCertifications = [
  {
    name: 'React Advanced',
    issuer: 'Meta',
    // year: 'Open',
    image: certMeta,
    verifyUrl: 'https://coursera.org/verify/YFV38WP4NA', // <-- your real one
    description:
      'Professional certification from Meta covering Advanced React, and front-end development best practices for building modern web applications.',
  },
    {
    name: 'Web Development with HTML, CSS, JavaScript',
    issuer: 'IBM',
    // year: 'Open',
    image: certIBM,
    verifyUrl: 'https://coursera.org/verify/WPEKINVJ4PF',
    description:
      'Certification from IBM covering fundamentals of web development including HTML structure, CSS styling, and JavaScript programming for building responsive web applications.',
  },

    {
    name: 'AI Tools & ChatGPT Workshop',
    issuer: 'be10x',
    // year: 'Open',
    image: certBe10x,
    verifyUrl: 'https://certx.in/certificate/9318e7f9-0234-4ea4-9390-efad88624b8b262270', 
    description:
      'Hands-on workshop focused on practical AI productivity skills including ChatGPT usage, AI-assisted coding, data analysis, and presentation automation.',
  },

];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative bg-glow-radial">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-16 scroll-reveal">
          Certifications
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-6 text-center scroll-reveal" style={{ transitionDelay: '0.1s' }}>
              Design Certifications
            </h3>

            <div className="grid gap-4">
              {designCertifications.map((cert, index) => (
                <div key={cert.name} className="scroll-reveal" style={{ transitionDelay: `${0.2 + index * 0.15}s` }}>
                  <CertificateCard {...cert} variant="design" delay={0} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold text-accent mb-6 text-center scroll-reveal" style={{ transitionDelay: '0.1s' }}>
              Developer Certifications
            </h3>

            <div className="grid gap-4">
              {devCertifications.map((cert, index) => (
                <div key={cert.name} className="scroll-reveal" style={{ transitionDelay: `${0.2 + index * 0.15}s` }}>
                  <CertificateCard {...cert} variant="dev" delay={0} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
