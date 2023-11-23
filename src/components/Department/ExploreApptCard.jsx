import {Link} from "react-router-dom"
import { HiOutlinePhone } from "react-icons/hi";
import { CiUser } from "react-icons/ci";


const ExploreApptCard = (props) => {
  return (
    <div>
        
        <section className="card">
          <img width={100} className=" rounded-full m-auto bg-tetiary p-4 " src={props.image} alt="" />
          <h5 className="text-center font-bold">{props.name}</h5>
          <p className="text-center text-sm">{props.specialist}</p>
          <p className="text-center font-bold text-sm text-secondary mb-10">{props.available}</p>
         

          <div className="flex justify-between mx-4">
            <div className="flex items-center text-gray-500">
            <CiUser />
              <Link className="px-1 text-sm text-gray-500">Doctors</Link>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <HiOutlinePhone />{" "}
              <Link className="px-1 text-sm text-gray-500">Booking</Link>
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default ExploreApptCard