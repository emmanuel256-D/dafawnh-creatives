import Navbar from "../components/navbar";
import { Route,Routes } from "react-router-dom";

import Project from '../pages/projects';
import Home from "../pages/home";
import Services from "../pages/servicesPage";
import "./index.css";
import Contact from "../pages/contact";
import Profile from "../pages/profile";
function App(){
    return(
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar/>
            
            <main className="mx-auto max-w-6xl px-4 ">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/projects" element={<Project/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </main>

            
        </div>
    );
}
export default App