import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronRight, Menu, X } from 'lucide-react';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sections = [
        { id: 'introduction', title: '1. Introduction' },
        { id: 'information-collection', title: '2. Information We Collect' },
        { id: 'use-of-information', title: '3. Use of Your Information' },
        { id: 'disclosure', title: '4. Disclosure of Information' },
        { id: 'security', title: '5. Security of Your Information' },
        { id: 'cookies', title: '6. Cookies and Tracking' },
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

    // Spy on scroll to update active section
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
                        <div className="flex items-center gap-3 mb-4 text-blue-400">
                            <Shield className="w-6 h-6" />
                            <span className="font-semibold tracking-wide uppercase text-sm">Legal Center</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                            We believe in transparency. This policy outlines how NEXOVAT collects, uses, and protects your data.
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
                                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
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

                        <div className="mt-8 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 hidden md:block">
                            <h4 className="font-bold text-white mb-2 text-sm">Need help?</h4>
                            <p className="text-xs text-slate-400 mb-3">
                                If you have any questions about our privacy practices, please contact our legal team.
                            </p>
                            <a href="mailto:legal@nexovat.com" className="text-xs font-semibold text-blue-400 hover:text-blue-300">
                                Contact Legal Team &rarr;
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="md:w-3/4 space-y-16">
                    <Section id="introduction" title="1. Introduction">
                        <p>
                            NEXOVAT (Private) Limited ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>nexovat.com</strong> including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
                        </p>
                        <p>
                            We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site.
                        </p>
                    </Section>

                    <Section id="information-collection" title="2. Information We Collect">
                        <p>
                            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li>
                                <strong className="text-slate-200">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site.
                            </li>
                            <li>
                                <strong className="text-slate-200">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                            </li>
                            <li>
                                <strong className="text-slate-200">Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.
                            </li>
                        </ul>
                    </Section>

                    <Section id="use-of-information" title="3. Use of Your Information">
                        <p>
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            {[
                                "Create and manage your account.",
                                "Process your orders and payments.",
                                "Email you regarding your account.",
                                "Enable user-to-user communications.",
                                "Generate a personal profile about you.",
                                "Monitor and analyze usage and trends.",
                                "Notify you of updates to the Site.",
                                "Request feedback and contact you."
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/30 transition-colors">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section id="disclosure" title="4. Disclosure of Information">
                        <p>
                            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                        </p>
                        <h4 className="font-bold text-white mt-6 mb-2">By Law or to Protect Rights</h4>
                        <p>
                            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                        </p>
                        <h4 className="font-bold text-white mt-6 mb-2">Third-Party Service Providers</h4>
                        <p>
                            We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                        </p>
                    </Section>

                    <Section id="security" title="5. Security of Your Information">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="flex items-center gap-2 font-bold text-white mb-4">
                                <Shield className="w-5 h-5 text-green-500" />
                                Data Protection Measures
                            </h4>
                            <p className="mb-4 text-sm text-slate-300">
                                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                            </p>
                            <p className="text-sm font-medium text-slate-200">
                                We do not store credit card details on our servers. All payments are processed through secure, PCI-DSS compliant payment gateways.
                            </p>
                        </div>
                    </Section>

                    <Section id="cookies" title="6. Cookies and Tracking">
                        <p>
                            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology.
                        </p>
                    </Section>

                    <Section id="contact" title="7. Contact Us">
                        <p className="mb-6">
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h4 className="text-2xl font-bold text-white mb-2">NEXOVAT (Private) Limited</h4>
                            <div className="space-y-1 text-slate-400">
                                <p>Technology Park</p>
                                <p>Sukkur, Sindh, Pakistan</p>
                                <p className="mt-4">
                                    <span className="font-semibold text-white">Email:</span>{' '}
                                    <a href="mailto:privacy@nexovat.com" className="text-blue-500 hover:text-blue-400">privacy@nexovat.com</a>
                                </p>
                                <p>
                                    <span className="font-semibold text-white">Phone:</span>{' '}
                                    <span className="text-slate-400">+92 311 3588345</span>
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

export default PrivacyPolicy;
