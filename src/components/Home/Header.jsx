import one from "../../assets/doctor-one.png";
import logoOne from "../../assets/med-park.png";
import logoTwo from "../../assets/st-charles.png";
import logoThree from "../../assets/pantai.png";
import logoFour from "../../assets/cinccinati.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // General Div
    <div>
      <div className="container mx-auto  mt-20 flex flex-col md:flex-row items-center justify-evenly lg:mt-0 lg:h-screen">
        <div className="mx-2 pb-2">
          {/* Heading */}
          <h1 className="text-3xl font-bold pb-2 md:text-3xl lg:text-4xl">
            We Provide Total Health <br /> Care Solution{" "}
          </h1>

          {/* Paragraph text */}
          <p className="pt-4 text-sm md:pt-6 md:leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora.{" "}
            <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aut. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima?{" "}
          </p>

          {/* Buttons */}
          <div className=" flex justify-center items-center mt-5 md:inline-block">
            <Link className="duration-300 py-2 px-8 bg-secondary border-secondary border-2 text-primary font-bold rounded-lg hover:bg-transparent hover:text-secondary">
              Get Start
            </Link>
            <Link className="duration-300 py-2 px-8 mx-4 border-secondary border-2 text-black bg-transparent rounded-lg hover:bg-secondary hover:text-white hover:font-bold">
              Contact us
            </Link>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            className="bg-gradient-to-b from-primary via-tetiary to-secondary rounded-b-3xl md:bg-gradient-to-r md:rounded-t-full"
            width={350}
            src={one}
            alt="health"
          />
        </div>

        
      </div>
      {/* Logo */}
      <div className="flex flex-col bg-tetiary mx-12 my-6 pb-10  md:flex-row items-center md:h-20 md:p-0 md:mx-5 md:rounded-tr-3xl md:mr-10">
          <img className="h-32 px-6" src={logoOne} alt="" width={200} />
          <img className="h-12 px-6" src={logoTwo} alt="" width={200} />
          <img className="h-24 px-6" src={logoThree} alt="" width={200} />
          <img className="h-12 px-6" src={logoFour} alt="" width={200} />
        </div>
    </div>
  );
};

export default Header;
