import myImage from "../assets/profile-pic-1.png";

const Banner = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/ahammadCV.pdf"; // public folder is root
    link.download = "Kazi_Ahammad_Ullah_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={myImage}
          className="max-w-sm w-96 rounded-lg "
          alt="My Image"
        />
        <div>
          <h1 className="text-lg md:text-5xl font-bold">
            HI! I am Kazi Ahammad Ullah{" "}
          </h1>
          <p className="py-6 font-medium text-sm md:text-lg">
            Dedicated web developer passionate about crafting seamless <br />{" "}
            digital experiences. Welcome to my portfolio, where code meets
            creativity. Explore my projects, delve into my skills, and witness
            the art of innovation. Let turn ideas into reality. <br /> I am your
            architect in the digital realm. Enjoy the journey!
          </p>
          <button
            className="btn bg-[#c3902c] hover:bg-[#c3902c] text-white"
            onClick={downloadCV}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
