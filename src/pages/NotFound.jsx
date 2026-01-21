import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import notFoundImage from '../assets/images/not_found_sad_mascot.png';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">404</h1>
                    <h2 className="text-3xl font-bold text-white mb-6">Page Empty...</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Looks like this page is feeling a bit empty inside. The content you're looking for has vanished into the digital void.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <Link
                            to="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-blue-500/25"
                        >
                            <Home className="w-5 h-5" /> Go Home
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors border border-white/10"
                        >
                            <ArrowLeft className="w-5 h-5" /> Report Issue
                        </Link>
                    </div>
                </div>

                {/* Illustration */}
                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transform scale-90"></div>
                        <img
                            src={notFoundImage}
                            alt="Sad 404 Mascot"
                            className="relative z-10 w-full max-w-sm drop-shadow-2xl animate-float"
                        />
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default NotFound;
