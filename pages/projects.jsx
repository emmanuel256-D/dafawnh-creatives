function Project(){
    const projects = [
        {
            id:1,
            name: "Rubu Construction Limited",
            status: "Concept project",
            description:
            'A proposed construction website that showcase services ,projects and contact informations',
            status:"Completed",
            tools:['React','Tailwind','Django REST FRAMEWORK'],
            date:'23-10-2024',
        },
        {
            id:4,
            name: "Rubu Construction Limited",
            status: "Concept project",
            description:
            'A proposed construction website that showcase services ,projects and contact informations',
            status:"Completed",
            tools:['React','Tailwind','Django REST FRAMEWORK'],
            date:'23-10-2024',
        },
    ]
    return(
     <section id='projects' className="mt-5 sm:mt-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Selected Work</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Bringing Ideas into life</h2>
        <p className="mt-4 max-w-2xl leading-7">Explore concepts and projects demonstrating my engineered  Skills to digital solution</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-col-2">
            {projects.map((project)=>(
                <article key={project.id} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900  transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                   <div className="flex h-48 items-center bg-gradient-to-br from-cyan-400 via slate-900 to-slate-800">
                    <div className="text-center">
                        <span className="text-4xl">[[]]</span>
                        <p className="mt-3 text-sm text-slate-900">Project preview</p>
                        

                    </div>

                   </div>
                   <div className="p-6">
                       <span className="rounded-full border border-cyan-400/30 px-3 text-xs text-cyan-300">{project.status}</span>
                       <h3 className="mt-4 text-xl font-bold">{project.name}</h3>
                       <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
                       <div className="mt-4 flex flex-wrap gap-2">
                        {project.tools.map((tool)=>(
                            <span key={tool} className="rounded-md bg-white/5 px-3 py-1 text-xs text-slate-300 ">{tool}</span>
                        ))}
                       </div>
                   </div>
                   <p className="  mt-5 text-xs text-slate-500">{project.date}</p>
                   <button className="mt-6 mb-6  rounded-lg border border-white/10 px-10 py-3 text-sm text-slate-500">View </button>
                </article>
            ))}

        </div>
     </section>
    );
}
export default Project