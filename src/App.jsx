// import LogoSection from "./sections/LogoSection.jsx";
import NavBar from "./components/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import ExperienceSection from "./sections/ExperienceSection.jsx"
import TechStack from "./sections/TechStact.jsx";

const App = () => {
  return (
    <>
        <NavBar/>
        <Hero className="animate-nav-down"/>
        <ShowcaseSection className="animate-nav-down"/>
        {/* <LogoSection className="animate-nav-down"/> */}
        <FeatureCards className="animate-nav-down"/>
        <ExperienceSection className="animate-nav-down"/>
        <TechStack className="animate-nav-down"/>
    </>
  )
}

export default App
