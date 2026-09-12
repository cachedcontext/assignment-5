import { useEffect, useState } from "react"
import { type Technology } from "./type"
import Navbar from "./components/Navbar";

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
  if(loading) {
    return <p className= "p-6">Loading...</p>
  }

  return (
    <>
    <Navbar />
     <h1 className="text-3xl font-bold text-gradient">dev stack builder</h1>
     <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 p-4 gap-6">
        {/* {technologies.map((item) => (
          <Tech
        ))} */}
      </div>
    </>
  )
}

export default App
