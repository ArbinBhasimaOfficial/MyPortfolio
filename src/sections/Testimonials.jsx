import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants/index.js";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="What People Say About Me?" 
            sub="🌟 Client Feedback Highlights"/>

            <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                {testimonials.map((item) => (
                    <GlowCard key={item.name} card={item.review}>
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div>
                                <img src={item.imgPath} alt={item.name} className="w-16 h-16 rounded-full" />
                            </div>
                            <div>
                                <p className="font-bold text-cyan-200">{item.name}</p>
                                <p className="text-cyan-50">{item.mentions}</p>
                            </div>
                            <div>
                                <p className="font-medium text-cyan-200">{item.review}</p>
                            </div>
                        </div>
                    </GlowCard>
                ))}

            </div>
        </div>
    </section>
  )
}

export default Testimonials