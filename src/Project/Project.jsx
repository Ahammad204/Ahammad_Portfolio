

const Project = () => {
    return (
      <div className="project" id="project">
        <h1 className="text-4xl font-bold text-center mt-20 mb-20"> Project </h1>
          <div  className="mb-3 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 ml-4" >
            {/* Project 1 */}
            <div className="card bg-base-100 ml-7 md:ml-0 shadow-xl">
                <figure><img className="rounded-xl w-full h-60" src="https://i.ibb.co/mvkVqVq/Screenshot-2023-12-11-220015.png" alt="Shoes" /></figure>
                <div className="card-body">
                    
                    <div className="card-actions justify-end">
                        <button  
                         onClick={() => window.open('https://github.com/Ahammad204/PH-Petco-Client-Side', '_blank')}
                        className="btn bg-[#c3902c] hover:bg-[#c3902c] text-white">Client Side</button>

                        <button
                        onClick={() => window.open('https://github.com/Ahammad204/PH-Petco-Server-Side', '_blank')}
                        className="btn bg-[#c3902c] hover:bg-[#c3902c] text-white">Server Side</button>

                        <button
                        onClick={() => window.open('https://phpetco20.web.app/', '_blank')}
                        className="btn bg-[#c3902c] hover:bg-[#c3902c] text-white">Preview Website</button>
                    </div>
                </div>
            </div>
            {/* Project 2 */}
            <div className="card bg-base-100 ml-7 md:ml-0  shadow-xl">
                <figure><img className="rounded-xl w-full h-60" src="https://i.ibb.co/JvSVZDH/Screenshot-2023-12-11-215727.png" alt="Shoes" /></figure>
                <div className="card-body">
                    
                    <div className="card-actions justify-end">
                        <button  
                         onClick={() => window.open('https://github.com/Ahammad204/Motex-Client-Side', '_blank')}
                        className="btn bg-[#c3902c] hover:bg-[#c3902c] text-white">Client Side</button>

                        <button
                        onClick={() => window.open('https://github.com/Ahammad204/Motex-Server-Side', '_blank')}
                        className="btn bg-[#c3902c] hover:bg-[#c3902c] text-white">Server Side</button>

                        <button
                        onClick={() => window.open('https://ph-motex.web.app/', '_blank')}
                        className="btn bg-[#c3902c] hover:bg-[#c3902c] text-white">Preview Website</button>
                    </div>
                </div>
            </div>
            {/* Project 3 */}
            <div className="card bg-base-100 ml-7 md:ml-0  shadow-xl">
                <figure><img className="rounded-xl w-full h-60" src="https://i.ibb.co/g4J1hy3/Screenshot-2023-12-11-215911.png" alt="Shoes" /></figure>
                <div className="card-body">
                    
                    <div className="card-actions justify-end">
                        <button  
                         onClick={() => window.open('https://github.com/Ahammad204/PH-Boigor-Client-Side', '_blank')}
                        className="btn bg-[#c3902c] hover:bg-[#c3902c] text-white">Client Side</button>

                        <button
                        onClick={() => window.open('https://github.com/Ahammad204/PH-Boigor-Server-Side', '_blank')}
                        className="btn bg-[#c3902c] hover:bg-[#c3902c] text-white">Server Side</button>

                        <button
                        onClick={() => window.open('https://phboigor.web.app/', '_blank')}
                        className="btn bg-[#c3902c] hover:bg-[#c3902c] text-white">Preview Website</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Project;