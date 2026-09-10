import { useEffect, useState } from "react"
import { type Types } from "./type"

function App() {
  const [types, setTypes] = useState<Types[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setTypes(data))
  }, [])

  return (
    <>
     <h1 className="text-3xl font-bold text-gradient">dev stack builder</h1>
     <div className="mt-4 p-4">
        <p className="font-bold">Total loaded: {types.length}</p>
        
        {types.map((item) => (
          <p key={item.id} className="text-slate-600">
            {item.name} ({item.category})
          </p>
        ))}
      </div>
    </>
  )
}

export default App
