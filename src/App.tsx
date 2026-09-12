import { useEffect, useState } from "react"
import { type Technology } from "./type"
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  // const[stack, setStack] = useState<Technology[]>([])

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
  }, [])
  // const addToStack = (tech: Technology) => {
  //   const present = stack.some((item) => item.id === tech.id)

  //   if(present){
  //     alert(tech.name + ' in stack')
  //     return
  //   }
  //   setStack([...stack, tech])
  // }


  return (
    <>
    <Navbar />
    <Banner />
     <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 p-4 gap-6">
       {loading ? (
        <p className="p-6 col-span-full">Loading...</p>):(
        
        technologies.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg">
              {/* temporary placeholder - we'll replace with TechCard */}
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-slate-500">{item.category}</p>
      </div>
        ))
      )}
      </div>
    </>
  )
}

export default App
