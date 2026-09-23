import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MESSAGES_FILE = path.join(__dirname, 'messages.json');

// Initialize messages file if missing
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2));
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    owner: 'Ashok Bala S - GenAI & Full-Stack Developer'
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || 'No Subject',
      message,
      createdAt: new Date().toISOString()
    };

    let existingMessages = [];
    try {
      const fileData = fs.readFileSync(MESSAGES_FILE, 'utf-8');
      existingMessages = JSON.parse(fileData);
    } catch {
      existingMessages = [];
    }

    existingMessages.unshift(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(existingMessages, null, 2));

    console.log(`[Contact Form] New message received from ${name} (${email})`);

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been received successfully.'
    });
  } catch (error) {
    console.error('Error handling contact message:', error);
    return res.status(500).json({ error: 'Failed to process message.' });
  }
});

// Resume text download endpoint
app.get('/api/resume/download', (req, res) => {
  const resumeText = `ASHOK BALA S
Prompt Engineering & GenAI-Assisted Development | React JS · Node JS · JavaScript
Location: Chennai, Tamil Nadu, India
Phone: +91 7010929780
Email: balaashok650@gmail.com
LinkedIn: linkedin.com/in/ashok-bala-7bb372362
GitHub: github.com/ashokbala-005

==================================================
PROFESSIONAL SUMMARY
==================================================
Web Developer specializing in prompt engineering and AI-assisted development, with hands-on experience designing, testing, and refining structured prompts to accelerate coding, debugging, code review, and technical documentation using tools such as Claude AI, Google Antigravity, and GitHub Copilot. Builds responsive, scalable full-stack web applications using React JS, Node JS, JavaScript, and MySQL. Currently a Junior Developer Intern at RX Square, contributing to front-end and back-end development, database management, and collaborative agile workflows. B.E. Computer Science and Engineering graduate with strong problem-solving and code collaboration skills.

==================================================
TECHNICAL SKILLS
==================================================
• Generative AI / Prompt Engineering: Prompt design & optimization, structured/role-based prompting, few-shot prompting, prompt debugging, AI-assisted code generation and review
• AI Tools: Claude AI, Google Antigravity, GitHub Copilot
• Languages: JavaScript (ES6+)
• Frontend: React JS, HTML5, CSS3, Tailwind CSS, Bootstrap
• Backend: Node JS, Express JS
• Database: MySQL
• Developer Tools: Git, GitHub, VS Code
• Deployment & Hosting: Shared Hosting

==================================================
EXPERIENCE
==================================================
1. Junior Developer Intern — RX Square, Chennai, Tamil Nadu (Jul 2026 – Present)
   • Contribute to the design, development, and maintenance of web applications using React JS, Node JS, JavaScript, HTML, and CSS.
   • Collaborate with senior developers and the reporting manager to implement new features, fix bugs, and follow code review and pull request approval processes before merging changes.
   • Apply prompt engineering techniques to craft precise, context-rich prompts for Claude AI and GitHub Copilot, accelerating code review, debugging, and technical documentation while adhering to company code security and data confidentiality standards, such as environment variables for credentials and restricted access to production systems.
   • Participate in day-to-day sprint tasks, attendance and reporting protocols, and professional workplace practices at RX Square.

2. Web Developer — LDBS India Private Limited (Feb 2026 – May 2026)
   • Developed and maintained responsive web applications using modern web technologies including JavaScript and Node JS.
   • Collaborated with team members to implement new features, optimize performance, and resolve technical issues.
   • Participated in testing, debugging, and deployment activities to ensure a smooth user experience.
   • Integrated backend services and databases to support dynamic content management and improve application functionality.

==================================================
PROJECTS
==================================================
1. Deep Learning-Enabled Spectrum Sensing for Cognitive Radio — IEEE Paper / Academic Project
   • Developed a cognitive radio spectrum sensing system using spectrogram and wavelet-based signal analysis techniques.
   • Implemented deep learning models to improve spectrum occupancy detection accuracy in dynamic wireless environments.
   • Enhanced spectrum utilization, reduced interference, and improved secure access to wireless communication channels.

2. E-Commerce Web Application — Personal Project — GitHub
   • Developed a full-stack e-commerce platform for online product browsing and purchasing using React JS and Node JS.
   • Implemented user authentication, product catalog management, shopping cart, and order processing.
   • Integrated database functionality for efficient product and customer data management.
   • Designed a responsive and user-friendly interface, applying prompt engineering with AI coding assistants to speed up UI development and debugging.

==================================================
EDUCATION
==================================================
• B.E. Computer Science and Engineering (CSE) — Sethu Institute of Technology (Aug 2022 – May 2026) — 71.1%
• Senior Secondary (Class XII) — Samabharatham Matric Hr Sec School (Apr 2021 – Mar 2022) — 75.0%
`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="Ashok_Bala_S_Resume.txt"');
  res.send(resumeText);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
