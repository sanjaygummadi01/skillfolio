// import { useState } from "react";
// import { createPortal } from "react-dom";

// const CertificateCard = ({
//   name,
//   issuer,
//   year,
//   image,
//   description,
//   variant = 'design',
//   delay = 0,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const accentColor = variant === 'design' ? 'primary' : 'accent';
//   const borderStyle = variant === 'dev' ? { borderColor: 'hsl(280 100% 60% / 0.3)' } : {};

//   return (
//     <>
//       <div
//         onClick={() => setIsOpen(true)}
//         className="cert-badge opacity-0 animate-fade-in cursor-pointer group"
//         style={{ animationDelay: `${delay}s`, ...borderStyle }}
//       >
//         <div className="flex items-center gap-4">
//           <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-border/50 group-hover:border-primary/50 transition-colors">
//             <img src={image} alt={`${name} certificate`} className="w-full h-full object-cover" />
//           </div>
//           <div className="flex-1 text-left">
//             <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h4>
//             <p className="text-muted-foreground text-sm">{issuer}</p>
//           </div>
//           <span className={`font-heading text-${accentColor} text-sm font-semibold`}>{year}</span>
//           <div className="opacity-0 group-hover:opacity-100 transition-opacity">
//             <svg className={`w-5 h-5 text-${accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {isOpen && createPortal(
//         <div
//           className="fixed inset-0 flex items-center justify-center p-4"
//           style={{ zIndex: 9999 }}
//           onClick={() => setIsOpen(false)}
//         >
//           <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
//           <div
//             className="relative w-full max-w-2xl p-6 rounded-xl animate-fade-in"
//             style={{
//               background: 'hsl(var(--background))',
//               border: '1.5px solid hsl(180 100% 50% / 0.5)',
//               boxShadow: '0 0 20px hsl(180 100% 50% / 0.15), 0 0 60px hsl(180 100% 50% / 0.08), inset 0 0 20px hsl(180 100% 50% / 0.03)',
//               zIndex: 10000,
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
//               style={{ border: '1.5px solid hsl(180 100% 50% / 0.6)', color: 'hsl(180 100% 50%)' }}
//               aria-label="Close"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>

//             <div className="mb-4">
//               <h3 className="font-heading text-2xl text-foreground">{name}</h3>
//               <p className="text-muted-foreground">Issued by {issuer} • {year}</p>
//             </div>

//             <div className="space-y-4">
//               <div className="rounded-lg overflow-hidden" style={{ border: '1px solid hsl(180 100% 50% / 0.3)', boxShadow: '0 0 15px hsl(180 100% 50% / 0.1)' }}>
//                 <img src={image} alt={`${name} full certificate`} className="w-full h-auto object-contain" />
//               </div>
//               <div className="p-4 rounded-lg" style={{ background: 'hsl(180 100% 50% / 0.03)', border: '1px solid hsl(180 100% 50% / 0.15)' }}>
//                 <h4 className="font-heading text-sm font-semibold text-primary mb-2">About this certification</h4>
//                 <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
//               </div>
//             </div>
//           </div>
//         </div>,
//         document.body
//       )}
//     </>
//   );
// };

// export default CertificateCard;




// import CertificateCard from './CertificateCard';

// import certGoogleUx from '@/assets/UiuxCert-image.png';
// import certIxdf from '@/assets/cert-ixdf.png';
// import certFigma from '@/assets/cert-figma.png';
// import certMeta from '@/assets/ReactCert-image.png';
// import certReact from '@/assets/cert-react.png';
// import certTypescript from '@/assets/cert-typescript.png';

// const designCertifications = [
//   {
//     name: 'Microsoft Ui/Ux Design',
//     issuer: 'Microsoft',
//     year: '2024',
//     image: certGoogleUx,
//     description: 'Professional certification in UX design covering the end-to-end design process including empathizing with users, defining pain points, ideating solutions, creating wireframes and prototypes, and conducting usability testing.',
//   },
//   {
//     name: 'Interaction Design',
//     issuer: 'IxDF',
//     year: '2023',
//     image: certIxdf,
//     description: 'Comprehensive training in interaction design principles from the Interaction Design Foundation, covering user-centered design, usability, and creating engaging digital experiences that delight users.',
//   },
//   {
//     name: 'Advanced Figma',
//     issuer: 'Figma Academy',
//     year: '2023',
//     image: certFigma,
//     description: 'Advanced certification in Figma covering complex prototyping, design systems, component variants, auto-layout mastery, and collaborative design workflows for enterprise teams.',
//   },
// ];

// const devCertifications = [
//   {
//     name: 'Meta React Advanced',
//     issuer: 'Meta',
//     year: '2024',
//     image: certMeta,
//     description: 'Professional certification from Meta covering HTML, CSS, JavaScript, React, version control, and front-end development best practices for building modern web applications.',
//   },
//   {
//     name: 'React Advanced',
//     issuer: 'Udemy',
//     year: '2023',
//     image: certReact,
//     description: 'Advanced React certification covering hooks, context API, Redux, performance optimization, testing, and building scalable React applications with modern patterns.',
//   },
//   {
//     name: 'TypeScript Mastery',
//     issuer: 'Frontend Masters',
//     year: '2023',
//     image: certTypescript,
//     description: 'Comprehensive TypeScript certification covering advanced types, generics, decorators, type guards, and integrating TypeScript with React for type-safe front-end development.',
//   },
// ];

// const CertificationsSection = () => {
//   return (
//     <section id="certifications" className="py-24 relative bg-glow-radial">
//       <div className="container mx-auto px-6">
//         <h2 className="section-title text-center mb-16 scroll-reveal">Certifications</h2>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div>
//             <h3 className="font-heading text-xl font-semibold text-primary mb-6 text-center scroll-reveal" style={{ transitionDelay: '0.1s' }}>
//               Design Certifications
//             </h3>
//             <div className="grid gap-4">
//               {designCertifications.map((cert, index) => (
//                 <div key={cert.name} className="scroll-reveal" style={{ transitionDelay: `${0.2 + index * 0.15}s` }}>
//                   <CertificateCard {...cert} variant="design" delay={0} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="font-heading text-xl font-semibold text-accent mb-6 text-center scroll-reveal" style={{ transitionDelay: '0.1s' }}>
//               Developer Certifications
//             </h3>
//             <div className="grid gap-4">
//               {devCertifications.map((cert, index) => (
//                 <div key={cert.name} className="scroll-reveal" style={{ transitionDelay: `${0.2 + index * 0.15}s` }}>
//                   <CertificateCard {...cert} variant="dev" delay={0} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CertificationsSection;



 
            /* /* <div className="mt-10 pt-8 border-t border-muted/30">
              <p className="text-muted-foreground text-center text-sm mb-6">Or connect with me on</p>
              <div className="flex justify-center gap-6">
                <a href="https://www.linkedin.com/in/sanjaygummadi-dev" className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group" aria-label="LinkedIn" style={{ boxShadow: '0 0 10px hsl(180 100% 50% / 0.1)' }}>
                  <svg className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(180,100%,50%)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/sanjaygummadi01" className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group" aria-label="GitHub" style={{ boxShadow: '0 0 10px hsl(180 100% 50% / 0.1)' }}>
                  <svg className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(180,100%,50%)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/the_devr01?igsh=MWl2d2Noa3FkeThwag==" className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group" aria-label="Instagram" style={{ boxShadow: '0 0 10px hsl(180 100% 50% / 0.1)' }}>
                  <svg className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(180,100%,50%)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
              </div>
            </div> */ 
