import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    document.title = "Prueba - Home"
  }, [])
  
  return (
    <div>
        <h1>This is home in the linux add </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa eos debitis, temporibus recusandae amet corporis! Veniam nulla delectus aperiam!</p>
    </div>
  )
}
