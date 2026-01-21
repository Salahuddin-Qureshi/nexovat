import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, ChevronRight, Menu, X, FileText } from 'lucide-react';

const TermsOfService = () => {
    const [activeSection, setActiveSection] = useState('agreement');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sections = [
        { id: 'agreement', title: '1. Agreement to Terms' },
        { id: 'intellectual-property', title: '2. Intellectual Property' },
        { id: 'user-reps', title: '3. User Representations' },
        { id: 'prohibited', title: '4. Prohibited Activities' },
        { id: 'liability', title: '5. Limitation of Liability' },
        { id: 'termination', title: '6. Termination' },
        { id: 'contact', title: '7. Contact Us' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Header offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-slate-900 min-h-screen text-slate-300">
            {/* Header / Hero */}
            <div className="bg-slate-950 text-white py-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 container">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4 text-purple-400">
                            <Scale className="w-6 h-6" />
                            <span className="font-semibold tracking-wide uppercase text-sm">Legal Center</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                            Please read these terms carefully before using our services. They define the rules and regulations for using NEXOVAT.
                        </p>
                        <p className="mt-4 text-sm text-slate-500">Last Updated: January 2, 2026</p>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="sticky top-0 z-30 bg-slate-900 border-b border-white/10 md:hidden p-4 flex justify-between items-center shadow-sm">
                <span className="font-semibold text-white">Table of Contents</span>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 relative">

                {/* Sidebar Navigation */}
                <aside className={`
                    fixed inset-0 z-20 bg-slate-900 md:bg-transparent md:static md:w-1/4 md:block
                    ${isMobileMenuOpen ? 'block' : 'hidden'}
                `}>
                    <div className="sticky top-24 p-6 md:p-0 h-full overflow-y-auto">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 hidden md:block">Contents</h3>
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`
                                        w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group
                                        ${activeSection === section.id
                                            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                        }
                                    `}
                                >
                                    {section.title}
                                    {activeSection === section.id && (
                                        <ChevronRight className="w-4 h-4 opacity-100" />
                                    )}
                                </button>
                            ))}
                        </nav>

                        <div className="mt-8 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20 hidden md:block">
                            <h4 className="font-bold text-white mb-2 text-sm">Downloads</h4>
                            <button className="flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300">
                                <FileText className="w-4 h-4" />
                                Download PDF Version
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="md:w-3/4 space-y-16">
                    <Section id="agreement" title="1. Agreement to Terms">
                        <p>
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and NEXOVAT (Private) Limited ("we," "us," or "our"), concerning your access to and use of the <strong>nexovat.com</strong> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                        </p>
                        <p>
                            You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. <strong className="text-white">IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
                        </p>
                    </Section>

                    <Section id="intellectual-property" title="2. Intellectual Property Rights">
                        <p>
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                        </p>
                        <div className="p-6 bg-white/5 rounded-xl border-l-4 border-purple-500 mt-4">
                            <p className="text-sm italic text-slate-300">
                                The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                            </p>
                        </div>
                    </Section>

                    <Section id="user-reps" title="3. User Representations">
                        <p>By using the Site, you represent and warrant that:</p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-400">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                            <li>You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site.</li>
                            <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                        </ul>
                    </Section>

                    <Section id="prohibited" title="4. Prohibited Activities">
                        <p>
                            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </p>
                        <p>As a user of the Site, you agree not to:</p>
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            {[
                                "Systematically retrieve data to create a database.",
                                "Trick, defraud, or mislead us or other users.",
                                "Circumvent, disable, or interfere with security features.",
                                "Disparage, tarnish, or otherwise harm us or the Site.",
                                "Use any information obtained from the Site to harass others.",
                                "Make improper use of our support services.",
                                "Engage in unauthorized framing of or linking to the Site.",
                                "Upload or transmit viruses or Trojan horses."
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20 text-red-200">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></div>
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section id="liability" title="5. Limitations of Liability">
                        <p>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>
                    </Section>

                    <Section id="termination" title="6. Termination">
                        <p>
                            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                        </p>
                    </Section>

                    <Section id="contact" title="7. Contact Us">
                        <p className="mb-6">
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h4 className="text-2xl font-bold text-white mb-2">NEXOVAT (Private) Limited</h4>
                            <div className="space-y-1 text-slate-400">
                                <p>Technology Park</p>
                                <p>Sukkur, Sindh, Pakistan</p>
                                <p className="mt-4">
                                    <span className="font-semibold text-white">Email:</span>{' '}
                                    <a href="mailto:legal@nexovat.com" className="text-purple-500 hover:text-purple-400">legal@nexovat.com</a>
                                </p>
                            </div>
                        </div>
                    </Section>
                </main>
            </div>
        </div>
    );
};

const Section = ({ id, title, children }) => (
    <section id={id} className="scroll-mt-32">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-4 border-b border-white/10">
            {title}
        </h2>
        <div className="text-slate-400 leading-8 text-lg space-y-6">
            {children}
        </div>
    </section>
);

export default TermsOfService;
