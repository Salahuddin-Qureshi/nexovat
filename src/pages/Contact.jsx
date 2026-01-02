import PageHeader from '../components/PageHeader';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-slate-900 min-h-screen">
            <PageHeader
                title="Contact Us"
                subtitle="Ready to start your next project? We're here to help you navigate the future."
            />

            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Our Office</h3>
                                    <p className="text-gray-400">Technology Park, Islamabad<br />Pakistan</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                                    <p className="text-gray-400">+92 300 1234567<br />Mon - Fri, 9am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                                    <p className="text-gray-400">info@nexovat.com<br />support@nexovat.com</p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Snippet */}
                        <div className="mt-16 pt-16 border-t border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                <details className="group">
                                    <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-300 hover:text-white">
                                        <span>Do you work with international clients?</span>
                                        <span className="transition group-open:rotate-180">+</span>
                                    </summary>
                                    <p className="mt-2 text-gray-500">Yes, we serve clients globally offering remote collaboration and 24/7 support availability.</p>
                                </details>
                                <details className="group">
                                    <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-300 hover:text-white">
                                        <span>What is your typical project timeline?</span>
                                        <span className="transition group-open:rotate-180">+</span>
                                    </summary>
                                    <p className="mt-2 text-gray-500">Timelines vary by scope, but a typical web application takes 4-8 weeks from discovery to launch.</p>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass p-10 rounded-3xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Service Interest</label>
                                <select className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors">
                                    <option>Software Development</option>
                                    <option>IT Consulting</option>
                                    <option>Cloud Services</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                By sending this form you agree to our privacy policy.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
