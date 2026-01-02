import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';
import teamImage from '../assets/images/team_innovation.png';

const About = () => {
    return (
        <div className="bg-slate-900 min-h-screen">
            <PageHeader
                title="Who We Are"
                subtitle="We are architects of the digital future, driven by innovation and strategic foresight."
            />

            {/* Story Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
                            <img src={teamImage} alt="Our Team Innovating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-50"></div>
                    </div>

                    <div>
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                            OUR STORY
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Redefining <span className="text-gradient">Next Innovation</span>
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                <strong>NEXOVAT</strong> stands for "Next Innovation". The name reflects our core philosophy:
                                technology never sleeps, and neither do we. We are constantly looking ahead, predicting trends,
                                and preparing our clients for what's to come.
                            </p>
                            <p>
                                Founded by industry veterans, we saw a gap in the market for a technology partner that offers
                                not just coding services, but true strategic guidance. The final 'e' in "Innovate" was
                                deliberately omitted to create a distinctive, modern brand identity that speaks to our
                                commitment to efficiency and digital-first thinking.
                            </p>
                            <p>
                                From humble beginnings to serving national and international clients, our journey has been
                                defined by a relentless pursuit of excellence and a passion for solving complex problems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                    <div className="glass p-10 rounded-3xl border border-blue-500/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target className="w-32 h-32 text-blue-500" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 text-blue-400">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To empower businesses with forward-thinking technology solutions that drive growth, efficiency,
                                and sustainable competitive advantage in a rapidly evolving digital landscape.
                            </p>
                        </div>
                    </div>

                    <div className="glass p-10 rounded-3xl border border-purple-500/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Eye className="w-32 h-32 text-purple-500" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8 text-purple-400">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To be the global partner of choice for next-generation software development and strategic
                                IT consulting, recognized for our innovation, quality, and integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Our Core Values</h2>
                    <div className="grid md:grid-cols-4 gap-8 text-left">
                        {[
                            { title: "Innovation", desc: "We constantly challenge the status quo." },
                            { title: "Integrity", desc: "Honesty and transparency in all we do." },
                            { title: "Excellence", desc: "We never settle for 'good enough'." },
                            { title: "Client Focus", desc: "Your success is our success." }
                        ].map((val, i) => (
                            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
                                <CheckCircle className="text-blue-500 mb-4 w-6 h-6" />
                                <h4 className="text-xl font-bold text-white mb-2">{val.title}</h4>
                                <p className="text-gray-400 text-sm">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
