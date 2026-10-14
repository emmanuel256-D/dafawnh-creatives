import ServicesCard from "../components/services";

function Services(){
    return(
                <div className="min-h-screen bg-slate-950 text-white">
            
        
            <main id='home' className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-2">
      
               <section className="">
                <h1 className="text-3xl font-bold">Services</h1>
                <h2 id="services" className="mt-3 max-w-xl text-slate-300">I offer reliable site with premium designs and solution that enables business and personnal products being rated the best   </h2>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                   <ServicesCard 
                   title='website Development'
                   description='Modern,Responsive sites where Businesses can market themselves and Provide more information.
                   Be it proffessional design and Social site .'/>
                   <ServicesCard 
                   title='E-Commerce Development'
                   description='Online stores are able to showcase their products and also a buy option for users '/>
                   <ServicesCard 
                   title='API Development'
                   description='Creating Backend Apis that helps application communicate with databases.'/>
                   <ServicesCard 
                   title='website Maintenance'
                   description='Help in upgrading website making it modern and more flexible than before'
                    />
                </div>
               </section>
             </main>

        </div>
    );
}
export default Services