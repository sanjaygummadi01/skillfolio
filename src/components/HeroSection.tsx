import heroPortrait from '@/assets/hero-portrait.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050B0E' }}
    >
      {/* Half-face portrait - tight crop, dramatic side lighting, blends into black */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={heroPortrait}
          alt="Sanjay Gummadi"
          className="absolute object-cover"
          style={{
            right: '-8%',
            top: '50%',
            transform: 'translateY(-42%) scale(1.6)',
            transformOrigin: '60% 30%',
            height: '100%',
            width: '60%',
            objectPosition: '50% 15%',
            filter: 'brightness(0.5) contrast(1.4) saturate(0.6)',
          }}
        />
        {/* Left fade - creates half-face shadow blending into background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #050B0E 0%, #050B0E 32%, rgba(5,11,14,0.85) 42%, rgba(5,11,14,0.4) 52%, rgba(5,11,14,0.1) 60%, transparent 68%)',
          }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #050B0E 0%, #050B0E 5%, transparent 25%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #050B0E 0%, #050B0E 3%, transparent 20%)',
          }}
        />
        {/* Right edge fade */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to left, #050B0E 0%, transparent 10%)',
          }}
        />
      </div>

      {/* Text content - left aligned */}
      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-2xl">
          <h1
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-wide text-foreground scroll-reveal ${isVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            I'm Sanjay Gummadi
          </h1>

          <h2
            className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide scroll-reveal ${isVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: '0.4s', color: 'hsl(var(--primary))' }}
          >
            UI/UX Designer &<br />React Developer
          </h2>

          <p
            className={`text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed scroll-reveal ${isVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: '0.6s' }}
          >
            Crafting pixel-perfect interfaces with intuitive user experiences.
            Bringing designs to life through clean, efficient React code.
          </p>

          <div
            className={`flex gap-4 scroll-reveal ${isVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: '0.8s' }}
          >
            <a
              href="/Sanjay_Gummadi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 font-heading font-semibold text-sm tracking-wider uppercase border-2 transition-all duration-300"
              style={{
                backgroundColor: 'hsl(var(--primary))',
                borderColor: 'hsl(var(--primary))',
                color: '#050B0E',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'hsl(var(--primary))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--primary))';
                e.currentTarget.style.color = '#050B0E';
              }}
            >
              Download CV
            </a>
            <a href="#contact" className="neon-btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
