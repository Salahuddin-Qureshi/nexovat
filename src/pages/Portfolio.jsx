import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Github, Code2, Layers, Smartphone, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

import { projects } from '../data/projects';

const Portfolio = () => {
    // Projects data is now imported

    const caseStudies = [
        {
            client: "Global Logistics Co.",
            title: "Optimizing Supply Chain with Blockchain",
            result: "40% reduction in tracking discrepancies",
            icon: Layers
        },
        {
            client: "EdTech Startup",
            title: "Scaling Remote Learning Platforms",
            result: "Supported 500k+ concurrent users",
            icon: Monitor
        },
        {
            client: "Retail Giant",
            title: "Omnichannel Mobile Experience",
            result: "25% increase in mobile conversion",
            icon: Code2
        }
    ];

    return (
        <div className="bg-slate-900 min-h-screen">
            <PageHeader
                title="Our Work"
                subtitle="We build digital solutions that transform industries. Explore our latest projects and success stories."
            />

            {/* Featured Projects */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-slate-950/50 rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                            >
                                <div className="aspect-video overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 text-xs font-semibold bg-blue-600/90 text-white rounded-full backdrop-blur-sm shadow-lg">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        to={`/portfolio/${project.id}`}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                                    >
                                        View Case Study <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies / Results */}
            <section className="py-24 bg-slate-950 px-6 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Delivering Real Results</h2>
                        <p className="text-slate-400">
                            We don't just write code; we solve business problems. Here's how we've helped our clients achieve their goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                                    <study.icon className="w-6 h-6" />
                                </div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{study.client}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <p className="text-green-400 font-semibold text-lg">{study.result}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-12 border border-white/10">
                    <h2 className="text-3xl font-bold text-white mb-6">Have a Project in Mind?</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Let's discuss how we can help you build something extraordinary. Our team is ready to bring your vision to life.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
                    >
                        Start a Conversation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
