import { useState } from "react";

const ExploreForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", date: "" });
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center mx-5 py-6 items-center my-10  bg-tetiary "
      >
        <main className="grid grid-cols-1 mx-auto md:grid-cols-2">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="py-3 px-4 my-2 mx-4 w-72 outline-none shadow-md"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="py-3 px-4 my-2 mx-4 w-72 outline-none shadow-md"
            />
          </div>

          <div>
            <select
              value={selectedOption}
              onChange={handleDropdownChange}
              className="bg-white py-3 px-4 my-2 mx-4 w-72 shadow-md "
            >
              <option value="option1">Doctor Name</option>
              <option value="option2">Option1</option>
              <option value="option3">Option1</option>
            </select>
          </div>

          <div>
            <select
              value={selectedOption}
              onChange={handleDropdownChange}
              className="bg-white py-3 px-4 mx-4 my-2 w-72 shadow-md"
            >
              <option value="option1">Gender</option>
              <option value="option2">Male</option>
              <option value="option2">Female</option>
            </select>
          </div>

          <div>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="Date"
              className="py-3 px-4 my-2 mx-4 w-72 outline-none shadow-md"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div>
            <select
              value={selectedOption}
              onChange={handleDropdownChange}
              className="bg-white py-3 px-4 my-2 mx-4 w-72 shadow-md"
            >
              <option value="option1">Choose Your Treatment</option>
              <option value="option2">Option1</option>
              <option value="option2">Option2</option>
            </select>
          </div>

          <div className="flex justify-center items-center my-4">
            <button className="bg-secondary border-secondary border-2 px-5 py-2 w-52 rounded text-white hover:bg-transparent hover:text-secondary">
              Make Appointment
            </button>
          </div>
        </main>
      </form>
    </div>
  );
};

export default ExploreForm;
