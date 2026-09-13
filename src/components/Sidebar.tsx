import { type Technology } from "../type";

interface StackProps {
  stack: Technology[];
  remove: (id: string) => void;
  removeAll: () => void;
}

const Sidebar = ({ stack, remove, removeAll }: StackProps) => {
  return (
    <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="text-sm text-slate-500 mt-1">
        {stack.length} Technology Selected
      </p>
      {stack.length === 0 ? (
        <div className="text-center border border-slate-200 border-dashed rounded-xl py-8 mt-4">
          <p className="text-sm text-slate-400">
            No technologies selected yet.
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Add from the grid to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-slate-50 border border-slate-100 rounded-xl p-3"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="h-6 w-6" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => remove(item.id)}
                className="text-lg text-slate-400 hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={removeAll}
            className="text-sm font-medium w-full bg-[#e22c8a] text-white rounded-lg hover:bg-red-50 mt-2 py-2 transition"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
