import { useState } from "react";
import {BiSearchAlt2} from "react-icons/bi";
import {MdWindow} from "react-icons/md"
import DoctorInfoCard from "./DoctorInfoCard";
import sarah from "../../assets/doctor-sarah.jpg";


const DoctorsInfo = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => setInputValue(event.target.value);
  return (
    <div>
      <div>
        {/* Nav */}
        <nav className="flex my-3 mx-5 p-4 box-border bg-white shadow-md justify-between md:items-center flex-wrap py-2 px-5 ">
          <div className="hidden bg-secondary rounded px-3 text-sm md:inline-block">
            All
          </div>
          <div className="flex items-center">
            <div className="flex items-center p-2">
              <form >
                <input
                  className="border-2 border-secondary outline-none rounded-lg px-3 py-1"
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="Cardiologist Consultant"
                />
              </form>
              <button className="text-white bg-secondary rounded px-4 py-2 -translate-x-12">
                <BiSearchAlt2 />
              </button>
            </div>
            <div className="hidden text-secondary text-xl md:inline-block">
              <MdWindow />
            </div>
          </div>
        </nav>
      </div>
      <section className="my-8 items-center justify-center px-4 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        <DoctorInfoCard image={sarah} name="Dr. Ricardo" role="Madisen MBBS" available="Available"/>
        <DoctorInfoCard image={sarah} name="Dr. Edward McGhee" role="BCS.MBBS Hematology" available="Available"/>
        <DoctorInfoCard image={sarah} name="Dr. Ricardo" role="MBBS Cardiologist" available="Available"/>
        <DoctorInfoCard image={sarah} name="Dr. Robert" role="MBBS Cardiologist" available="Coming Soon"/>
        <DoctorInfoCard image={sarah} name="Dr. Robert" role="MBBS Madisen" available="Available"/>
        <DoctorInfoCard image={sarah} name="Dr. Ricardo" role="MBBS, BSC Cardiology" available="Available"/>

      </section>

      <div className="flex justify-center my-6">
          <button className="bg-transparent border-2 border-secondary rounded px-6 py-2 hover:bg-secondary hover:text-white hover:font-bold">Explore All</button>
        </div>
    </div>
  );
};

export default DoctorsInfo;
