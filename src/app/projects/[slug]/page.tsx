'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { ProjectData } from '@/types/project';
import BlockRenderer from '@/components/project-blocks/BlockRenderer';
import Image from 'next/image';
import ContactFooter from '@/components/ContactFooter';
import Link from 'next/link';

import CustomCursor from '@/components/CustomCursor';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

// MOCK LOCAL DATABASE FOR TESTING THE BLOCK RENDERER
// In the future CMS, this will be fetched via Prisma/Database based on the `[slug]` from params.
const MOCK_DB: Record<string, ProjectData> = {
  'khatwa': {
    id: 'proj-2',
    slug: 'khatwa',
    title: 'KHATWA',
    category: 'OPERATIONAL ERP / CORPORATE WEBSITE / 2026',
    year: '2026',
    client: 'Khatwa Agency',
    summary: 'A complete digital transformation for a rapidly growing educational consultancy. I engineered a high-converting web presence paired with a custom role-based ERP to automate complex student workflows and scale their operations.',
    websiteUrl: 'https://khatwa-study.com/',
    heroImage: '/khatwa-study.png',
    blocks: [
      {
        id: 'block-1',
        type: 'problem_statement',
        title: 'RAPID GROWTH & MANUAL CHAOS',
        trendLabel: 'OPERATIONAL BOTTLENECK',
        problem: 'Before we stepped in, Khatwa was a victim of its own rapid success. They were attracting a massive volume of students, but managing them through a completely fragmented, manual system. The daily operations were quickly becoming an administrative nightmare. The team struggled to track complex student travel pipelines for destinations like Turkey and Poland. Student files, application statuses, and follow-ups were scattered across different channels, making it nearly impossible to manage the pipeline efficiently. Furthermore, Khatwa lacked a professional digital storefront to establish market authority. Decision-makers had zero visibility into real-time analytics, forcing them to run a growing business based on guesswork rather than solid data.',
        impact: 'Without a centralized ERP and a modern web presence, the team was overwhelmed by manual tasks, increasing the risk of dropping qualified leads. The business had outgrown its own processes, and the lack of automated tracking was strictly capping their ability to scale further.'
      },
      {
        id: 'block-2',
        type: 'strategy_design',
        title: 'Engineering the Digital Storefront',
        description: 'My strategy was to treat the website not just as a static brochure, but as a high-converting digital storefront that builds instant market authority.',
        solutionText: 'Before writing any code, I mapped out the entire student discovery journey. I designed a modern, visually striking UI that breaks away from traditional, boring corporate sites to immediately grab attention and build trust. The wireframing process focused on intuitive navigation. I structured dedicated, highly-optimized destination hubs for Turkey and Poland, ensuring students find exactly what they need in seconds. By integrating a seamless CMS for blogs and FAQs, we crafted a frictionless user experience that naturally guides visitors from their first click straight into the consultation pipeline.',
        websiteUrl: 'https://khatwa-study.com/',
        assets: [
           { src: '/khatwa-design.png', alt: 'VISUAL IDENTITY', caption: 'Building Trust Through Modern Design' },
           { src: '/khatwa-design2.png', alt: 'DESTINATION HUBS', caption: 'Highly-Optimized Student Funnels' },
           { src: '/khatwa-design3.png', alt: 'FRONTEND ARCHITECTURE', caption: 'Intuitive Navigation & Performance' }
        ]
      },
      {
        id: 'block-3',
        type: 'development_stack',
        title: 'THE DIGITAL ENGINE',
        description: 'To ensure Khatwa dominates search results and provides an instant browsing experience, I built a decoupled, high-performance frontend. Utilizing Next.js for server-side rendering, we achieved near-instant page loads and flawless SEO. The UI is constructed with Tailwind CSS, ensuring a fully responsive, pixel-perfect brutalist design that looks crisp on any device. The entire storefront is deployed on a robust infrastructure to handle traffic spikes effortlessly.',
        architectureDescription: 'FULL-STACK ARCHITECTURE',
        websiteUrl: 'https://khatwa-study.com/',
        technologies: [
          { name: 'Next.js', iconName: 'SiNextdotjs', reason: 'Utilized for Server-Side Rendering (SSR) to guarantee blazing-fast initial load times and flawless SEO for the public storefront.' },
          { name: 'Tailwind CSS', iconName: 'SiTailwindcss', reason: 'The core styling engine used to rapidly architect a custom, responsive Brutalist design system with zero performance bloat.' },
          { name: 'Node.js', iconName: 'FaNodeJs', reason: "Powers the robust custom backend and RESTful APIs, ensuring secure, high-speed data delivery for the website's dynamic content and CMS." },
          { name: 'PostgreSQL & Prisma', iconName: 'SiPostgresql', reason: 'The rock-solid relational database and ORM layer engineered to manage and serve destination guides, blogs, and FAQs efficiently.' }
        ],
        analytics: {
          performance: 99,
          accessibility: 100,
          bestPractices: 100,
          seo: 100,
          loadTime: '0.3s'
        }
      },
      {
        id: 'block-4',
        type: 'management_system',
        title: 'Total Operational Control',
        description: "I built a bespoke, role-based ERP dashboard that gives Khatwa's management ultimate oversight of their business. Everything from complex student travel workflows to sales team tracking and automated reminders is seamlessly integrated into one unified command center.",
        modules: [
          { name: 'Smart Student CRM', description: 'A centralized database tracking complete student histories, intelligently categorizing qualified and unqualified leads for targeted follow-ups.', icon: 'crm' },
          { name: 'Custom Travel Workflows', description: 'Dedicated, step-by-step automated pipelines for different destinations (Turkey & Poland), ensuring zero logistical errors during the travel process.', icon: 'workflows' },
          { name: 'Sales Script Library', description: 'Empowering the sales team with a categorized, instantly searchable database of response scripts to handle objections and close deals faster.', icon: 'sales' },
          { name: 'Automated Scheduling', description: 'Synchronized calendar system to track client calls and meetings, paired with an automated reminder engine so no task is ever forgotten.', icon: 'scheduling' },
          { name: 'Team & Access Control', description: 'Complete employee management featuring strict Role-Based Access Control (RBAC), ensuring data security and clear operational boundaries.', icon: 'team' },
          { name: 'Executive Analytics', description: 'Replacing guesswork with real-time data. A God-mode dashboard providing managers with actionable statistics to drive business growth.', icon: 'analytics' }
        ],
        screenshots: [
           { src: '/khatwa-system.png', caption: 'Executive Dashboard & Analytics' },
           { src: '/khatwa-system2.png', caption: 'Centralized Team Management' },
           { src: '/khatwa-system3.png', caption: 'Automated Student Training Pipelines' },
           { src: '/khatwa-system4.png', caption: 'Smart Student CRM Interface' },
           { src: '/khatwa-system5.png', caption: 'Automated Scheduling & Meeting Manager' },
           { src: '/kahtwa-system6.png', caption: 'Categorized Sales Script Library' },
        ]
      },
      {
        id: 'block-5',
        type: 'infrastructure',
        title: 'ZERO DOWNTIME ARCHITECTURE',
        description: 'An operational ERP managing international student travel and daily sales cannot afford a single minute of downtime. I engineered a robust, secure server architecture to ensure 100% availability, keeping Khatwa’s internal operations and public storefront running flawlessly 24/7.',
        tools: [
          { name: 'Dedicated VPS Engine', description: 'Deployed on a high-performance Virtual Private Server, fully optimized to handle heavy concurrent database queries from the team without a single drop in performance.' },
          { name: 'NGINX Reverse Proxy', description: 'Configured as an impenetrable reverse proxy to efficiently route incoming traffic, enforce strict SSL encryption, and shield the backend from malicious requests.' },
          { name: 'PM2 Process Manager', description: 'The heartbeat of the Node.js backend. Configured with automated zero-downtime restarts and advanced log management to guarantee the system stays alive indefinitely.' },
          { name: 'PostgreSQL & Data Security', description: 'The core relational database is strictly isolated. Engineered with automated backup protocols to guarantee absolutely zero data loss for sensitive student records and operational data.' }
        ]
      }
    ]
  }
};

export default function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  // Use React.use to resolve params in a Client Component (Next.js 15+)
  const resolvedParams = use(params);
  
  // Simulate DB fetch based on the URL params
  const project = MOCK_DB[resolvedParams.slug.toLowerCase()];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white relative overflow-hidden font-mono">
        <div className="fixed inset-0 pointer-events-none z-50 noise-overlay" />
        
        {/* Massive Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <h1 className="text-[40vw] font-black tracking-tighter" style={{ fontFamily: "'Impact', sans-serif" }}>
            LOST
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex flex-col items-center gap-8 text-center px-6"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[#CCFF00] text-xs md:text-sm tracking-[0.5em] uppercase font-bold">Error / 404</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none" style={{ fontFamily: "'Impact', sans-serif" }}>
              Project <br />Not Found
            </h1>
          </div>
          
          <p className="text-zinc-500 text-sm md:text-lg max-w-md leading-relaxed">
            The transmission was interrupted. This project either doesn't exist or has been moved to a restricted archive.
          </p>

          <Link 
            href="/"
            className="group relative mt-4 px-12 py-5 bg-[#CCFF00] text-black font-black text-sm uppercase tracking-[0.3em] rounded-sm overflow-hidden transition-all duration-300 hover:pr-16"
          >
            <span className="relative z-10">Back to Reality</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xl">&rarr;</span>
          </Link>
        </motion.div>

        {/* Decorative corner elements */}
        <div className="absolute top-12 left-12 w-24 h-[1px] bg-white/10 hidden md:block" />
        <div className="absolute top-12 left-12 h-24 w-[1px] bg-white/10 hidden md:block" />
        <div className="absolute bottom-12 right-12 w-24 h-[1px] bg-white/10 hidden md:block" />
        <div className="absolute bottom-12 right-12 h-24 w-[1px] bg-white/10 hidden md:block" />
      </div>
    );
  }

  return (
    <main className="relative w-full min-h-[100dvh] bg-[#050505] text-white selection:bg-[#CCFF00] selection:text-black">
      
      {/* Custom cursor & Floating WhatsApp */}
      <CustomCursor />
      <FloatingWhatsApp />

      {/* Noise overlay for texture */}
      <div className="fixed inset-0 pointer-events-none z-50 noise-overlay" />
      
      {/* Main Content Wrapper (scrolls over the sticky footer) */}
      <div className="relative z-10 bg-[#050505] w-full pb-2 md:pb-0">
        
        {/* Dynamic Project Hero */}
        <section className="relative w-full h-[80vh] flex items-end pb-24 px-6 md:px-24">
           <div className="absolute inset-0 z-0 opacity-90">
              <Image src={project.heroImage} alt={project.title} fill className="object-cover mix-blend-luminosity grayscale" priority sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
           </div>
           
           <div className="relative z-10 flex flex-col gap-4 max-w-4xl">
              <div className="flex items-center gap-4 text-[#CCFF00] font-mono text-xs tracking-[0.3em] uppercase">
                 <span>{project.category}</span>
                 <span>/</span>
                 <span>{project.year}</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]" style={{ fontFamily: "'Impact', sans-serif" }}>
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 font-light mt-4 max-w-2xl">
                {project.summary}
              </p>

              {project.websiteUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Link 
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#CCFF00] text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.2)]"
                  >
                    Visit Live Site
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </Link>
                </motion.div>
              )}
           </div>
        </section>

        {/* BLOCK RENDERER */}
        <div className="px-6 md:px-24 max-w-[100rem] mx-auto pb-16">
          <BlockRenderer blocks={project.blocks} />
        </div>
      </div>

      {/* Sticky Revealed Footer */}
      <div className="sticky bottom-0 left-0 w-full h-[100dvh] z-0">
        <ContactFooter />
      </div>

    </main>
  );
}
