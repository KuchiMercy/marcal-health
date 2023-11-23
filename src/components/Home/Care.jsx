import CareCard from "../Home/CareCard";
import One from "../../assets/doctor-three.png"
import Two from "../../assets/doctor-four.png"



const Care = () => {
  return (
    <div>
        <section className=" my-4 mx-4">
        <div className="my-10 mx-5">
            <h1 className="text-2xl font-bold">Our Professionals Care</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia.</p>
        </div>
        <div className="mt-8 items-center justify-center px-4 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            <CareCard image={One} name="Dr. Sara Connor" title="Professor" occupation="Cardiologist" />
            <CareCard image={Two} name="Dr. Sara Connor" title="Professor" occupation="Cardiologist" />
            <CareCard image={Two} name="Dr. Sara Connor" title="Professor" occupation="Cardiologist" />
        </div>
        </section>
    </div>
  )
}

export default Care