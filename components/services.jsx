function ServicesCard({title,description}){
    return(
        <div className="rounded-xl border border-white/10 bg-slate-900 p-6 transition hover:border-cyan-400/50 hover:-translate-y-4 ">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{description}</p>
            
            
        </div>
    );
}
export default ServicesCard