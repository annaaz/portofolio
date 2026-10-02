'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const IsoCube = ({
    x,
    y,
    size,
    className,
}: {
    x: number;
    y: number;
    size: number;
    className?: string;
}) => {
    const isoX = size * 0.866;
    const isoY = size * 0.5;
    const north = `${x},${y - isoY}`;
    const east = `${x + isoX},${y}`;
    const south = `${x},${y + isoY}`;
    const west = `${x - isoX},${y}`;
    const eastB = `${x + isoX},${y + size}`;
    const southB = `${x},${y + isoY + size}`;
    const westB = `${x - isoX},${y + size}`;

    return (
        <g
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
        >
            <polygon points={`${north} ${east} ${south} ${west}`} />
            <polygon points={`${west} ${south} ${southB} ${westB}`} />
            <polygon points={`${east} ${south} ${southB} ${eastB}`} />
        </g>
    );
};

const IsometricCubes = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const size = 128;
    const isoX = size * 0.866;
    const isoY = size * 0.5;

    const origin = { x: 280, y: 230 };
    const cubes = [
        origin,
        { x: origin.x + isoX, y: origin.y - isoY },
        { x: origin.x + isoX * 2, y: origin.y - isoY * 2 },
        { x: origin.x + isoX * 2, y: origin.y - isoY * 2 + size },
        { x: origin.x + isoX, y: origin.y - isoY + size },
    ];

    useGSAP(
        () => {
            const cubesEls = svgRef.current?.querySelectorAll('.iso-cube');
            const cluster = svgRef.current?.querySelector('.iso-cubes-cluster');
            if (!cubesEls?.length || !cluster) return;

            gsap.set(cubesEls, { transformOrigin: '50% 50%' });

            gsap.from(cubesEls, {
                opacity: 0,
                y: 50,
                scale: 0.86,
                duration: 0.9,
                stagger: 0.12,
                ease: 'power3.out',
            });

            cubesEls.forEach((cube, index) => {
                gsap.to(cube, {
                    y: index % 2 === 0 ? -18 : 16,
                    duration: 2.4 + index * 0.35,
                    delay: 0.8 + index * 0.1,
                    yoyo: true,
                    repeat: -1,
                    ease: 'sine.inOut',
                });
            });

            gsap.to(cluster, {
                y: -10,
                rotate: 1.4,
                duration: 5,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
                transformOrigin: '50% 50%',
            });
        },
        { scope: svgRef },
    );

    return (
        <svg
            ref={svgRef}
            viewBox="0 0 720 620"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[760px] text-primary overflow-visible"
            aria-hidden
        >
            <g className="iso-cubes-cluster">
                {cubes.map((cube, index) => (
                    <IsoCube
                        key={index}
                        className="iso-cube"
                        x={cube.x}
                        y={cube.y}
                        size={size}
                    />
                ))}
            </g>
        </svg>
    );
};

export default IsometricCubes;
