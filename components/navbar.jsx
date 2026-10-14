import { Link } from "react-router-dom"

function Navbar(){
    return(
        <header className="border-b border-white/10 px-2 py-5 sm:px-8">
            <nav className="mx-auto flex max-w-6xl flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <Link to="/" className="text-2xl font-bold text-cyan-400">DawnHCreatives</Link>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <Link to="/" className=" rounded-xl font-bold  transition hover:text-blue-500">Home</Link>
                <Link to="/services" className=" font-bold transition hover:text-blue-500">Services</Link>
                <Link to="/projects" className=" font-bold transition hover:text-blue-500">Projects</Link>
                <Link to="/contact" className=" font-bold transition hover:text-blue-500"> Contact</Link>
              </div>
            </nav>

        </header> 
    );
}
export default Navbar