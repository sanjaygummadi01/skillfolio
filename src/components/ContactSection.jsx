import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_s52wj1f",   // service id
        "template_2mfvrvm",  // template id
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "RS2keAMyHWcYSCged"  // public key
      );

      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-glow-hero opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title text-center mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card-glow p-8 md:p-12">

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block font-heading text-sm mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="neon-input"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-heading text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="neon-input"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block font-heading text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="neon-input resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="neon-btn-primary w-full"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* SOCIAL LINKS */}
            <div className="mt-10 pt-8 border-t border-muted/30">
              <p className="text-muted-foreground text-center text-sm mb-6">
                Or connect with me on
              </p>

              <div className="flex justify-center gap-6">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sanjaygummadi-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass-card flex items-center justify-center hover:text-primary transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM3.555 9h3.564v11.452H3.555z"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/sanjaygummadi01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass-card flex items-center justify-center hover:text-primary transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.87 10.93c.58.1.79-.25.79-.56v-2.2c-3.2.7-3.87-1.38-3.87-1.38-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.75 2.7 1.24 3.35.95.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.45.11-3.02 0 0 .95-.31 3.1 1.18a10.7 10.7 0 0 1 5.64 0c2.14-1.49 3.1-1.18 3.1-1.18.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.07 0 4.4-2.7 5.36-5.27 5.64.41.35.78 1.04.78 2.1v3.1c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/the_devr01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass-card flex items-center justify-center hover:text-primary transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
                  </svg>
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;