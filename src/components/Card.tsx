import { type Technology } from "../type";

interface TechProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  inStack: boolean;
}
const Card = ({ tech, onAdd, inStack }: TechProps) => {
  console.log(tech.name, inStack);
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <img src={tech.icon} alt={tech.name} className="h-10 w-10" />
        <span className="bg-cyan-50 font-semibold text-cyan-600 text-xs rounded-full px-3 py-1">
          {tech.badge}
        </span>
      </div>
      <h3 className="font-bold text-lg mt-4">{tech.name}</h3>
      <p className="text-slate-500 text-sm mt-2">{tech.description}</p>
      <hr className="border-slate-100 my-4" />
      <div className="flex items-center text-xs text-slate-500 mt-4">
        <span className="bg-slate-100 rounded-md px-2 py-1">
          {tech.category}
        </span>
        <span className="flex-1 text-center">{tech.difficulty}</span>
        <span className="font-semibold text-amber-400">⭐ {tech.rating}</span>
      </div>
      <button
        onClick={() => onAdd(tech)}
        disabled={inStack}
        className={
          inStack
            ? "cursor-not-allowed text-slate-500 font-semibold text-sm bg-slate-100 w-full mt-4 py-2 rounded-lg"
            : "text-white bg-slate-950 hover:bg-slate-700 text-sm font-semibold w-full mt-4 py-2 rounded-lg"
        }
      >
        {inStack ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default Card;
