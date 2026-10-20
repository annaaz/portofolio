'use client';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    end: 'bottom 20%',
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                },
            });

            tl.from(
                '.experience-line',
                {
                    scaleY: 0,
                    opacity: 0,
                    ease: 'power2.out',
                    transformOrigin: 'top center',
                },
                0,
            )
                .from(
                    '.experience-dot',
                    {
                        scale: 0.7,
                        opacity: 0,
                        stagger: 0.12,
                        ease: 'power2.out',
                    },
                    0.1,
                )
                .from(
                    '.experience-item',
                    {
                        y: 18,
                        opacity: 0,
                        stagger: 0.14,
                        ease: 'power2.out',
                    },
                    0.08,
                );

            gsap.to(containerRef.current, {
                y: -80,
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 60%',
                    end: 'bottom 15%',
                    scrub: 1,
                },
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <p className="mb-8 text-xs sm:text-sm tracking-[0.12em] uppercase text-muted-foreground">
                    [ _03. ] /Experience
                </p>

                <div className="mx-auto">
                    <div className="space-y-7 md:space-y-8">
                        {MY_EXPERIENCE.map((item) => (
                            <div
                                key={`${item.company}-${item.duration}`}
                                className="experience-item border-b border-white/15 pb-4 last:border-b-0 last:pb-0"
                            >
                                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/60">
                                        {item.company}
                                    </p>
                                    <p className="text-xs text-white/60">
                                        {item.duration}
                                    </p>
                                </div>

                                <p className="slide-up-and-fade mt-6 text-xl sm:text-base font-bold tracking-wide uppercase text-white">
                                    {item.title}
                                </p>

                                <p className="mt-2 text-sm text-white/70 md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
