import {Link} from "react-router-dom";
import {BiLogoFacebook} from "react-icons/bi";
import {BiLogoInstagram} from "react-icons/bi";
import {BiLogoTwitter} from "react-icons/bi";
import {BiLogoLinkedin} from "react-icons/bi";

const CareCard = (props) => {
  return (
    <div>
       
        <section className="card">
          <img width={150} className="rounded-full m-auto h-52" src={props.image} alt="" />
          <h5 className="text-center font-bold mt-4">{props.name}</h5>
          <p className="text-center text-sm">{props.title}</p>
          <p className="text-center font-bold text-secondary">{props.occupation}</p>

          <div className="flex justify-center mt-4">
            <Link className="text-lg px-2"><BiLogoFacebook /></Link>
            <Link className="text-lg px-2" ><BiLogoInstagram /></Link>
            <Link className="text-secondary px-2"><BiLogoTwitter /></Link>
            <Link className="text-lg px-2"><BiLogoLinkedin /></Link>
          </div>
          </section>
       
      </div>
  )
}

export default CareCard