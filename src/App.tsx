import { useEffect, useState } from "react"
import { type Technology } from "./type"
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const[stack, setStack] = useState<Technology[]>([])

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
  }, [])
  const addToStack = (tech: Technology) => {
    const present = stack.some((item) => item.id === tech.id)

    if(present){
      alert(tech.name + ' in stack')
      return
    }
    setStack([...stack, tech])
  }


  return (
    <>
    <Navbar />
    <Banner />
    <div className="text-center md:text-left mx-auto max-w-7xl px-6 pt-12">
      <h2 className="font-bold text-slate-900 text-3xl md:text-4xl">
         Explore the <span className="text-gradient">Technologies</span>
      </h2>
      <p className="text-slate-500 mt-8">
        Pick one technology per category to build your ideal stack.
      </p>
    </div>

       <div className="grid mt-4 p-4 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
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
    </>
  )
}

export default App
