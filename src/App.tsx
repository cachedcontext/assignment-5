import { useEffect, useState } from "react"
import { type Technology } from "./type"
import Navbar from "./components/Navbar";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
  }, [])
  if(loading) {
    return <p className= "p-6">Loading types...</p>
  }

  return (
    <>
    <Navbar />
     <h1 className="text-3xl font-bold text-gradient">dev stack builder</h1>
     <div className="mt-4 p-4">
        <p className="font-bold">Total loaded: {technologies.length}</p>
        
        {technologies.map((item) => (
          <p key={item.id} className="text-slate-600">
            {item.name} ({item.category})
          </p>
        ))}
      </div>
    </>
  )
}

export default App
