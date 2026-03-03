import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-zinc-950 border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-6 text-zinc-100">

        <span className="text-sm tracking-wide">
          Rebeca Machado
        </span>

        <div className="flex gap-8 text-sm text-zinc-400">
          <Link to="/" className="hover:text-zinc-100 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-zinc-100 transition">
            Projects
          </Link>
          <Link to="/about" className="hover:text-zinc-100 transition">
            About
          </Link>
        </div>

      </div>
    </nav>
  )
}