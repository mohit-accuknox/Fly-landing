import React from 'react'

const ApplicationSection = () => {
  return (
    <div>
        <section className="flex justify-center items-center bg-slate-200">
            <section className="container flex justify-center items-start flex-col gap-14 m-16 p-5">
                <h2 className="text-lg font-bold uppercase text-violet-500">some things you can do</h2>
                <div className="cardsContainer grid grid-cols-2 items-center gap-8 flex-wrap mb-6">
                    <div className="flex justify-start items-start gap-4 w-full hover:scale-95 transition-all cursor-pointer hover:opacity-70">
                       <img src="images/blog1.png" alt="" className="w-60 rounded-3xl shadow-lg"/> 
                       <div className="flex justify-center items-start flex-col gap-7">
                        <h2 className="text-2xl text-black font-bold">Build a Social Music App</h2>
                        <p className="text-lg w-4/5 font-medium text-gray-700">Accomplish this with just Pheonix and LiveView, in a shockingly small amount of code.</p>
                       </div>
                    </div>
                    <div className="flex justify-start items-start gap-4  w-full hover:scale-95 transition-all cursor-pointer hover:opacity-70">
                        <img src="images/blog2.jpg" alt="" className="w-60 rounded-3xl shadow-lg"/>
                        <div className="flex justify-center items-start flex-col gap-7">
                            <h2 className="text-2xl text-black font-bold">Run a Remix Application</h2>
                            <p className="text-lg w-4/5 font-medium text-gray-700">Get a Remix application packaged and running globally on fly infrastructure.</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-4  w-full hover:scale-95 transition-all cursor-pointer hover:opacity-70">
                        <img src="images/blog3.jpg" alt="" className="w-60 rounded-3xl shadow-lg"/>
                        <div className="flex justify-center items-start flex-col gap-7">
                            <h2 className="text-2xl text-black font-bold">Deploy a Pheonix Application</h2>
                            <p className="text-lg w-4/5 font-medium text-gray-700">Learn how to deploy and Elixir Phoenix app on Fly and connect it to a PostgreSQL database.</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-4  w-full hover:scale-95 transition-all cursor-pointer hover:opacity-70">
                        <img src="images/blog4.png" alt="" className="w-60 rounded-3xl shadow-lg"/>
                        <div className="flex justify-center items-start flex-col gap-7">
                            <h2 className="text-2xl text-black font-bold">Turbocharge Your Heroku Apps</h2>
                            <p className="text-lg w-4/5 font-medium text-gray-700">Upgrade your Heroku application with fly and get 60% faster web dynos in a snap.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}

export default ApplicationSection