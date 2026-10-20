import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'annaazannaavi11@gmail.com',
    phone: '+62 813-8773-8441',
    location: 'Jakarta, Indonesia',
    website: 'https://aannaafi.is-a.dev',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Annaas, I am reaching out to you because...',

    oldPortfolio: 'https://aannaafi.is-a.dev',
    upworkProfile: 'https://aannaafi.is-a.dev',
    resume: '/Annaas_Annaafi_Senior_Software_Engineer_CV.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/annaaz' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/annaaz' },
    { name: 'facebook', url: 'https://www.facebook.com/annaaz.2000' },
    { name: 'Website', url: GENERAL_INFO.website },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Vue 3',
            icon: '/logo/vue.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Laravel',
            icon: '/logo/laravel.svg',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Redis',
            icon: '/logo/redis.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'MySiloam App',
        slug: 'mysiloam-app',
        year: 2022,
        description: `
      Healthcare mobile experience for appointment booking, medical records, and billing, with real-time health analytics and prescription management.<br/><br/>
      Key outcomes:<br/>
      <ul>
        <li>Cut API response times by 40% while scaling to support 5x more concurrent users</li>
        <li>Cut chat latency by 50% with real-time state management</li>
        <li>Improved code-quality scores by 30% and reduced vulnerabilities with SonarQube scanning</li>
        <li>Delivered real-time chat and video consultation with Next.js and the Agora SDK, improving efficiency by 45%</li>
      </ul>
      `,
        role: `
      Senior Software Engineer at Bithealth.co.id<br/>
      <ul>
        <li>Owned high-performance REST APIs with Express.js, Redis, and PostgreSQL</li>
        <li>Built dynamic dashboards and a real-time doctor-chat application in Next.js and TypeScript</li>
        <li>Drove code-quality practices: pre-commit linting, TDD, atomic design, and SOLID principles</li>
        <li>Mentored a junior engineer through reviews and pairing</li>
      </ul>
      `,
        techStack: [
            'Express.js',
            'Next.js',
            'TypeScript',
            'Redis Pub/Sub',
            'Agora Chat',
            'Agora Video',
            'PostgreSQL',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'F&B Operations Platform',
        slug: 'fnb-operations-platform',
        year: 2025,
        description: `
      Full-stack platform for food & beverage operations, adding LLM-powered features to optimize cost of goods sold (HPP) and increase revenue per order.<br/><br/>
      Key features:<br/>
      <ul>
        <li>Automated HPP costing: extract supplier invoices into validated JSON with LLM structured output, then recalculate per-menu cost and margin</li>
        <li>Menu engineering (Star / Plowhorse / Puzzle / Dog) with margin alerts when ingredient prices rise</li>
        <li>pgvector-based search for substitute ingredients and similar recipes</li>
        <li>Basket analysis for bundling and guarded upsell recommendations, plus a read-only text-to-SQL ops copilot</li>
      </ul>
      `,
        role: `
      Personal project — full-stack engineer<br/>
      Designing and building the platform end-to-end, including LLM structured output, RAG/pgvector search, and human confirmation before any price change.
      `,
        techStack: [
            'Node.js',
            'TypeScript',
            'PostgreSQL',
            'pgvector',
            'Redis',
            'LLM APIs',
            'Zod',
            'Python (pandas)',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Software Engineer',
        company: 'KPA, LLC — United States (Remote)',
        duration: 'Sep 2023 – Present',
        description:
            'Building a multi-tenant enterprise SaaS platform for safety/compliance operations with Node.js, TypeScript, Vue 3, and PostgreSQL. Shipping modular services across contractor management, audits, incidents, and reporting, with RBAC, SAML/OIDC, Redis, and AWS integrations.',
    },
    {
        title: 'Senior Software Engineer',
        company: 'Duriooplus Sdn Bhd (TV Platform) — Malaysia',
        duration: 'Sep 2022 – Sep 2023',
        description:
            'Engineered a Samsung Smart TV streaming app from scratch with Next.js and React. Solved Tizen OS build limits, implemented D-pad spatial navigation, and delivered pixel-perfect 10-foot UI across TV models.',
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bithealth.co.id — Indonesia',
        duration: 'Sep 2020 – Sep 2022',
        description:
            'Cut API response times by 40%, lifted engagement 30% with Next.js dashboards and real-time doctor chat, and reduced technical debt by 60%. Mentored a junior engineer while raising code quality with TDD and linting.',
    },
    {
        title: 'Software Engineer',
        company: 'MNC Digital — RCTI+ (MNC Group) — Indonesia',
        duration: 'Sep 2018 – Sep 2020',
        description:
            'Rebuilt a legacy system with React, TypeScript, Next.js, Redux, and Tailwind CSS. Cut response time by 30%, improved quality scores 25%, and reduced technical debt 40% with SonarQube and coding standards.',
    },
    {
        title: 'Backend Developer',
        company: 'NEXTCAST GmbH — radio.cloud — Germany',
        duration: 'Jan 2015 – Sep 2018',
        description:
            'Built radio.cloud on Laravel with Node.js/Express integrations for German radio clients. Improved newsroom efficiency 40%, sustained 99.9% DAB+ audio reliability, and cut audio-ingestion time 35% with FFmpeg and metadata APIs.',
    },
];
