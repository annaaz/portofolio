'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const OVERSEAS_EXPERIENCE = [
    {
        company: 'United States',
        product: 'KPA, LLC — Safety / Compliance SaaS',
        duration: '3 yrs 1 mo',
    },
    {
        company: 'Germany',
        product: 'NEXTCAST GmbH — radio.cloud',
        duration: '3 yrs 8 mo',
    },
    {
        company: 'Malaysia',
        product: 'Duriooplus — Samsung TV Platform',
        duration: '1 yr',
    },
];

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section pt-10" id="about-me">
            <div className="container" ref={container}>
                <div className="grid gap-10 md:grid-cols-4 md:gap-8">
                    <p className="slide-up-and-fade text-xs sm:text-sm tracking-[0.12em] uppercase text-muted-foreground">
                        [ _01. ] /Experiences Overseas
                    </p>

                    {OVERSEAS_EXPERIENCE.map((item) => (
                        <div key={item.company} className="slide-up-and-fade">
                            <h3 className="text-sm sm:text-base font-bold tracking-wide uppercase text-white">
                                {item.company}
                            </h3>
                            <p className="mt-1.5 text-sm text-muted-foreground">
                                {item.product}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-white">
                                {item.duration}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="slide-up-and-fade mt-12 border-t border-white/20" />

                <div className="slide-up-and-fade mt-16 md:mt-20 max-w-[920px] space-y-8 text-lg md:text-xl leading-relaxed text-white/90">
                    <p>
                        Senior Software Engineer with 11 years of full-stack
                        experience delivering production systems across
                        Healthcare, Media Streaming, Broadcasting, and
                        Compliance/Safety. Currently building a multi-tenant
                        enterprise SaaS platform at KPA using Node.js,
                        TypeScript, Vue 3, and PostgreSQL.
                    </p>
                    <p>
                        I have delivered measurable results: improved
                        application performance by 40%, cut technical debt by
                        60%, and scaled systems to support 5x more concurrent
                        users. I work in 2-week Agile/Scrum with international
                        teams across Indonesia, Malaysia, Germany, and the
                        United States, and I am currently exploring LLM-powered
                        features for an F&amp;B operations platform.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
