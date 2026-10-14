
const experiences = [
    {
        id: 9,
        department: "School of Engineering and Applied Sciences",
        lab: "WIRES Lab",
        faculty: "Roshan Ayyalasomayajula",
        title: "SEAS Undergraduate Research Experience (SURE) Intern",
        start: "May 2026",
        end: "Present",
        webpage: null,
        webpageLink: null,
        description: [
            "Designed a differentially private framework for collaborative WiFi-based indoor localization, where multiple access points work together to locate a device while stopping a central server from pinpointing their exact position.",
            "Desgining and building upon FedWiLoc architecture to add a verification layer to make the localization system resilient to malicous servers.",
        ],
        type: 'research',
        showInResearch: true,
    },
    {
        id: 8,
        department: "Computer Science Department",
        lab: "ESC Lab",
        faculty: "Dr. Wenyao Xu",
        title: "Research Assistant",
        start: "May 2026",
        end: "Present",
        webpage: null,
        webpageLink: null,
        description: [
            "Contributed to mRehab, a mobile rehabilitation app that helps post-stroke patients rebuild mobility and independence by guiding them through therapy exercises at home, no clinic visit required.",
            "Worked on improving the tracking algorithms and local AI features to improve accessibilty and user experience."        
        ],
        type: 'research',
        showInResearch: true,
    },
    {
        id: 10,
        department: "Computer Science Department @ University at Buffalo",
        title: "Undergraduate Teaching Assistant - Real Time and Embedded Operating Systems",
        start: "August 2026",
        end: "Present",
        webpage: null,
        webpageLink: null,
        description: [
            "Assited Dr. Naeem Maroof as undergraduate teaching assistant for CSE 321 (Real Time and Embedded Operating Systems).",
            "Held weekly office hours and fielded questions on Piazza to help students debug their Python implementations and build a solid grasp of the math and intuition behind each algorithm.",
            "Graded projects and exams while giving clear, actionable feedback, helping students connect machine learning theory to hands-on, real-world problem solving."
        ],
        type: 'ta',
        showInResearch: true,
    },
    {
        id: 7,
        department: "Computer Science Department @ University at Buffalo",
        title: "Undergraduate Teaching Assistant - Machine Learning",
        start: "May 2026",
        end: "August 2026",
        webpage: null,
        webpageLink: null,
        description: [
            "Assited Dr. Bakr Albahri as undergraduate teaching assistant for CSE 574 (Machine Learning).",
            "Supported students across core ML topics including supervised and unsupervised learning, decision trees, neural networks, SVMs, and reinforcement learning.",
            "Held weekly office hours and fielded questions on Piazza to help students debug their Python implementations and build a solid grasp of the math and intuition behind each algorithm.",
        ],
        type: 'ta',
        showInResearch: true,
    },
    {
        id: 6,
        department: "Computer Science Department @ University at Buffalo",
        title: "Undergraduate Teaching Assistant - Computer Organization",
        start: "January 2026",
        end: "August 2026",
        webpage: null,
        webpageLink: null,
        description: [
            "Assited Dr. Bakr Albahri as undergraduate teaching assistant for CSE 341 (Computer Organization).",
            "Assisted students understand MIPS assembly and instruction set architecture to datapath/control unit design, ALU design, pipelining, and the memory hierarchy.",
            "Guided students with writing and debugging MIPS programs in QtSpim, and modeling and simulating digital and processor systems with behavioral and structural VHDL on EDA Playground.",
        ],
        type: 'ta',
        showInResearch: true,
    },
    {
        id: 5,
        department: "ATHLYNK",
        title: "Full-Stack Software Developer Intern",
        start: "August 2025",
        end: "November 2025",
        webpage: null,
        webpageLink: null,
        description: [
            "Engineered scalable end-to-end mobile architectures utilizing React Native and TypeScript for the frontend, alongside a high-performance FastAPI backend.",
            "Architected and integrated a real-time WebSocket-based messaging system to enable seamless and concurrent user-to-user communication.",
            "Designed RESTful APIs and optimized complex CRUD operations utilizing PostgreSQL and Supabase, ensuring robust data management.",
            "Streamlined cross-functional integration and maintained software reliability through rigorous code reviews within an Agile development environment."
        ],
        type: 'intern',
        showInResearch: true,
    },
    {
        id: 4,
        department: "Tutoring & Academic Support Services",
        title: "Peer-Assisted Learning (PAL) Leader",
        start: "August 2024",
        end: "August 2025",
        webpage: "PAL Webpage",
        webpageLink: "https://www.acsu.buffalo.edu/~hetpatel/STA-119/",
        description: [
            "Facilitated targeted Peer-Assisted Learning sessions to solidify advanced concepts in Statistical Methods, cultivating robust analytical and quantitative skills.",
            "Collaborated with instructors to align session materials with core statistical curriculum and empirical analysis techniques.",
            "Directed interactive, data-driven review sessions to enhance critical problem-solving capabilities and theoretical retention."
        ],
        type: 'other',
        showInResearch: false,
    },
    {
        id: 3,
        department: "Math Place",
        title: "Mathematics Tutor",
        start: "January 2024",
        end: "August 2025",
        webpage: null,
        webpageLink: null,
        description: [
            "Delivered analytical and technical tutoring across complex mathematical disciplines, adapting instructional methodologies for quantitative analysis.",
            "Mentored students in developing independent, logic-driven problem-solving strategies essential for computational mathematics.",
            "Supported academic progression by building foundational confidence and promoting rigorous mathematical proofing and calculation techniques."
        ],
        type: 'other',
        showInResearch: false,
    },
    {
        id: 2,
        department: "Arthur O. Eve Educational Opportunity Program",
        title: "Teaching Assistant",
        start: "July 2024",
        end: "August 2025",
        webpage: null,
        webpageLink: null,
        description: [
            "Partnered with faculty to execute technical instruction, evaluate coursework, and track academic performance within the quantitative Summer Bridge Program.",
            "Led focused recitations, delivering targeted academic interventions to establish a rigorous mathematical foundation for incoming students.",
            "Reinforced critical analytical concepts and guided targeted practice to optimize student transition into STEM disciplines."
        ],
        type: 'other',
        showInResearch: false,
    },
    {
        id: 1,
        department: "Student-Athlete Enrichment Center",
        title: "Academic Tutor",
        start: "August 2024",
        end: "January 2025",
        webpage: null,
        webpageLink: null,
        description: [
            "Conducted individualized academic tutoring in advanced Computer Science, Applied Statistics, and theoretical Mathematics, including Linear Algebra.",
            "Reinforced complex technical subjects and core software engineering principles through personalized, logic-oriented instructional strategies.",
            "Monitored quantitative progress and synchronized with program coordinators to ensure consistent, high-level academic support for student-athletes."
        ],
        type: 'other',
        showInResearch: false,
    }
]

export default experiences