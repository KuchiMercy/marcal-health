import ExploreApptCard from "./ExploreApptCard";
import heart from "../../assets/heart-beat.png";
import blood from "../../assets/blood-drop.png";
import kidney from "../../assets/kidney.png";

const ExploreAppt = () => {
  return (
    <div>
      <section className="mt-8 items-center justify-center px-4 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      <ExploreApptCard image={heart} name="Cardiologist" specialist="4 Specialist Now" available="Available"/>
      <ExploreApptCard image={blood} name="Hematology" specialist="4 Specialist Now" available="Available"/>
      <ExploreApptCard image={kidney} name="Cardiologist" specialist="4 Specialist Now" available="Available"/>
      <ExploreApptCard image={heart} name="Cardiologist" specialist="4 Specialist Now" available="Coming Soon"/>
      <ExploreApptCard image={blood} name="Cardiologist" specialist="4 Specialist Now" available="Available"/>
      <ExploreApptCard image={kidney} name="Cardiologist" specialist="4 Specialist Now" available="Available"/>
      </section>

      <div className="flex justify-center my-6">
          <button className="bg-transparent border-2 border-secondary rounded px-6 py-2 hover:bg-secondary hover:text-white hover:font-bold">Explore All</button>
        </div>
    
    </div>
  )
}

export default ExploreAppt