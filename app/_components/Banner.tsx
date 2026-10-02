'use client';
import IsometricCubes from '@/components/IsometricCubes';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Github, Linkedin } from 'lucide-react';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    const github = SOCIAL_LINKS.find((link) => link.name === 'github');
    const linkedin = SOCIAL_LINKS.find((link) => link.name === 'linkedin');

    return (
        <section className="relative overflow-hidden" id="banner">
            <div
                className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-[100svh] min-h-[720px] py-24 flex justify-between items-center gap-8 lg:gap-16 max-lg:flex-col max-lg:justify-center"
                ref={containerRef}
            >
                <div className="max-lg:grow max-lg:flex flex-col justify-center items-start max-w-[520px] shrink-0 z-[1]">
                    <div className="slide-up-and-fade flex items-center gap-2 mb-6">
                        <span className="size-3 bg-primary shrink-0" />
                        <span className="text-[10px] sm:text-xs tracking-[0.18em] uppercase bg-foreground/10 text-foreground px-2.5 py-1">
                            Available for new opportunity
                        </span>
                    </div>

                    <h1 className="banner-title slide-up-and-fade leading-[.9] text-6xl sm:text-[84px] font-anton">
                        <span className="text-primary">ANNAAS</span>
                        <br />
                        <span className="ml-8 sm:ml-16 text-white">
                            ANNAAFI
                        </span>
                    </h1>

                    <p className="slide-up-and-fade mt-6 text-sm sm:text-base font-bold tracking-wide uppercase text-white">
                        Senior Software Engineer - Fullstack Developer
                    </p>

                    <p className="banner-description slide-up-and-fade mt-4 text-base sm:text-lg text-muted-foreground max-w-[480px]">
                        Hi! I am{' '}
                        <span className="font-semibold text-white">
                            Tajmirul
                        </span>
                        . An experienced Fullstack Web Developer based in
                        Bangladesh. With over 2+ years of experience, I help
                        people to grow their business by providing powerful and
                        modern Web solutions.
                    </p>

                    <div className="slide-up-and-fade mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href="#selected-projects"
                            className="h-11 px-5 inline-flex items-center border border-foreground/80 text-[11px] tracking-[0.16em] uppercase text-white hover:border-primary hover:text-primary transition-colors"
                        >
                            _01.View Projects
                        </a>
                        <a
                            href={GENERAL_INFO.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-11 px-5 inline-flex items-center border border-foreground/80 text-[11px] tracking-[0.16em] uppercase text-white hover:border-primary hover:text-primary transition-colors"
                        >
                            _02.Curriculum Vitae
                        </a>
                    </div>

                    <div className="slide-up-and-fade mt-5 flex items-center gap-3">
                        {github && (
                            <a
                                href={github.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="size-11 bg-primary text-background inline-flex items-center justify-center hover:opacity-90 transition-opacity"
                            >
                                <Github size={22} />
                            </a>
                        )}
                        {linkedin && (
                            <a
                                href={linkedin.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="size-11 bg-primary text-background inline-flex items-center justify-center hover:opacity-90 transition-opacity"
                            >
                                <Linkedin size={22} />
                            </a>
                        )}
                    </div>
                </div>

                <div className="relative flex-1 flex items-end justify-center lg:justify-end gap-4 max-lg:w-full">
                    <div className="slide-up-and-fade w-full max-w-[480px]">
                        <IsometricCubes />
                    </div>

                    <div className="absolute right-0 bottom-[12%] sm:static sm:mb-[12%] flex flex-col gap-5 text-right shrink-0">
                        <div className="slide-up-and-fade">
                            <h5 className="text-3xl sm:text-[40px] font-anton text-primary leading-none">
                                3+
                            </h5>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 whitespace-nowrap">
                                Years of Experience
                            </p>
                        </div>
                        <div className="slide-up-and-fade">
                            <h5 className="text-3xl sm:text-[40px] font-anton text-primary leading-none">
                                80+
                            </h5>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 whitespace-nowrap">
                                Completed Projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
