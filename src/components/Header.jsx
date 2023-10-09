import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-indigo-600 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-black text-white">Page</h1>
        <nav className="flex gap-2">

          <Link className="text-xl text-gray-200" to="/">Home</Link>
          <Link className="text-xl text-gray-200" to="/about">About</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header