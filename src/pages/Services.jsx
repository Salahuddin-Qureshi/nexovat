import { Code, Server, Lightbulb, TrendingUp, Shield, Globe, Database, Smartphone, Cloud, Cpu, Briefcase, Presentation, BarChart } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            icon: <Presentation className="w-10 h-10 text-emerald-400" />,
            title: "Business Strategy & Consulting",
            desc: "Expert guidance to align technology with your business goals. We analyze your workflows to identify opportunities for growth and efficiency.",
            features: ["Digital Transformation", "Workflow Optimization", "ROI Analysis", "Tech Roadmap Planning"]
        },
        {
            icon: <Code className="w-10 h-10 text-blue-400" />,
            title: "Custom Software Development",
            desc: "Tailor-made software solutions that perfectly align with your business processes. From enterprise ERPs to specialized management systems.",
            features: ["Web Applications", "Desktop Software", "API Development", "Legacy Modernization"]
        },
        {
            icon: <Smartphone className="w-10 h-10 text-purple-400" />,
            title: "Mobile App Development",
            desc: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.",
            features: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"]
        },
        {
            icon: <Cloud className="w-10 h-10 text-cyan-400" />,
            title: "Cloud & DevOps",
            desc: "Scalable cloud infrastructure setup and automated CI/CD pipelines to ensure faster and reliable software delivery.",
            features: ["AWS/Azure/GCP", "Kubernetes", "Docker", "CI/CD Implementation"]
        },
        {
            icon: <Database className="w-10 h-10 text-indigo-400" />,
            title: "Data Analytics & AI",
            desc: "Turn your data into actionable insights. We build intelligent systems using Machine Learning and Big Data technologies.",
            features: ["Predictive Analytics", "Business Intelligence", "Machine Learning", "Data Warehousing"]
        },
        {
            icon: <Shield className="w-10 h-10 text-red-400" />,
            title: "Cybersecurity Solutions",
            desc: "Comprehensive security audits and implementation to protect your digital assets from evolving threats.",
            features: ["Penetration Testing", "Security Audits", "Compliance", "Network Security"]
        },
        {
            icon: <Cpu className="w-10 h-10 text-teal-400" />,
            title: "IoT & Smart Solutions",
            desc: "Connect your physical devices to the digital world. We assist in building smart ecosystems for industry and consumer use.",
            features: ["Smart Hardware Integration", "IoT Dashboards", "Sensor Networks", "Real-time Monitoring"]
        }
    ];

    return (
        <div className="bg-slate-900 min-h-screen">
            <PageHeader
                title="Our Services"
                subtitle="End-to-end technology solutions designed to accelerate your digital transformation journey."
            />

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-blue-500/30"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed min-h-[80px]">
                                {service.desc}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Every business is unique. Let's discuss your specific challenges and how we can solve them.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-colors">
                        Get a Free Consultation
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;
