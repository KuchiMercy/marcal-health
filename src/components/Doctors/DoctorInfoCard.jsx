import {Link} from "react-router-dom";
import { FaCircleInfo } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";

const DoctorInfoCard = (props) => {
  return (
    <div>
        <main className="card">
          <img width={100} className=" rounded-full m-auto" src={props.image} alt="" />
          <h5 className="text-center font-bold">{props.name}</h5>
          <p className="text-center text-sm">{props.role}</p>
          <p className="text-center font-bold text-secondary">{props.available}</p>
          

          <div className="flex justify-between mx-4">
            <div className="flex items-center text-sm text-gray-500">
            <FaCircleInfo />
              <Link className="px-1 text-sm text-gray-500">Details</Link>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <HiOutlinePhone />{" "}
              <Link className="px-1 text-sm text-gray-500">Booking</Link>
            </div>
          </div>
        </main>
    </div>
  )
}

export default DoctorInfoCard