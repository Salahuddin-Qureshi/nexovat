import chatAppImg from '../assets/images/ChatApp.png';
import devepochImg from '../assets/images/Devepoch.png';
import documentManagementImg from '../assets/images/Document Manament System.png';
import languageTranslatorImg from '../assets/images/Language Translator.png';
import pitpDashboardImg from '../assets/images/PITP Dashbaord.png';
import propertyManagementImg from '../assets/images/Property Managemet System.png';
import sukkurAcademyImg from '../assets/images/The Sukkur Academy.png';
import vailAirImg from '../assets/images/Vail Air.png';

export const projects = [
    {
        id: "chatapp",
        title: "Chatsapp",
        category: "Collaboration Platform",
        description: "A chat operating system for high-speed teams, orchestrating human and AI collaboration in one place.",
        fullDescription: "Chatsapp is the operating system for mission-critical conversations. It blends human empathy, AI velocity, and observable data into a single canvas so every conversation becomes momentum. Designed for teams who measure performance in minutes, it offers modular architecture, API-first integrations, and human-centred patterns.",
        challenge: "High-growth organizations struggle with fragmented chat, ticketing, and automation tooling. This leads to information silos, slow resolution times, and a lack of visibility across customer success, operations, and product teams.",
        solution: "We engineered a unified conversation graph where every interaction is captured structured data. The platform features lightning-fast presence powered by serverless websockets, AI copilots that live alongside teammates to summarize and automate, and enterprise-grade governance with zero-trust security.",
        results: [
            "38% faster resolution times using live presence and automation.",
            "Handles 2.1M messages per hour with 99.9% uptime.",
            "3.4x productivity lift for teams unifying chat + automation."
        ],
        image: chatAppImg,
        tags: ["WebSockets", "AI", "SaaS", "Enterprise"],
        techStack: [
            { name: "React", type: "Frontend" },
            { name: "Node.js", type: "Backend" },
            { name: "WebSockets", type: "Real-time" },
            { name: "AI/ML", type: "Intelligence" }
        ],
        gallery: [chatAppImg]
    },
    {
        id: "devepoch",
        title: "Devepoch",
        category: "Digital Agency Identity",
        description: "A digital showcase for a team of innovative developers and designers solving real-world problems.",
        fullDescription: "DEVEPOCH is a collective of developers, designers, and innovators founded by three friends with a shared passion for technology. We helped them establish a digital presence that reflects their commitment to excellence and ability to deliver quality IT services that drive business growth.",
        challenge: "As a new agency founded by diverse talents, Devepoch needed a unified brand voice and a digital platform that could clearly articulate their broad range of services—from development to design—without overwhelming potential clients.",
        solution: "We designed and developed a sleek, modern corporate website that puts their portfolio and culture front and center. The user experience was crafted to guide visitors from service discovery to contact effortlessly, representing their problem-solving approach.",
        results: [
            "Successfully launched brand identity for the founding team.",
            "Streamlined client intake process through optimized UX.",
            "Established a scalable platform for future case studies."
        ],
        image: devepochImg,
        tags: ["Agency", "Web Design", "Branding"],
        techStack: [
            { name: "React", type: "Frontend" },
            { name: "Tailwind CSS", type: "Styling" },
            { name: "Framer Motion", type: "Animation" }
        ],
        gallery: [devepochImg]
    },
    {
        id: "document-management-system",
        title: "Document Management System",
        category: "Enterprise Security",
        description: "A secure, protected environment for tracking and transferring critical documents across an organization.",
        fullDescription: "This advanced Document Management System (DMS) is designed for organizations that handle critical, sensitive data. It provides a protected environment for transferring documents from one location to another while maintaining a complete, immutable audit trail. Every action—who opened it, where, and when—is tracked in real-time.",
        challenge: "Organizations handling sensitive information often struggle with visibility and security when documents move between departments or stakeholders. Traditional methods lack granular tracking, leaving gaps in accountability and increasing the risk of unauthorized access.",
        solution: "We built a secure, role-based DMS with end-to-end encryption and comprehensive activity logging. The system tracks every interaction—from upload to final view—timestamps it, and allows administrators to monitor document lifecycle in real-time, ensuring complete chain of custody.",
        results: [
            "100% visibility into document chain of custody.",
            "Eliminated unauthorized access incidents for critical files.",
            "Streamlined compliance auditing with automated reporting."
        ],
        image: documentManagementImg,
        tags: ["Security", "Audit Trail", "Enterprise"],
        techStack: [
            { name: "React", type: "Frontend" },
            { name: "Node.js", type: "Backend" },
            { name: "PostgreSQL", type: "Database" },
            { name: "Encryption", type: "Security" }
        ],
        gallery: [documentManagementImg]
    },
    {
        id: "language-translator",
        title: "Language Translator",
        category: "AI & Tools",
        description: "Project description coming soon.",
        fullDescription: "Full details about the Language Translator project will be available shortly.",
        challenge: "Challenge details pending...",
        solution: "Solution details pending...",
        results: ["Result 1", "Result 2"],
        image: languageTranslatorImg,
        tags: ["AI", "Translation"],
        techStack: [{ name: "React", type: "Frontend" }],
        gallery: [languageTranslatorImg]
    },
    {
        id: "pitp-dashboard",
        title: "PITP Dashboard",
        category: "Analytics",
        description: "Project description coming soon.",
        fullDescription: "Full details about the PITP Dashboard will be available shortly.",
        challenge: "Challenge details pending...",
        solution: "Solution details pending...",
        results: ["Result 1", "Result 2"],
        image: pitpDashboardImg,
        tags: ["Dashboard", "Analytics"],
        techStack: [{ name: "React", type: "Frontend" }],
        gallery: [pitpDashboardImg]
    },
    {
        id: "property-management-system",
        title: "Property Management System",
        category: "Real Estate",
        description: "Project description coming soon.",
        fullDescription: "Full details about the Property Management System will be available shortly.",
        challenge: "Challenge details pending...",
        solution: "Solution details pending...",
        results: ["Result 1", "Result 2"],
        image: propertyManagementImg,
        tags: ["Real Estate", "Management"],
        techStack: [{ name: "React", type: "Frontend" }],
        gallery: [propertyManagementImg]
    },
    {
        id: "the-sukkur-academy",
        title: "The Sukkur Academy",
        category: "Education",
        description: "Project description coming soon.",
        fullDescription: "Full details about The Sukkur Academy will be available shortly.",
        challenge: "Challenge details pending...",
        solution: "Solution details pending...",
        results: ["Result 1", "Result 2"],
        image: sukkurAcademyImg,
        tags: ["Education", "Web"],
        techStack: [{ name: "React", type: "Frontend" }],
        gallery: [sukkurAcademyImg]
    },
    {
        id: "vail-air",
        title: "Vail Air",
        category: "Travel",
        description: "Project description coming soon.",
        fullDescription: "Full details about Vail Air will be available shortly.",
        challenge: "Challenge details pending...",
        solution: "Solution details pending...",
        results: ["Result 1", "Result 2"],
        image: vailAirImg,
        tags: ["Travel", "Booking"],
        techStack: [{ name: "React", type: "Frontend" }],
        gallery: [vailAirImg]
    }
];
