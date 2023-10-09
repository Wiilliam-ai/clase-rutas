import { useEffect } from "react"

export default function AboutPage() {
    useEffect(() => {
        document.title = "Prueba - About"
      }, [])
  return (
    <div>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, beatae.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, eveniet.</p>
    </div>
  )
}
