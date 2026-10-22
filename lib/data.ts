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
        title: 'EHS — Contractor & Visitor Management',
        slug: 'kpa-ehs',
        year: 2026,
        liveUrl: 'https://www.kpaehs.com',
        description: `
      EHS compliance software by KPA, trusted by 15,000+ automotive clients including 40 of the top 50 automotive groups.<br/><br/>
      Key work:<br/>
      <ul>
        <li>Built contractor management features that automate contractor onboarding and track compliance in real time on a multi-tenant enterprise SaaS platform</li>
        <li>Built visitor management features for on-site visitor registration and tracking across customer locations</li>
      </ul>
      `,
        role: `
      Senior Software Engineer at KPA, LLC<br/>
      Full-stack delivery with Node.js, Express, TypeScript, Vue 3, and Tailwind CSS, including PostgreSQL (Drizzle ORM), Redis, Pinia, and Vue Query.
      `,
        techStack: [
            'Node.js',
            'Express',
            'TypeScript',
            'Vue 3',
            'Tailwind CSS',
            'PostgreSQL',
            'Redis',
            'Pinia',
            'Vue Query',
        ],
        thumbnail: '/projects/thumbnail/kpa-ehs.png',
        longThumbnail: '/projects/long/kpa-ehs.png',
        images: ['/projects/images/kpa-ehs-1.png'],
    },
    {
        title: 'MySiloam App',
        slug: 'mysiloam-app',
        year: 2022,
        liveUrl: 'https://mysiloam.siloamhospitals.com',
        description: `
      Healthcare mobile app for appointment booking, medical records, billing, and prescription management.<br/><br/>
      Key outcomes:<br/>
      <ul>
        <li>Cut API response times by 40% while scaling to support 5x more concurrent users</li>
        <li>Cut chat latency by 50% by implementing real-time state management</li>
        <li>Improved code-quality scores by 30% and reduced vulnerabilities by integrating SonarQube scanning</li>
        <li>Delivered real-time chat and video consultation with Next.js and the Agora SDK, improving efficiency by 45%</li>
      </ul>
      `,
        role: `
      Senior Software Engineer at Bithealth.co.id<br/>
      Owned high-performance REST APIs and real-time doctor-chat experiences with Express.js, Next.js, TypeScript, Redis, and PostgreSQL.
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
        thumbnail: '/projects/thumbnail/mysiloam.jpg',
        longThumbnail: '/projects/long/mysiloam.jpg',
        images: ['/projects/images/mysiloam-1.jpg'],
    },
    {
        title: 'Durioo+ App',
        slug: 'durioo-plus-app',
        year: 2022,
        liveUrl: 'https://duriooplus.com',
        description: `
      Media streaming educational platform<br/><br/>
      Key outcomes:<br/>
      <ul>
        <li>Designed and implemented a spatial navigation system to handle complex remote-control (D-pad) inputs and focus-state management.</li>
        <li>Delivered pixel-perfect, responsive 10-foot UI layouts with consistent visual quality across multiple TV models.</li>
       
      </ul>
      `,
        role: `
      Senior Software Engineer at Durioo+.com<br/>
      Owned high-performance REST APIs and real-time doctor-chat experiences with Express.js, Next.js, TypeScript, Redis, and PostgreSQL.
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
        thumbnail: '/projects/thumbnail/durioo.png',
        longThumbnail: '/projects/long/durioo.png',
        images: ['/projects/images/durioo.png'],
    },
    {
        title: 'RCTI+',
        slug: 'rcti-plus',
        year: 2020,
        liveUrl: 'https://www.rctiplus.com',
        description: `
      Streaming platform for on-demand video, live TV, and exclusive content with recommendations and real-time analytics.<br/><br/>
      Key work:<br/>
      <ul>
        <li>Rebuilt the news API and frontend section, improving performance by 30%</li>
        <li>Introduced TypeScript to strengthen code-quality control</li>
        <li>Implemented Atomic Design in Next.js for a more maintainable component architecture</li>
      </ul>
      `,
        role: `
      Software Engineer at MNC Digital — RCTI+ (MNC Group)<br/>
      Rebuilt legacy surfaces with React, TypeScript, Next.js, and a more maintainable frontend architecture.
      `,
        techStack: [
            'Express.js',
            'Next.js',
            'TypeScript',
            'Redis',
            'Laravel',
            'PostgreSQL',
        ],
        thumbnail: '/projects/thumbnail/rcti-plus.jpg',
        longThumbnail: '/projects/long/rcti-plus.jpg',
        images: ['/projects/images/rcti-plus-1.jpg'],
    },
    {
        title: 'Radio.Cloud',
        slug: 'radio-cloud',
        year: 2018,
        liveUrl: 'https://radio.cloud',
        description: `
      Digital radio operations platform for major German clients (BLR, NRJ, Antenne D), covering news dashboards, reference aggregation, and DAB+ playlist software.<br/><br/>
      Key work:<br/>
      <ul>
        <li>Built third-party integrations and bridging services with Node.js/Express.js on top of a Laravel-based application</li>
        <li>Integrated the Spotify and MusicBrainz APIs to automate audio and metadata retrieval, enrichment, and analysis</li>
        <li>Optimized the FFmpeg-based audio pipeline, reducing ingestion time by 35% and improving storage efficiency by 25%</li>
        <li>Designed a real-time metadata ingestion and handover system, supporting 99.9% audio transmission reliability</li>
      </ul>
      `,
        role: `
      Backend Developer at NEXTCAST GmbH<br/>
      Built radio.cloud as a Laravel monolith with Node.js/Express services for news imports, service bridging, and audio operations.
      `,
        techStack: [
            'Express.js',
            'Redis',
            'Laravel',
            'PostgreSQL',
            'WebSocket',
            'FFmpeg',
        ],
        thumbnail: '/projects/thumbnail/radio-cloud.jpg',
        longThumbnail: '/projects/long/radio-cloud.jpg',
        images: ['/projects/images/radio-cloud-1.jpg'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Software Engineer',
        company: 'KPA, LLC — United States (Remote)',
        duration: 'Sep 2023 – Aug 2026 · 3 yrs 1 mo',
        description:
            'Delivered a multi-tenant enterprise SaaS platform for safety/compliance operations with Node.js, TypeScript, Vue 3, and PostgreSQL. Shipped contractor management, tasks, and reporting across PostgreSQL, Redis, and MongoDB, with LaunchDarkly, Pinia, and Vue Query.',
    },
    {
        title: 'Senior Software Engineer',
        company: 'Duriooplus Sdn Bhd (TV Platform) — Malaysia',
        duration: 'Jul 2022 – Sep 2023 · 1 yr',
        description:
            'Engineered a Samsung Smart TV streaming app from scratch with Next.js and React. Solved Tizen OS build limits, implemented D-pad spatial navigation, and delivered pixel-perfect 10-foot UI across TV models.',
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bithealth.co.id — Indonesia',
        duration: 'Aug 2020 – Jul 2022 · 2 yrs',
        description:
            'Improved API response times by 40% with Express.js, Redis, and PostgreSQL. Lifted engagement 30% with Next.js dashboards and real-time doctor chat, reduced production bugs 25%, and mentored a junior engineer.',
    },
    {
        title: 'Software Engineer',
        company: 'MNC Digital — RCTI+ (MNC Group) — Indonesia',
        duration: 'Sep 2018 – Aug 2020 · 2 yrs',
        description:
            'Rebuilt a legacy system with React, TypeScript, Next.js, Redux, and Tailwind CSS. Improved response time by 30%, raised quality scores 25%, and reduced technical debt 40% with SonarQube and coding standards.',
    },
    {
        title: 'Backend Developer',
        company: 'NEXTCAST GmbH — radio.cloud — Germany',
        duration: 'Jan 2015 – Sep 2018 · 3 yrs 8 mos',
        description:
            'Built radio.cloud on Laravel with Node.js/Express integrations for German radio clients. Improved newsroom efficiency 40%, sustained 99.9% DAB+ audio reliability, and cut audio-ingestion time 35% with FFmpeg and metadata APIs.',
    },
];
