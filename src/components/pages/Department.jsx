import DeptHeader from "../Department/DeptHeader";
import ExploreAppt from "../Department/ExploreAppt";
import ExploreClient from "../Department/ExploreClient";
import ExploreDept from "../Department/ExploreDept";
import ExploreForm from "../Department/ExploreForm";

const Department = () => {
  return (
    <div>
      <DeptHeader />
      <ExploreDept />
      <ExploreAppt/>
      <ExploreForm/>
      <ExploreClient/>
      
    </div>
  );
};

export default Department;
