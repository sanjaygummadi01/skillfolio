import CertificateCard from './CertificateCard';
import certmicrosoft from '@/assets/UiuxCert-image.png';
import GenAiCert from '@/assets/AipromptCert.png';
import ClaudeCert from '@/assets/Claude_Cert.png';
import certMeta from '@/assets/ReactCert-image.png';
import certIBM from '@/assets/WebDevCert-image.png';
import certBe10x from '@/assets/AIWShopCert-image.png';


const designCertifications = [
    {
    name: 'Fundamentals of UI/UX Design',
    issuer: 'Microsoft',
    // year: 'Open',
    image: certmicrosoft,
    verifyUrl: 'https://coursera.org/verify/77HSVINROOOG',
    description:
      'Certification from Microsoft covering UI/UX design principles, user-centered design methodology, wireframing, and usability best practices for digital product design.',
  },

  {
  name: 'Generative AI: Prompt Engineering Basics',
  issuer: 'IBM',
  // year: '2026',
  image: GenAiCert,
  verifyUrl: 'https://coursera.org/verify/3FLRCDTRNMHH',
  description:
    'IBM-certified course covering prompt engineering fundamentals, effective prompt design techniques, AI interaction strategies, and practical methods for generating accurate and high-quality outputs from generative AI models.',
},
   {
  name: 'Claude 101',
  issuer: 'Anthropic',
  // year: '2026',
  image: ClaudeCert,
  verifyUrl: '#',
  description:
    'Successfully completed Claude 101 by Anthropic, gaining foundational knowledge of Claude AI, conversational prompting, AI-assisted task execution, and best practices for using generative AI tools effectively in real-world scenarios.',
},

];

const devCertifications = [
  {
  name: 'Web Development with HTML, CSS, JavaScript',
  issuer: 'IBM',
  // year: 'Open',
  image: certIBM,
  verifyUrl: 'https://coursera.org/verify/WPREKINVJ4PF',
  description:
    'Certification from IBM covering fundamentals of web development including HTML structure, CSS styling, and JavaScript programming for building responsive web applications.',
  },
  {
    name: 'Advanced React',
    issuer: 'Meta',
    // year: 'Open',
    image: certMeta,
    verifyUrl: 'https://coursera.org/verify/XJYPF38WP2NA', // <-- your real one
    description:
      'Professional certification from Meta covering Advanced React, and front-end development best practices for building modern web applications.',
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
