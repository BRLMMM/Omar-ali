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
  }
};

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params object (Required in Next.js 15+)
  const resolvedParams = await params;
  
  // Simulate DB fetch based on the URL params
  // To test this page, the user must navigate to /projects/dentos
  const project = MOCK_DB[resolvedParams.slug];

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
        
        {/* Dynamic Project Hero */}
        <section className="relative w-full h-[80vh] flex items-end pb-24 px-6 md:px-24">
           <div className="absolute inset-0 z-0 opacity-40">
              <Image src={project.heroImage} alt={project.title} fill className="object-cover mix-blend-luminosity grayscale" priority sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
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
