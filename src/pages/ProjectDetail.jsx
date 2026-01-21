import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, Layers, Code2, Cpu } from 'lucide-react';
import { projects } from '../data/projects';
import PageHeader from '../components/PageHeader';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        if (!project) {
            navigate('/portfolio');
        }
    }, [project, navigate]);

    if (!project) return null;

    return (
        <div className="bg-slate-900 min-h-screen">
            {/* Custom Hero Section */}
            <div className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                                {project.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                {project.fullDescription}
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                                    Visit Live Site <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            {/* Floating Tech Stack Card */}
                            <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur border border-white/10 p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                    <Code2 className="w-4 h-4 text-purple-400" /> Technology Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-black/30 text-slate-300 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Case Study Content */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Challenge */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="w-1.5 h-8 bg-gradient-to-b from-red-500 to-orange-600 rounded-full"></span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">The Challenge</h2>
                            </div>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                {project.challenge}
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full"></span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">The Solution</h2>
                            </div>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                {project.solution}
                            </p>
                        </div>

                        {/* Results */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="w-1.5 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Key Results</h2>
                            </div>
                            <div className="grid gap-4">
                                {project.results.map((result, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                        <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                        <p className="text-slate-300">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gallery */}
                        <div className="space-y-6 pt-8">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Project Gallery</h2>
                            </div>
                            <div className="grid gap-8">
                                {project.gallery.map((img, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                        <img src={img} alt={`Gallery ${i}`} className="w-full h-auto" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Sidebar / Info */}
                    <div className="space-y-8">
                        <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/10 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6">Project Info</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-2">Client Category</h4>
                                    <p className="text-white flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-blue-500" /> {project.category}
                                    </p>
                                </div>
                                <div className="w-full h-px bg-white/10"></div>
                                <div>
                                    <h4 className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-2">Tech Stack</h4>
                                    <div className="grid grid-cols-1 gap-2">
                                        {project.techStack.map((tech, i) => (
                                            <div key={i} className="flex items-center justify-between text-sm">
                                                <span className="text-white">{tech.name}</span>
                                                <span className="text-slate-500 text-xs">{tech.type}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full h-px bg-white/10"></div>
                                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors">
                                    Start a Project Like This
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
