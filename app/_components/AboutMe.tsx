'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const OVERSEAS_EXPERIENCE = [
    {
        company: 'US Company',
        product: 'EHS Solution Apps',
        duration: '2 Years',
    },
    {
        company: 'Germany Company',
        product: 'EHS Solution Apps',
        duration: '2 Years',
    },
    {
        company: 'Malaysia Company',
        product: 'EHS Solution Apps',
        duration: '2 Years',
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
                        I&apos;m a 17 year-old passionate fullstack web
                        developer dedicated to turning ideas into creative
                        solutions. I specialize in creating seamless and
                        intuitive user experiences.
                    </p>
                    <p>
                        I&apos;m involved in every step of the process: from
                        discovery and design to development, testing, and
                        deployment. I focus on delivering high-quality,
                        scalable results that drive positive user experiences.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
