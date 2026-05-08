import { abilities } from "../constants/index.js";


const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
        <div className="mx-auto grid-3-cols">
            {abilities.map((ability) => (
                <div key={ability.title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                    <div className="size-14 flex items-center justify-center rounded-full">
                        <img src={ability.imgPath} alt={ability.title} />
                    </div>
                    <h3 className="text-cyan-200 text-2xl font-semibold">{ability.title}</h3>
                    <p className="text-cyan-100 text-lg">
                        {ability.desc}
                    </p>

                </div>
            ))}

        </div>

    </div>
  )
}

export default FeatureCards
