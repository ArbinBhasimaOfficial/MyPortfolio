// import CountUp from "react-countup";
// import { counterItems } from "../constants/index.js";

// const AnimetedCounter = () => {
//   return (
//     <div id="counter" className="padding-x-lg xl:mt-0 relative mt-32">
//         <div className="mx-auto grid-4-cols">
//             {counterItems.map((item, index) => (
//                 <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
//                     <div key={index} className="counter-number text-cyan-200 text-5xl font-bold mb-2">
//                         {/* Replace 'item.number' and 'item.label' with the actual keys in your constants file */}
//                         {item.value} {item.suffix}
//                         {/* <CountUp suffix={item.suffix} end={item.value} /> */}
//                     </div>
//                     <div className="text-cyan-200 text-lg">
//                         {item.label}
//                     </div>
//                 </div>
//             ))}

//         </div>
        
      
//     </div>
//   )
// }

// export default AnimetedCounter
import { useState, useEffect, useRef } from "react";
import { counterItems } from "../constants/index.js";

const CounterItem = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  // Intersection Observer to start animation only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  // The Animation Logic
  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const duration = 2000; // 2 seconds
    // const startValue = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for a smooth finish (Power2.out)
      const easedProgress = 1 - Math.pow(1 - progress, 2);
      
      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, value]);

  return (
    <div ref={elementRef} className="bg-zinc-900 border border-zinc-800 rounded-xl p-10 flex flex-col items-center justify-center text-center">
      <div className="text-cyan-400 text-5xl font-bold mb-2">
        {count}{suffix}
      </div>
      <div className="text-zinc-400 text-sm uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  );
};

const AnimetedCounter = () => {
  if (!counterItems) return null;

  return (
    <div id="counter" className="relative z-20 w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counterItems.map((item, index) => (
            <CounterItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimetedCounter;