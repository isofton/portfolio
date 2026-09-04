export interface Role {
  title: string;
  period: string;
  points: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  roles: Role[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Indira IVF Group",
    location: "Mumbai, India",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Mar 2026 — Present",
        points: [
          "Building an enterprise-scale Ticketing Management System (workflow automation, SLA management, issue tracking) and a Procurement-to-Payment platform (approval workflows, vendor management, master data), using Python, NestJS, Node.js, TypeScript, React.js, PostgreSQL, and AWS.",
          "Designing scalable REST APIs and microservice-based backend architectures alongside workflow automation platforms.",
          "Building and integrating MCP (Model Context Protocol) servers to connect large language models with enterprise applications, databases, and external services.",
          "Designing AI Marketing Agent solutions integrating Meta and YouTube APIs with SEO-intelligence tooling (DataForSEO, SERPAPI, Semrush) for competitor analysis, audience research, and content automation.",
          "Exploring Voice AI and telephony integrations — Genesys, Asterisk, SIP, IVR — for call-center automation.",
          "Managing cloud infrastructure and DevOps on AWS EC2 with Nginx, PM2, and CI/CD pipelines, and using Google BigQuery for data analytics and BI reporting.",
        ],
      },
    ],
  },
  {
    company: "Softilox Innovations Inc.",
    location: "Gujarat, India",
    roles: [
      {
        title: "Software Engineer",
        period: "Nov 2024 — Mar 2026",
        points: [
          "Reduced API response time by 80% in a NestJS application using PostgreSQL through strategic query optimization, caching, and backend refactoring.",
          "Implemented a microservices architecture, improving system scalability, maintainability, and deployment flexibility.",
          "Integrated JWT-based authentication and role-based access control in a NestJS portal, ensuring secure and structured access for users.",
          "Developed and deployed a real-time notification system using OneSignal with a Bull queue for asynchronous task handling.",
          "Leveraged AWS and Docker for containerized deployment, increasing system consistency and cloud readiness.",
        ],
      },
    ],
  },
  {
    company: "iSofton",
    location: "Mumbai, India",
    roles: [
      {
        title: "Back End Developer",
        period: "Sep 2023 — Oct 2024",
        points: [],
      },
    ],
  },
];
