import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-slate-900">
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-semibold tracking-wider mb-6">
                        FUTURE OF TECHNOLOGY
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                        <span className="block text-white">Strategy Meets</span>
                        <span className="text-gradient">Innovation</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        We blend high-level business consulting with next-generation technology
                        to drive sustainable growth and digital transformation.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="group relative px-8 py-4 bg-blue-600 rounded-full text-white font-semibold overflow-hidden">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Project <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                        <Link to="/services" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors text-white font-semibold">
                            Explore Services
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Network Nodes */}
            <div className="absolute top-1/2 left-10 md:left-20 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-bounce delay-700"></div>
            <div className="absolute bottom-1/3 right-10 md:right-20 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)] animate-bounce"></div>
        </section>
    );
};

export default Hero;
