import DoctorHeader from "../Doctors/DoctorHeader";
import DoctorsInfo from "../Doctors/DoctorsInfo";

const ExploreDoctors = () => {
  return (
    <div>
      <h1 className="mt-20 mx-6">
        <DoctorHeader/>
        <DoctorsInfo/>
      </h1>
    </div>
  );
};

export default ExploreDoctors;
