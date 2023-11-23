import {Link} from "react-router-dom";
import {BiLogoFacebook} from "react-icons/bi";
import {BiLogoInstagram} from "react-icons/bi";
import {BiLogoTwitter} from "react-icons/bi";
import {BiLogoLinkedin} from "react-icons/bi";

const Footer = () => {
  const services = [
    "Neurology",
    "Cardiology",
    "Pregnancy",
    "Dental",
    "Dermatology",
    "Urology",
  ];
  const time = [
    "Saturday (10am - 04pm)",
    "Sunday (10am - 08pm)",
    "Monday (10am - 10pm)",
    "Tuesday (10am - 04pm)",
    "Wednesday (10am - 02pm)",
    "Thursday (10am - 11pm)",
    "Friday (10am - 12pm)",
  ];
  const links = [
    "Health plan",
    "Career",
    "Blog",
    "Jobs",
    "Press",
  ];

  return (
    <>
      {/* Wrapping Div */}
      <div className="grid mx-10 my-auto md:grid-cols-2 lg:grid-cols-4">
        {/* Div-One */}
        <div className="p-5">
          <p className="text-lg font-bold">Our Services</p>
          {services.map((service) => (
            <div key={service} className="text-gray-700">{service}</div>
          ))}
        </div>
        {/* Div-Two */}
        <div className="p-5">
          <p className="text-lg font-bold">Time</p>
          {time.map((day) => (
            <div key={day} className="text-gray-700">{day}</div>
          ))}
        </div>

        {/* Div-Three */}
        <div className="p-5">
            <p className="text-lg font-bold">Quick Links</p>
            <div className="flex flex-col">
            {links.map((link)=>(
              <Link key={link} className="text-gray-700">{link}</Link>
            ))}
            </div>
            
        </div>

        {/* Div-Four */}
        <div className="p-5">
          <div className="text-gray-700">
          <p>160D City of East Jakarta, <br /> Washingtone, USA 1320 </p>
          <br />
            <p>+012 34 5678 91011 <br /> medixofficial@gmail.com </p>
          </div>
            
            
            <div className="flex my-4">
            <Link className="text-lg px-2"><BiLogoTwitter /></Link>
            <Link className="text-lg px-2" ><BiLogoInstagram /></Link>
            <Link className="text-lg px-2"><BiLogoFacebook /></Link>
            <Link className="text-lg px-2"><BiLogoLinkedin /></Link>
          </div>
            
        </div>
      </div>
    </>
  );
};

export default Footer;
