import { Cpu, Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-2 rounded-lg">
                                <Cpu className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold tracking-wide text-white">
                                NEXOVAT
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Pioneering the digital frontier with next-generation innovation and strategic solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-500 hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link></li>
                            <li><Link to="/portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">Portfolio</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><span className="text-gray-400">Software Development</span></li>
                            <li><span className="text-gray-400">IT Consultancy</span></li>
                            <li><span className="text-gray-400">Cloud Solutions</span></li>
                            <li><span className="text-gray-400">Strategic Management</span></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                <span>Technology Park, Sukkur, Sindh, Pakistan</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>+92 311 3588345</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>info@nexovat.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; 2026 NEXOVAT (Private) Limited. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
