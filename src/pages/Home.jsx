import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiNodedotjs, SiPython, SiKubernetes, SiPostgresql } from 'react-icons/si';

import { Code, Server, Lightbulb, TrendingUp, Shield, Globe, Briefcase, Layers, Users, Zap, CheckCircle } from 'lucide-react';



import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero_tech.png';
import mobileImage from '../assets/images/mobile_dev.png';
import aiImage from '../assets/images/ai_data.png';
import cloudImage from '../assets/images/cloud_devops.png';
import consultingImage from '../assets/images/team_innovation.png';

const Home = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8 text-blue-400" />,
            title: "Software Development",
            desc: "Custom-tailored software solutions designed to drive efficiency and scalability."
        },
        {
            icon: <Server className="w-8 h-8 text-purple-400" />,
            title: "IT Solutions",
            desc: "Comprehensive infrastructure management, cloud integration, and technical support."
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
            title: "Strategic Consulting",
            desc: "Expert guidance to align your technology roadmap with business objectives."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-green-400" />,
            title: "Digital Transformation",
            desc: "Modernizing legacy systems to meet the demands of the digital age."
        },
        {
            icon: <Shield className="w-8 h-8 text-red-400" />,
            title: "Cybersecurity",
            desc: "Robust protection strategies to safeguard your digital assets and data."
        },
        {
            icon: <Globe className="w-8 h-8 text-indigo-400" />,
            title: "Global Connectivity",
            desc: "Bridging boundaries with solutions that serve national and international clients."
        }
    ];

    const industries = [
        { name: "FinTech", icon: <TrendingUp /> },
        { name: "HealthTech", icon: <Users /> },
        { name: "E-Commerce", icon: <Globe /> },
        { name: "Education", icon: <Lightbulb /> },
        { name: "Real Estate", icon: <Briefcase /> },
        { name: "Logistics", icon: <Layers /> },
    ];

    const process = [
        { title: "Discovery", desc: "We analyze your business goals and technical requirements." },
        { title: "Strategy", desc: "Designing a roadmap tailored to your specific needs." },
        { title: "Development", desc: "Agile engineering with top-tier code quality." },
        { title: "Launch", desc: "Seamless deployment and ongoing support." },
    ];

    return (
        <div className="bg-slate-900 min-h-screen">
            <Hero />

            {/* Featured Solutions - NEW IMAGES CONTEXT */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 space-y-32">
                    {/* Business Consulting - NEW */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 relative group">
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>
                            <img src={consultingImage} alt="Strategic Consulting" className="relative rounded-2xl shadow-2xl border border-white/10 w-full hover:scale-[1.02] transition-transform duration-500" />
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Strategic Business Consulting</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Technology is only as good as the strategy behind it. Our expert consultants
                                analyze your business model, identify bottlenecks, and design comprehensive
                                digital roadmaps that align with your long-term goals.
                            </p>
                            <ul className="space-y-3">
                                {['Digital Transformation Strategy', 'Workflow Optimization', 'Market Analysis & Growth'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Dev */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="flex-1 relative group">
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>
                            <img src={mobileImage} alt="Mobile Development" className="relative rounded-2xl shadow-2xl border border-white/10 w-full hover:scale-[1.02] transition-transform duration-500" />
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Next-Gen Mobile Experiences</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We craft immersive mobile applications that redefine user engagement.
                                Using cutting-edge frameworks like Flutter and React Native, we deliver
                                seamless, high-performance apps across all platforms.
                            </p>
                            <ul className="space-y-3">
                                {['Cross-Platform Compatibility', 'Intuitive UI/UX Design', 'Real-time Features'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* AI & Data */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 relative group">
                            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl group-hover:bg-cyan-500/30 transition-colors duration-500"></div>
                            <img src={aiImage} alt="AI & Data" className="relative rounded-2xl shadow-2xl border border-white/10 w-full hover:scale-[1.02] transition-transform duration-500" />
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Intelligent Data Solutions</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Unlock the power of your data with our advanced AI and analytics services.
                                From predictive modeling to neural networks, we turn complex data into
                                actionable business intelligence.
                            </p>
                            <ul className="space-y-3">
                                {['Machine Learning Models', 'Big Data Analytics', 'Process Automation'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Cloud */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="flex-1 relative group">
                            <div className="absolute inset-0 bg-purple-500/20 blur-3xl group-hover:bg-purple-500/30 transition-colors duration-500"></div>
                            <img src={cloudImage} alt="Cloud & DevOps" className="relative rounded-2xl shadow-2xl border border-white/10 w-full hover:scale-[1.02] transition-transform duration-500" />
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-white">Scalable Cloud Infrastructure</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Build resilient and scalable infrastructure with our Cloud & DevOps expertise.
                                We ensure your applications are secure, always available, and ready to grow
                                with your business.
                            </p>
                            <ul className="space-y-3">
                                {['Cloud Migration', 'CI/CD Pipelines', 'Security & Compliance'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            <span className="text-white">Our </span>
                            <span className="text-gradient">Core Expertise</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Delivering forward-thinking solutions that empower your business to thrive in a connected world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 group bg-gradient-to-br from-white/5 to-transparent"
                            >
                                <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section - NEW */}
            <section className="py-24 bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Transforming Industries</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {industries.map((ind, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-4 hover:border-blue-500/50 transition-colors cursor-pointer"
                            >
                                <div className="text-blue-400">{ind.icon}</div>
                                <span className="font-semibold text-gray-300">{ind.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision / About Highlight */}
            <section className="py-24 bg-slate-800/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Why <span className="text-blue-500">NEX</span>OVAT?
                        </h2>
                        <div className="space-y-6 text-lg text-gray-300">
                            <p>
                                The name <strong>NEXOVAT</strong> is derived from "Next" and "Innovation".
                                It symbolizes our commitment to staying ahead of the curve.
                            </p>
                            <p>
                                We don't just build software; we architect the future. Our team combines technical
                                prowess with strategic insight to deliver solutions that are not only functional
                                but transformative.
                            </p>
                            <ul className="space-y-4 mt-6">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-blue-500 w-6 h-6" />
                                    <span>Forward-Thinking Strategies</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-purple-500 w-6 h-6" />
                                    <span>Cutting-Edge Technologies</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-cyan-500 w-6 h-6" />
                                    <span>Client-Centric Approach</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-1">
                            <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${heroImage})` }}></div>
                                <div className="relative z-10 text-center p-8">
                                    <h3 className="text-5xl font-bold text-white mb-2">100+</h3>
                                    <p className="text-gray-400">Projects Delivered</p>
                                    <div className="mt-8 flex justify-center gap-8">
                                        <div>
                                            <h4 className="text-3xl font-bold text-white">98%</h4>
                                            <p className="text-sm text-gray-500">Client Retention</p>
                                        </div>
                                        <div>
                                            <h4 className="text-3xl font-bold text-white">24/7</h4>
                                            <p className="text-sm text-gray-500">Support System</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - NEW */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">How We Work</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-8xl font-bold text-white/5 absolute -top-10 left-0 -z-10 font-sans">0{index + 1}</div>
                                <h3 className="text-xl font-bold text-blue-400 mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.desc}</p>
                                {index < 3 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/10"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section - NEW */}
            <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Powered by <span className="text-gradient">Modern Tech</span></h2>
                </div>

                {/* Tech Scroller */}
                <div className="space-y-12 relative z-10 overflow-hidden">

                    {/* Frontend Row */}
                    <div>
                        <h3 className="text-center text-gray-400 text-sm font-semibold tracking-wider uppercase mb-8">Frontend & Mobile</h3>
                        <div className="flex relative overflow-hidden w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-900 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-slate-900 after:to-transparent">
                            <motion.div
                                className="flex gap-8 whitespace-nowrap"
                                animate={{ x: [0, -1000] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 30,
                                    ease: "linear"
                                }}
                            >
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="flex gap-8">
                                        {[
                                            { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
                                            { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
                                            { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
                                            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                                            { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" /> },
                                            { name: 'React Native', icon: <SiReact className="text-[#61DAFB]" /> },
                                        ].map((tech, index) => (
                                            <div key={index} className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-xl font-bold text-gray-300 backdrop-blur-sm min-w-[200px] justify-center">
                                                <span className="text-3xl">{tech.icon}</span>
                                                <span>{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Backend Row */}
                    <div>
                        <h3 className="text-center text-gray-400 text-sm font-semibold tracking-wider uppercase mb-8">Backend & Cloud</h3>
                        <div className="flex relative overflow-hidden w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-900 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-slate-900 after:to-transparent">
                            <motion.div
                                className="flex gap-8 whitespace-nowrap"
                                animate={{ x: [-1000, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 35,
                                    ease: "linear"
                                }}
                            >
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="flex gap-8">
                                        {[
                                            { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
                                            { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
                                            { name: 'Kubernetes', icon: <SiKubernetes className="text-[#326CE5]" /> },
                                            { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
                                        ].map((tech, index) => (
                                            <div key={index} className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-xl font-bold text-gray-300 backdrop-blur-sm min-w-[200px] justify-center">
                                                <span className="text-3xl">{tech.icon}</span>
                                                <span>{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section - NEW */}
            <section className="py-24 bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">What Our <span className="text-blue-500">Clients Say</span></h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="glass p-8 rounded-2xl relative group">
                                <div className="absolute -top-4 -left-4 text-6xl text-blue-500/20 font-serif">"</div>
                                <p className="text-gray-300 mb-6 relative z-10 italic">
                                    "The team at NEXOVAT delivered beyond our expectations. Their attention to detail and ability to translate our vision into reality was impressive."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
                                    <div>
                                        <h4 className="text-white font-semibold">Client Name</h4>
                                        <p className="text-sm text-gray-500">CEO, Tech Company</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
