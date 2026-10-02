'use client';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SKILLS = Object.values(MY_STACK).flat();

const LAYOUT = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
];

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tiles = containerRef.current?.querySelectorAll('.skill-tile');
            if (!tiles?.length) return;

            gsap.from(tiles, {
                opacity: 0,
                y: 24,
                stagger: 0.04,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: 0.5,
                },
            });
        },
        { scope: containerRef },
    );

    let skillIndex = 0;

    return (
        <section className="pb-section" id="my-stack" ref={containerRef}>
            <div className="w-full max-w-[1250px] mx-auto px-6 lg:px-12">
                <p className="mb-8 text-xs sm:text-sm tracking-[0.12em] uppercase text-muted-foreground">
                    [ _02. ] /Tech Stack
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-3">
                    {LAYOUT.flatMap((row, rowIndex) =>
                        row.map((filled, colIndex) => {
                            if (!filled) {
                                return (
                                    <div
                                        key={`empty-${rowIndex}-${colIndex}`}
                                        className="hidden lg:block"
                                    />
                                );
                            }

                            const skill = SKILLS[skillIndex];
                            const number = skillIndex + 1;
                            skillIndex += 1;

                            if (!skill) return null;

                            return (
                                <div
                                    key={skill.name}
                                    className="skill-tile aspect-square bg-[#202020] p-2 sm:p-3 flex flex-col"
                                >
                                    <span className="text-[10px] leading-none text-white/80">
                                        {number}
                                    </span>
                                    <div className="flex-1 flex items-center justify-center">
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={72}
                                            height={72}
                                            className="w-[55%] max-w-[72px] h-auto object-contain"
                                        />
                                    </div>
                                    <p className="text-[10px] sm:text-xs text-white/90 leading-tight truncate">
                                        {skill.name}
                                    </p>
                                </div>
                            );
                        }),
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;
