import aboutImage from '@/assets/about-portrait.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-glow-radial">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="section-title text-center mb-16">About Me</h2>

        {/* Glass Panel Container */}
        <div className="glass-card-glow p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Passionate About Design & Code
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a creative professional with a deep passion for both UI/UX design and front-end development. 
                My journey began with a fascination for how beautiful interfaces can create meaningful connections 
                between users and digital products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in user research, wireframing, and prototyping, I design experiences that are 
                not only visually stunning but also intuitive and accessible. As a React developer, I bring 
                these designs to life with clean, maintainable code that performs flawlessly across all devices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe that the best digital products are born from the seamless fusion of design thinking 
                and technical excellence. This dual expertise allows me to bridge the gap between design and 
                development, ensuring pixel-perfect implementation every time.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary neon-text">5+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary neon-text">50+</div>
                  <div className="text-muted-foreground text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary neon-text">30+</div>
                  <div className="text-muted-foreground text-sm">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Right Side - Portrait */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Neon Frame */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                <div className="relative glass-card p-2 rounded-2xl" style={{ 
                  boxShadow: '0 0 30px hsl(180 100% 50% / 0.2), 0 0 60px hsl(280 100% 60% / 0.1)',
                  border: '1px solid hsl(180 100% 50% / 0.3)'
                }}>
                  <img
                    src={aboutImage}
                    alt="Sanjay working on design"
                    className="w-full max-w-sm rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
