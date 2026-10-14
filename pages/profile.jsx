

function Profile(){
    return(
        <main className="min-h-screen p-4 text-white md:p-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[260px_1fr]">
               <aside className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
                <div className="flex flex-col  items-center text-center md:item-start md:text-left">
                    <img src='/images/profile.jpeg'
                    className="h-36 w-36  rounded-full border-4 border-blue-500 object-cover"/>
                    <h2 className="mt-5 text-2xl font-bold">EMMANUEL KANGOGO</h2>
                    <p className="mt-1 text-sm text-slate-400">Software Engineer  || Computer Science</p>
                </div>
               </aside>
               <section className="grid content-start grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-[#111827] p-5">
                    <span className="text-2xl font-bold text-slate-300 p-9 mt-3 ">Languages</span>
                    <div className="flex items-center justify-between">
                        <h5 className="text-lg font-semibold mt-2">Javascript</h5>
                        <span className="text-sm text-green-500"></span>
                    </div>
                    <div className="mt-4 h-3 w-full rounded-full bg-slate-700 ">
                        <div className="h-3 w-45 rounded-full bg-sky-400 "></div>
                    </div>
                    <div className="flex items-center mt-3 justify-between ">
                        <h5 className="text-lg font-semibold">CSS</h5>
                        <span className="text-sm text-green-500"></span>
                    </div>
                    <div className="mt-4 h-3 w-full rounded-full bg-slate-700">
                        <div className="h-3 w-50 rounded-full bg-sky-400"></div>
                    </div>
                    <div className="flex items-center mt-3 justify-between">
                        <h5 className="text-lg font-semibold">Python</h5>
                        <span className="text-sm text-green-500"></span>
                    </div>
                    <div className="mt-4 h-3 w-full rounded-full bg-slate-700">
                        <div className="h-3 w-40 rounded-full bg-sky-400"></div>
                    </div>
                    <div className="flex items-center mt-3 justify-between">
                        <h5 className="text-lg font-semibold">SQL</h5>
                        <span className="text-sm text-green-300"></span>
                    </div>
                    <div className="mt-4 h-3 w-full rounded-full bg-slate-700">
                        <div className="h-3 w-35 rounded-full bg-rose-100"></div>
                    </div>
                    <div className="flex items-center mt-3 justify-between">
                        <h5 className="text-lg font-semibold">Java</h5>
                        <span className="text-sm text-green-500"></span>
                    </div>
                    <div className="mt-4 h-3 w-full rounded-full bg-slate-700">
                        <div className="h-3 w-44 rounded-full bg-sky-400"></div>
                    </div>

                  </div>
                 <div>
                    <img className='w-full h-full object-cover rounded-lg' src="/images/setup.jpeg" alt="Profile Image"/>
                    </div>                  
                  
               </section>
               </div>
               <section className='mt-8'>
                <h2 className='mb-2 text-2xl font-bold mt-3'>Framework And Tools</h2>

                <div className=' gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center'>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 mt-2">
                       <h3 className="text-lg font-semibold">
                                React
                      </h3>

                    <p className="mt-2 text-sm text-slate-400">
                         Frontend UI library
                    </p>
                
                    <div className="mt-4 flex gap-1 text-xl">
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                     <span className="text-yellow-400">★</span>
                     <span className="text-slate-600">★</span>
                    </div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 mt-2">
                       <h3 className="text-lg font-semibold">
                                Django RestFramework
                      </h3>

                    <p className="mt-2 text-sm text-slate-400">
                         Backend and API
                    </p>

                    <div className="mt-4 flex gap-1 text-xl">
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                     <span className="text-yellow-400">★</span>
                     <span className="text-slate-600">★</span>
                    </div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 mt-2">
                       <h3 className="text-lg font-semibold">
                                Database
                      </h3>

                    <p className="mt-2 text-sm text-slate-400">
                        PostgreSql ,Mysql and MongoDB
                    </p>
                      
                    <div className="mt-4 flex gap-1 text-xl">
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                     <span className="text-yellow-400">★</span>
                     <span className="text-slate-600">★</span>
                    </div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 mt-2">
                    <span className='mt-2 border border-green-500 text-green-900 rounded-md px-2 py-1 text-sm md-6'>Still learning</span>
                       <h3 className="text-lg font-semibold">
                                Jupyter Notebook
                      </h3>
                      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 mt-2">
                       
                       <h3 className="text-lg font-semibold">
                                Pandas
                      </h3>

                    <p className="mt-2 text-sm text-slate-400">
                         Analysis and Machine Learning
                    </p>
                    

                    <div className="mt-4 flex gap-1 text-xl">
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-slate-600">★</span>
                     <span className="text-slate-400">★</span>
                     <span className="text-slate-400">★</span>
                    </div>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 mt-2">
                    
                       <h3 className="text-lg font-semibold">
                           MatplotLib 
                      </h3>

                    <p className="mt-2 text-sm text-slate-400">
                         Data Visualization
                    </p>
                    

                    <div className="mt-4 flex gap-1 text-xl">
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-slate-600">★</span>
                     <span className="text-slate-400">★</span>
                     <span className="text-slate-400">★</span>
                    </div>
                
                  </div>  
                   <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 mt-2">
                   
                       <h3 className="text-lg font-semibold">
                                Scikit-learn
                      </h3>

                    <p className="mt-2 text-sm text-slate-400">
                        Machine Learning
                    </p>
                    

                    <div className="mt-4 flex gap-1 text-xl">
                      <span className="text-yellow-400">★</span>
                      <span className="text-red-200">★</span>
                      <span className="text-slate-600">★</span>
                     <span className="text-slate-400">★</span>
                     <span className="text-slate-400">★</span>
                    </div>
                </div>                    
                </div>
             </div>   
               </section>
            
            
        </main>
    );
}
export default Profile