import { useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    
    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
            card,
            {
                    y:50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * ( index + 1),
                    scrollTrigger: {
                        trigger : card,
                        start: "top bottom -= 100px",
                    }
                }
            )
        })
        gsap.fromTo(sectionRef.current, 
            {
            opacity: 0,    
            }, 
            {
                opacity: 1,
                duration: 1,
            }
        )
    }, [])

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* left */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>
                    <div className="text-content text-cyan-400">
                        <h2>On-Demand Market Intelligence Web Application Made Simple with a Powerful, Data Analytics Reporting, etc.</h2>
                        <p className="text-cyan-200 md:text-xl">
                             An app built with FastAPI, NextJS, Pydantic, $ TailwindCSS for a fast, user-friendly experience.
                        </p>
                    </div>
                </div>
    
                {/* Right */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#00E5C8]">
                            <img src="/images/project2.png" alt="Library Management Platform" />
                        </div>
                        <h2 className="text-cyan-400">IntelliTrade - Global Trade Market Intelligence</h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#0D8A7A]">
                            <img src="/images/project3.png" alt="YC Directory" />
                        </div>
                        <h2 className="text-cyan-400">Quiz Central - A Quiz Application</h2>
                    </div>
                    

                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection
