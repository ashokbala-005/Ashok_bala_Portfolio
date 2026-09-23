export const personalInfo = {
  name: "Ashok Bala S",
  title: "Prompt Engineering & GenAI-Assisted Full-Stack Developer",
  roles: [
    "Prompt Engineering Specialist",
    "Full-Stack Web Developer",
    "React.js & Node.js Engineer",
    "AI-Assisted Workflow Expert"
  ],
  bio: "Web Developer specializing in prompt engineering and AI-assisted development, with hands-on experience designing, testing, and refining structured prompts to accelerate coding, debugging, code review, and technical documentation using tools such as Claude AI, Google Antigravity, and GitHub Copilot. Builds responsive, scalable full-stack web applications using React JS, Node JS, JavaScript, and MySQL.",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 7010929780",
  email: "balaashok650@gmail.com",
  linkedin: "https://linkedin.com/in/ashok-bala-7bb372362",
  github: "https://github.com/ashokbala-005",
  availability: "Available for Full-time Roles & High-Impact Projects",
  stats: [
    { label: "Industry Experience", value: "2+" },
    { label: "Tech Stack Mastery", value: "12+" },
    { label: "GenAI Tools Fluency", value: "100%" },
    { label: "IEEE Paper & Research", value: "1" }
  ]
};

export const skillsData = {
  genAI: {
    category: "Generative AI & Prompt Engineering",
    description: "Designing systematic, role-based, few-shot prompts to supercharge SDLC, debugging, and code synthesis.",
    items: [
      { name: "Claude AI", level: 95, icon: "Bot", tag: "AI Assistant" },
      { name: "Google Antigravity", level: 92, icon: "Cpu", tag: "Agentic AI" },
      { name: "GitHub Copilot", level: 90, icon: "Sparkles", tag: "Pair Programming" },
      { name: "Prompt Design & Optimization", level: 95, icon: "Wand2", tag: "Core Skill" },
      { name: "Structured / Role-Based Prompting", level: 94, icon: "Workflow", tag: "Architecture" },
      { name: "Few-Shot Prompting", level: 92, icon: "Zap", tag: "Technique" },
      { name: "Prompt Debugging & Refinement", level: 90, icon: "Terminal", tag: "QA & Verification" },
      { name: "AI-Assisted Code Generation & Review", level: 96, icon: "Code2", tag: "Productivity" }
    ]
  },
  frontend: {
    category: "Frontend Development",
    description: "Crafting fluid, modern, high-performance user interfaces with clean architecture.",
    items: [
      { name: "React.js", level: 92, icon: "Atom", tag: "Frontend Framework" },
      { name: "JavaScript (ES6+)", level: 95, icon: "FileCode", tag: "Core Language" },
      { name: "Tailwind CSS", level: 94, icon: "Palette", tag: "Modern Styling" },
      { name: "Bootstrap", level: 90, icon: "Layers", tag: "Responsive UI" },
      { name: "HTML5 / Semantic Web", level: 96, icon: "Layout", tag: "Markup" },
      { name: "CSS3 / Modern Glassmorphism", level: 92, icon: "Eye", tag: "Design Systems" },
      { name: "Responsive & Mobile-First Design", level: 95, icon: "Smartphone", tag: "UX" }
    ]
  },
  backend: {
    category: "Backend & Databases",
    description: "Architecting reliable REST APIs, database schemas, and server-side business logic.",
    items: [
      { name: "Node.js", level: 88, icon: "Server", tag: "Runtime" },
      { name: "Express.js", level: 88, icon: "Network", tag: "REST API Framework" },
      { name: "MySQL", level: 86, icon: "Database", tag: "Relational DB" },
      { name: "RESTful API Integration", level: 90, icon: "Radio", tag: "Architecture" },
      { name: "Authentication & Middleware", level: 85, icon: "ShieldCheck", tag: "Security" },
      { name: "CRUD & Data Modeling", level: 88, icon: "Binary", tag: "Data Management" }
    ]
  },
  tools: {
    category: "Developer Tools & Deployment",
    description: "Industry-standard agile collaboration, source control, and hosting deployment workflows.",
    items: [
      { name: "Git & Version Control", level: 90, icon: "GitBranch", tag: "VCS" },
      { name: "GitHub & Pull Requests", level: 92, icon: "Github", tag: "Collaboration" },
      { name: "VS Code & AI Extensions", level: 95, icon: "Code", tag: "IDE" },
      { name: "Shared Hosting & Deployment", level: 84, icon: "Cloud", tag: "Production" },
      { name: "Agile & Sprint Ceremonies", level: 90, icon: "Users", tag: "Methodology" },
      { name: "Code Security & Env Standards", level: 92, icon: "Lock", tag: "Best Practices" }
    ]
  }
};

export const experiences = [
  {
    role: "Junior Developer Intern",
    company: "RX Square",
    location: "Chennai, Tamil Nadu",
    period: "Jul 2026 – Present",
    current: true,
    highlights: [
      "Contribute to the design, development, and maintenance of scalable web applications using React JS, Node JS, JavaScript, HTML, and CSS.",
      "Collaborate closely with senior developers and reporting managers to implement production features, resolve critical bugs, and enforce thorough pull request review workflows.",
      "Apply cutting-edge prompt engineering techniques to craft precise, context-rich prompts for Claude AI and GitHub Copilot, accelerating code review, debugging, and technical documentation.",
      "Strictly uphold company code security and data confidentiality standards, ensuring zero credential leaks via environment variables and restricted access policies.",
      "Actively participate in daily agile standups, sprint planning, attendance protocols, and professional workplace reporting at RX Square."
    ],
    skills: ["React JS", "Node JS", "Claude AI", "GitHub Copilot", "Prompt Engineering", "Agile", "MySQL", "JavaScript"]
  },
  {
    role: "Web Developer",
    company: "LDBS India Private Limited",
    location: "Tamil Nadu, India",
    period: "Feb 2026 – May 2026",
    current: false,
    highlights: [
      "Developed and maintained highly responsive web applications using modern web technologies including JavaScript and Node JS.",
      "Collaborated with cross-functional team members to implement new features, eliminate UI bottlenecks, optimize runtime performance, and resolve technical issues.",
      "Participated rigorously in manual & automated testing, end-to-end debugging, and deployment procedures to guarantee a seamless user experience.",
      "Integrated robust backend services and databases to empower dynamic content management and elevate overall application functionality."
    ],
    skills: ["JavaScript", "Node.js", "Express", "HTML/CSS", "Database Integration", "Testing & Debugging"]
  }
];

export const projects = [
  {
    id: "spectrum-sensing",
    title: "Deep Learning-Enabled Spectrum Sensing for Cognitive Radio",
    category: "IEEE Research / Academic Project",
    badge: "IEEE Paper & AI Research",
    tagline: "Spectrogram & wavelet-based dynamic spectrum sensing using deep learning models",
    description: "A research-driven cognitive radio spectrum sensing system that leverages spectrogram representation and wavelet-based signal analysis techniques to intelligently detect spectrum occupancy and eliminate RF interference in dynamic wireless environments.",
    features: [
      "Converts raw radio signals into 2D spectrograms and wavelet transforms for feature extraction.",
      "Employs deep neural networks to accurately classify whether frequency bands are vacant or occupied.",
      "Significantly enhances spectrum utilization efficiency and mitigates channel interference.",
      "Improves secure and dynamic channel access for secondary cognitive radio users."
    ],
    techStack: ["Deep Learning", "Signal Processing", "Spectrogram Analysis", "Wavelets", "Python / Research", "Cognitive Radio"],
    links: {
      paper: "#",
      demo: null
    }
  },
  {
    id: "ecommerce-platform",
    title: "Full-Stack E-Commerce Web Application",
    category: "Full-Stack Development",
    badge: "React · Node · Express · MySQL",
    tagline: "Scalable online marketplace with secure authentication, cart processing, and dynamic catalog",
    description: "A full-featured e-commerce platform built with React JS, Node.js, Express, and MySQL. Implemented end-to-end features including user authentication, product catalog browsing, filterable search, shopping cart management, and order checkout.",
    features: [
      "Dynamic product catalog with category filtering, real-time search, and price sorting.",
      "JWT-based user authentication, protected routes, and session persistence.",
      "Interactive shopping cart with item quantity updates and checkout calculations.",
      "Applied prompt engineering with AI coding assistants (Claude / Copilot) to accelerate UI component generation and bug fixing by 3x."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "REST API", "Prompt Engineering"],
    links: {
      github: "https://github.com/ashokbala-005",
      demo: "#"
    }
  }
];

export const education = [
  {
    degree: "B.E. Computer Science and Engineering (CSE)",
    institution: "Sethu Institute of Technology",
    period: "Aug 2022 – May 2026",
    score: "71.1%",
    status: "Graduated",
    location: "Tamil Nadu, India",
    description: "Core coursework: Data Structures, Algorithms, Database Management Systems, Computer Networks, Operating Systems, Web Technologies, and Software Engineering."
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Samabharatham Matric Hr Sec School",
    period: "Apr 2021 – Mar 2022",
    score: "75.0%",
    status: "Completed",
    location: "Tamil Nadu, India",
    description: "Concentration in Computer Science, Mathematics, Physics, and Chemistry."
  }
];

export const promptShowcases = [
  {
    id: "structured-debugging",
    title: "Structured Bug Diagnosis Prompt",
    tool: "Claude AI / Google Antigravity",
    category: "Prompt Debugging",
    intent: "Root-cause race conditions and async database bottlenecks with precision.",
    promptText: `You are a Principal Backend Architect. Analyze this Express.js + MySQL connection leak:
1. Identify the exact line where connection pooling fails to release resources upon error handling.
2. Provide a patch implementing an explicit try/catch/finally block with connection.release().
3. Include an explanation of how connection exhaustion affects concurrent user throughput.
Constraints: No external npm packages; adhere to standard ES6+ async/await syntax.`,
    outputPreview: `// [Root Cause Identified]: connection.getConnection() was not released on rejected queries.
// [Patch Solution]:
async function executeTransaction(pool, query, params) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.execute(query, params);
    return result;
  } catch (err) {
    logger.error('Database transaction failed:', err.message);
    throw err;
  } finally {
    if (connection) connection.release(); // Crucial: Prevents pool exhaustion
  }
}`
  },
  {
    id: "few-shot-component",
    title: "Few-Shot React UI Design Pattern",
    tool: "Google Antigravity / GitHub Copilot",
    category: "Few-Shot Prompting",
    intent: "Generate accessible, animated glassmorphic React components with zero hallucination.",
    promptText: `Input Pattern:
Example 1: Button with neon glow on hover -> produces <button className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
Task:
Generate a glassmorphic Project Card component with title, badges, and smooth hover elevation.
Constraints: Accessible aria tags, Lucide icon support, Tailwind CSS only.`,
    outputPreview: `export const TechCard = ({ title, tags, icon: Icon }) => (
  <div className="group relative p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(6,182,212,0.25)]">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-semibold text-lg text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {tags.map(t => <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-slate-800 text-slate-300">{t}</span>)}
    </div>
  </div>
);`
  },
  {
    id: "role-based-api",
    title: "Role-Based REST API Specification Prompt",
    tool: "Claude AI",
    category: "System Architecture",
    intent: "Accelerate Express route and validation generation while enforcing security standards.",
    promptText: `Act as a Senior Security Engineer and Express.js Specialist.
Draft a secure controller for POST /api/orders with:
- Input sanitization for customer inputs
- Rate limiting middleware declaration
- Environment variable protection (no hardcoded secret keys)
- Idempotency key verification to avoid duplicate orders.`,
    outputPreview: `import { Router } from 'express';
import rateLimit from 'express-rate-limit';

const orderLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20 });
const router = Router();

router.post('/orders', orderLimiter, async (req, res) => {
  const { idempotencyKey, cartItems, customerId } = req.body;
  if (!idempotencyKey || !Array.isArray(cartItems)) {
    return res.status(400).json({ error: "Invalid payload parameters." });
  }
  // Safe execution with validated environment credentials
  const order = await processSecureOrder({ idempotencyKey, cartItems, customerId });
  return res.status(201).json({ success: true, orderId: order.id });
});`
  }
];
