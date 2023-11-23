import {Link} from "react-router-dom"
import StarRating from "../Home/StarRating";
import { BsCalendar3 } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi";

const DoctorCard = (props) => {
  return (
    <div>
      
        <main className="card">
          <img width={100} className=" rounded-full m-auto" src={props.image} alt="" />
          <h5 className="text-center font-bold">{props.name}</h5>
          <p className="text-center text-sm">{props.address}</p>
          <p className="text-center font-bold text-secondary">{props.occupation}</p>
          <div className="text-center">
            {" "}
            <StarRating />
          </div>

          <div className="flex justify-between mx-4">
            <div className="flex items-center text-sm text-gray-500">
              <BsCalendar3 />
              <Link className="px-1 text-sm text-gray-500">Available</Link>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <HiOutlinePhone />{" "}
              <Link className="px-1 text-sm text-gray-500">Booking</Link>
            </div>
          </div>
        </main>
      
    </div>
  );
};

export default DoctorCard;
