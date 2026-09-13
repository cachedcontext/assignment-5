import { useEffect, useState } from "react";
import { type Technology } from "./type";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);
  const addToStack = (tech: Technology) => {
    const present = stack.some((item) => item.id === tech.id);

    if (present) {
      toast.warning(tech.name + " is already in your stack");
      return;
    }
    setStack([...stack, tech]);
    toast.success(tech.name + " added to your stack");
  };

  const removeFromStack = (id: string) => {
    const removed = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (removed) toast.info(removed.name + " removed from stack");
  };

  const removeAll = () => {
    setStack([]);
    toast.info("Stack cleared");
  };

  return (
    <>
      <Navbar />
      <Banner />
      <div className="text-center md:text-left mx-auto max-w-7xl px-6 pt-0">
        <h2 className="font-bold text-slate-900 text-3xl md:text-4xl">
          Explore the <span className="text-gradient">Technologies</span>
        </h2>
        <p className="text-slate-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto px-6 pb-12 mt-8">
        <div className="flex-1 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            <p className="col-span-full">Loading...</p>
          ) : (
            technologies.map((item) => (
              <Card
                key={item.id}
                tech={item}
                onAdd={addToStack}
                inStack={stack.some((l) => l.id === item.id)}
              />
            ))
          )}
        </div>
        <div className="w-full lg:w-80">
          <Sidebar
            stack={stack}
            remove={removeFromStack}
            removeAll={removeAll}
          />
        </div>
      </div>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={1000} />
    </>
  );
}

export default App;
