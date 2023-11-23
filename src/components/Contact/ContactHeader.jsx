import { useState } from "react";
import image from "../../assets/contact-image.png";

const ContactHeader = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <main className="mx-5 md:mx-15">
        <header className=" md:px-10 pt-20 lg:px-20 lg:pt-10 ">
          <img className="w-full" src={image} alt="" />
        </header>
        <section className="bg-white shadow-md -translate-y-10 mx-6 md:-translate-y-20 lg:-translate-y-20 lg:mx-40">
          <h1 className="text-center text-3xl font-bold pt-6 md:text-3xl lg:text-4xl">
            Contact Us
          </h1>
          <p className="text-center pt-2 text-sm md:pt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
            Numquam adipisci non nisi, vel asperiores optio?
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center mx-5 items-center my-3"
          >
            <div className="md:grid md:grid-cols-2">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="bg-gray-200 py-3 px-4 my-1 mx-2 w-72 md:w-auto lg:w-72 outline-none shadow-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter a Valid Email Address"
                  className="bg-gray-200 py-3 px-4 my-1 mx-2 w-72 md:w-auto lg:w-72 outline-none shadow-md"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telephone Number"
                  className="bg-gray-200 py-3 px-4 my-1 mx-2 w-72 md:w-auto lg:w-72 outline-none shadow-md"
                />
              </div>

              <div>
                <textarea
                  name="text"
                  id="name"
                  value={formData.text}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                  className="bg-gray-200 py-3 px-4 my-1 mx-2 w-72 md:w-auto lg:w-72  outline-none shadow-md"
                ></textarea>
              </div>
            </div>

            <div>
              <button className="bg-secondary border-2 border-secondary px-6 py-2 mt-4 mb-6 text-white font-bold rounded hover:bg-transparent hover:text-secondary">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactHeader;
