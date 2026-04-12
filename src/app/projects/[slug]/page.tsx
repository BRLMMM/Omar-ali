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
  'dentos': {
    id: 'proj-1',
    slug: 'dentos',
    title: 'DENTOS',
    category: 'SaaS Platform / ERP',
    year: '2024',
    client: 'Dentos Clinics',
    summary: 'A comprehensive, cloud-based practice management suite designed exclusively for modern dental clinics.',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80',
    blocks: [
      {
        id: 'block-1',
        type: 'problem_statement',
        title: 'FRAGGED DATA & REVENUE BLEED',
        problem: 'Before SEYAQ stepped in, Dentos Clinics operated on a fragmented system of outdated desktop software, paper files, and disjointed communication channels. The daily operations were a logistical nightmare. Staff spent roughly 30% of their workday just locating patient histories, leading to overcrowded waiting rooms and immense frustration. X-Rays were stored locally and frequently misplaced, forcing patients to accept unnecessary delays. Worst of all, the clinic had zero visibility into their financial health; billing was entirely manual, causing massive revenue bleed.',
        impact: 'This operational inefficiency translated to a 25% patient drop-off rate, uncollected invoices totaling thousands monthly, and staff burnout. The business was bleeding revenue and losing its reputation simply because the technology foundation was broken.'
      },
      {
        id: 'block-2',
        type: 'strategy_design',
        title: 'Building a Clinical OS',
        description: 'Our strategy was to treat the software not as a tool, but as an Operating System for the clinic.',
        solutionText: 'To stop the revenue bleed and organize the chaos, we designed a centralized architecture. The core solution relies on a global search function that brings any patient file up in under 0.2 seconds. We completely reimagined the UX: replacing standard forms with an interactive Digital Odontogram, making clinical note-taking 50% faster. By automating invoice generation at the end of each session, we mathematically eliminated forgotten charges.',
        assets: [
           { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80', alt: 'Wireframe phase', caption: 'Interactive Odontogram Blueprint' },
           { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80', alt: 'Final UI Mockup', caption: 'Patient Overview Dashboard' },
           { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80', alt: 'Mobile View', caption: 'Doctor Mobile App' }
        ]
      },
      {
        id: 'block-3',
        type: 'development_stack',
        title: 'THE ENGINE ROOM',
        description: 'Real-time syncing and heavy image processing required a robust, modern stack capable of handling heavy concurrent loads.',
        architectureDescription: 'Instead of building a monolithic app, we decoupled the frontend and backend. We used Next.js App Router for instant, SEO-optimized page loads, communicating via tRPC with a Node.js microservice architecture. The database layer utilizes Prisma over PostgreSQL for strict medical data integrity, while a managed Redis cache ensures that patient records load in literally milliseconds.',
        websiteUrl: 'https://dentos-demo.seyaq.com',
        technologies: [
          { name: 'Next.js 14', iconName: 'SiNextdotjs', reason: 'Used for Server-Side Rendering (SSR) to achieve near-instant initial load times and flawless SEO for the clinic landing pages.' },
          { name: 'TypeScript', iconName: 'SiTypescript', reason: 'Enforces strict end-to-end type safety, mathematically preventing runtime errors when handling sensitive medical dosages and records.' },
          { name: 'Node.js', iconName: 'FaNodeJs', reason: 'Powers the heavy-lifting microservices, handling incoming WhatsApp automations and invoice generations concurrently.' },
          { name: 'PostgreSQL', iconName: 'SiPostgresql', reason: 'The rock-solid relational database chosen specifically for its transactional integrity with patient billing and history.' }
        ],
        analytics: {
          performance: 99,
          accessibility: 100,
          bestPractices: 100,
          seo: 100,
          loadTime: '0.4s'
        }
      },
      {
        id: 'block-4',
        type: 'management_system',
        title: 'Total Clinic Control',
        description: 'We built a bespoke admin dashboard that gives clinic owners a God-mode overview of their business. Everything from financial forecasting to staff shift management is seamlessly integrated into one command center.',
        modules: [
          { name: 'Finance & Billing', description: 'Automated invoice generation, tax calculation, and real-time revenue analytics charts predicting monthly income.', icon: 'finance' },
          { name: 'Team & Employee Management', description: 'Granular Role-Based Access Control (RBAC), shift scheduling, biometric attendance tracking, and payroll processing.', icon: 'team' },
          { name: 'Patient CRM', description: 'Complete chronological history of patient journeys, integrated WhatsApp messaging, and dynamic digital medical records.', icon: 'crm' },
          { name: 'Inventory Alerts', description: 'Automated low-stock warnings for medical supplies, connected directly to vendor re-ordering systems.', icon: 'inventory' }
        ],
        screenshots: [
           { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80', caption: 'Main Financial Dashboard' },
           { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80', caption: 'Team Shift Management View' },
           { src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&q=80', caption: 'Live Analytics & Reporting' },
        ]
      },
      {
        id: 'block-5',
        type: 'infrastructure',
        title: 'Zero Downtime Architecture',
        description: 'Medical software cannot go offline. We engineered a scalable, multi-region architecture to ensure 100% availability during clinic hours.',
        tools: [
          { name: 'Cloud VPS Engine', description: 'Dedicated Virtual Private Servers configured with auto-scaling to handle morning traffic spikes.' },
          { name: 'NGINX Reverse Proxy', description: 'Load balances incoming traffic and acts as an impenetrable shield against DDoS attacks.' },
          { name: 'PM2 Process Manager', description: 'Ensures Node.js microservices stay alive indefinitely, automatically restarting on any failure.' },
          { name: 'Database Clustering', description: 'Master-Slave replication ensures data is backed up to off-site locations every 15 minutes.' }
        ],
        metrics: [
          { label: 'Uptime', value: '99.99%' },
          { label: 'Data Backups', value: 'HOURLY' },
          { label: 'Latency', value: '<50ms' },
          { label: 'Hosting', value: 'AWS' }
        ]
      }
    ]
  },
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
  // To test this page, the user must navigate to /projects/dentos
  const project = MOCK_DB[resolvedParams.slug.toLowerCase()];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <h1 className="text-4xl font-mono text-red-500">PROJECT NOT FOUND</h1>
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
        
        {/* Dynamic Project Hero - Logic check: {project.slug} */}
        <section className="relative w-full h-[80vh] flex items-end pb-24 px-6 md:px-24">
           <div className={`absolute inset-0 z-0 ${project.slug === 'khatwa' ? 'opacity-90' : 'opacity-40'}`}>
              <Image src={project.heroImage} alt={project.title} fill className="object-cover mix-blend-luminosity grayscale" priority sizes="100vw" />
              <div className={`absolute inset-0 bg-gradient-to-t from-[#050505] ${project.slug === 'khatwa' ? 'to-transparent' : 'via-[#050505]/80 to-transparent'}`} />
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

        {/* Related Projects Section */}
        <section className="w-full py-16 md:py-32 px-6 md:px-24 border-t border-white/10 bg-[#0a0a0a]">
          <div className="max-w-[100rem] mx-auto flex flex-col gap-12">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter" style={{ fontFamily: "'Impact', sans-serif" }}>
              RELATED WORK
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Related Project 1: Memoir */}
               <Link href="/projects/memoir" className="group relative w-full aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 block">
                 <div className="absolute inset-0 z-0 opacity-50 mix-blend-luminosity grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700">
                   <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80" alt="Memoir" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 50vw" />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
                 <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-2">
                   <span className="text-[#CCFF00] font-mono text-xs tracking-[0.2em] uppercase">2025 / Editorial</span>
                   <h3 className="text-4xl text-white font-serif group-hover:-translate-y-2 transition-transform duration-500">Memoir</h3>
                 </div>
               </Link>

               {/* Related Project 2: Fashion */}
               <Link href="/projects/fashion" className="group relative w-full aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 block">
                 <div className="absolute inset-0 z-0 opacity-50 mix-blend-luminosity grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700">
                   <Image src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80" alt="Fashion" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 50vw" />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
                 <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-2">
                   <span className="text-[#CCFF00] font-mono text-xs tracking-[0.2em] uppercase">2024 / E-Commerce</span>
                   <h3 className="text-4xl text-white font-serif group-hover:-translate-y-2 transition-transform duration-500">Fashion Next</h3>
                 </div>
               </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Sticky Revealed Footer */}
      <div className="sticky bottom-0 left-0 w-full h-[100dvh] z-0">
        <ContactFooter />
      </div>

    </main>
  );
}
