import { useState } from "react";
import image from "../../assets/doctors_signup.png";

const DoctorHeader = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <main className="mx-5 md:mx-15">
        <div className="lg:h-screen md:px-10 pt-20 lg:px-20 lg:pt-10 ">
          <img className="w-full" src={image} alt="" />

          <section className="flex items-center -translate-y-10">
            <form>
              <input
                className="shadow-md px-3 py-2 lg:px-10 lg:py-4 rounded outline-none"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Doctor Name or Specialist"
              />
            </form>
            <button className="bg-secondary text-white font-bold shadow-md rounded px-3 py-2 md:px-7 md:py-3 lg:px-10 lg:py-4 ">
              Search
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DoctorHeader;
