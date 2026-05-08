
const TitleHeader = ({title, sub}) => {
  return (
    <div className="flex flex-col items-center gap-5">
        <div className="hero-badge">
            <p className="text-cyan-400">{sub}</p>

        </div>
        <div className="font-semibold md:text-5xl text-3xl text-center text-cyan-400">
            {title}
        </div>
    </div>
  )
}

export default TitleHeader
