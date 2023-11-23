import { Link } from "react-router-dom";
import Dept from "../../assets/Dept-head.png";

const DeptHeader = () => {
  return (
    <div>
      <header className="container  mt-20 px-4 mx-auto flex flex-col lg:h-screen  md:flex-row justify-evenly items-center lg:mt-0">
        <div>
          <h1 className="text-3xl font-bold pb-2 md:text-3xl lg:text-4xl">
            We Access High Preference <br /> Department Zoon{" "}
          </h1>
          <p className="pt-4 text-sm md:pt-6 md:leading-loose">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
            Esse inventore quidem soluta sapiente provident nostrum, doloremque{" "}
            <br />
            deleniti numquam iure dolores.
          </p>
          <div className="my-6 flex justify-center md:inline-block">
            <Link className="ease-in duration-300 py-2 px-8 bg-secondary border-secondary border-2 text-primary font-bold rounded-lg hover:bg-transparent hover:text-secondary">
              Appointment Now
            </Link>
          </div>
        </div>
        <div>
          <img
            className="bg-tetiary rounded-full"
            width={250}
            src={Dept}
            alt=""
          />
        </div>
      </header>
    </div>
  );
};

export default DeptHeader;
