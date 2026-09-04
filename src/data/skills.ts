export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "C", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Backend & Frameworks",
    items: [
      "NestJS",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    label: "Databases & Analytics",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL Server",
      "Redis",
      "Google BigQuery",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Nginx",
      "PM2",
      "CI/CD",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    label: "AI & Automation",
    items: [
      "AI Agents",
      "MCP (Model Context Protocol)",
      "Generative AI",
      "Claude AI",
      "Gemini AI",
      "Workflow Automation",
    ],
  },
  {
    label: "Marketing Technology",
    items: [
      "DataForSEO",
      "SERPAPI",
      "Semrush",
      "Meta API",
      "YouTube API",
      "SEO Automation",
      "Content Automation",
    ],
  },
  {
    label: "Telephony & Voice AI",
    items: [
      "Genesys",
      "Asterisk",
      "SIP",
      "IVR",
      "Voice Bots",
      "Conversational AI",
    ],
  },
  {
    label: "Security & Architecture",
    items: [
      "JWT Authentication",
      "Role-Based Access Control",
      "System Design",
      "Performance Optimization",
      "Enterprise Integrations",
    ],
  },
  {
    label: "Tooling & Process",
    items: ["Git", "BitBucket", "Figma", "Slack", "Teams", "Agile"],
  },
];
