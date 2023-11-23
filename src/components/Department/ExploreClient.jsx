import ExploreClientCard from "./ExploreClientCard";
import sarah from "../../assets/doctor-sarah.jpg";

const ExploreClient = () => {
  return (
    <div>
      <main>
        <section className="mt-10 mx-6">
          <h1 className="text-2xl font-bold">What Our Client Say</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Quia
            inventore quaerat molestias praesentium vel, eos iste at illum
            dolores totam.
          </p>
        </section>
        <section className="flex flex-col justify-center items-center md:flex-row ">
          <ExploreClientCard
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque incidunt laborum, sequi enim ducimus dolor blanditiis nisi iure distinctio."
            image={sarah}
            name="Dr. John Smith"
            doc="Cardiologist"
          />
          <ExploreClientCard
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque incidunt laborum, sequi enim ducimus dolor blanditiis nisi iure distinctio."
            image={sarah}
            name="Dr. John Smith"
            doc="Cardiologist"
          />
        </section>
      </main>
    </div>
  );
};

export default ExploreClient;
