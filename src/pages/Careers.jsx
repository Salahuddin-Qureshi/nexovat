import PageHeader from '../components/PageHeader';
import { Briefcase, MapPin, Clock, ArrowRight, Star, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
    const benefits = [
        { icon: Star, title: "Competitive Salary", desc: "Top-tier compensation packages." },
        { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health coverage." },
        { icon: Users, title: "Great Culture", desc: "Collaborative and inclusive environment." },
        { icon: Clock, title: "Flexible Hours", desc: "Work-life balance matters to us." },
    ];

    const positions = [
        {
            title: "Senior Full Stack Engineer",
            department: "Engineering",
            location: "Remote / Sukkur, Sindh",
            type: "Full-time",
            description: "We are looking for an experienced developer to lead our core product team."
        },
        {
            title: "UI/UX Designer",
            department: "Design",
            location: "Sukkur, Sindh",
            type: "Full-time",
            description: "Create stunning user experiences for our next-gen enterprise solutions."
        },
        {
            title: "DevOps Engineer",
            department: "Infrastructure",
            location: "Remote",
            type: "Contract",
            description: "Help us build and maintain scalable cloud infrastructure."
        }
    ];

    return (
        <div className="bg-slate-900 min-h-screen">
            <PageHeader
                title="Join Our Team"
                subtitle="Build the future with us. We're looking for passionate individuals to solve complex problems."
            />

            {/* Benefits */}
            <section className="py-20 px-6 bg-slate-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Why NEXOVAT?</h2>
                        <p className="text-slate-400">More than just a job, it's a calling.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {benefits.map((b, i) => (
                            <div key={i} className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full text-blue-400 mb-4">
                                    <b.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                                <p className="text-sm text-slate-400">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Open Positions</h2>
                    </div>

                    <div className="space-y-4">
                        {positions.map((job, i) => (
                            <div key={i} className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all cursor-pointer">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-3">
                                            <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                                        </div>
                                        <p className="text-slate-500 text-sm">{job.description}</p>
                                    </div>
                                    <div className="shrink-0">
                                        <button className="flex items-center gap-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-lg transition-colors">
                                            Apply Now <ArrowRight className="w-4 h-4" />
                                        </button>
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

export default Careers;
