import {useState} from "react";
import {Link} from 'react-router-dom';
import {MdWindow} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import DoctorCard from "../Home/DoctorCard";
import One from "../../assets/doctor-sarah.jpg";
import Two from "../../assets/doctor-sarah.jpg";
import Three from "../../assets/doctor-sarah.jpg";
import Four from "../../assets/doctor-sarah.jpg";
import Five from "../../assets/doctor-sarah.jpg";
import Six from "../../assets/doctor-sarah.jpg";




const Doctors = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const clickHandler = () => {
        setToggleMenu(!toggleMenu)
    }
  return (
    <div>
        {/* General Div */}
        <main className=" my-4 mx-4">
        <div className="my-10 mx-5">
            <h1 className="text-2xl font-bold">Explore Our Doctors</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia.</p>
        </div>

        <nav className="flex my-3 mx-5 p-4 box-border bg-white shadow-md justify-between md:items-center flex-wrap py-2 px-5 ">
            <div className={toggleMenu ? "flex flex-col md:inline" : "hidden md:inline"}>
            <Link className="link">All</Link>
            <Link className="link">Cardiologist</Link>
            <Link className="link">Orthopedics</Link>
            <Link className="link">Concology</Link>
            <Link className="link">Dematology</Link>
            <Link className="link">Sugery</Link>
            <Link className="link">Gynocology</Link>
            </div>
           
           <button className='text-secondary text-2xl inline md:hidden self-start outline-none ' onClick={clickHandler}
      >
        {toggleMenu ? <AiOutlineClose /> : < MdWindow />} </button>
        </nav>
{/* card */}
<section className="mt-8 items-center justify-center px-4 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      <DoctorCard image={One} name="Dr. Sara Connor" address="1022 Natalie Brook, Apt 65" occupation="Cardiologist" />
      <DoctorCard image={Two} name="Dr. Sara Connor" address="1022 Natalie Brook, Apt 65" occupation="Cardiologist" />
      <DoctorCard image={Three} name="Dr. Sara Connor" address="1022 Natalie Brook, Apt 65" occupation="Cardiologist" />
      <DoctorCard image={Four} name="Dr. Sara Connor" address="1022 Natalie Brook, Apt 65" occupation="Cardiologist" />
      <DoctorCard image={Five} name="Dr. Sara Connor" address="1022 Natalie Brook, Apt 65" occupation="Cardiologist" />
      <DoctorCard image={Six} name="Dr. Sara Connor" address="1022 Natalie Brook, Apt 65" occupation="Cardiologist" />

        </section>

        <div className="flex justify-center my-6">
          <button className="ease-in duration-300 bg-transparent border-2 border-secondary rounded px-6 py-2 hover:bg-secondary hover:text-white hover:font-bold">Explore All</button>
        </div>
        
        
        </main>
        
    </div>





  )
}

export default Doctors