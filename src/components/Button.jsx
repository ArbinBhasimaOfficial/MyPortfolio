

const Button = ({ label, className , id}) => {
  return (
    <a 
    onClick={(e) => {
      e.preventDefault();
      console.log("Button clicked, id:", id);
      const target = document.getElementById('counter');
      if(target){
        // const offset = window.innerHeight * 0.15;
        // const top = target.getBoundingClientRect().top + window.scrollY - offset;
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        
      }
    }}
    className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-button group">
        {/* The background circle sits behind the text */}
        <div className="bg-circle" />

        {/* The text must have relative and z-index to be visible */}
        <span className="text">
          {label || "See my work"}
        </span>

        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;