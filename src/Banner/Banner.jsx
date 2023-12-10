import myImage from "../assets/WhatsApp Image 2023-12-09 at 19.42.24_36671181.png"

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={myImage} className="max-w-sm rounded-lg " />
                <div>
                    <h1 className="text-5xl font-bold">HI! I am Kazi Ahammad Ullah </h1>
                    <p className="py-6 font-medium text-lg">Dedicated web developer passionate about crafting seamless <br /> digital experiences. Welcome to my portfolio, where code meets creativity. Explore my projects,  delve into my skills, and witness the art of innovation. Let turn ideas  into reality. <br /> I am your architect in the digital realm. Enjoy the journey!</p>
                    <button className="btn bg-[#c3902c] hover:bg-[#c3902c] text-white">Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;