import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import Particles2 from "../components/HeroModels/Particles2.jsx";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimetedCounter from "../components/AnimetedCounter.jsx";



const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(".hero-text h1", 
      {
        y : 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 3,
        ease: "power2.inOut"
      }
    )
  })
  return (
    <section id="hero" className="relative overflow-hidden">

      {/* Background — bottom layer */}
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="background" />
      </div>

      {/* Particles — transparent overlay over EVERYTHING */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 0, pointerEvents: "none" }}
      >
        <Particles2 count={166} mode="float" />
      </div>

      {/* Content */}
      <div className="hero-layout" style={{ position: "relative", zIndex: 5 }}>

        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text text-cyan-400">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into Real Projects</h1>
              <h1>That Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl pointer-events-none description">
              Hi I'm Arbin Bhasima, a developer from nepal with the passion for
              creating innovative web solutions.
            </p>

            <Button
              label="See my Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
            />
          </div>
        </header>

        <figure >
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <div className="relative z-20 mt-10">
        <AnimetedCounter />

      </div>
    </section>
  );
};

export default Hero;