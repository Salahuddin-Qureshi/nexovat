import chatAppImg from '../assets/images/ChatApp.png';
import devepochImg from '../assets/images/Devepoch.png';
import documentManagementImg from '../assets/images/Document Manament System.png';
import languageTranslatorImg from '../assets/images/Language Translator.png';
import pitpDashboardImg from '../assets/images/PITP Dashbaord.png';
import propertyManagementImg from '../assets/images/Property Managemet System.png';
import sukkurAcademyImg from '../assets/images/The Sukkur Academy.png';
import vailAirImg from '../assets/images/Vail Air.png';
import teamInnovationImg from '../assets/images/team_innovation.png';

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
    },
    {
        id: "preventing-violent-extremism",
        title: "Preventing Violent Extremism",
        category: "Social Impact",
        description: "Empowering youth and females in Sindh and Baluchistan through entrepreneurship and soft skills.",
        fullDescription: "Funded by the EU and implemented in coordination with UNODC and NACTA Pakistan, this project focuses on preventing violent extremism by empowering youth and women. The initiative provides training in entrepreneurship, soft skills, and future job skills to foster economic independence and social cohesion.",
        challenge: "Vulnerable youth and women in Sindh and Baluchistan face limited economic opportunities, making them more susceptible to extremist narratives.",
        solution: "We implemented a comprehensive capacity-building program focusing on entrepreneurship and soft skills to provide viable economic alternatives and positive community engagement.",
        results: [
            "Empowered youth and women across Sindh and Baluchistan.",
            "Delivered training on future job skills.",
            "Strengthened community resilience against extremism."
        ],
        image: teamInnovationImg,
        tags: ["Social Impact", "UNODC", "Youth Empowerment"],
        techStack: [
            { name: "Entrepreneurship", type: "Skill" },
            { name: "Soft Skills", type: "Skill" },
            { name: "Future Job Skills", type: "Skill" }
        ],
        gallery: [teamInnovationImg]
    },
    {
        id: "youth-eco-development",
        title: "Youth Eco-Development",
        category: "Green Entrepreneurship",
        description: "Training and incubation for eco-friendly business ventures in the Mirpurkhas Region.",
        fullDescription: "This project identifies youth from the Mirpurkhas Region to provide trainings and incubation for venture plan development. It enables them to design eco-friendly business ideas addressing climate change.",
        challenge: "Climate change poses a significant threat, and there is a need to engage youth in sustainable economic activities.",
        solution: "A targeted incubation program that equips youth with the skills to launch green enterprises.",
        results: [
            "Conducted multiple training sessions.",
            "Incubated eco-friendly venture plans.",
            "Addressed local climate change issues through business."
        ],
        image: teamInnovationImg,
        tags: ["Green Tech", "Entrepreneurship", "Climate Change"],
        techStack: [
            { name: "Entrepreneurship", type: "Skill" },
            { name: "Incubation", type: "Process" }
        ],
        gallery: [teamInnovationImg]
    },
    {
        id: "unicef-sta-deep",
        title: "UNICEF - STA-DEEP",
        category: "Education Development",
        description: "Capacity development monitoring & evaluation for the Sindh Technical Assistance.",
        fullDescription: "As Team Lead for the European Union’s STA-DEEP Project awarded by UNICEF to EDC Sukkur IBA University, this project focuses on capacity development, monitoring & evaluation frameworks, and enhancing education programs.",
        challenge: "The educational sector in Sindh requires robust technical assistance and monitoring to ensure effective delivery of development goals.",
        solution: "Development and delivery of technical assistance frameworks and capacity building modules.",
        results: [
            "Enhanced monitoring & evaluation frameworks.",
            "Delivered extensive capacity development training.",
            "Supported EU and UNICEF education goals."
        ],
        image: teamInnovationImg,
        tags: ["UNICEF", "Education", "Analysis"],
        techStack: [
            { name: "Research", type: "Skill" },
            { name: "Analysis", type: "Skill" },
            { name: "Project Management", type: "Skill" }
        ],
        gallery: [teamInnovationImg]
    },
    {
        id: "regional-youth-digital-skills",
        title: "Regional Youth Digital Skills",
        category: "Research & Policy",
        description: "Evaluating digital skill gaps among youth in South and East Asia for the Commonwealth Secretariat.",
        fullDescription: "Led a project awarded by the Commonwealth Secretariat to evaluate digital skill gaps among youth in South and East Asia. The project suggested strategies and programs for digital skills development to bridge the divide.",
        challenge: "Rapid digitalization has left gaps in youth skills in South and East Asia, requiring evidence-based strategies to address them.",
        solution: "conducted a comprehensive evaluation of skill gaps and formulated strategic recommendations for policymakers.",
        results: [
            "Mapped digital skill gaps across the region.",
            "Proposed actionable strategies for skills development.",
            "Informed policy for the Commonwealth Secretariat."
        ],
        image: teamInnovationImg,
        tags: ["Research", "Policy", "Digital Skills"],
        techStack: [
            { name: "Research", type: "Skill" },
            { name: "Analysis", type: "Skill" },
            { name: "Proposal Writing", type: "Skill" }
        ],
        gallery: [teamInnovationImg]
    },
    {
        id: "guesss-pakistan",
        title: "GUESSS Pakistan",
        category: "Research Lead",
        description: "Leading the Pakistani segment of the Global University Entrepreneurial Spirit Student Survey.",
        fullDescription: "As Country Representative/Team Lead, led the Pakistani segment of GUESSS in collaboration with Sukkur IBA University and partner universities. Responsible for developing national insights into student entrepreneurship.",
        challenge: "Understanding the entrepreneurial spirit and intentions of students on a national scale.",
        solution: "Coordinated a large-scale survey and analysis effort across multiple universities.",
        results: [
            "Successfully led the national survey segment.",
            "Collaborated with partner universities.",
            "Generated key insights for entrepreneurship education."
        ],
        image: teamInnovationImg,
        tags: ["Research", "Entrepreneurship", "Survey"],
        techStack: [
            { name: "Research", type: "Skill" },
            { name: "Analysis", type: "Skill" },
            { name: "Project Management", type: "Skill" }
        ],
        gallery: [teamInnovationImg]
    },
    {
        id: "teacher-training-project",
        title: "4000 School Teacher Training",
        category: "Education Training",
        description: "Training 4,000 teachers in Science, English, Math, and Social Studies.",
        fullDescription: "Headed the EDC and Sindh Education Foundation initiative to train 4,000 teachers in Science, English, Math, and Social Studies, effectively strengthening content knowledge and pedagogical skills.",
        challenge: "Improving the quality of education requires large-scale upskilling of teachers in core subjects.",
        solution: "Designed and executed a massive training program covering 4,000 teachers.",
        results: [
            "Trained 4,000 teachers.",
            "Enhanced pedagogical skills.",
            "Strengthened content knowledge in core subjects."
        ],
        image: teamInnovationImg,
        tags: ["Training", "Education", "Capacity Building"],
        techStack: [
            { name: "Training", type: "Skill" },
            { name: "Project Management", type: "Skill" },
            { name: "Pedagogy", type: "Skill" }
        ],
        gallery: [teamInnovationImg]
    },
    {
        id: "research-excellence-framework",
        title: "Research Excellence Framework",
        category: "Higher Education Policy",
        description: "Developing a Research Excellence Framework (REF) for HEC Pakistan.",
        fullDescription: "This project aims to develop a Research Excellence Framework (REF) for Pakistan's Higher Education Commission (HEC) in collaboration with experts. It focuses on research evaluation and policy improvement.",
        challenge: "Establishing a standardized and effective framework for evaluating research excellence in Pakistan.",
        solution: "Collaborative development of the REF with international experts and local stakeholders.",
        results: [
            "Developing the REF for HEC Pakistan.",
            "Collaboration with British Council.",
            "Setting standards for research evaluation."
        ],
        image: teamInnovationImg,
        tags: ["Policy", "Research", "HEC"],
        techStack: [
            { name: "Research", type: "Skill" },
            { name: "Policy Making", type: "Skill" }
        ],
        gallery: [teamInnovationImg]
    }
];
