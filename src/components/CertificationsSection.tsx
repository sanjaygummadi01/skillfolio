const designCertifications = [
  { name: 'Google UX Design', issuer: 'Google', year: '2024' },
  { name: 'Interaction Design', issuer: 'IxDF', year: '2023' },
  { name: 'Advanced Figma', issuer: 'Figma Academy', year: '2023' },
];

const devCertifications = [
  { name: 'Meta Front-End Developer', issuer: 'Meta', year: '2024' },
  { name: 'React Advanced', issuer: 'Udemy', year: '2023' },
  { name: 'TypeScript Mastery', issuer: 'Frontend Masters', year: '2023' },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative bg-glow-radial">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="section-title text-center mb-16">Certifications</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Design Certifications */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-6 text-center">
              Design Certifications
            </h3>
            <div className="grid gap-4">
              {designCertifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="cert-badge opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <h4 className="font-heading font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    </div>
                    <span className="font-heading text-primary text-sm font-semibold">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Developer Certifications */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-accent mb-6 text-center">
              Developer Certifications
            </h3>
            <div className="grid gap-4">
              {devCertifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="cert-badge opacity-0 animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.15}s`,
                    borderColor: 'hsl(280 100% 60% / 0.3)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <h4 className="font-heading font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    </div>
                    <span className="font-heading text-accent text-sm font-semibold">{cert.year}</span>
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

export default CertificationsSection;
